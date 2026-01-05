// src/data/projects.js
export const projects = [
    {
      title: "30-Day Hospital Readmission Prediction",
      impact:
        "Built a predictive analytics system using multi-source healthcare data to identify patients at high risk of 30-day readmission, improving model performance by ~70% AUC.",
      chips: ["Predictive Modeling", "Healthcare Analytics"],
      github: "https://github.com/K2hmed/<REPO_NAME_HERE>",
      demo: null,
      details:
        "End-to-end readmission risk modeling using integrated clinical + geographic datasets to support decision-making for high-risk patient cohorts.",
      stack: ["Python", "SQL", "Pandas", "XGBoost", "Random Forest", "Logistic Regression"],
      bullets: [
        "Unified multi-source datasets (MIMIC-IV, eICU, CIHI, ODHF) into a single modeling-ready table.",
        "Engineered clinical, utilization, and demographic features; handled missingness with imputation.",
        "Optimized for imbalanced outcomes using AUC and threshold tuning; compared tuned vs baseline models.",
      ],
    },

    {
      title: "Job Alert Board",
      impact:
        "Built an automated job monitoring pipeline that detects new postings early, filters by keywords/location, deduplicates results, and delivers alerts via email and Slack.",
      chips: ["Automation Pipelines", "Data Ingestion", "Monitoring"],
      github: "https://github.com/K2hmed/<REPO_NAME_HERE>",
      demo: null,
      details:
        "Production-minded automation system that normalizes postings from Workday-style boards and notifies on net-new matches.",
      stack: ["Python", "GitHub Actions", "JSON", "Email", "Slack Webhooks"],
      bullets: [
        "Implemented canonical URL rewriting and posted-date parsing to avoid broken links and stale alerts.",
        "Added persistent deduplication (seen state) to prevent repeat notifications across runs.",
        "Designed keyword + location filters to keep alerts precise and actionable.",
      ],
    },

    {
      title: "LLM-Based Requirement Analysis Tool",
      impact:
        "Built a document-to-user-stories pipeline that extracts requirements, generates structured user stories, and outputs test cases for faster analysis and QA readiness.",
      chips: ["NLP", "Automation", "Product Analytics"],
      github: "https://github.com/K2hmed/<REPO_NAME_HERE>",
      demo: null,
      details:
        "A workflow that ingests requirement documents and produces consistent, reviewable artifacts for product and QA teams.",
      stack: ["Python", "LLMs", "Prompting", "Parsing", "Evaluation"],
      bullets: [
        "Generated user stories and test cases in a consistent format to reduce manual effort.",
        "Added guardrails for structure and traceability from requirement → story → test case.",
        "Documented the system with clear setup and reproducible runs.",
      ],
    },

    {
      title: "TTC Delay Analysis",
      impact:
        "Analyzed TTC delay patterns to surface recurring hotspots by route, time, and category, enabling clearer operational insights and reporting.",
      chips: ["Analytics", "Visualization", "Time Series"],
      github: "https://github.com/K2hmed/<REPO_NAME_HERE>",
      demo: null,
      details:
        "Exploratory and diagnostic analysis turning public transit delay data into actionable patterns and visuals.",
      stack: ["Python", "Pandas", "Matplotlib", "SQL"],
      bullets: [
        "Cleaned and standardized event categories and timestamps for reliable aggregation.",
        "Identified peak delay windows and route-level concentration of incidents.",
        "Created clear visual summaries for non-technical audiences.",
      ],
    },

    {
      title: "AAPL Stock Data Analysis",
      impact:
        "Built a compact market analysis workflow exploring price movement, volatility, and indicators to support data-driven investment hypotheses.",
      chips: ["Analytics", "Feature Engineering", "Visualization"],
      github: "https://github.com/K2hmed/<REPO_NAME_HERE>",
      demo: null,
      details:
        "Lightweight financial time-series analysis focusing on interpretable trends and signals.",
      stack: ["Python", "Pandas", "NumPy", "Matplotlib"],
      bullets: [
        "Computed rolling indicators and volatility measures for interpretability.",
        "Compared trend regimes across time windows and market conditions.",
        "Packaged results into a clean notebook-style report.",
      ],
    },

    {
      title: "AI Guardian",
      impact:
        "Designed a safety-focused AI assistant concept with structured guardrails and evaluation checks to reduce risky outputs and improve reliability.",
      chips: ["AI Safety", "Evaluation", "Systems Design"],
      github: "https://github.com/K2hmed/<REPO_NAME_HERE>",
      demo: null,
      details:
        "A guardrailed assistant design exploring policy-aware responses and structured evaluation.",
      stack: ["Python", "LLMs", "Prompting", "Testing"],
      bullets: [
        "Implemented structured constraints and refusal behaviors for unsafe requests.",
        "Created test prompts to evaluate behavior consistency across scenarios.",
        "Documented design choices and limitations clearly.",
      ],
    },

    {
      title: "VQA System",
      impact:
        "Built a visual question answering prototype that combines image features with language understanding to answer natural-language queries about images.",
      chips: ["Computer Vision", "NLP", "Modeling"],
      github: "https://github.com/K2hmed/<REPO_NAME_HERE>",
      demo: null,
      details:
        "Prototype multimodal pipeline exploring image-text fusion and evaluation behavior.",
      stack: ["Python", "PyTorch", "Transformers", "Evaluation"],
      bullets: [
        "Processed image inputs into embeddings and fused them with text encodings.",
        "Evaluated responses across a small benchmark set for qualitative correctness.",
        "Packaged training/inference steps into a reproducible workflow.",
      ],
    },
  ];
