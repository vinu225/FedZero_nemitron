"""
Decentralized Verifiable AI Network - Database Session & Connection Factory
Seamlessly switches between SQLite (for zero-dependency standalone execution)
and PostgreSQL (for production deployments).
"""

import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from backend.database.models import Base

# Automatically load .env from project root
dotenv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".env"))
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)
else:
    load_dotenv()

DATABASE_URL = (os.getenv("DATABASE_URL") or "sqlite:///./network_state.db").strip().strip('"').strip("'")

def _sanitize_database_url(url: str) -> str:
    """Safely normalizes PostgreSQL URLs and encodes special characters in passwords."""
    from urllib.parse import unquote, quote_plus
    
    url = url.strip().strip('"').strip("'")
    if not url:
        return "sqlite:///./network_state.db"

    # Handle Postgres dialect prefix for SQLAlchemy 2.0+
    if url.startswith("postgres://"):
        url = url.replace("postgres://", "postgresql+psycopg2://", 1)
    elif url.startswith("postgresql://") and not url.startswith("postgresql+"):
        url = url.replace("postgresql://", "postgresql+psycopg2://", 1)

    if not url.startswith("postgresql"):
        return url

    # Parse and safely URL-encode credentials if '@' exists in password
    try:
        prefix = url.split("://")[0] + "://"
        rest = url[len(prefix):]
        if "@" in rest:
            last_at = rest.rfind("@")
            user_pass = rest[:last_at]
            host_part = rest[last_at + 1:]
            if ":" in user_pass:
                user, pwd = user_pass.split(":", 1)
                safe_pwd = quote_plus(unquote(pwd))
                return f"{prefix}{user}:{safe_pwd}@{host_part}"
    except Exception:
        pass
    return url

DATABASE_URL = _sanitize_database_url(DATABASE_URL)

# Resilient engine creation with automatic SQLite fallback
try:
    if DATABASE_URL.startswith("sqlite"):
        engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
    else:
        engine = create_engine(DATABASE_URL, pool_pre_ping=True)
except Exception as db_err:
    print(f"[Database Warning] Could not connect to primary DATABASE_URL ({db_err}). Falling back to SQLite.")
    DATABASE_URL = "sqlite:///./network_state.db"
    engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def init_db():
    """Initializes tables in database and applies automatic schema column migrations."""
    Base.metadata.create_all(bind=engine)

    try:
        from sqlalchemy import inspect, text
        inspector = inspect(engine)
        with engine.connect() as conn:
            for table in Base.metadata.sorted_tables:
                if inspector.has_table(table.name):
                    existing_cols = {c["name"] for c in inspector.get_columns(table.name)}
                    for col in table.columns:
                        if col.name not in existing_cols:
                            col_type = col.type.compile(engine.dialect)
                            conn.execute(text(f"ALTER TABLE {table.name} ADD COLUMN {col.name} {col_type}"))
            conn.commit()
    except Exception:
        pass


def get_db():
    """FastAPI dependency for database session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
