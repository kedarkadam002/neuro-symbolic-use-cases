export const useCases = [
  {
    id: "01",
    title: "Intelligent Revenue Cycle Decision Engine",
    industry: "Healthcare",
    current: "Hospitals process Eligibility, Prior Authorization, Coding, Claims, Appeals, Collections. Most AI solutions predict claim denial but don't explain why.",
    flow: "Medical Records → Insurance Claims → Payer Policies → Centers for Medicare & Medicaid Services (CMS) Regulations → Hospital Standard Operating Procedure (SOP) → LLM → Medical Ontology → Business Rules Engine → Reasoning Engine → Recommended Action → Human Approval",
    output: {
      decision: "APPROVE",
      reason: "Patient satisfies CMS Rule 41.2, Insurance Policy Section 6, previous treatment completed.",
      metrics: []
    },
    benefits: "Explainable approvals, lower denials, faster reimbursement, better compliance, reduced manual review. Aligns directly with Revenue Cycle Management (RCM), prior authorization, denial management and intelligent automation services.",
  },
  {
    id: "02",
    title: "Explainable Claims Fraud Investigator",
    industry: "Healthcare, Insurance",
    current: "AI predicts fraud; investigators still perform manual validation.",
    flow: "LLM extracts claim → Knowledge Graph → Provider history → Patient history → Fraud rules → Policy → Reasoning → Investigator Dashboard",
    output: {
      decision: "Escalate investigation",
      reason: "Repeated provider, known fraud network, duplicate billing, policy mismatch.",
      metrics: [{ label: "Fraud Score", value: "93%" }]
    },
    benefits: "Faster investigations, explainable fraud detection, reduced false positives, regulatory confidence.",
  },
  {
    id: "03",
    title: "Enterprise Appeals Intelligence",
    industry: "Healthcare",
    current: "Appeals are extremely manual. Neuro-symbolic AI would predict appeal outcome AND recommend the best appeal strategy.",
    flow: "Medical record → Payer rule → Historical approvals → Centers for Medicare & Medicaid Services (CMS) → Knowledge graph → Recommendation",
    output: {
      decision: "Appeal likely successful",
      reason: "Procedure meets CMS Guideline, Insurance Exception, prior similar approvals.",
      metrics: [{ label: "Probability", value: "91%" }]
    },
    benefits: "Builds naturally on current appeals and grievance automation work.",
  },
  {
    id: "04",
    title: "KYC Investigation Copilot",
    industry: "Banking",
    current: "Analyst checks 20 systems manually to build a single customer risk picture.",
    flow: "Customer → Transactions → Anti-Money Laundering (AML) Rules → Politically Exposed Person (PEP) Lists → Knowledge Graph → Reasoning → Risk Recommendation",
    output: {
      decision: "High Risk — Recommended: Enhanced Due Diligence (EDD)",
      reason: "Linked entity, sanction list, cross-border, suspicious transaction chain.",
      metrics: []
    },
    benefits: "Faster onboarding, consistent risk scoring, audit-ready reasoning, reduced analyst workload. Strong fit with BFSI compliance, AML, and fintech operations.",
  },
  {
    id: "05",
    title: "Collections Strategy Advisor",
    industry: "Banking",
    current: "Collection agents follow fixed workflows.",
    flow: "Predicts customer payment × Bank policy × Compliance × Hardship rules × Behaviour → Next Best Action",
    output: {
      decision: "Offer — 3 Month Plan",
      reason: "Customer profile, bank rule, hardship criteria.",
      metrics: [{ label: "Recovery probability", value: "82%" }]
    },
    benefits: "Complements digital collections and compliance capabilities.",
  },
  {
    id: "06",
    title: "Enterprise Complaint Resolution Engine",
    industry: "Healthcare, Banking, Telecom, Utilities",
    current: "Complaint handlers draft responses case-by-case, re-researching policy and precedent every time.",
    flow: "LLM reads Complaint → Company SOP → Regulatory Rules → Previous Similar Cases → Knowledge Graph → Suggested Resolution",
    output: {
      decision: "Recommended Response Generated",
      reason: "Consumer Protection Rule, Internal Policy, Past Resolution.",
      metrics: [{ label: "Confidence", value: "96%" }]
    },
    benefits: "Faster resolution, consistent tone and policy compliance, reusable across multiple business units. Works across healthcare, banking, telecom, and utilities.",
  },
  {
    id: "07",
    title: "Clinical Coding Copilot",
    industry: "Healthcare",
    current: "Coders manually translate doctor notes into billing codes, a slow and error-prone process.",
    flow: "Reads Doctor Notes → International Classification of Diseases (ICD) → Current Procedural Terminology (CPT) → Medical Rules → Compliance → Suggested Codes → Explanation",
    output: {
      decision: "Suggested Codes Generated",
      reason: "Diagnosis and procedure match ICD/CPT code sets and documented medical necessity.",
      metrics: []
    },
    benefits: "Would dramatically reduce coding errors, faster claims submission, better compliance.",
  },
  {
    id: "08",
    title: "Insurance Underwriting Advisor",
    industry: "Insurance",
    current: "Underwriters issue a bare approve/decline with little explanation of the reasoning behind it.",
    flow: "Understands Applicant → Medical History → Risk Rules → Policy → Regulation → Recommendation → Explanation",
    output: {
      decision: "Approved",
      reason: "Income stable, no chronic illness, Policy Section 5, risk score low.",
      metrics: []
    },
    benefits: "Detailed, defensible underwriting decisions, faster policy issuance, reduced appeals and complaints.",
  },
  {
    id: "09",
    title: "Prior Authorization Intelligence",
    industry: "Healthcare",
    current: "Prior authorization requests sit in manual review queues, and it's probably the most commercially viable healthcare use case.",
    flow: "LLM reads Request → Medical Guideline → Insurance Policy → Previous Similar Cases → Clinical Rules → Recommendation",
    output: {
      decision: "Recommended Approval",
      reason: "Request matches clinical guideline, insurance policy terms, and precedent from similar prior cases.",
      metrics: []
    },
    benefits: "Fits perfectly with existing provider solutions, faster turnaround, fewer delayed treatments.",
  },
  {
    id: "10",
    title: "Enterprise Compliance Copilot",
    industry: "Every industry",
    current: "Compliance teams manually review emails, contracts, and documents for policy or regulatory violations.",
    flow: "LLM reads email, document, contract, chat → Company Policy → Regulation → Knowledge Graph → Reasoning → Compliance Recommendation",
    output: {
      decision: "Suggested Fix",
      reason: "General Data Protection Regulation (GDPR), Health Insurance Portability and Accountability Act (HIPAA), Internal Policy.",
      metrics: [{ label: "Violation Risk", value: "Medium" }]
    },
    benefits: "Earlier violation detection, consistent policy enforcement, reduced regulatory exposure across every business unit.",
  },
  {
    id: "11",
    title: "Provider Credentialing Intelligence",
    industry: "Healthcare",
    current: "A highly feasible use case since provider credentialing is already supported, but license and sanction checks are still largely manual.",
    flow: "Provider Application → License Databases → Sanctions Lists → Payer Rules → Reasoning Engine → Approval Recommendation",
    output: {
      decision: "Recommended Approval",
      reason: "License verified, no sanctions found, credentials meet payer rules.",
      metrics: []
    },
    benefits: "Verifies licenses, checks sanctions, validates credentials, applies payer rules, and explains every approval or rejection.",
  },
  {
    id: "12",
    title: "Benefits Configuration Advisor",
    industry: "Health Plans",
    current: "Rarely discussed, but health plans constantly configure benefit plans by hand against shifting regulations.",
    flow: "Reads benefit documents → CMS rules → State regulations → Historical configurations → Suggest new benefit configuration → Explain every change",
    output: {
      decision: "Suggested Configuration Update",
      reason: "Aligned with CMS rules, applicable state regulations, and precedent from historical configurations.",
      metrics: []
    },
    benefits: "Faster benefit plan updates, fewer configuration errors, every change explained and auditable.",
  }
];

export const topRecommendations = [
  {
    rank: "01",
    title: "Intelligent Revenue Cycle Decision Engine",
    reason: "Builds directly on the large RCM practice and intelligent automation investments."
  },
  {
    rank: "02",
    title: "Explainable Claims Fraud Investigator",
    reason: "Leverages healthcare and payer claims expertise while improving fraud operations."
  },
  {
    rank: "03",
    title: "KYC Investigation Copilot",
    reason: "Strong fit with BFSI compliance, AML and fintech operations."
  },
  {
    rank: "04",
    title: "Collections Strategy Advisor",
    reason: "Extends digital collections services with AI-driven decision support."
  },
  {
    rank: "05",
    title: "Enterprise Complaint Resolution Engine",
    reason: "Applicable across Healthcare, BFSI, Telecom and Utilities, making it reusable across multiple business units."
  }
];
