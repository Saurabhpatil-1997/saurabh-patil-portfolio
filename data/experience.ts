export type ExperienceEntry = {
  id: string;
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  points: string[];
  technologies: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "inspiroz",
    company: "Inspiroz IT Services Pvt. Ltd.",
    title: "Software Engineer",
    location: "Navi Mumbai, Maharashtra",
    start: "Feb 2024",
    end: "Present",
    current: true,
    points: [
      "Designed and deployed distributed ETL frameworks using PySpark and AWS Glue processing millions of records daily, achieving a 30% reduction in end-to-end pipeline latency across high-volume production workloads.",
      "Architected a cloud-native data platform on AWS with Snowpipe-based ingestion, enabling event-driven, near-real-time data availability and improving reliability for downstream BI consumers.",
      "Automated Python- and SQL-based reporting workflows, eliminating 10+ hours of manual effort per week and accelerating stakeholder delivery cycles.",
      "Led end-to-end migration of SQL Server (RDS) workloads to Snowflake, designing tables, Streams, and Tasks for automated CDC-based transformations.",
      "Built modular dbt models with built-in testing as part of the migration, managing the full codebase in Git.",
      "Defined IAM role policies, VPC segmentation, and bastion host access controls to enforce data governance, security compliance, and cost governance across cloud resources.",
      'Recognized with "Highly Recommended by Client" award for consistent delivery quality — the only engineer on the team to receive this distinction.',
    ],
    technologies: ["PySpark", "AWS Glue", "Snowflake", "Snowpipe", "Python", "SQL", "dbt", "IAM", "VPC", "Git"],
  },
  {
    id: "ipsos",
    company: "Ipsos Pvt. Ltd.",
    title: "Data Processing Analyst",
    location: "Thane, Maharashtra",
    start: "Jun 2022",
    end: "Nov 2023",
    current: false,
    points: [
      "Modernized ETL pipelines for monthly, quarterly, and annual tracker studies using Python and SQL, reducing delivery timelines by 15% and cutting manual intervention by an estimated 20+ hours per cycle.",
      "Partnered with Data Scientists to translate complex tabulation logic into scalable schemas for BI reporting and ML feature engineering, ensuring analytical consistency across teams.",
      "Built and maintained Power BI dashboards for weekly/monthly reporting, enabling operational trend analysis for senior decision-makers.",
      "Ingested, cleaned, and transformed large-scale survey datasets from multiple heterogeneous sources, improving data reliability and accelerating analytics turnaround.",
    ],
    technologies: ["Python", "SQL", "Power BI", "ETL"],
  },
  {
    id: "msda",
    company: "MSDA LLP",
    title: "Data Analyst",
    location: "Mumbai, Maharashtra",
    start: "Jul 2021",
    end: "May 2022",
    current: false,
    points: [
      "Implemented scalable web data extraction solutions using Selenium and Requests to collect and structure unstructured data, increasing data availability by 40% for downstream analysis.",
      "Refactored and optimized complex SQL queries, improving data retrieval performance and reducing dashboard refresh times by 25%.",
      "Developed interactive Power BI dashboards to monitor key performance indicators, enabling data-driven decision-making for senior leadership.",
    ],
    technologies: ["Selenium", "Python", "SQL", "Power BI"],
  },
];
