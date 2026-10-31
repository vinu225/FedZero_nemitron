"""
Tests for Nebius Token Factory & NVIDIA Nemotron Integration
"""

import pytest
import numpy as np
from ml.nebius import nebius_service
from ml.datasets.unstructured_data import get_unstructured_domain_batch
from ml.clients.federated_client import FederatedClient
from ml.datasets.synthetic_data import generate_synthetic_biomarkers


def test_nebius_service_status():
    status = nebius_service.get_status()
    assert status["provider"] == "Nebius Token Factory"
    assert "nvidia/nemotron-3-nano" in status["active_models"]["edge_fast"]
    assert "nvidia/nemotron-3-super" in status["active_models"]["edge_domain"]
    assert "nvidia/nemotron-3-ultra" in status["active_models"]["coordinator_reasoning"]


def test_nebius_edge_record_processing():
    sample_text = (
        "Patient #4928 admitted with SpO2 87%, fever 39C, bilateral pulmonary infiltrates, "
        "elevated CRP 42 mg/L, WBC 15.2k. Administered empiric ceftriaxone."
    )
    result = nebius_service.process_unstructured_record(
        raw_text=sample_text,
        domain="clinical_ehr"
    )
    assert "features" in result
    assert len(result["features"]) == 16
    assert all(0.0 <= f <= 1.0 for f in result["features"])
    assert result["scrubbed_pii_count"] >= 1
    assert result["status"] in ("SUCCESS", "PARSED_WITH_FALLBACK", "FALLBACK_RECOVERY")
    assert "latency_ms" in result


def test_nebius_coordinator_byzantine_audit():
    # Case 1: All accepted
    audit_clean = nebius_service.audit_byzantine_round(
        round_number=1,
        accepted_nodes=[{"client_id": "node_1"}, {"client_id": "node_2"}],
        rejected_nodes=[],
        global_accuracy=88.5,
        global_loss=0.32,
    )
    assert audit_clean["verdict"] == "CONSENSUS_OPTIMAL"
    assert audit_clean["model_utility_basis_points"] >= 9000
    assert "nvidia/nemotron-3-ultra" in audit_clean["auditor_model"]

    # Case 2: Threat mitigated
    audit_poison = nebius_service.audit_byzantine_round(
        round_number=2,
        accepted_nodes=[{"client_id": "node_1"}],
        rejected_nodes=[{"client_id": "malicious_node", "l2_norm": 8.4, "reason": "Norm explosion"}],
        global_accuracy=82.0,
        global_loss=0.45,
    )
    assert audit_poison["verdict"] == "BYZANTINE_THREAT_NEUTRALIZED"
    assert audit_poison["rejected_count"] == 1


def test_federated_client_unstructured_ingestion():
    narratives = get_unstructured_domain_batch(domain="clinical_ehr", count=4)
    data = generate_synthetic_biomarkers(n_samples=40, seed=42)
    client = FederatedClient(
        client_id="test_nvidia_node",
        name="Oncology Edge Unit",
        wallet_address="0x1234567890abcdef1234567890abcdef12345678",
        private_data=data,
        compute_tier="RTX 4090",
        unstructured_narratives=narratives,
    )
    assert client.nebius_stats["processed_with_nvidia"] is True
    assert client.nebius_stats["unstructured_narratives_count"] == 4
    assert client.num_samples == 4
    # Run a quick train round
    global_weights = client.local_model.get_weights_flat()
    round_res = client.train_round(global_weights=np.array(global_weights), epochs=1)
    assert "nebius_telemetry" in round_res
    assert round_res["nebius_telemetry"]["processed_with_nvidia"] is True

