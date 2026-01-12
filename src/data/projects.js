// src/data/projects.js
import readmissionImg from "../assets/projects/readmission.png";
import jobAlertImg from "../assets/projects/job-alert.png";
import reqToolImg from "../assets/projects/llm-requirements.png";
import ttcImg from "../assets/projects/ttc-delay.png";
import guardianImg from "../assets/projects/ai-guardian.png";
export const projects = [
    {
      kicker: "CASE STUDY",
      title: "30-Day Hospital Readmission Prediction",
      image: readmissionImg,
      imageAlt: "Readmission prediction dashboard and model results preview",
      impact:
        "Built a predictive analytics system using multi-source healthcare data to identify patients at high risk of 30-day readmission, improving model performance by ~70% AUC.",
      chips: ["Predictive Modeling", "Data Integration", "Healthcare Analytics"],
      github: "https://github.com/K2hmed/MRP",
      demo: null,
      details:
        "End-to-end readmission risk modeling using integrated clinical and geographic datasets to support earlier, more targeted interventions for high-risk patient cohorts.",
      whatBuilt:
      "A reproducible pipeline that assembles patient-level features, trains and evaluates multiple models, and produces risk scores for downstream analysis and reporting.",
      outcome:
      "Improved predictive performance by ~70% AUC versus baseline, with evaluation tailored for imbalanced readmission outcomes.",
      stack: ["Python", "SQL", "Pandas", "XGBoost", "Random Forest", "Logistic Regression"],
      bullets: [
        "Integrated MIMIC-IV, eICU, CIHI, and ODHF into a single patient-level modeling table with consistent keys, timelines, and missingness handling.",
        "Engineered features across demographics, utilization history, comorbidities, labs, and facility context; applied imputation and leakage-safe preprocessing.",
        "Benchmarked Logistic Regression, Random Forest, and XGBoost; optimized for class imbalance with AUC-first selection and threshold tuning, comparing tuned vs baseline performance.",
      ],
    },

    {
      kicker: "CASE STUDY",
      title: "Job Alert Board Automation",
      image: jobAlertImg,
      imageAlt: "Automated job alert email example",
      impact:
        "Built an automated job monitoring pipeline that detects new postings early, filters by keyword/location, deduplicates results, and sends alerts via email and Slack.",
      chips: ["Automation Pipelines", "Data Ingestion", "Monitoring & Reliability"],
      github: "https://github.com/K2hmed/job_alert_board",
      demo: null,
      details:
        "A production-minded automation system that continuously scans Workday and non-Workday job boards, normalizes links and timestamps, and delivers reliable alerts with built-in health monitoring.",
      whatBuilt:
      "A scheduled ingestion and alerting pipeline that parses 7–8 job boards every 30 minutes, canonical URL handling, recency filtering, deduplication state, multi-channel notifications, and includes heartbeat notifications to confirm system health during idle periods.",
      outcome:
      "Reduced manual job-checking and eliminated duplicate alerts by persisting seen state and validating links before notifying.",
      stack: ["Python", "GitHub Actions", "JSON", "Email (SMTP)", "Slack Webhooks"],
      bullets: [
        "Implemented Workday and non-Workday ingestion with URL normalization and posted-date parsing to prevent broken links and stale notifications.",
        "Added deduplication via persistent state (seen cache) so alerts are sent once per unique job.",
        "Integrated email + Slack notifications and tuned keyword/location filters to keep alerts high-signal.",
      ],
    },

    {
      kicker: "CASE STUDY",
      title: "LLM-Based Requirement Analysis Pipeline",
      image: reqToolImg,
      imageAlt: "LLM requirements analysis pipeline diagram",
      impact:
        "An LLM-powered pipeline that transforms requirement documents into structured user stories and QA-ready test cases, reducing manual analysis and review effort.",
      chips: ["LLM Pipelines", "Workflow Automation", "Product & QA Analytics"],
      github: "https://github.com/K2hmed/llm-user-stories-testcases-generator",
      demo: null,
      details:
        "A deterministic document-to-artifacts pipeline that transforms unstructured requirements into reviewable, traceable product and QA outputs.",
      whatBuilt:
      "A Python-based LLM pipeline that ingests requirement documents, enforces structured JSON outputs, and produces traceable EPICs, user stories, and QA-grade test cases in tabular form.",
      outcome:
      "Standardized requirement analysis and test-case generation, making LLM behavior auditable, reproducible, and suitable for real review workflows.",
      stack: ["Python", "LLM APIs", "Prompt Engineering", "JSON Validation", "Pandas"],
      bullets: [
        "Designed a multi-stage LLM workflow (requirements → stories → test cases) with strict JSON schemas to ensure deterministic, machine-parseable outputs.",
        "Implemented validation and error handling to prevent malformed model responses from propagating downstream.",
        "Exported results into a clean, reviewer-ready Excel format, enabling immediate inspection without manual cleanup.",
      ],
    },

    {
      kicker: "CASE STUDY",
      title: "TTC Delay Analysis",
      image: ttcImg,
      imageAlt: "TTC delay data visualization sample",
      impact:
        "Analyzed TTC delay patterns to surface recurring hotspots by route, time, and category, enabling clearer operational insights and reporting.",
      chips: ["Analytics", "Business Intelligence", "Time Series"],
      github: "https://github.com/K2hmed/Toronto-Transit-Delay-Analysis",
      demo: null,
      details:
        "End-to-end analytics pipeline that standardizes fragmented transit delay data and enables operational insights through BI dashboards.",
      whatBuilt:
        "A scalable ETL and analytics workflow that ingests, cleans, normalizes, and enriches multi-year TTC bus and subway delay data for downstream BI and reporting.",
      outcome:
        "Produced a unified, feature-rich dataset powering Tableau and Power BI dashboards to analyze delay drivers by route, time, and incident category.",
      stack: ["Python", "Pandas", "NumPy", "SQL", "Tableau", "Power BI"],
      bullets: [
        "Ingested and standardized 12 Excel files (bus + subway) into a single long-format dataset (~600K+ records) with consistent schemas.",
        "Engineered temporal and categorical features (peak periods, incident classes, time-of-day) to support operational and time-series analysis.",
        "Enabled Tableau and Power BI dashboards for route-level, mode-level, and peak vs off-peak performance insights.",
      ],
    },

    {
      kicker: "CASE STUDY",
      title: "AI Guardian",
      image: guardianImg,
      imageAlt: "AI Guardian system architecture diagram",
      impact:
        "Designed a guardrailed AI assistant system with structured constraints, safety checks, and evaluation workflows to reduce unsafe or unreliable outputs.",
      chips: ["AI Safety", "Evaluation & Testing", "Systems Design"],
      github: "https://github.com/K2hmed/Ai-Guardian",
      demo: null,
      details:
        "A safety-focused AI assistant design exploring guardrails, policy-aware behavior, and structured evaluation.",
      whatBuilt:
        "A modular AI assistant architecture that enforces structured constraints, refusal behaviors, and testable evaluation scenarios for unsafe or ambiguous requests.",
      outcome:
        "Demonstrated how guardrails, explicit refusal logic, and evaluation prompts can improve reliability and predictability in AI-driven systems.",
      stack: ["Python", "Prompt Engineering", "Testing & Evaluation", "Systems Design"],
      bullets: [
        "Designed policy-aware constraints and refusal behaviors to handle unsafe or restricted user requests.",
        "Created structured evaluation prompts and test cases to assess consistency and failure modes across scenarios.",
        "Documented architecture, assumptions, and limitations clearly to support transparency, testing, and future iteration.",
      ],
    },
  ];
