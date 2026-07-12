export type DomainId = "bfsi" | "healthcare" | "energy-utility";

export interface Domain {
  id: DomainId;
  name: string;
  tagline: string;
  description: string;
  regions: string;
  icon: "landmark" | "activity" | "zap";
}

export const domains: Domain[] = [
  {
    id: "bfsi",
    name: "BFSI",
    tagline: "Banking, Financial Services & Insurance",
    description:
      "Explainable decisioning for compliance-heavy workflows — onboarding, credit, fraud, disputes and regulatory reporting — where every outcome must be defensible to a regulator, an auditor, or a customer.",
    regions: "US & UK",
    icon: "landmark",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Payers, Providers & Health Plans",
    description:
      "Clinical and administrative decisions that combine large language model (LLM) comprehension of unstructured records with hard medical, payer and regulatory rules that cannot be approximated statistically.",
    regions: "US & UK",
    icon: "activity",
  },
  {
    id: "energy-utility",
    name: "Energy & Utility",
    tagline: "Utilities, Grid Operators & Retail Energy Suppliers",
    description:
      "Operational and customer decisions — outage response, billing disputes, vulnerable customer care and regulatory compliance — where safety rules and license conditions must govern every automated recommendation.",
    regions: "US & UK",
    icon: "zap",
  },
];

export interface TargetClient {
  name: string;
  note: string;
}

export interface UseCase {
  id: string;
  domain: DomainId;
  title: string;
  region: string;
  current: string;
  problemDetail: string;
  solutionDetail: string;
  flow: string;
  output: {
    decision: string;
    reason: string;
    metrics: { label: string; value: string }[];
  };
  benefits: string;
  targetClients: TargetClient[];
}

export const useCases: UseCase[] = [
  // ---------------- BFSI ----------------
  {
    id: "bfsi-01",
    domain: "bfsi",
    title: "KYC & AML Investigation Copilot",
    region: "US & UK",
    current:
      "Analysts manually check 15-20 systems to build a single customer risk picture before an onboarding or periodic review decision can be made.",
    problemDetail:
      "Know Your Customer (KYC) and Anti-Money Laundering (AML) reviews require an analyst to pull data from core banking, transaction monitoring, sanctions screening, adverse media and beneficial-ownership registries, then manually reason across all of it to reach a risk rating. This takes 30-90 minutes per case, scales linearly with customer growth, and produces inconsistent outcomes between analysts and between the US and UK arms of the same institution. When a regulator asks why a customer was rated low risk, the bank often cannot reconstruct the reasoning months later.",
    solutionDetail:
      "A large language model (LLM) reads unstructured inputs — adverse media, beneficial ownership filings, free-text transaction narratives — and extracts entities into a knowledge graph linking the customer to counterparties, sanctioned entities and Politically Exposed Persons (PEPs). A symbolic rules layer then applies the exact regulatory logic (Bank Secrecy Act and OFAC lists in the US, the Money Laundering Regulations and JMLSG guidance in the UK) to that graph, producing a risk rating with a step-by-step citation trail an analyst can approve in minutes instead of build from scratch.",
    flow: "Customer & Transaction Data → Bank Secrecy Act (BSA) / Anti-Money Laundering (AML) Rules → Politically Exposed Person (PEP) & Sanctions Lists (OFAC, UK HM Treasury) → Knowledge Graph → Reasoning Engine → Risk Recommendation → Analyst Review",
    output: {
      decision: "High Risk — Recommended: Enhanced Due Diligence (EDD)",
      reason: "Linked entity on sanctions list, cross-border transaction chain, and a Politically Exposed Person (PEP) match in the beneficial ownership structure.",
      metrics: [{ label: "Risk Score", value: "88%" }],
    },
    benefits:
      "Faster onboarding, consistent risk scoring across US and UK entities, audit-ready reasoning trails for regulators, reduced analyst workload.",
    targetClients: [
      { name: "Regional & mid-size US banks (e.g. Citizens Financial Group, Truist, Regions Financial)", note: "High KYC/AML case volume, leaner compliance staff than the money-center banks — strong outsourcing fit." },
      { name: "UK challenger & high-street banks (e.g. NatWest Group, TSB, Metro Bank)", note: "Under sustained FCA scrutiny on AML controls following recent enforcement actions in the sector." },
      { name: "Fintechs & digital wallets with banking charters (e.g. Chime, Revolut, Monzo)", note: "Fast customer growth has outpaced in-house compliance headcount." },
      { name: "Consumer finance & credit card issuers (e.g. Synchrony, Discover Financial Services)", note: "High account-opening volume with existing BPO relationships Firstsource can extend." },
    ],
  },
  {
    id: "bfsi-02",
    domain: "bfsi",
    title: "Explainable Fraud & Transaction Monitoring Engine",
    region: "US & UK",
    current: "Neural models flag transactions as suspicious, but investigators still manually reconstruct the case before a Suspicious Activity Report (SAR) can be filed.",
    problemDetail:
      "Transaction monitoring systems generate thousands of alerts per day, and industry-wide over 90% turn out to be false positives after investigation. Analysts spend most of their time proving a flagged transaction is innocent rather than catching real fraud, and every confirmed case still requires them to manually assemble a Suspicious Activity Report (SAR) narrative referencing the exact rule and evidence — a task that is slow, inconsistent, and a major source of regulatory findings when done poorly.",
    solutionDetail:
      "The neural layer keeps doing what it does well — scoring transaction anomalies against behavioural baselines. The symbolic layer then attaches that score to a knowledge graph of the customer, merchant and counterparties, checks it against card network and payment-scheme rules, and — critically — retrieves the closest matching prior confirmed case. The result is a pre-drafted case file with the rule violated, the linked entities, and a narrative an investigator edits rather than writes from scratch, cutting investigation time and standardising SAR quality across the team.",
    flow: "Transaction Stream → Behavioural Model → Card Network / Faster Payments Rules → Customer & Merchant Knowledge Graph → Reasoning Engine → Case File with Rationale → Investigator Dashboard",
    output: {
      decision: "Escalate — Draft Suspicious Activity Report (SAR)",
      reason: "Transaction velocity breaches bank policy threshold, merchant matches known fraud ring, and pattern matches a prior confirmed case.",
      metrics: [{ label: "Fraud Confidence", value: "94%" }],
    },
    benefits:
      "Cuts investigation time, reduces false positives that frustrate genuine customers, produces regulator-ready evidence packs on demand.",
    targetClients: [
      { name: "Card issuers & payment processors (e.g. Synchrony, Capital One, Barclaycard)", note: "Highest per-transaction fraud alert volume; direct cost savings from false-positive reduction." },
      { name: "UK retail banks (e.g. Lloyds Banking Group, Nationwide Building Society)", note: "Faster Payments' near-instant settlement leaves little time for manual review — automation is a must." },
      { name: "Digital-first / neobanks (e.g. Chime, Monzo, Starling Bank)", note: "Thin fraud-ops teams relative to transaction volume; likely to buy rather than build." },
      { name: "Insurance carriers with embedded payments (e.g. Progressive, Allstate)", note: "Adjacent fraud exposure in claims payouts that the same architecture can cover." },
    ],
  },
  {
    id: "bfsi-03",
    domain: "bfsi",
    title: "Credit & Collections Strategy Advisor",
    region: "US & UK",
    current: "Collections agents follow rigid scripts regardless of individual hardship circumstances, driving complaints and poor recovery rates.",
    problemDetail:
      "A one-size-fits-all collections script cannot account for the difference between a customer who missed one payment due to a timing issue and one facing genuine financial hardship. In the UK this is now a direct regulatory problem: the FCA's Consumer Duty requires firms to show they delivered good outcomes for customers in vulnerable circumstances, and in the US, Regulation F restricts contact frequency and requires documented, fair treatment. Generic scripts also simply recover less money — customers offered a plan that does not fit their actual situation default again.",
    solutionDetail:
      "A neural model predicts the customer's likely ability and willingness to pay from their payment history and behavioural signals. That prediction is then constrained by a symbolic rules layer encoding affordability tests, hardship criteria and the specific product's collections policy, so the system never recommends an option the compliance team hasn't pre-approved. The output is a ranked set of next-best-actions — payment plan terms, forbearance, or referral to a hardship team — each with the rule that justifies it, so the same reasoning can be shown to a regulator or an internal auditor.",
    flow: "Customer Payment Behaviour → Affordability & Hardship Rules (US Regulation F, UK FCA Consumer Duty) → Product Terms → Reasoning Engine → Next Best Action → Agent Guidance",
    output: {
      decision: "Offer — 3-Month Reduced Payment Plan",
      reason: "Income disruption confirmed, plan satisfies affordability rules, and it is the least restrictive option that still meets bank recovery policy.",
      metrics: [{ label: "Recovery Probability", value: "82%" }],
    },
    benefits:
      "Improves recovery while demonstrably treating customers fairly, reduces complaints and regulatory findings, and standardises agent decisions.",
    targetClients: [
      { name: "Credit card & unsecured lending issuers (e.g. Capital One, Barclays UK, MBNA)", note: "Large delinquent-account volumes already routed through outsourced collections desks." },
      { name: "Auto & consumer finance lenders (e.g. Ally Financial, Santander Consumer USA)", note: "Regulation F contact-frequency limits make automated, compliant next-best-action valuable." },
      { name: "Buy-now-pay-later providers (e.g. Klarna, Affirm)", note: "Younger, higher-risk customer base where fair treatment directly affects brand reputation." },
      { name: "UK building societies & specialist lenders (e.g. Nationwide, OneSavings Bank)", note: "Consumer Duty compliance is a board-level priority with active FCA supervision." },
    ],
  },
  {
    id: "bfsi-04",
    domain: "bfsi",
    title: "Loan & Mortgage Underwriting Explainability Engine",
    region: "US & UK",
    current: "Underwriting models return an approve/decline score with no defensible reasoning, creating fair-lending exposure on every decline.",
    problemDetail:
      "Most underwriting models are trained on historical outcomes and return a probability score with no clear reasoning. When an application is declined, the lender is legally required — under the US Equal Credit Opportunity Act and Regulation B, and under the UK's Mortgage Conduct of Business rules — to give the applicant specific, accurate reasons. Reconstructing those reasons from an opaque model score after the fact is unreliable and is exactly the kind of practice that fair-lending regulators in both countries have penalised lenders for in recent years.",
    solutionDetail:
      "The neural model still produces the underlying risk assessment from bureau and application data, but every input that drives the decision is mapped to a named policy rule — debt-to-income thresholds, affordability stress tests, credit history criteria — inside a symbolic decision layer. Because the decision is composed of named rules rather than opaque weights, the system can generate the adverse-action notice directly from the same reasoning trail that produced the decision, and can just as easily approve borderline applications instantly when all rules are clearly satisfied.",
    flow: "Application & Bureau Data → Affordability & Fair-Lending Rules (US Equal Credit Opportunity Act, UK Mortgage Conduct of Business) → Credit Policy → Reasoning Engine → Decision + Adverse Action Reasons",
    output: {
      decision: "Declined",
      reason: "Debt-to-income ratio exceeds policy threshold under Mortgage Conduct of Business affordability rules; two comparable factors were within tolerance.",
      metrics: [{ label: "Policy Match", value: "3 of 4 criteria" }],
    },
    benefits:
      "Every decision carries a defensible adverse-action notice, reduces fair-lending risk, and shortens time-to-decision for straightforward approvals.",
    targetClients: [
      { name: "Mortgage lenders & servicers (e.g. Rocket Mortgage, Mr. Cooper, Nationwide Building Society)", note: "High application volume with existing document-processing outsourcing relationships." },
      { name: "UK high-street mortgage lenders (e.g. Halifax, Santander UK, TSB)", note: "MCOB affordability rules make explainable, auditable decisions a compliance requirement, not a nice-to-have." },
      { name: "US regional banks with fair-lending consent orders (e.g. banks under active CFPB or OCC review)", note: "Direct, urgent need for demonstrably explainable underwriting." },
      { name: "Auto lenders (e.g. Ally Financial, Santander Consumer USA)", note: "Same fair-lending explainability requirement applies to auto finance decisions." },
    ],
  },
  {
    id: "bfsi-05",
    domain: "bfsi",
    title: "Regulatory Complaints & Dispute Resolution Engine",
    region: "US & UK",
    current: "Complaint handlers re-research policy and precedent for every case, leading to inconsistent outcomes and missed regulatory deadlines.",
    problemDetail:
      "Every complaint has a statutory clock: the CFPB expects timely resolution in the US, and the FCA's DISP rules require UK firms to respond within 8 weeks or refer the customer to the Financial Ombudsman Service. Handlers currently read the complaint, manually look up the relevant product policy and regulation, search for how similar cases were resolved, and draft a response — a process that takes hours per case and produces different outcomes for materially identical complaints depending on which handler picks it up.",
    solutionDetail:
      "An LLM reads the complaint narrative and classifies its root cause, then a symbolic layer matches that root cause against the exact regulatory clause (DISP category or CFPB rule) and the firm's internal redress policy. A knowledge graph of previously resolved, precedent-setting cases is used to retrieve the closest match so the recommended outcome is consistent with how the firm has ruled before — with the specific rule, policy clause and precedent case all shown to the handler before they approve the response.",
    flow: "Complaint Text (LLM Extraction) → Product Policy → Regulatory Rules (US CFPB, UK FCA DISP) → Precedent Case Knowledge Graph → Reasoning Engine → Recommended Resolution + Rationale",
    output: {
      decision: "Uphold Complaint — Redress £/$ Recommended",
      reason: "Matches FCA DISP root-cause category, precedent case with same fact pattern was upheld, redress calculation follows internal policy.",
      metrics: [{ label: "Confidence", value: "95%" }],
    },
    benefits:
      "Consistent, policy-compliant outcomes across both regulatory regimes, faster case closure within statutory deadlines, lower complaint-handling cost.",
    targetClients: [
      { name: "Retail banks with high complaint volumes (e.g. Lloyds Banking Group, NatWest Group)", note: "Lloyds alone has paid billions in historic UK redress programmes — consistency at scale is a board priority." },
      { name: "Credit card issuers & consumer lenders (e.g. Capital One, Barclaycard)", note: "High complaint-to-account ratio typical of unsecured credit products." },
      { name: "Insurance carriers (e.g. Aviva, Allstate)", note: "Claims-related complaints follow the same root-cause-and-precedent resolution pattern." },
      { name: "Buy-now-pay-later & fintech lenders (e.g. Klarna, Block's Afterpay)", note: "Newer complaint-handling functions with less institutional precedent to draw on manually." },
    ],
  },

  // ---------------- Healthcare ----------------
  {
    id: "healthcare-01",
    domain: "healthcare",
    title: "Intelligent Revenue Cycle Decision Engine",
    region: "US",
    current: "Hospitals process eligibility, prior authorization, coding, claims, appeals and collections with AI that predicts denial risk but cannot explain why.",
    problemDetail:
      "Predictive denial models tell a hospital's revenue cycle team that a claim is likely to be denied, but not which specific CMS rule, payer policy clause or documentation gap is the cause — so staff still have to manually investigate before they can fix it or decide whether to submit at all. Denials that could have been prevented at submission time instead surface weeks later, delaying cash flow and adding rework across eligibility, coding and appeals teams that are often organizationally and technologically siloed from each other.",
    solutionDetail:
      "An LLM reads the medical record, claim, and payer policy together, and a symbolic reasoning layer checks the claim against the exact CMS regulation, payer policy section and hospital SOP that apply — before submission, not after denial. Because the decision engine cites the specific rule satisfied or violated, staff get an actionable reason (\"add documentation for CMS Rule 41.2\") instead of a bare risk score, and clean claims can be auto-approved for submission with a full audit trail.",
    flow: "Medical Records → Insurance Claims → Payer Policies → Centers for Medicare & Medicaid Services (CMS) Regulations → Hospital Standard Operating Procedure (SOP) → LLM → Medical Ontology → Reasoning Engine → Recommended Action → Human Approval",
    output: {
      decision: "Approve",
      reason: "Patient satisfies CMS Rule 41.2, Insurance Policy Section 6, and prior treatment step was already completed.",
      metrics: [],
    },
    benefits:
      "Explainable approvals, lower denial rates, faster reimbursement, and stronger compliance posture, directly extending Revenue Cycle Management (RCM) services.",
    targetClients: [
      { name: "Multi-hospital health systems (e.g. HCA Healthcare, Community Health Systems, Ascension)", note: "High claim volume across many facilities creates the scale needed for measurable ROI." },
      { name: "Academic medical centers (e.g. Mount Sinai Health System, Cleveland Clinic)", note: "Complex payer mix and high-cost procedures make denial prevention especially valuable." },
      { name: "Regional/community hospital groups (e.g. Prime Healthcare, LifePoint Health)", note: "Thinner administrative margins make outsourced RCM automation an easier buying decision." },
      { name: "RCM-focused health tech platforms seeking a delivery partner (e.g. R1 RCM, Waystar)", note: "Potential co-delivery or subcontracted BPO partnership rather than a direct client." },
    ],
  },
  {
    id: "healthcare-02",
    domain: "healthcare",
    title: "Prior Authorization Intelligence",
    region: "US",
    current: "Prior authorization requests sit in manual review queues; it is one of the most commercially viable use cases across US payers and providers.",
    problemDetail:
      "Prior authorization is consistently ranked by physicians as one of the most burdensome administrative processes in US healthcare. A nurse or utilization-management reviewer must read the clinical request, compare it against the specific medical necessity guideline and the patient's insurance policy, and check for any precedent from similar cases — a process that takes days per request industry-wide, delays patient treatment, and generates a large volume of provider complaints and regulatory attention (several states have passed so-called gold-carding laws specifically targeting slow authorization turnaround).",
    solutionDetail:
      "An LLM extracts the clinical request from the referral or note, and a symbolic layer checks it against the payer's specific medical necessity guideline, the patient's policy terms, and a knowledge graph of how materially similar requests were decided previously. Requests that clearly satisfy all criteria are recommended for immediate approval with the matching guideline cited; only genuinely ambiguous or borderline cases are routed to a human reviewer, cutting typical turnaround from days to minutes for the majority of requests.",
    flow: "LLM reads Request → Medical Guideline → Insurance Policy → Precedent Cases → Clinical Rules Engine → Recommended Decision + Rationale",
    output: {
      decision: "Recommended Approval",
      reason: "Request matches clinical guideline, insurance policy terms, and precedent from similar prior cases.",
      metrics: [],
    },
    benefits:
      "Fits existing payer/provider services, shortens turnaround from days to minutes, and reduces treatment delays for patients.",
    targetClients: [
      { name: "National health insurers (e.g. UnitedHealthcare/Optum, Cigna, Elevance Health)", note: "Highest prior-authorization volume in the US market and under direct regulatory pressure to speed up turnaround." },
      { name: "Regional Blue Cross Blue Shield plans (e.g. Blue Cross Blue Shield of Michigan, Highmark)", note: "Smaller in-house utilization management teams than the national payers." },
      { name: "Specialty pharmacy & benefit managers (e.g. CVS Caremark, Express Scripts)", note: "Prior auth is especially dense for specialty drugs, a high-cost category." },
      { name: "Large physician groups & health systems submitting requests (e.g. Ascension, Optum Health)", note: "Provider-side use case — reducing rework and appeal volume on the submission end." },
    ],
  },
  {
    id: "healthcare-03",
    domain: "healthcare",
    title: "Clinical Coding Copilot",
    region: "US & UK",
    current: "Coders manually translate doctor notes into billing and clinical codes — a slow, error-prone process across both US and UK coding systems.",
    problemDetail:
      "Clinical coders read free-text physician documentation and translate it into structured billing and clinical codes — ICD-10 and CPT in the US, OPCS-4 in the UK's NHS. Because clinical language is ambiguous and every payer has its own documentation requirements, coding is slow and error-prone: undercoding loses revenue, overcoding creates compliance and audit risk, and inconsistent coding across a large workforce makes it hard to guarantee quality at scale — a persistent problem for any BPO handling coding as a managed service.",
    solutionDetail:
      "An LLM reads the physician's note and identifies the diagnoses and procedures described, while a symbolic rules layer maps that clinical language onto the exact code sets and cross-checks that the documentation supports medical necessity for each code before it is suggested. Because the reasoning between note and code is explicit, coders can review and approve suggestions in seconds rather than deriving the code from scratch, and quality-assurance teams get a consistent, auditable rationale for every code across the entire coding workforce.",
    flow: "Doctor Notes (LLM) → International Classification of Diseases (ICD) / Current Procedural Terminology (CPT) [US] or OPCS-4 [UK] → Medical Rules → Compliance Check → Suggested Codes + Explanation",
    output: {
      decision: "Suggested Codes Generated",
      reason: "Diagnosis and procedure match ICD/CPT code sets and documented medical necessity.",
      metrics: [],
    },
    benefits:
      "Reduces coding errors, accelerates claims submission, and improves audit defensibility for both US payer and UK NHS Trust coding workflows.",
    targetClients: [
      { name: "Hospital coding departments (e.g. HCA Healthcare, Tenet Healthcare)", note: "Firstsource already has an established medical coding services line to extend with this." },
      { name: "NHS Trusts & Clinical Commissioning Support Units (UK)", note: "OPCS-4 coding accuracy directly affects NHS Trust income under Payment by Results." },
      { name: "Coding outsourcing / staffing platforms (e.g. AAPC-affiliated coding vendors)", note: "Potential co-delivery partners for surge capacity during coding backlogs." },
      { name: "Ambulatory surgery centers & specialty clinics (e.g. multi-site orthopedic or cardiology groups)", note: "High procedure-code volume with typically thin in-house coding teams." },
    ],
  },
  {
    id: "healthcare-04",
    domain: "healthcare",
    title: "Explainable Claims Fraud, Waste & Abuse Investigator",
    region: "US & UK",
    current: "Neural models predict fraud, waste or abuse; investigators still perform the manual validation work before any action is taken.",
    problemDetail:
      "Payers lose an estimated tens of billions of dollars a year to healthcare fraud, waste and abuse in the US alone, and predictive models that simply score a claim as suspicious leave investigators to manually rebuild the case — checking provider billing history, patient treatment history, and known fraud patterns — before any recovery action or provider referral can be justified. This manual reconstruction is slow enough that some fraud schemes continue running for months after the first model flag.",
    solutionDetail:
      "The neural model still detects the anomalous billing pattern, but a symbolic layer immediately attaches that flag to a knowledge graph connecting the claim to the provider's billing history, the patient's treatment history, and known fraud network signatures, then checks it against payer policy and fraud-waste-abuse rules. Investigators receive a structured case file that already states which rule was violated and which prior confirmed cases match the pattern, so they spend their time deciding rather than researching.",
    flow: "LLM extracts Claim → Provider History → Patient History → Knowledge Graph → Fraud, Waste & Abuse Rules → Payer Policy → Reasoning Engine → Investigator Dashboard",
    output: {
      decision: "Escalate Investigation",
      reason: "Repeated provider pattern, known fraud network match, duplicate billing, and policy mismatch.",
      metrics: [{ label: "Fraud Score", value: "93%" }],
    },
    benefits:
      "Faster, explainable investigations, fewer false positives against legitimate providers, stronger regulatory defensibility.",
    targetClients: [
      { name: "National payers with dedicated Special Investigation Units (e.g. UnitedHealthcare, Anthem/Elevance Health)", note: "Large enough claim volume to justify a dedicated fraud-waste-abuse platform investment." },
      { name: "Medicare Advantage plans (e.g. Humana, Kaiser Permanente)", note: "Federal oversight of Medicare Advantage billing makes explainable fraud detection a compliance asset, not just a cost saver." },
      { name: "NHS Counter Fraud Authority-adjacent NHS Trusts (UK)", note: "UK equivalent oversight body creates a parallel demand for explainable detection in NHS billing." },
      { name: "Third-party claims administrators (e.g. Cotiviti, HMS/Gainwell)", note: "Potential channel partners already selling fraud analytics services to payers." },
    ],
  },
  {
    id: "healthcare-05",
    domain: "healthcare",
    title: "Provider Credentialing Intelligence",
    region: "US & UK",
    current: "Provider credentialing is already partly automated, but license verification and sanction checks remain largely manual.",
    problemDetail:
      "Before a provider can bill a payer or practice at a facility, their license, board certification, and standing on sanction/exclusion lists must be verified — and re-verified periodically. Today this typically means a credentialing specialist manually querying multiple state licensing boards, the OIG exclusion list, and payer-specific rules, one provider at a time. With thousands of providers in a large network, this creates both a large administrative burden and a compliance risk if a lapsed license or new sanction is not caught quickly.",
    solutionDetail:
      "The system continuously checks each provider's credentials against license databases and sanction/exclusion lists, and a symbolic rules layer applies the exact payer or regulatory body's credentialing requirements (including, in the UK, General Medical Council registration status) to determine whether the provider still qualifies. Every approval or flagged exception comes with the specific rule and data source it is based on, so credentialing teams can process the routine majority in bulk and focus attention only on genuine exceptions.",
    flow: "Provider Application → License Databases → Sanctions & Exclusion Lists → Payer / General Medical Council (UK) Rules → Reasoning Engine → Approval Recommendation",
    output: {
      decision: "Recommended Approval",
      reason: "License verified, no sanctions found, and credentials meet payer or regulatory body rules.",
      metrics: [],
    },
    benefits:
      "Verifies licenses, checks sanctions, validates credentials against payer or regulator rules, and explains every approval or rejection.",
    targetClients: [
      { name: "Large multi-state provider networks (e.g. Optum Health, Ascension)", note: "Credentialing thousands of providers across many state licensing boards is a heavy recurring workload." },
      { name: "Health plans that credential in-network providers (e.g. Cigna, Elevance Health)", note: "Payer-side credentialing has its own compliance deadlines distinct from the provider side." },
      { name: "Locum tenens & staffing agencies (e.g. AMN Healthcare, Cross Country Healthcare)", note: "High provider churn means credentialing volume is disproportionately large relative to headcount." },
      { name: "NHS Trusts and General Medical Council-regulated networks (UK)", note: "GMC registration and Disclosure and Barring Service checks map directly onto the same rules-engine pattern." },
    ],
  },
  {
    id: "healthcare-06",
    domain: "healthcare",
    title: "Enterprise Appeals & Grievance Intelligence",
    region: "US",
    current: "Appeals handling is extremely manual today; neuro-symbolic AI can both predict the outcome and recommend the strongest appeal strategy.",
    problemDetail:
      "When a claim or prior authorization is denied, providers and patients can appeal — but building a winning appeal means finding the specific CMS guideline, policy exception, or precedent case that supports overturning the original decision, which today is done by manually searching through regulations and past cases. Many appeals that would likely succeed are never filed because the staff time required is not seen as worth it, leaving recoverable revenue and appropriate patient care on the table.",
    solutionDetail:
      "The system reads the original denial and the medical record, then a symbolic reasoning layer searches CMS guidelines, insurance policy exceptions, and a knowledge graph of previously successful appeals to identify the strongest applicable argument — not just whether to appeal, but which specific rule or precedent to cite. This turns appeals from a reactive, effort-gated process into a systematic one where every denial is evaluated for appeal potential and the strongest cases are automatically prioritized.",
    flow: "Medical Record → Payer Rule → Historical Approvals → CMS Guideline → Knowledge Graph → Reasoning Engine → Recommended Strategy",
    output: {
      decision: "Appeal Likely Successful",
      reason: "Procedure meets CMS Guideline, falls under an insurance policy exception, and matches prior similar approvals.",
      metrics: [{ label: "Probability", value: "91%" }],
    },
    benefits:
      "Builds directly on current appeals and grievance automation work, improving both speed and win rate on filed appeals.",
    targetClients: [
      { name: "Hospital systems with in-house appeals teams (e.g. Cleveland Clinic, HCA Healthcare)", note: "Direct extension of an existing RCM/appeals outsourcing relationship." },
      { name: "Physician billing groups (e.g. large multi-specialty group practices)", note: "Appeal volume scales with claim denials, which are rising industry-wide." },
      { name: "Patient advocacy & appeals services (e.g. third-party appeals support vendors)", note: "Potential white-label or subcontracted delivery partnership." },
      { name: "Health plans handling member grievances (e.g. regional Medicaid managed care organizations)", note: "Same reasoning pattern applies to the payer side of grievance and appeals handling." },
    ],
  },

  // ---------------- Energy & Utility ----------------
  {
    id: "energy-01",
    domain: "energy-utility",
    title: "Outage & Grid Incident Triage Copilot",
    region: "US & UK",
    current: "Control room operators manually cross-reference outage reports, grid topology and weather data before deciding dispatch priority.",
    problemDetail:
      "During a major storm or grid event, hundreds of outage reports can arrive within minutes, and a control room operator has to mentally combine grid topology, which customers and critical facilities are affected, current weather forecasts, and crew availability to decide what gets fixed first. Under time pressure, this manual triage is where restoration priorities can go wrong — and regulators in both the US and UK require utilities to report restoration performance and prioritization decisions after major events, so an undocumented judgment call becomes a compliance problem too.",
    solutionDetail:
      "Outage reports and sensor data feed a knowledge graph of the grid's actual topology — which feeder serves which customers and critical facilities — while a symbolic rules layer encodes safety and reliability standards (NERC reliability standards in the US, Ofgem license conditions in the UK) that determine legally and operationally required prioritization, such as hospitals and other critical infrastructure. The system combines this with weather severity to output a ranked, justified restoration plan instead of leaving the operator to hold all of that context in their head under pressure.",
    flow: "Outage Reports & Sensor Data → Grid Topology Knowledge Graph → Weather Feed → Safety & Reliability Rules (NERC [US], Ofgem [UK]) → Reasoning Engine → Prioritised Restoration Plan",
    output: {
      decision: "Priority 1 — Dispatch Crew Immediately",
      reason: "Feeder serves a hospital critical-care facility, weather forecast shows worsening conditions, and estimated customers affected exceeds threshold.",
      metrics: [{ label: "Customers Affected", value: "4,200" }],
    },
    benefits:
      "Faster, defensible restoration prioritisation, improved regulatory outage-reporting compliance, and reduced average restoration time.",
    targetClients: [
      { name: "Large US investor-owned utilities (e.g. Duke Energy, PG&E, Con Edison)", note: "High storm-outage frequency and existing customer-experience outsourcing relationships." },
      { name: "UK Distribution Network Operators (e.g. National Grid Electricity Distribution, SSEN)", note: "Ofgem's guaranteed standards regime creates direct financial and reporting consequences for slow restoration." },
      { name: "Rural electric cooperatives (e.g. members of the National Rural Electric Cooperative Association)", note: "Smaller control-room staff relative to service territory size, magnifying the value of triage automation." },
      { name: "Grid operators & Independent System Operators (e.g. PJM Interconnection, National Grid ESO)", note: "Wide-area grid visibility use case adjacent to the utility-level version." },
    ],
  },
  {
    id: "energy-02",
    domain: "energy-utility",
    title: "Billing Dispute & Meter-to-Cash Resolution Engine",
    region: "US & UK",
    current: "Billing disputes require an agent to manually reconcile meter reads, tariff changes and prior adjustments before responding to the customer.",
    problemDetail:
      "A customer disputing their bill has usually already been frustrated by an estimated read, a mid-cycle tariff change, or a previous unresolved adjustment — and today an agent has to manually pull meter read history, check which tariff applied on which date, and review prior adjustment records before they can even explain the bill, let alone fix it. This is slow, inconsistent between agents, and a leading driver of regulatory complaints to bodies like Ofgem in the UK and state Public Utility Commissions in the US.",
    solutionDetail:
      "An LLM reads the customer's dispute to understand what they are actually disputing, while a symbolic layer reconciles smart meter read history against the tariff and rate rules that applied at each point in time, cross-referenced with a knowledge graph of any prior adjustments on the account. The system proposes a specific bill correction with the exact meter reads and tariff clause that justify it, so agents can resolve disputes correctly on first contact instead of escalating for manual back-office reconciliation.",
    flow: "Customer Dispute (LLM) → Meter Read History → Tariff & Rate Rules → Prior Adjustment Knowledge Graph → Reasoning Engine → Recommended Resolution + Explanation",
    output: {
      decision: "Adjust Bill — Estimated Read Corrected",
      reason: "Smart meter data confirms estimated read was 30% above actual consumption; tariff rule requires reconciliation credit.",
      metrics: [{ label: "Confidence", value: "97%" }],
    },
    benefits:
      "Faster, consistent dispute resolution, fewer regulator escalations, and a fully auditable rationale for every bill adjustment.",
    targetClients: [
      { name: "UK retail energy suppliers (e.g. British Gas/Centrica, E.ON UK, Octopus Energy)", note: "Billing complaints are consistently one of the top drivers of Ofgem and Energy Ombudsman referrals." },
      { name: "US investor-owned utilities with retail billing (e.g. PG&E, National Grid US, Xcel Energy)", note: "State Public Utility Commissions actively track billing-complaint volume as a service-quality metric." },
      { name: "Water utilities with similar meter-to-cash processes (e.g. Thames Water, American Water)", note: "Adjacent vertical with the same tariff-and-meter-reconciliation pattern." },
      { name: "Municipal & public power utilities (e.g. city-owned electric utilities)", note: "Typically smaller billing operations teams that would benefit most from automation." },
    ],
  },
  {
    id: "energy-03",
    domain: "energy-utility",
    title: "Vulnerable Customer & Fuel Poverty Identification Engine",
    region: "US & UK",
    current: "Vulnerable-customer identification relies on customers self-reporting; most eligible households are never flagged for support.",
    problemDetail:
      "Both UK and US regulators require utilities to identify and protect vulnerable or fuel-poor customers, but in practice this relies heavily on customers proactively disclosing their circumstances — and most eligible households never do, whether from stigma, not knowing support exists, or simply not being asked at the right moment. This leaves utilities exposed to regulatory criticism for under-serving vulnerable customers, and it means avoidable disconnections and hardship happen to households the utility could have identified from data it already has.",
    solutionDetail:
      "The system looks for behavioural signals in existing payment and usage data — missed payments, seasonal consumption patterns consistent with rationing heat, contact center interactions — and a symbolic rules layer checks those signals against the exact regulatory vulnerability criteria (Ofgem's Vulnerability Principles in the UK, LIHEAP eligibility bands in the US) to determine whether the household likely qualifies for support. Rather than waiting for disclosure, the utility gets a proactive, explainable recommendation to offer a payment plan or refer the household to an assistance program.",
    flow: "Payment & Usage Behaviour → Household Signals → Regulatory Vulnerability Rules (Ofgem Vulnerability Principles [UK], LIHEAP Eligibility [US]) → Knowledge Graph → Reasoning Engine → Recommended Support Action",
    output: {
      decision: "Flag for Priority Support — Payment Plan + Assistance Referral",
      reason: "Payment pattern indicates financial strain, household signals match Ofgem vulnerability criteria, and customer qualifies for assistance program.",
      metrics: [{ label: "Confidence", value: "89%" }],
    },
    benefits:
      "Meets regulatory obligations for vulnerable customer care in both markets, reduces disconnections, and improves customer trust and retention.",
    targetClients: [
      { name: "UK energy suppliers under Ofgem's vulnerability obligations (e.g. Octopus Energy, E.ON UK, British Gas)", note: "Direct regulatory obligation with public reporting on vulnerable customer outcomes." },
      { name: "US utilities administering LIHEAP-linked assistance programs (e.g. PG&E, ComEd, National Grid US)", note: "State-level low-income assistance programs need better identification of eligible households." },
      { name: "Water utilities with equivalent affordability schemes (e.g. Thames Water's WaterSure, US water utility assistance programs)", note: "Same identification and referral pattern applies to water affordability programs." },
      { name: "Telecom & broadband providers with low-income tariffs (e.g. providers offering Lifeline-equivalent plans)", note: "Adjacent cross-sell of the same vulnerability-detection architecture." },
    ],
  },
  {
    id: "energy-04",
    domain: "energy-utility",
    title: "Energy Theft & Non-Technical Loss Detection Advisor",
    region: "US & UK",
    current: "Smart meter anomaly models flag potential theft, but field inspection teams need a defensible reason before visiting a site.",
    problemDetail:
      "Non-technical losses — theft, meter tampering, and billing irregularities — cost utilities billions of dollars a year, and while smart meter analytics can flag anomalous consumption patterns, sending a field crew to inspect a site is costly and, in some jurisdictions, requires documented cause before entry. A bare anomaly score is not enough justification, and field teams end up either over-visiting low-confidence flags or under-prioritizing genuine theft cases because there's no way to tell the difference from the score alone.",
    solutionDetail:
      "The neural anomaly model still detects consumption patterns that deviate from a customer's historical baseline, but a symbolic layer cross-references that flag against grid loss rules, meter tamper alerts, and the account's own history of prior flags before recommending an inspection. Because the recommendation comes with the specific evidence chain — which baseline was breached, which tamper alert fired, whether there's prior history — field teams can prioritize visits by confidence and the utility has documentation to support both the inspection and any subsequent billing recovery claim.",
    flow: "Smart Meter Data → Consumption Pattern Model → Grid Loss Rules → Site & Account History Knowledge Graph → Reasoning Engine → Inspection Recommendation + Rationale",
    output: {
      decision: "Recommend Field Inspection",
      reason: "Consumption pattern deviates from historical baseline, meter tamper alert triggered, and account has a prior unresolved loss flag.",
      metrics: [{ label: "Anomaly Score", value: "91%" }],
    },
    benefits:
      "Prioritises inspection resources on the highest-confidence cases, reduces non-technical losses, and documents evidence for regulatory recovery claims.",
    targetClients: [
      { name: "Urban utilities with high theft exposure (e.g. Con Edison, PG&E)", note: "Dense urban service territories typically see disproportionately high non-technical loss rates." },
      { name: "UK Distribution Network Operators (e.g. UK Power Networks, SSEN)", note: "Meter tampering and theft-of-supply are an ongoing enforcement priority under Ofgem's regulatory framework." },
      { name: "Emerging-market-facing utility subsidiaries of US/UK groups", note: "Non-technical losses are typically far higher outside core US/UK territories, making this a strong expansion use case for the same client relationship." },
      { name: "Water utilities facing similar tampering issues (e.g. utilities dealing with illegal water connections)", note: "Structurally the same theft-detection-and-evidence pattern applies." },
    ],
  },
  {
    id: "energy-05",
    domain: "energy-utility",
    title: "Regulatory Compliance & License Condition Copilot",
    region: "US & UK",
    current: "Compliance teams manually check operational decisions against license conditions and reliability standards spread across many documents.",
    problemDetail:
      "Utilities operate under a dense set of overlapping obligations — Ofgem license conditions and guaranteed standards in the UK, NERC Critical Infrastructure Protection standards and state Public Utility Commission rules in the US — and compliance teams today manually check operational decisions and incident reports against these documents one at a time. Breaches are often caught only after a customer complaint or an audit, by which point mandatory compensation payments or regulatory notifications may already be overdue.",
    solutionDetail:
      "An LLM reads operational decisions and incident reports as they happen, and a symbolic rules layer checks them in real time against the specific license conditions and reliability standards that apply, using a knowledge graph that maps each obligation to the operational scenarios it governs. When a threshold is breached — for example, an outage duration exceeding a guaranteed standard — the system immediately flags the specific rule breached and the mandatory next step, so compliance teams catch and act on breaches within the regulatory window rather than after the fact.",
    flow: "Operational Decision / Report (LLM) → License Conditions & Reliability Standards (Ofgem [UK], NERC CIP / state Public Utility Commission [US]) → Knowledge Graph → Reasoning Engine → Compliance Recommendation",
    output: {
      decision: "Flag — Reporting Threshold Breach",
      reason: "Outage duration exceeds Ofgem guaranteed standard threshold, triggering mandatory customer compensation and regulator notification.",
      metrics: [{ label: "Violation Risk", value: "High" }],
    },
    benefits:
      "Earlier detection of compliance breaches, consistent enforcement of license conditions across regions, and reduced regulatory penalty exposure.",
    targetClients: [
      { name: "UK licensed energy network operators (e.g. National Grid, SSE)", note: "Ofgem license conditions carry direct financial penalties for late detection of breaches." },
      { name: "US utilities subject to NERC CIP standards (e.g. Duke Energy, Southern Company)", note: "Critical infrastructure protection compliance is a standing board-level risk area." },
      { name: "Multi-state US utility holding companies (e.g. Xcel Energy, Dominion Energy)", note: "Operating under many different state Public Utility Commission rule sets simultaneously increases the value of a single compliance layer." },
      { name: "Water and gas network operators under equivalent licensing regimes", note: "Same license-condition-monitoring pattern transfers directly to adjacent regulated utilities." },
    ],
  },
];

export const domainSummary: Record<DomainId, string> = {
  bfsi: "Five decision points across onboarding, fraud, collections, underwriting and complaints where explainability is now a regulatory requirement, not a nice-to-have.",
  healthcare: "Six decision points spanning the revenue cycle, prior authorization, coding, fraud and credentialing — the core of Firstsource's payer and provider operations.",
  "energy-utility": "Five decision points covering outage response, billing, vulnerable customers, theft detection and license compliance for utilities and retail energy suppliers.",
};
