export const personal = {
  name: "Ayesh Sharuka",
  title: "AI Engineer",
  subtitle: "Machine Learning · Generative AI · LLM Systems",
  tagline:
    "I design and ship production-grade AI systems — from agentic pipelines and RAG architectures to cloud-native APIs — that turn ambiguous business requirements into scalable, maintainable products.",
  email: "ayeshsharuka123@gmail.com",
  phone: "+353 89 247 0872",
  location: "Dublin, Ireland",
  linkedin: "https://linkedin.com/in/ayesh-sharuka",
  github: "https://github.com/AyeshSharuka",
  photo: "/images/profile.png", // Replace with your transparent PNG
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "HTML", "TypeScript"],
  },
  {
    category: "AI / ML",
    items: [
      "Large Language Models (LLMs)",
      "Agentic Systems",
      "RAG Pipelines",
      "NLP",
      "Deep Learning",
      "Generative AI",
      "Prompt Engineering",
      "Machine Learning",
      "Model Evaluation",
      "Computer Vision",
    ],
  },
  {
    category: "Agent & Orchestration",
    items: [
      "LangChain",
      "LangGraph",
      "Tool Calling",
      "Sub-agents",
      "Human-in-the-Loop",
      "MCP",
      "Model Selection Trade-offs",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "FastAPI",
      "Streamlit",
      "Pydantic",
      "Scikit-learn",
      "TensorFlow / Keras",
      "Pandas",
      "NumPy",
      "SQLite3",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS Bedrock",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS SageMaker",
      "AWS CloudWatch",
      "AWS CodeCommit",
      "Docker",
      "Kubernetes (K8s)",
      "Serverless",
      "CI/CD",
      "Microservices",
      "Event-driven Systems",
    ],
  },
  {
    category: "LLM / AI APIs",
    items: [
      "Claude API",
      "LLaMA",
      "Google Gemini API",
      "AWS Bedrock",
      "Azure OpenAI Services",
      "OpenAI API",
    ],
  },
  {
    category: "Security & Auth",
    items: [
      "JWT Authentication",
      "OAuth",
      "RBAC",
      "Secrets Management",
      "CORS",
      "GDPR-aware Design",
      "SSO",
    ],
  },
  {
    category: "Engineering Practices",
    items: [
      "REST APIs",
      "Microservices Architecture",
      "Data Lineage & Reproducibility",
      "Observability",
      "Logging & Tracing",
      "Latency & Throughput Optimisation",
      "Error Handling",
      "Testing",
      "Technical Documentation",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "EDA",
      "Data Preprocessing",
      "Statistical Analysis",
      "Data Visualisation",
      "Vector Stores",
      "Embeddings",
      "Feature Pipelines",
    ],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "Docker Compose"],
  },
  {
    category: "Soft Skills",
    items: [
      "Cross-functional Collaboration",
      "PoC-to-Production Delivery",
      "Pragmatic Problem Solving",
      "Research & Comparative Analysis",
    ],
  },
];

export const experience = [
  {
    role: "AI/ML Developer",
    company: "EMUQ TECH Inc.",
    period: "Jul 2024 – Sep 2025",
    location: "United States · Remote",
    bullets: [
      "Engineered a production-grade FastAPI service integrated with AWS EC2 and S3 to automate the end-to-end audio mastering pipeline, reducing manual processing time significantly.",
      "Built a dynamic SEO-optimised content generation platform using FastAPI and AWS Bedrock (Claude & LLaMA LLMs), generating keywords, meta descriptions, titles, and CTAs from structured business inputs.",
      "Designed Pydantic-validated APIs with JWT authentication and CORS controls, ensuring secure, extensible, and well-documented endpoints.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "AWS Bedrock",
      "Claude API",
      "LLaMA",
      "JWT",
      "S3",
      "EC2",
    ],
  },
  {
    role: "Industrial Training — Group Analytics & AI",
    company: "Dialog Axiata PLC",
    period: "Feb 2024 – Oct 2024",
    location: "Colombo, Sri Lanka · Hybrid",
    bullets: [
      "Developed and deployed a Natural Language to SQL system using Google Gemini LLM, enabling non-technical users to query multi-table relational databases via natural language.",
      "Built an AWS CloudWatch resource-utilisation dashboard monitoring SageMaker pipelines; automated data ingestion via Lambda functions, saving pipeline data to S3.",
      "Created Python scripts to extract pipeline metrics (CPU, memory, disk, instance types) and generate custom CloudWatch widgets, contributing to cost reduction of ML pipelines.",
    ],
    tags: [
      "Google Gemini",
      "AWS SageMaker",
      "CloudWatch",
      "Lambda",
      "Python",
      "SQL",
    ],
  },
  {
    role: "Data Analyst",
    company: "Nildiya Hotel Restaurant & Bar",
    period: "May 2023 – Feb 2024",
    location: "Sri Lanka · On-site",
    bullets: [
      "Collected, cleaned, and analysed operational and customer data using SQL and Python; findings directly informed service quality improvements and management reporting.",
      "Performed exploratory data analysis on customer feedback datasets, identifying actionable trends that influenced strategic planning decisions.",
      "Produced visualisations and written reports presented to management to support data-driven decision-making.",
    ],
    tags: ["Python", "SQL", "EDA", "Data Visualisation"],
  },
];

export const education = [
  {
    degree: "MSc — Artificial Intelligence",
    institution: "Dublin Business School",
    period: "Sep 2025 – Sep 2026",
    location: "Dublin, Ireland",
    note: "Applied Research Project: Comparing ML & Deep Learning models for Renewable Energy Forecasting in Ireland (EirGrid & Met Éireann data)",
  },
  {
    degree: "BSc — Industrial Statistics & Mathematical Finance",
    institution: "University of Colombo",
    period: "Aug 2019 – May 2023",
    location: "Sri Lanka",
    note: "Department of Statistics, Faculty of Science",
  },
];

export const projects = [
  {
    title: "Advanced RAG System with LangGraph",
    description:
      "Multi-agent RAG architecture using LangGraph with tool-calling sub-agents, human-in-the-loop checkpoints, and vector store retrieval. Implements adaptive retrieval strategies and re-ranking for high-accuracy knowledge retrieval.",
    tags: ["LangGraph", "LangChain", "Python", "RAG", "Vector Store", "Agents"],
    github: "https://github.com/AyeshSharuka",
    featured: true,
  },
  {
    title: "SEO Content Generation Platform",
    description:
      "Cloud-native content generation API using FastAPI and AWS Bedrock, leveraging Claude and LLaMA LLMs to produce SEO-ready marketing copy — keywords, titles, meta descriptions, CTAs — from business context. Structured JSON output with Pydantic models.",
    tags: [
      "FastAPI",
      "AWS Bedrock",
      "Claude API",
      "LLaMA",
      "Pydantic",
      "Python",
    ],
    github: "https://github.com/AyeshSharuka",
    featured: true,
  },
  {
    title: "AI-Powered Audio Mastering Service",
    description:
      "Production-grade FastAPI service integrated with AWS EC2 and S3 automating the end-to-end audio mastering pipeline. JWT authentication, CORS controls, structured logging, and error handling for S3 and file I/O failures.",
    tags: ["FastAPI", "AWS S3", "EC2", "JWT", "Python", "ML", "SageMaker"],
    github: "https://github.com/AyeshSharuka",
    featured: true,
  },
  {
    title: "Natural Language to SQL Engine",
    description:
      "NL-to-SQL prototype using Google Gemini API and SQLite3 with custom prompts for multi-table schema awareness and edge-case query types. Deployed via Streamlit; comparative analysis of AWS Bedrock and Azure OpenAI for production.",
    tags: ["Google Gemini", "Python", "SQLite3", "Streamlit", "NLP"],
    github: "https://github.com/AyeshSharuka",
    featured: false,
  },
  {
    title: "Renewable Energy Forecasting (MSc Research)",
    description:
      "MSc Applied Research comparing Random Forest, XGBoost, LSTM, and GRU models for renewable energy output forecasting in Ireland using EirGrid and Met Éireann data. FastAPI backend with Streamlit dashboard artefact.",
    tags: [
      "Python",
      "XGBoost",
      "LSTM",
      "GRU",
      "FastAPI",
      "Streamlit",
      "EirGrid",
    ],
    github: "https://github.com/AyeshSharuka",
    featured: false,
  },
  {
    title: "CloudWatch ML Pipeline Dashboard",
    description:
      "Automated SageMaker pipeline metric collection (CPU, memory, disk, instance type) using Python CloudWatch and SageMaker clients. Custom dashboards deployed via Lambda; persisted CSV snapshots to S3 for cost reduction.",
    tags: ["AWS CloudWatch", "SageMaker", "Lambda", "S3", "Python"],
    github: "https://github.com/AyeshSharuka",
    featured: false,
  },
];

export const recommendation = {
  text: "I highly recommend Ayesh, who interned with my team at the AI Platforms division. He is well-organized, a fast learner, and a strong team player who consistently ensured timely task completion while sharing his expertise with colleagues. Notably, he developed the 'Natural Language to SQL Query Executor using Large Language Models' for the Analytics & AI Group at Dialog Axiata PLC. This project leveraged Google Gemini for NLP within a Flask-based web app, converting natural language queries into SQL statements and streamlining database interactions. Ayesh's work demonstrated his technical expertise in Generative AI, Python, and SQLite, reflecting his innovative approach and potential as a valuable asset in any AI or analytics role.",
  author: "Chamika Ramanayake",
  role: "Head of AI Platforms & Operations, Dialog Axiata PLC",
  credential: "MSc Data Science & AI · MBA · BSc.Eng (Hons) · CGMA (UK)",
};
