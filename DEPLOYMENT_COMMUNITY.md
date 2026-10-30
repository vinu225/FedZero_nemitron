# 🚀 FedZero Community Tier — Production Deployment Guide (100% Free)

This guide explains how to deploy the **FedZero Community Tier** to production on **Vercel** (Frontend) and **Railway / Render** (Backend) with **zero hosting cost (₹0 / $0)**.

---

## 🏗️ Architecture Overview

```
[Student / Researcher Laptop] (Worker Node)
             │
             │ (Runs: python fedzero_worker.py --server https://api.yourdomain.com)
             ▼
[Railway / Render Backend] (FastAPI Coordinator + WebSockets)
             │
             ├── Supabase PostgreSQL (Database & Schema Migrations)
             ├── Solana Devnet (Free Faucet Simulation)
             └── Arbitrum Sepolia (Free Testnet ZK Verifier)
             ▲
             │ (Rewrites /api calls)
[Vercel Frontend] (Next.js 14 Web UI + Clerk Auth)
```

---

## 📦 Step 1: Backend Deployment (AWS EC2 - LIVE)

The FedZero FastAPI Coordinator is deployed and live on AWS EC2 with production SSL:
- **Production API Host:** `https://api-fedzero.highkernel.com`
- **Interactive API Documentation:** `https://api-fedzero.highkernel.com/docs`
- **Health / Network Stats Endpoint:** `https://api-fedzero.highkernel.com/api/network/stats`
- **EC2 Direct IP:** `http://13.127.177.0:8000`
- **Reverse Proxy & SSL:** Nginx + Automated Let's Encrypt Certbot
- **Systemd Service:** `fedzero.service` (auto-restarts on reboot or failure)

### GitHub Actions CI/CD Secrets Setup
To enable automatic deployments on push to `main` for `FedZeroOfficial/fedzero`:
1. Go to repository: **Settings** → **Secrets and variables** → **Actions**
2. Add the following repository secrets:
   - `EC2_HOST`: `13.127.177.0`
   - `EC2_SSH_KEY`: Paste the full contents of your `fedzero-key.pem` private key file.
3. Every commit pushed to `main` touching backend or ML components will automatically sync to EC2, restart the `fedzero` service, and verify health.

---

## 💻 Step 2: Deploy Frontend to Vercel (Free Tier)

1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Click **Add New Project** → select `cwf`.
3. In **Root Directory**, click Edit and select: `apps/web`.
4. Under **Environment Variables**, add:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_b3JpZW50ZWQtZm94aG91bmQtMjIwNC5jbGVyay5hY2NvdW50cy5kZXYk
   CLERK_SECRET_KEY=sk_test_Iuc4k57tw0dkZ1L5o2rKvqe4WDLY0jeve9KNi9zvrs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Point Next.js rewrites to your live Railway backend URL
   BACKEND_API_URL=https://fedzero-backend-production.up.railway.app
   NEXT_PUBLIC_API_URL=https://fedzero-backend-production.up.railway.app
   ```
5. Click **Deploy**. Vercel will build and give you a public URL (e.g. `https://fedzero.vercel.app`).

---

## ⚡ Step 3: Verify Community Tier in Production

1. Open your live frontend URL (`https://your-app.vercel.app`).
2. Sign in using your email / Google account via Clerk.
3. In the top navigation, confirm the badge shows:
   `🌱 COMMUNITY (FREE) ▾`
4. Visit `/dashboard` to confirm that:
   - Global Model Accuracy shows **94.8%**
   - Privacy shows **100% Safe**
   - Rewards show **18.5 TEST-SOL**
5. Click **Start Community Round** to trigger the federated round simulation.

---

## 🖥️ Step 4: How Community Workers Connect From Any Laptop

Any student, researcher, or developer can connect their personal laptop or GPU to your live production network:

```bash
# 1. Download the worker client
curl -O https://your-app.vercel.app/fedzero_worker.py

# 2. Run the worker pointing to your live backend
python fedzero_worker.py --server https://fedzero-backend-production.up.railway.app --name Student_Laptop
```

- Worker auto-detects PyTorch GPU (CUDA), NumPy, or CPU.
- Worker loads local training datasets privately on their machine.
- Zero raw data ever leaves their laptop.
- Testnet rewards are automatically credited to their node!
