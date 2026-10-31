"""
FedZero — Unstructured Multi-Domain Raw Datasets for Edge Ingestion
Simulates messy, unstructured edge records (doctor clinical notes, pathology logs, AML memos, IoT incidents)
that are processed on-premise at edge nodes using NVIDIA Nemotron on Nebius Token Factory.
"""

from typing import List, Tuple, Dict, Any

CLINICAL_EHR_NARRATIVES = [
    (
        "Patient #A-8942 admitted with acute respiratory distress, SpO2 88% on room air. "
        "Chest radiography demonstrates bilateral patchy airspace opacities in lower lobes. "
        "Elevated C-reactive protein (48 mg/L), leukocyte count 14,800/mcL with left shift. "
        "Patient febrile at 39.1C. Administered empiric broad-spectrum antibiotic coverage.",
        1  # Pathological / Positive
    ),
    (
        "Routine outpatient follow-up for 54yo individual. Normal vesicular breath sounds bilaterally. "
        "Resting pulse oximetry 99%. Complete blood count unremarkable: WBC 6,200/mcL, platelets 240k. "
        "No evidence of focal consolidation, effusion, or pneumothorax on standard two-view imaging. Discharged.",
        0  # Normal / Negative
    ),
    (
        "Oncology EHR Case #881: Stage III NSCLC follow-up. Histopathology confirms EGFR exon 19 deletion. "
        "Platelet-to-lymphocyte ratio elevated (210). Serum CEA 14.8 ng/mL. Decreased aeration in right middle lobe "
        "with recurrent micro-infiltrates. Initiated third-generation targeted tyrosine kinase inhibitor.",
        1  # Pathological / Positive
    ),
    (
        "Preventative executive health panel. Clear lung fields. Serum inflammatory markers negative: "
        "hs-CRP 0.8 mg/L, ESR 6 mm/hr. Arterial blood gas pH 7.41, PaO2 96 mmHg. Pulmonary function tests "
        "demonstrate FEV1/FVC ratio of 0.82 within normal reference limits.",
        0  # Normal / Negative
    ),
    (
        "Pediatric urgent care record. Presenting with persistent paroxysmal cough, subcostal retractions, "
        "and tachypnea (respiratory rate 44/min). Interstitial infiltrates noted on anteroposterior view. "
        "Procalcitonin elevated at 2.4 ng/mL indicating active bacterial consolidation.",
        1  # Pathological / Positive
    ),
    (
        "Pre-operative clearance exam. Patient denies dyspnea, orthopnea, or fever. "
        "Auscultation reveals clear lung fields without wheezes or crackles. Hemoglobin 14.5 g/dL, "
        "creatinine 0.9 mg/dL. Electrocardiogram demonstrates normal sinus rhythm without ischemic changes.",
        0  # Normal / Negative
    ),
    (
        "Emergency Department Transfer Note: Septic presentation secondary to community-acquired pneumonia. "
        "Mean arterial pressure 62 mmHg, lactate 3.4 mmol/L. Severe hypoxemia (PaO2/FiO2 ratio 180). "
        "Multifocal consolidations involving right upper and lower lobes.",
        1  # Pathological / Positive
    ),
    (
        "Post-treatment remission evaluation. Follow-up low-dose CT chest shows complete resolution "
        "of previously identified inflammatory nodules. White blood cell count normalized at 5,800/mcL. "
        "Patient reports full functional recovery and return to baseline exercise tolerance.",
        0  # Normal / Negative
    ),
]

FINANCIAL_AML_NARRATIVES = [
    (
        "SAR Alert #902: Commercial entity registered 14 days ago received $480,000 via 18 rapid structured wire "
        "transfers from offshore jurisdictions under AML threshold ($9,500 each). Immediate dissipation to cryptocurrency "
        "OTC desk without economic commercial rationale.",
        1  # Anomaly / Fraud
    ),
    (
        "Corporate payroll processing audit: Bi-weekly disbursement of $142,000 distributed to 45 verified domestic employee "
        "accounts. Consistent with 24-month historical salary payroll profile and state tax withholding records.",
        0  # Normal
    ),
    (
        "High-velocity carding alert: 34 failed CVV micro-charges within 120 seconds across 6 merchant categories, "
        "followed by a $4,800 high-risk electronics purchase originating from mismatched IP geolocations.",
        1  # Anomaly / Fraud
    ),
    (
        "Recurring merchant settlement: Standard automated clearing house (ACH) batch settlement of $28,400 for verified "
        "grocery chain merchant terminal. Transaction volume within 1.2 standard deviations of seasonal baseline.",
        0  # Normal
    ),
]


def get_unstructured_domain_batch(domain: str = "clinical_ehr", count: int = 4) -> List[Tuple[str, int]]:
    """Returns a batch of raw unstructured narratives with labels."""
    source = CLINICAL_EHR_NARRATIVES if domain == "clinical_ehr" else FINANCIAL_AML_NARRATIVES
    records = []
    for i in range(count):
        text, label = source[i % len(source)]
        records.append((text, label))
    return records

