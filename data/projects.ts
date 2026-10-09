export type Project = {
  id: string;
  name: string;
  shortName: string;
  featured: boolean;
  problem: string;
  solution: string;
  technologies: string[];
  pipeline: string[];
  concepts: string[];
  points: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "kipp-baltimore",
    name: "KIPP Baltimore — Cloud Data Warehouse Modernization",
    shortName: "KIPP Baltimore",
    featured: true,
    problem:
      "Analytical workloads were running on a legacy SQL Server (RDS) database — batch-dependent, difficult to scale elastically, and slow on larger queries as analytical demand grew.",
    solution:
      "Migrated the analytical workload to Snowflake with optimized table structures, and replaced batch pipelines with an event-driven ingestion framework built on AWS Lambda, Step Functions, EventBridge, and Snowpipe. Snowflake Streams and Tasks automate incremental data capture (CDC) and scheduled transformations, and the transformation layer is a set of modular, tested dbt models version-controlled in Git.",
    technologies: [
      "SQL Server (RDS)",
      "Snowflake",
      "AWS Lambda",
      "AWS Step Functions",
      "AWS EventBridge",
      "Snowpipe",
      "dbt",
      "Git",
      "IAM",
      "VPC",
    ],
    pipeline: [
      "SQL Server (RDS)",
      "Lambda / Step Functions / EventBridge",
      "Snowpipe Ingestion",
      "Snowflake RAW",
      "Streams & Tasks (CDC)",
      "dbt Staging → Marts",
      "BI / Analytics",
    ],
    concepts: [
      "CDC (Change Data Capture)",
      "Incremental loading",
      "Event-driven orchestration",
      "dbt modeling & testing",
      "Data governance (IAM / VPC)",
      "Monitoring",
    ],
    points: [
      "Migrated analytical workloads from SQL Server (RDS) to Snowflake, designing optimized table structures that reduced query execution time and enabled elastic scaling for growing analytical demand.",
      "Built an event-driven ingestion framework using AWS Lambda, Step Functions, EventBridge, and Snowpipe, replacing batch-dependent pipelines with resilient near-real-time orchestration.",
      "Implemented Snowflake Streams and Tasks to automate incremental data capture and scheduled transformations, reducing manual intervention in pipeline execution.",
      "Developed modular dbt models with automated testing suites and inline documentation, version-controlled in Git, reducing model maintenance time and accelerating onboarding for new contributors.",
      "Enforced security and governance via IAM roles, VPC segmentation, and bastion host access; implemented monitoring dashboards for pipeline health and resource utilization.",
    ],
  },
  {
    id: "dpps",
    name: "DPPS — Scalable Data Processing Platform",
    shortName: "DPPS",
    featured: true,
    problem:
      "Structured and semi-structured data arriving from REST APIs and relational databases needed to be processed at high throughput, with a full pipeline lifecycle that could be trusted to fail safely and alert when something broke.",
    solution:
      "Engineered a distributed ETL system on PySpark and Apache Airflow, with DAGs covering the full lifecycle — ingestion, transformation, validation, and warehouse loading — plus automated retry and alerting logic, and data quality controls built against defined SLA/SLO reliability targets.",
    technologies: ["PySpark", "Apache Airflow", "REST APIs", "Relational Databases"],
    pipeline: [
      "REST APIs / Relational DBs",
      "PySpark Ingestion",
      "Transformation",
      "Validation (Data Quality)",
      "Warehouse Loading",
      "Retry & Alerting",
    ],
    concepts: [
      "Distributed processing",
      "Airflow DAG orchestration",
      "Data quality controls",
      "SLA / SLO reliability targets",
      "Automated retry & alerting",
    ],
    points: [
      "Engineered a distributed ETL system on PySpark and Apache Airflow to process structured and semi-structured data from REST APIs and relational databases at high throughput.",
      "Designed Airflow DAGs covering the full pipeline lifecycle: ingestion → transformation → validation → warehouse loading, with automated retry and alerting logic.",
      "Implemented data quality controls achieving pipeline reliability targets aligned to defined SLA/SLO thresholds.",
    ],
  },
  {
    id: "inspiroz-insights",
    name: "Inspiroz Insights — Multi-Institution Data Platform",
    shortName: "Inspiroz Insights",
    featured: false,
    problem:
      "Multiple educational institutions had operational data scattered across separate systems, making unified, timely reporting difficult.",
    solution:
      "Delivered end-to-end ETL pipelines that consolidate operational data from each institution into centralized SQL databases for unified reporting, using Azure Functions for event-driven ingestion so systems stay synchronized in near real time.",
    technologies: ["Azure Functions", "SQL", "ETL"],
    pipeline: [
      "Institution Source Systems",
      "Azure Functions (Event-Driven Ingestion)",
      "Centralized SQL Database",
      "Unified Reporting",
    ],
    concepts: ["Event-driven ingestion", "Data consolidation", "Data integrity & availability"],
    points: [
      "Delivered end-to-end ETL pipelines for multiple educational institutions, consolidating operational data into centralized SQL databases for unified reporting.",
      "Enabled event-driven data ingestion using Azure Functions, ensuring near real-time synchronization across systems.",
      "Maintained high data integrity and availability, supporting timely decision-making through reliable analytics datasets.",
    ],
  },
  {
    id: "zoho-automation",
    name: "Zoho Automation — HR Data Integration Pipeline",
    shortName: "Zoho Automation",
    featured: false,
    problem:
      "HR teams were manually exporting employee records to CSV every month, which was slow and left room for inconsistent, error-prone payroll data.",
    solution:
      "Built a Python-based pipeline that pulls employee records directly via the Zoho REST API, transforms the raw JSON payloads into payroll-ready datasets with Pandas, and validates the output before it reaches payroll processing.",
    technologies: ["Python", "Zoho REST API", "Pandas"],
    pipeline: ["Zoho REST API", "Python Extraction", "Pandas Transformation", "Validation", "Payroll-Ready Dataset"],
    concepts: ["API-based extraction", "JSON transformation", "Data validation", "Process automation"],
    points: [
      "Built a Python-based pipeline to extract employee records via Zoho REST APIs, eliminating manual CSV exports and saving HR teams approximately 15 hours/month.",
      "Transformed raw JSON payloads into payroll-ready datasets using Pandas, with validation checks ensuring downstream consistency for monthly payroll processing.",
    ],
  },
];
