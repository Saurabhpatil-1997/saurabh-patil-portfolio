export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};


export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming & Querying",
    description: "Languages for data processing, automation, and analytical workloads.",
    skills: [
      "Python",
      "SQL",
      "Bash / Shell",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Processing",
    description: "Distributed processing, transformation, and analytical data modeling.",
    skills: [
      "ETL / ELT Pipeline Design",
      "Apache Spark",
      "PySpark",
      "dbt (Models, Tests, Documentation)",
      "Data Modeling (Star & Snowflake Schemas)",
      "Data Lakehouse & Warehouse Architecture",
      "Streaming (Apache Kafka)",
    ],
  },
  {
    id: "data-ingestion",
    title: "Data Ingestion & Integration",
    description: "Batch, incremental, and event-driven data ingestion patterns.",
    skills: [
      "Change Data Capture (CDC)",
      "AWS DMS",
      "Snowpipe",
      "AWS S3 Event Notifications",
      "CSV, JSON & Parquet",
    ],
  },
  {
    id: "orchestration",
    title: "Workflow Orchestration",
    description: "Scheduling, dependency management, and event-driven workflows.",
    skills: [
      "Apache Airflow (DAGs)",
      "AWS Step Functions",
      "AWS EventBridge",
    ],
  },
  {
    id: "cloud-warehousing",
    title: "Cloud & Data Warehousing",
    description: "Cloud infrastructure, storage, compute, and analytical platforms.",
    skills: [
      "Snowflake",
      "AWS S3",
      "AWS Glue",
      "AWS Redshift",
      "AWS Athena",
      "AWS Lambda",
      "AWS IAM",
      "AWS VPC",
    ],
  },
  {
    id: "observability",
    title: "Data Quality & Observability",
    description: "Ensuring data integrity, pipeline health, and production reliability.",
    skills: [
      "Data Quality & Validation",
      "dbt Testing",
      "AWS CloudWatch",
      "Logging & Monitoring",
      "Error Handling & Alerting",
    ],
  },
  {
    id: "analytics-bi",
    title: "Analytics & BI",
    description: "Transforming curated datasets into business-ready insights.",
    skills: [
      "Power BI",
      "Data Visualization",
      "Stakeholder Reporting",
    ],
  },
  {
    id: "devops-tools",
    title: "DevOps & Engineering Tools",
    description: "Version control, containerization, and automated delivery.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
    ],
  },
];

