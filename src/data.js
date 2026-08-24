export const personalInfo = {
  name: "Pranav Jagtap",
  title: "Computer Engineering Undergraduate",
  roles: [
    "AI Engineer",
    "ML Engineer",
    "Data Scientist",
    "Full-Stack Developer",
    "Problem Solver",
  ],
  email: "jagtappranav2721@gmail.com",
  phone: "+91 9834177743",
  github: "https://github.com/jagtappranav2721-cpu",
  linkedin: "https://www.linkedin.com/in/pranav-jagtap-065b39345/",
  cgpa: "9.06",
  university: "Savitribai Phule Pune University",
  location: "Pune, Maharashtra, India",
  summary:
    "Computer Engineering undergraduate (CGPA: 9.06/10) at Savitribai Phule Pune University with hands-on experience building end-to-end machine learning pipelines, RAG-based LLM applications, and AI-powered data systems using Python, Scikit-learn, FAISS, Sentence Transformers, and Flask. Proficient in vector search, embedding models, and LLM integration (OpenRouter DeepSeek) with demonstrated ability to take projects from data preprocessing and feature engineering through model deployment and production. Seeking an AI Engineer, Machine Learning, or Data Scientist internship to deliver measurable technical impact.",
};

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["Python", "C++", "Java", "JavaScript", "HTML", "CSS"],
    color: "indigo",
  },
  {
    category: "AI / ML",
    icon: "brain",
    items: [
      "Scikit-learn",
      "Supervised Learning",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Data Preprocessing",
      "NLP",
      "Text Preprocessing",
      "Sentence Transformers",
      "Embedding Models",
      "PyTorch",
    ],
    color: "violet",
  },
  {
    category: "GenAI / LLM",
    icon: "cpu",
    items: [
      "RAG Pipelines",
      "FAISS Vector Search",
      "LLM Integration",
      "Retrieval-Augmented Generation",
      "Vector Databases",
      "Prompt Engineering",
    ],
    color: "rose",
  },
  {
    category: "Data Analytics",
    icon: "chart",
    items: ["Pandas", "NumPy", "Matplotlib", "Data Pipelines", "Power BI", "Excel"],
    color: "sky",
  },
  {
    category: "Web Frameworks",
    icon: "layers",
    items: ["Flask", "Streamlit", "Django", "FastAPI", "Node.js"],
    color: "cyan",
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "emerald",
  },
  {
    category: "Tools & DevOps",
    icon: "tool",
    items: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Render"],
    color: "amber",
  },
  {
    category: "Core CS",
    icon: "cpu",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    color: "orange",
  },
  {
    category: "Soft Skills",
    icon: "users",
    items: ["Communication", "Adaptability", "Problem-Solving", "Time Management"],
    color: "fuchsia",
  },
  {
    category: "Spoken Languages",
    icon: "globe",
    items: ["English", "Hindi", "Marathi"],
    color: "orange",
  },
];

export const projects = [
  {
    id: 1,
    title: "LexiMind",
    subtitle: "RAG-Based Research Copilot",
    description:
      "An end-to-end Retrieval-Augmented Generation (RAG) system combining web search and PDF ingestion to generate structured AI responses using LLMs. Features FAISS vector search with Sentence Transformers for semantic retrieval, OpenRouter API (DeepSeek) for context-aware response generation, and a Streamlit UI with automated research report generation using ReportLab.",
    tech: ["Python", "Streamlit", "FAISS", "Sentence Transformers", "OpenRouter API", "NLP"],
    github: "https://github.com/jagtappranav2721-cpu/LexiMind",
    demo: null,
    stats: [
      { label: "Search", value: "RAG" },
      { label: "Vectors", value: "FAISS" },
      { label: "LLM", value: "DeepSeek" },
    ],
    highlight: "RAG + Vector Search",
    type: "ml",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: 2,
    title: "PhishHook AI",
    subtitle: "Phishing Detection System",
    description:
      "A Random Forest classifier for phishing detection achieving 96.4% accuracy on 11,000+ URLs. Engineered 30+ URL features including lexical patterns, domain structure, and WHOIS data. Improved precision by 18% through feature optimization and reduced false positives by 62%.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Feature Engineering"],
    github: "https://github.com/jagtappranav2721-cpu/PhishHook-AI",
    demo: null,
    stats: [
      { label: "Accuracy", value: "96.4%" },
      { label: "URLs Trained", value: "11K+" },
      { label: "Precision", value: "+18%" },
    ],
    highlight: "96.4% Classification Accuracy",
    type: "ml",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    id: 3,
    title: "SearchBoost AI",
    subtitle: "SEO Analytics Platform",
    description:
      "ML pipeline to predict SEO rankings using 15,000+ webpages with 92% accuracy. Features a Flask + Streamlit dashboard for automated SEO analysis and insights. Reduced manual SEO effort by 78% using a predictive ranking system.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Flask", "Streamlit"],
    github: "https://github.com/jagtappranav2721-cpu/SearchBoost-AI-SEO-Rank-Predictor",
    demo: null,
    stats: [
      { label: "Accuracy", value: "92%" },
      { label: "Dataset", value: "15K+" },
      { label: "Effort", value: "−78%" },
    ],
    highlight: "92% Prediction Accuracy",
    type: "ml",
    gradient: "from-cyan-500 to-teal-600",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    location: "Baramati, India",
    period: "Aug 2023 – Present",
    score: "CGPA: 9.06 / 10.0",
    icon: "🎓",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Yashwantrao Chavan Institute of Science and Jr College",
    location: "Satara",
    period: "Mar 2023",
    score: "81.50%",
    icon: "📚",
    current: false,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shreemant Shivajiraje English Medium School",
    location: "Phaltan",
    period: "Mar 2021",
    score: "93.40%",
    icon: "🏫",
    current: false,
  },
];

export const certifications = [
  {
    title: "Bootcamp in Artificial Intelligence",
    issuer: "C-DAC India",
    icon: "🤖",
    color: "indigo",
    description: "Comprehensive AI bootcamp covering machine learning, deep learning, and practical AI applications.",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL – IIT Madras",
    icon: "🐍",
    color: "violet",
    description: "Advanced Python programming for data science, analytics, and scientific computing.",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    icon: "🌐",
    color: "cyan",
    description: "Foundations of artificial intelligence and responsible AI practices, covering AI tools and workflows for productivity.",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    icon: "🧠",
    color: "amber",
    description: "Foundations of AI-assisted coding, prompt engineering, and working with LLM-powered development tools.",
  },
];

export const achievements = [
  {
    title: "Hackathon Participant",
    desc: "24-Hour National-Level Hackathon organized by Cummins at College of Engineering, Phaltan. Designed and prototyped a working technical solution under sprint conditions, competing against teams from institutions across Maharashtra.",
    icon: "🏆",
    date: "October 2025",
  },
  {
    title: "Academic Distinction",
    desc: "Maintained a CGPA of 9.06/10 in B.Tech Computer Engineering at Savitribai Phule Pune University, ranking consistently among the top performers in the department.",
    icon: "⭐",
    date: "2023 – Present",
  },
];
