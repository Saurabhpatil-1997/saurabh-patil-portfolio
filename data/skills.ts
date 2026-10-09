export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages used across pipelines, automation, and analysis.",
    skills: ["Python", "SQL"],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Pipeline design, distributed processing, and modeling.",
    skills: [
      "ETL / ELT",
      "ELT Pipeline Design",
      "Apache Spark",
      "PySpark",
      "dbt (models, tests, docs)",
      "Data Modeling (Star Schema)",
      "Data Modeling (Snowflake Schema)",
      "Data Quality & Validation",
      "Data Lakehouse Architecture",
    ],
  },
  {
    id: "orchestration",
    title: "Workflow Orchestration",
    description: "Scheduling, DAGs, and event-driven coordination.",
    skills: ["Apache Airflow (DAGs)", "AWS Step Functions", "AWS EventBridge"],
  },
  {
    id: "cloud-warehousing",
    title: "Cloud & Data Warehousing",
    description: "Platforms used to store, scale, and serve data.",
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
    id: "analytics-bi",
    title: "Analytics & BI",
    description: "Where the data ends up, and how people use it.",
    skills: ["Power BI"],
  },
  {
    id: "devops-tools",
    title: "Dev & Ops",
    description: "Version control and delivery.",
    skills: ["Git", "GitHub", "CI/CD"],
  },
];
