export type ProjectCategory =
  | 'Freelance'
  | 'Agentic AI'
  | 'Forecasting'
  | 'Healthcare'
  | 'Full-Stack'
  | 'Quant'
  | 'Analytics'
  | 'ML Platform'

export type ToolkitGroupId =
  | 'mlAi'
  | 'dataEngineering'
  | 'web'
  | 'analyticsBi'
  | 'aiLlm'
  | 'apisMcp'
  | 'toolsPlatforms'
  | 'engineering'
  | 'business'

export interface ToolkitGroup {
  id: ToolkitGroupId
  label: string
  items: string[]
}

export interface Project {
  slug: string
  title: string
  summary: string
  problem: string
  goal: string
  stack: string[]
  toolkit: ToolkitGroup[]
  highlights: string[]
  githubUrl?: string
  demoUrl?: string
  image: string
  /** Primary badge / default filter membership */
  category: ProjectCategory
  /** Extra filter chips this project should also appear under */
  tags?: ProjectCategory[]
  featured: boolean
  details: string
  workflow: string[]
  results: string[]
  lessons: string[]
}

/** Primary category plus optional secondary tags (deduped, primary first). */
export function getProjectCategories(project: Project): ProjectCategory[] {
  const seen = new Set<ProjectCategory>()
  const out: ProjectCategory[] = []
  for (const c of [project.category, ...(project.tags ?? [])]) {
    if (!seen.has(c)) {
      seen.add(c)
      out.push(c)
    }
  }
  return out
}

export function projectMatchesCategory(
  project: Project,
  filter: ProjectCategory,
): boolean {
  return getProjectCategories(project).includes(filter)
}

function group(id: ToolkitGroupId, label: string, items: string[]): ToolkitGroup {
  return { id, label, items }
}

export const projects: Project[] = [
  {
    slug: 'shivam-children-hospital',
    title: 'Shivam Children Hospital Website',
    summary:
      'A live hospital website for families looking up care options — built as freelance work and published on the public internet.',
    problem:
      'Parents need a clear place to learn what the hospital offers and how to reach the right care, especially on a phone.',
    goal:
      'Ship a clean, mobile-friendly site that presents services and makes it easy to get in touch.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Web'],
    toolkit: [
      group('web', 'Web Development', ['HTML', 'CSS', 'JavaScript', 'Responsive Design']),
      group('business', 'Business / Project Skills', [
        'Requirements Gathering',
        'Stakeholder Communication',
        'Workflow Documentation',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', ['GitHub']),
    ],
    highlights: [
      'Live site at shivamchildrenhospital.in',
      'Freelance delivery from brief to publish',
      'Service pages families can browse on mobile',
    ],
    demoUrl: 'https://www.shivamchildrenhospital.in/',
    image: '/project-images/shivam-hospital.svg',
    category: 'Freelance',
    tags: ['Healthcare'],
    featured: true,
    details:
      'This is client work for Shivam Children Hospital. The public site walks visitors through care areas (including neonatal intensive care) and keeps the focus on clarity rather than flashy extras. It matters in a portfolio because it shows shipping for a real organization, not only research notebooks.',
    workflow: [
      'Align on content and what families need to find first',
      'Lay out pages so services and contact paths are obvious',
      'Build and check the site on phone and desktop',
      'Publish and confirm the live URL works',
    ],
    results: [
      'Public production website serving hospital visitors',
      'Service information available without asking staff first',
    ],
    lessons: [
      'Healthcare sites win on trust and clarity, not feature count',
      'Mobile reading comfort matters when someone is stressed and searching mid-day',
    ],
  },
  {
    slug: 'brand-intelligence-platform',
    title: 'Social Media Sentiment & Brand Intelligence Platform',
    summary:
      'A Streamlit platform that turns social reviews into searchable brand intelligence — with sentiment scoring, a specialist chatbot, and escalation workflows.',
    problem:
      'Brand and support teams get buried in noisy social posts. It is hard to see which complaints matter, find similar past issues, and hand work to the right channel.',
    goal:
      'Build one place to load reviews, score sentiment, search history, chat with grounded answers, and route serious cases.',
    stack: ['Python', 'DuckDB', 'LangGraph', 'Pinecone', 'Streamlit'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Ensemble Learning',
        'Classification',
        'Feature Engineering',
        'Model Evaluation',
        'NLP',
        'Retrieval-Augmented Generation',
        'Multi-Agent Systems',
        'Agent Orchestration',
        'Tool-Using LLMs',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'DuckDB',
        'ETL',
        'Parquet',
        'SQL Analytics',
        'Structured Data Processing',
        'Data Cleaning',
      ]),
      group('web', 'Web Development', ['Streamlit', 'Plotly']),
      group('analyticsBi', 'Analytics / BI', [
        'Dashboards',
        'Exploratory Data Analysis',
        'Data Visualization',
        'KPI Reporting',
      ]),
      group('aiLlm', 'AI / LLM Stack', [
        'LangChain',
        'LangGraph',
        'Ollama',
        'Pinecone',
        'Sentence Transformers',
        'Hugging Face',
        'Google AI Studio',
      ]),
      group('apisMcp', 'APIs & MCP', [
        'MCP Servers',
        'Pinecone API',
        'Twilio WhatsApp API',
        'SMTP Email',
        'Unified.to MCP',
        'FRED API',
        'Groq API',
        'Azure OpenAI API',
        'Azure Document Intelligence',
        'LangSmith',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
        'Cursor AI',
      ]),
    ],
    highlights: [
      'Reviews land in DuckDB for analysis',
      'Stacked models score sentiment (XGBoost, LightGBM, CatBoost, and more)',
      'Pinecone search plus a LangGraph specialist chat with human-in-the-loop delivery',
    ],
    githubUrl:
      'https://github.com/amitvaghela19/Social-Media-Sentiment---Brand-Intelligence-Platform',
    image: '/project-images/brand-intelligence.svg',
    category: 'Agentic AI',
    featured: true,
    details:
      'A multi-agent brand intelligence platform: social reviews land in DuckDB, a stacking ensemble scores sentiment, Pinecone powers retrieval, and a LangGraph chatbot prepares WhatsApp or email after confirmation. Streamlit hosts BI charts, a SQL audit workbench, approvals, and an escalation hub. Seed coverage includes Twitter, Instagram, and Facebook — unsupported networks return zero rows instead of inventing posts.',
    workflow: [
      'Load social review CSVs into DuckDB',
      'Train and score sentiment with a stacking ensemble',
      'Index text for search in Pinecone',
      'Chat through specialist agents with retrieval grounding',
      'Escalate high-risk cases with optional WhatsApp/email after confirm',
    ],
    results: [
      'End-to-end path from raw reviews to operator actions in Streamlit',
      'Escalation and alert paths with Twilio and SMTP options',
      'Intent routing harness hitting ~85% on the evaluation set',
    ],
    lessons: [
      'Agents need solid retrieval — otherwise answers drift',
      'Sentiment alone is not enough; routing and confirmation close the loop',
    ],
  },
  {
    slug: 'ecommerce-sales-forecasting',
    title: 'E-Commerce Sales Forecasting & Intelligent Reporting',
    summary:
      'An end-to-end sales analytics project on Brazilian Olist data — from SQL tables and deep exploration to a forecast model contest and Power BI dashboards.',
    problem:
      'Store teams need demand views that respect time and geography, not a single chart that falls apart when the calendar shifts.',
    goal:
      'Connect clean sales tables, honest exploration, a multi-model forecast tournament, and dashboards leaders can read.',
    stack: ['Python', 'MySQL', 'Optuna', 'CatBoost', 'Power BI'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Time Series Forecasting',
        'Machine Learning',
        'Ensemble Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Cross-Validation',
        'Hyperparameter Tuning',
        'Optuna',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'MySQL',
        'ETL',
        'Star Schema',
        'Dimensional Modelling',
        'SQL Analytics',
        'Data Cleaning',
        'Data Modelling',
      ]),
      group('web', 'Web Development', ['Streamlit']),
      group('analyticsBi', 'Analytics / BI', [
        'Power BI',
        'Dashboards',
        'Exploratory Data Analysis',
        'Data Visualization',
        'KPI Reporting',
        'Root Cause Analysis',
      ]),
      group('aiLlm', 'AI / LLM Stack', ['OpenAI API']),
      group('toolsPlatforms', 'Tools / Platforms', ['Jupyter Notebook', 'Python', 'GitHub']),
    ],
    highlights: [
      'Seven relational tables reshaped into a sales fact layer',
      'Eight forecasting models compared across several time splits',
      'Power BI views for executive, sales, regional, and AI insight pages',
    ],
    githubUrl:
      'https://github.com/amitvaghela19/E-Commerce-Sales-Forecasting-Intelligent-Reporting',
    image: '/project-images/ecommerce-forecast.svg',
    category: 'Forecasting',
    featured: true,
    details:
      'End-to-end sales analytics on the Olist Brazilian e-commerce dataset. Phase 1 builds a MySQL analytical layer and sales fact table. Phase 2 digs into seasonality, Pareto ABC inventory thinking, delivery stages, and review-score SLA cliffs. Phase 3 runs a robustness tournament with Optuna-tuned trees and classical models. Phase 4 packages findings into Power BI. On the primary test split, CatBoost with Optuna reaches MAPE 0.490.',
    workflow: [
      'Import relational CSVs into MySQL and build the sales fact table',
      'Explore commercial and fulfillment patterns in Python',
      'Engineer daily features including holiday context',
      'Run the forecast tournament with Optuna where needed',
      'Publish Power BI dashboards for decision support',
    ],
    results: [
      'Multi-phase pipeline from SQL → EDA → tournament → Power BI',
      'CatBoost (Optuna) at Test MAPE 0.490 on the primary split',
      'Business queries covering repeat rates, AOV, geography, and categories',
    ],
    lessons: [
      'A model that looks fine on a generous split can fall apart on a harder one — the tournament shows that',
      'Forecasting is only useful when planners can open a dashboard and act',
    ],
  },
  {
    slug: 'hospital-readmission-analytics',
    title: 'Hospital Readmission Risk Analytics',
    summary:
      'A decision-support demo that flags which diabetic inpatients are more likely to return within 30 days — and shows why — on a large public U.S. hospital dataset.',
    problem:
      'Unplanned 30-day returns stress patients and hospital capacity. Teams need risk signals they can explain, not a black box.',
    goal:
      'Build warehouse marts, a carefully chosen model, clear explanations, and a role-based Streamlit app on public Diabetes 130-US Hospitals data.',
    stack: ['Python', 'CatBoost', 'SHAP', 'Streamlit', 'MCP'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Classification',
        'Ensemble Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Cross-Validation',
        'SHAP',
        'Explainable AI',
        'Optuna',
        'Hyperparameter Tuning',
        'Deep Learning',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'ETL',
        'Data Modelling',
        'SQL Analytics',
        'Parquet',
        'Data Quality Checks',
        'Pipeline Automation',
      ]),
      group('web', 'Web Development', ['Streamlit', 'Plotly']),
      group('analyticsBi', 'Analytics / BI', [
        'Power BI',
        'Dashboards',
        'Exploratory Data Analysis',
        'Data Visualization',
        'KPI Reporting',
      ]),
      group('aiLlm', 'AI / LLM Stack', ['LangGraph', 'LangChain', 'Ollama', 'ChromaDB']),
      group('apisMcp', 'APIs & MCP', [
        'MCP Servers',
        'FRED API',
        'Ollama API',
        'OpenAI API',
        'Gemini API',
        'Redis',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Docker',
        'Python',
        'GitHub',
      ]),
    ],
    highlights: [
      'About 101,766 encounters from 130 U.S. hospitals (1999–2008 public data)',
      'CatBoost champion aimed at catching more true high-risk cases',
      'Live Streamlit demo with role-based access',
    ],
    githubUrl: 'https://github.com/amitvaghela19/Hospital-AI_project',
    demoUrl:
      'https://hospital-aiproject-les6fgvtantsck6jowwfh7.streamlit.app/Patient_Behavior',
    image: '/project-images/hospital-ai.svg',
    category: 'Healthcare',
    featured: true,
    details:
      'End-to-end analytics on the Diabetes 130-US Hospitals dataset: governance, warehouse marts, EDA, a multi-model experiment matrix, certified BI exports, and an eight-page Streamlit app. The champion CatBoost reaches recall around 0.716 (about 72% of true high-risk cases caught) and AUC around 0.664. SHAP explains drivers. Positioned as a training and decision-support demo — not a clinical medical device.',
    workflow: [
      'Prepare and govern hospital encounter data',
      'Build analytical marts and exploration views',
      'Train and compare models; register a champion',
      'Explain predictions with SHAP',
      'Ship role-based Streamlit pages and optional Power BI',
    ],
    results: [
      'Champion CatBoost with recall ~0.716 and AUC ~0.664 in the model register',
      'Multipage Streamlit app with clinician/analyst style access controls',
      'Seventy smoke tests covering core app paths',
    ],
    lessons: [
      'In healthcare demos, catching true high-risk cases can matter more than looking “accurate” overall',
      'Explanations and access control are part of the product, not extras',
      'Public-data demos still need an honest “not for clinical use” disclaimer',
    ],
  },
  {
    slug: 'maruti-suzuki-supply-chain',
    title: 'Maruti Suzuki Supply Chain Command Center',
    summary:
      'An educational command-center demo for automotive supply-chain risk — React front end, FastAPI back end, scenario sims, and a local AI chat.',
    problem:
      'OEM supply chains mix parts, plants, news, and geopolitics. Spreadsheets struggle to show risk and “what if” in one place.',
    goal:
      'Show how one “run analysis” action can fuse public signals, rank suppliers, simulate disruptions, and answer questions in chat.',
    stack: ['React', 'FastAPI', 'DuckDB', 'SimPy', 'Ollama'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Multi-Criteria Decision Making (TOPSIS)',
        'Scenario Simulation',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'DuckDB',
        'ETL',
        'Data Cleaning',
        'Structured Data Processing',
      ]),
      group('web', 'Web Development', [
        'React',
        'TypeScript',
        'Vite',
        'FastAPI',
        'JavaScript',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Dashboards',
        'KPI Reporting',
        'Data Visualization',
      ]),
      group('aiLlm', 'AI / LLM Stack', ['Ollama']),
      group('apisMcp', 'APIs & MCP', [
        'FRED API',
        'World Bank data',
        'GDELT / news RSS',
        'Yahoo Finance',
        'NewsData API (optional)',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Docker',
        'Python',
        'GitHub',
        'VS Code',
      ]),
    ],
    highlights: [
      'Scores 35 suppliers and 21+ critical parts in the demo design',
      'Monte Carlo / SimPy disruption scenarios with strategy choices',
      'Local DeepSeek R1 chat via Ollama, enriched with live news when enabled',
    ],
    githubUrl: 'https://github.com/amitvaghela19/MarutiSuzuki',
    image: '/project-images/maruti-supply.svg',
    category: 'Full-Stack',
    featured: true,
    details:
      'A full-stack supply-chain command center themed around Maruti Suzuki India operations. Supplier names, allocations, and strategic narratives are synthetic for the demo unless drawn from public sources. The UI covers a command center, parts catalog, suppliers, fear-and-greed style indices, a scenario lab, and a floating supply-chain chat.',
    workflow: [
      'Ingest macro and news signals (with cache when keys are missing)',
      'Rank suppliers with multi-criteria scoring',
      'Simulate disruption scenarios',
      'Surface KPIs, risks, and recommendations in React',
      'Answer questions through local Ollama chat grounded in the latest snapshot',
    ],
    results: [
      'Working full-stack demo: FastAPI + React + DuckDB',
      'Thirteen scenarios × three strategies in the feature map',
      'Synthetic-data labeling so demo figures are never mistaken for OEM data',
    ],
    lessons: [
      'Demo data must be labeled as synthetic so nobody mistakes it for official OEM figures',
      'A command center is more convincing when chat can see the same snapshot as the dashboards',
    ],
  },
  {
    slug: 'trimarket-os',
    title: 'TriMarket OS — Cross-Border Market Intelligence',
    summary:
      'A free-data research platform for India, the U.S., and Canada — prices, news, risk views, and an evidence-minded local AI chat.',
    problem:
      'Cross-border investors juggle three markets, headlines, and risk stories with no shared map of how pieces connect.',
    goal:
      'Connect public market and news data into one neural market intelligence network for research — not brokerage.',
    stack: ['Python', 'Next.js', 'FastMCP', 'yfinance', 'Ollama'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Time Series Forecasting',
        'Classification',
        'Regression',
        'Feature Engineering',
        'Model Evaluation',
        'Optuna',
        'Hyperparameter Tuning',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'Parquet',
        'ETL',
        'Structured Data Processing',
        'Pipeline Automation',
      ]),
      group('web', 'Web Development', [
        'Next.js',
        'React',
        'TypeScript',
        'Recharts',
        'Tailwind CSS',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Dashboards',
        'Data Visualization',
        'KPI Reporting',
        'Exploratory Data Analysis',
      ]),
      group('aiLlm', 'AI / LLM Stack', [
        'Ollama',
        'FastMCP',
        'AirLLM (optional)',
        'FAISS',
        'BM25',
      ]),
      group('apisMcp', 'APIs & MCP', [
        'MCP Servers',
        'Yahoo Finance (yfinance)',
        'Google News RSS',
        'Ollama API',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Python',
        'GitHub',
        'Jupyter Notebook',
      ]),
    ],
    highlights: [
      'Neural Market Intelligence Network graph for a chosen ticker',
      'Risk command board with fear/greed style proxies and news',
      'FastMCP tools for clock, graph, supply chain, and explain flows',
    ],
    githubUrl: 'https://github.com/amitvaghela19/TriMarketOS',
    image: '/project-images/trimarket.svg',
    category: 'Full-Stack',
    featured: true,
    details:
      'A cross-border research platform for India, the U.S., and Canada. Correlations and impact cards surface historical association — not proven causation. Free public data powers the stack: Yahoo Finance, Google News RSS, and local Ollama (with AirLLM available for batch). The Next.js app sits on Python research pipelines and MCP servers for agent tooling.',
    workflow: [
      'Pull prices and news for India, U.S., and Canada universes',
      'Build graph and risk features for a symbol',
      'Run optional ML direction/return research with chronological holdout',
      'Serve research views in Next.js',
      'Chat with Ollama using evidence from the latest artifacts',
    ],
    results: [
      'Working cross-border research UI with Recharts and risk boards',
      'MCP tool surface for agents across clock, graph, supply chain, and explain flows',
      'Clear research-only positioning — not a brokerage product',
    ],
    lessons: [
      'Free data is enough for a strong research story if you stay honest about limits',
      'Association is not causation — say that out loud in the product copy',
    ],
  },
  {
    slug: 'telco-customer-churn',
    title: 'Telco Customer Churn Intelligence Platform',
    summary:
      'A full churn platform: ranking models on about 7,000 customers, governed SQL answers, and a Next.js site with an intelligence copilot.',
    problem:
      'Retention teams need to know who might leave, why revenue is at risk, and answers they can trust — without the bot inventing numbers.',
    goal:
      'Go from raw customer data to a champion model, Power BI–ready exports, and a verified chat/dashboard experience.',
    stack: ['Next.js', 'FastAPI', 'DuckDB', 'LangGraph', 'CatBoost'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Classification',
        'Ranking Models',
        'Ensemble Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Cross-Validation',
        'SHAP',
        'Optuna',
        'Hyperparameter Tuning',
        'Explainable AI',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'DuckDB',
        'ETL',
        'SQL Analytics',
        'Data Quality Checks',
        'Structured Data Processing',
        'Data Cleaning',
      ]),
      group('web', 'Web Development', [
        'Next.js',
        'React',
        'TypeScript',
        'FastAPI',
        'Recharts',
        'Framer Motion',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Power BI',
        'Dashboards',
        'KPI Reporting',
        'Exploratory Data Analysis',
        'Data Visualization',
        'Excel',
      ]),
      group('aiLlm', 'AI / LLM Stack', [
        'LangGraph',
        'LangChain',
        'Ollama',
        'Google AI Studio',
        'LangSmith',
      ]),
      group('apisMcp', 'APIs & MCP', ['Gemini API', 'OpenRouter API', 'Ollama API']),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
        'pytest',
      ]),
    ],
    highlights: [
      '7,043 customers with about 26.54% churn in the documented set',
      'Stacking ensemble with PR-AUC 0.675 and decision threshold 0.41',
      'Copilot answers from governed SQL templates — refuses when it cannot verify',
    ],
    githubUrl: 'https://github.com/amitvaghela19/TELCO_CUSTOMER_CHURN',
    image: '/project-images/telco-churn.svg',
    category: 'Analytics',
    featured: false,
    details:
      'A phased churn platform: ML ranking for outreach, a large DuckDB query corpus for KPIs, FastAPI services, and a Next.js UI with Recharts and Framer Motion. The intelligence copilot runs offline for tests or live with Gemini, OpenRouter, or Ollama — always preferring verified SQL answers over free-form guessing.',
    workflow: [
      'Explore and prepare customer tables',
      'Train ranking-focused ensembles with leakage-safe features',
      'Export dashboard slices and Power BI–ready CSVs',
      'Serve KPIs and chat through FastAPI',
      'Present executive, churn, revenue, and behavior views in Next.js',
    ],
    results: [
      'PR-AUC 0.675 with threshold 0.41 on the champion setup',
      'Top-25 outreach style list and revenue-at-risk framing',
      'Automated test suite covering API, router, and dashboard contracts',
    ],
    lessons: [
      'For business chat, refusal beats a confident wrong number',
      'Ranking quality matters more than a vanity accuracy score when you only call a short list',
    ],
  },
  {
    slug: 'resume-intelligence-platform',
    title: 'AI-Powered Resume Intelligence Platform',
    summary:
      'A recruiting helper that reads resumes, matches skills to jobs, scores fit with a voting model, and chats with recruiters — without inventing skill counts.',
    problem:
      'Screening PDFs by hand is slow, and pure LLM scoring can hallucinate skills that are not on the page.',
    goal:
      'Combine deterministic skill matching with optional GenAI explanation so recruiters see clear gaps and fit scores.',
    stack: ['Python', 'Streamlit', 'LangGraph', 'DuckDB', 'MCP'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'NLP',
        'Classification',
        'Ensemble Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Retrieval-Augmented Generation',
        'Agent Orchestration',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'DuckDB',
        'Parquet',
        'ETL',
        'SQL Analytics',
        'Structured Data Processing',
      ]),
      group('web', 'Web Development', ['Streamlit', 'Plotly']),
      group('analyticsBi', 'Analytics / BI', [
        'Power BI',
        'Dashboards',
        'Exploratory Data Analysis',
        'Data Visualization',
      ]),
      group('aiLlm', 'AI / LLM Stack', [
        'LangChain',
        'LangGraph',
        'Ollama',
        'Pinecone',
        'Sentence Transformers',
        'Hugging Face',
        'Google AI Studio',
      ]),
      group('apisMcp', 'APIs & MCP', [
        'MCP ATS Server',
        'Pinecone API',
        'Gemini API',
        'Ollama API',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
        'MLflow',
      ]),
    ],
    highlights: [
      'Layout-aware PDF parsing with PyMuPDF; DOCX via python-docx',
      'Deterministic match percent = skills found ÷ skills required',
      'Soft-voting ensemble: Random Forest, XGBoost, LightGBM, CatBoost, SVM',
    ],
    githubUrl:
      'https://github.com/amitvaghela19/AI-Powered-Resume-Intelligence-Platform',
    image: '/project-images/resume-ai.svg',
    category: 'Agentic AI',
    featured: false,
    details:
      'Hybrid by design: classical NLP and FlashText taxonomy for explicit skills, plus LangGraph-orchestrated LLMs for reasoning and conversation. Optional Pinecone embeddings. Streamlit app and a dedicated MCP ATS server keep scoring rules transparent.',
    workflow: [
      'Parse resumes without scrambling multi-column layouts',
      'Extract skills against a local taxonomy',
      'Score suitability with the voting ensemble',
      'Explain gaps through the recruiter chat agent',
      'Export analytics tables for SQL / Power BI',
    ],
    results: [
      'Clear ATS-style scoring that does not invent skill counts',
      'MCP server path for deterministic match checks',
      'Multi-model GenAI fallbacks documented (Gemini → DeepSeek-R1 → Llama)',
    ],
    lessons: [
      'Recruiters trust a visible skill-gap list more than a mysterious 0–100 score',
      'Keep the counting rules outside the LLM so numbers stay honest',
    ],
  },
  {
    slug: 'hut8-quant-research-platform',
    title: 'HUT 8 Quant Research Platform',
    summary:
      'A research stack for Hut 8 (HUT.TO): market features, multi-horizon models, risk reports, and a Next.js risk command center.',
    problem:
      'Volatile, crypto-linked names need a disciplined research desk — not a one-off notebook with no risk view.',
    goal:
      'Ingest markets, train direction/return models, publish risk and BI outputs, and browse them in a public research site.',
    stack: ['Python', 'Next.js', 'Streamlit', 'LightGBM', 'MCP'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Time Series Forecasting',
        'Classification',
        'Regression',
        'Feature Engineering',
        'Walk-Forward Validation',
        'Model Evaluation',
        'Optuna',
        'Hyperparameter Tuning',
        'Ensemble Learning',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'Parquet',
        'ETL',
        'Pipeline Automation',
        'Structured Data Processing',
      ]),
      group('web', 'Web Development', [
        'Next.js',
        'React',
        'TypeScript',
        'Recharts',
        'Streamlit',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Power BI',
        'Dashboards',
        'Data Visualization',
        'KPI Reporting',
      ]),
      group('aiLlm', 'AI / LLM Stack', [
        'Ollama',
        'Sentence Transformers',
        'FAISS',
        'BM25',
        'Graph RAG',
      ]),
      group('apisMcp', 'APIs & MCP', [
        'MCP Servers',
        'Yahoo Finance (yfinance)',
        'Ollama API',
        'Finnhub API (optional)',
        'OpenAI API (optional)',
        'Gemini API (optional)',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Docker',
        'Jupyter Notebook',
        'Python',
        'GitHub',
        'pytest',
      ]),
    ],
    highlights: [
      'Unified features including HUT–BTC links and regime labels',
      'VaR/ES style risk outputs and PDF reports',
      'Next.js /risk desk with news-aware headlines and local Ollama copilot',
    ],
    githubUrl: 'https://github.com/amitvaghela19/hut8_quant_research_platform',
    image: '/project-images/hut8-quant.svg',
    category: 'Quant',
    featured: false,
    details:
      'A research stack for Hut 8 (HUT.TO) that runs mostly offline aside from Yahoo Finance pulls. It covers market features, multi-horizon models, VaR/ES-style risk outputs, a knowledge graph with FAISS+BM25 chat, Power BI CSV exports, and a Next.js risk command center — built for disciplined research, not investment advice.',
    workflow: [
      'Pull OHLCV and related series',
      'Build unified daily features',
      'Train multi-horizon models and walk-forward checks',
      'Export risk, PDF, and web JSON artifacts',
      'Explore results in Next.js and Streamlit',
    ],
    results: [
      'Documented full research stack from data → models → risk → web',
      'Public site routes for research, forecast report, risk, and CSV grid',
      'MCP servers included for agent-style tooling',
    ],
    lessons: [
      'Say “research only” up front when the ticker is real and volatile',
      'A risk page next to forecasts keeps the story honest',
    ],
  },
  {
    slug: 'retail-revenue-forecasting',
    title: 'Retail Revenue Forecasting',
    summary:
      'A careful multi-series retail revenue forecast — chronological validation, feature ablation, and a final untouched test where CatBoost won.',
    problem:
      'Many portfolio forecasts look great because they peek at the future. Retail planning needs numbers you could defend later.',
    goal:
      'Build a leakage-free daily revenue forecasting pipeline and compare boosting models with deep learning under one fair setup.',
    stack: ['Python', 'CatBoost', 'LightGBM', 'PyTorch', 'Optuna'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Time Series Forecasting',
        'Machine Learning',
        'Deep Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Walk-Forward Validation',
        'Cross-Validation',
        'Optuna',
        'Hyperparameter Tuning',
        'Ensemble Learning',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'Parquet',
        'ETL',
        'Data Cleaning',
        'Structured Data Processing',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Exploratory Data Analysis',
        'Data Visualization',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
      ]),
    ],
    highlights: [
      'Train-only preprocessing and rolling-origin style checks',
      'Feature ablation to see which feature blocks actually help',
      'CatBoost selected as the strongest final model on the untouched test',
    ],
    githubUrl: 'https://github.com/amitvaghela19/Retail-Revenue-Forecasting',
    image: '/project-images/retail-forecast.svg',
    category: 'Forecasting',
    featured: false,
    details:
      'Daily aggregated revenue forecasting across grouped product segments. Chronological splits, rolling validation, and a final holdout keep evaluation honest. Baselines, gradient boosting (LightGBM, XGBoost, CatBoost), and deep models compete under the same rules — CatBoost wins on the untouched test set.',
    workflow: [
      'Build multi-series daily revenue frames',
      'Create calendar, lag, rolling, and cyclical features without leakage',
      'Ablate feature blocks',
      'Tune and compare models under rolling-origin validation',
      'Pick a final model on the untouched test set',
    ],
    results: [
      'CatBoost selected as the strongest final model on the untouched test',
      'Full modular layout for data, features, training, and evaluation',
    ],
    lessons: [
      'If the split is dishonest, the metric is worthless',
      'Deep models are not automatically better than well-tuned trees on tabular retail series',
    ],
  },
  {
    slug: 'sales-hybrid-ml-model',
    title: 'Sales Hybrid ML Model',
    summary:
      'Predict transaction-level bike sales revenue from customer, product, and calendar fields — and show when a fancy LSTM loses to tuned trees.',
    problem:
      'Retail teams want to know what drives high-value baskets and how well models can predict revenue per transaction.',
    goal:
      'Compare strong tree models, stacking, Optuna tuning, and an LSTM baseline on roughly 112k retail rows.',
    stack: ['Python', 'CatBoost', 'LightGBM', 'XGBoost', 'Optuna'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Regression',
        'Ensemble Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Cross-Validation',
        'Optuna',
        'Hyperparameter Tuning',
        'Deep Learning',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'Data Cleaning',
        'Structured Data Processing',
        'ETL',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Exploratory Data Analysis',
        'Data Visualization',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
      ]),
    ],
    highlights: [
      'About 112k transactional rows with rich categories',
      'Explicit leakage control on price-related fields',
      'Baseline XGBoost led test R²; LSTM lagged far behind',
    ],
    githubUrl: 'https://github.com/amitvaghela19/Sales_Hybrid_ML_Model_V1.2',
    image: '/project-images/sales-hybrid.svg',
    category: 'Forecasting',
    featured: false,
    details:
      'Tabular regression on a bike sales dataset spanning demographics, geography, product, and order fields. Trees and stacking compete against an LSTM negative control. Weight search collapses to CatBoost-only on the tuned ensemble path, while baseline XGBoost posts the best test R² and RMSE.',
    workflow: [
      'Clean and engineer date, customer, and price-safe features',
      'Train baseline tree models and a stacking ensemble',
      'Tune XGBoost, LightGBM, and CatBoost with Optuna',
      'Search ensemble weights and train an LSTM baseline',
      'Compare MAE, RMSE, and R² on the held-out test set',
    ],
    results: [
      'Baseline XGBoost: RMSE 605.88, R² 0.7874 on the held-out test',
      'Tuned CatBoost competitive (RMSE 629.85, R² 0.7703); weighted ensemble matched CatBoost-only',
      'LSTM tuned: R² about -0.026 — much worse than trees on this data',
    ],
    lessons: [
      'Stacking is not automatically better than the best single model',
      'A deep sequence model can fail hard when the problem is mostly tabular',
    ],
  },
  {
    slug: 'tsla-hybrid-ml-prediction',
    title: 'TSLA Hybrid ML Prediction System',
    summary:
      'A regime-aware hybrid model for Tesla daily returns, with an economic validity audit suite that asks whether the signal is real or just noise.',
    problem:
      'TSLA moves violently. A single model often breaks when the market mood flips, and accuracy alone does not prove the idea is economically sound.',
    goal:
      'Separate volatile vs stable regimes, ensemble carefully, and run audits (leakage, baselines, sanity, split robustness) before trusting results.',
    stack: ['Python', 'XGBoost', 'LightGBM', 'scikit-learn', 'Jupyter'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Time Series Forecasting',
        'Regression',
        'Classification',
        'Ensemble Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Walk-Forward Validation',
        'Cross-Validation',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'Data Cleaning',
        'Structured Data Processing',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Data Visualization',
        'Exploratory Data Analysis',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
      ]),
    ],
    highlights: [
      'Separate pipelines for volatile and stable regimes',
      'Volatility kill-switch idea for extreme daily moves',
      'Four-audit “truth” suite — all checks passed',
    ],
    githubUrl: 'https://github.com/amitvaghela19/TSLA-Hybrid-ML-Prediction',
    image: '/project-images/tsla-hybrid.svg',
    category: 'Quant',
    featured: false,
    details:
      'Production-minded research around TSLA daily returns: regime splits, ensembles, walk-forward evaluation, and a four-part audit suite covering data leakage, baseline dominance, label/regime sanity, and split robustness. Transaction-cost stress and extreme-event checks keep the story grounded in research results — not a live trading claim.',
    workflow: [
      'Engineer features and identify market regimes',
      'Train regime-specific model paths',
      'Blend ensembles with learned weights',
      'Run the economic validity audit suite',
      'Review plots and notebook outputs',
    ],
    results: [
      'All four audits in the truth suite passed',
      'Classification accuracy tracked across model versions',
      'Transaction-cost and extreme-event style checks included',
    ],
    lessons: [
      'Ask whether the model makes economic sense, not only whether R² looks nice',
      'Volatile names need regime awareness or the average day lies to you',
    ],
  },
  {
    slug: 'tsla-truth-audit',
    title: 'TSLA Truth Audit — Hybrid 5-Day Forecasting Pipeline',
    summary:
      'A research notebook that asks how far you can push TSLA 5-day forecasts without cheating the future — then audits the answer.',
    problem:
      'It is easy to overfit TSLA and accidentally leak tomorrow into today. A 5-day horizon makes that temptation worse.',
    goal:
      'Build leak-aware features, recover performance the right way, and publish honest final metrics for direction and return.',
    stack: ['Python', 'CatBoost', 'XGBoost', 'LightGBM', 'Jupyter'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Time Series Forecasting',
        'Classification',
        'Regression',
        'Feature Engineering',
        'Ensemble Learning',
        'Model Evaluation',
        'Hyperparameter Tuning',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'Data Cleaning',
        'Structured Data Processing',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Data Visualization',
        'Exploratory Data Analysis',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
      ]),
    ],
    highlights: [
      '5-day ahead direction and return targets',
      'Debug split used to prove leakage issues before fixing them',
      'Final CatBoost-focused metrics published after feature reduction',
    ],
    githubUrl: 'https://github.com/amitvaghela19/Tesla_Hybrid_Model_Collab_version',
    image: '/project-images/tsla-truth.svg',
    category: 'Quant',
    featured: false,
    details:
      'Starts from TSLA daily OHLCV, builds technical and macro/regime context, shows how leaked baselines look unrealistically good, then rebuilds with CatBoost and feature reduction. The reduced-feature Step 21 results land around 0.78 direction accuracy, MAE ~0.055 on 5-day returns, and R² ~0.42 — with a matching ensemble audit step afterward.',
    workflow: [
      'Load and sort daily TSLA prices',
      'Define 5-day return and direction targets carefully',
      'Show the leakage shock on naive baselines',
      'Upgrade features, regimes, and CatBoost models',
      'Tune, reduce features, and run the truth audit steps',
    ],
    results: [
      'Step 21: direction accuracy around 0.78; return MAE around 0.055; R² around 0.42',
      'Truth-audit ensemble step: accuracy around 0.77; MAE around 0.056; R² around 0.42',
    ],
    lessons: [
      'Removing leakage first is more important than chasing a pretty score',
      'Publish the audit trail so readers can see how you got there',
    ],
  },
  {
    slug: 'tsla-quant-ml',
    title: 'TSLA Quant ML Project',
    summary:
      'An automated, leak-checked TSLA research pipeline with stacked boosters, SHAP, backtests — and honest out-of-fold numbers that are barely above chance.',
    problem:
      'It is tempting to show only in-sample wins. A serious quant workflow has to survive purged folds and admit when generalization is weak.',
    goal:
      'Run ingestion → features → stacked models → OOF eval → backtest → SHAP with a clear leakage audit.',
    stack: ['Python', 'XGBoost', 'LightGBM', 'CatBoost', 'SHAP'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Ensemble Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Cross-Validation',
        'Walk-Forward Validation',
        'SHAP',
        'Explainable AI',
        'Optuna',
        'Hyperparameter Tuning',
        'Deep Learning',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'Parquet',
        'ETL',
        'Pipeline Automation',
        'Structured Data Processing',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Data Visualization',
        'Exploratory Data Analysis',
      ]),
      group('apisMcp', 'APIs & MCP', ['Yahoo Finance (yfinance)', 'FRED API']),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Docker',
        'Python',
        'GitHub',
        'pytest',
      ]),
    ],
    highlights: [
      'Purged K-fold + walk-forward style validation',
      'Leakage audit marked PASSED',
      'OOF accuracy about 0.52 — close to a coin flip, reported honestly',
    ],
    githubUrl: 'https://github.com/amitvaghela19/TSLA_Quant_ML_Project',
    image: '/project-images/tsla-quant.svg',
    category: 'Quant',
    featured: false,
    details:
      'A modular TSLA pipeline with monitoring hooks for drift, latency, and kill-switch ideas, plus a deployment-minded layout. About 2,516 OHLCV rows clean down to ~2,495 with 16 features. In-sample ensemble accuracy ~0.63 looks fine; OOF accuracy 0.5185 with OOF R² -0.015 shows the harder truth — and that honesty is the point.',
    workflow: [
      'Ingest OHLCV (and optional FRED) data',
      'Build microstructure and technical features',
      'Train XGBoost + LightGBM + CatBoost stack',
      'Evaluate out-of-fold and run the leakage audit',
      'Explain with SHAP and review backtest outputs',
    ],
    results: [
      'Leakage audit PASSED (in-sample R² 0.1626 vs OOF R² -0.0219)',
      'OOF ensemble accuracy 0.5185; RMSE 0.0396; R² -0.0149',
      'Per-model in-sample breakdown listed for XGB, LightGBM, and CatBoost',
    ],
    lessons: [
      'In-sample comfort can hide weak generalization — publish both',
      'A passed leakage audit does not mean the strategy prints money',
    ],
  },
  {
    slug: 'hut8-stock-forecast',
    title: 'HUT8 Stock Forecast — Hybrid ML Model',
    summary:
      'Next-day price, return, direction, and confidence for HUT8 using technicals, Bitcoin context, and a three-model ensemble.',
    problem:
      'HUT8 moves with crypto stress. Models that ignore Bitcoin and volatility struggle on sharp days.',
    goal:
      'Build a reusable hybrid predictor with clear plots and an ensemble vote for direction.',
    stack: ['Python', 'Random Forest', 'XGBoost', 'LightGBM', 'yfinance'],
    toolkit: [
      group('mlAi', 'ML / AI', [
        'Machine Learning',
        'Time Series Forecasting',
        'Classification',
        'Regression',
        'Ensemble Learning',
        'Feature Engineering',
        'Model Evaluation',
      ]),
      group('dataEngineering', 'Data Engineering', [
        'Data Cleaning',
        'Structured Data Processing',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Data Visualization',
        'Exploratory Data Analysis',
      ]),
      group('apisMcp', 'APIs & MCP', ['Yahoo Finance (yfinance)']),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
      ]),
    ],
    highlights: [
      'BTC price, returns, and HUT8–BTC correlation in the feature set',
      'Separate ensembles for price, return, and direction',
      'Time-ordered 80/20 split without shuffling',
    ],
    githubUrl: 'https://github.com/amitvaghela19/Hut8StockForecast--Hybrid-ML-Model',
    image: '/project-images/hut8-forecast.svg',
    category: 'Quant',
    featured: false,
    details:
      'Portfolio notebook project: RSI/MACD/EMA/SMA style technicals, rolling volatility and momentum, Bitcoin features, and RF/XGB/LGBM ensembles. Direction uses majority vote; confidence is the share of models voting UP. Plots land under /plots.',
    workflow: [
      'Download HUT8 and BTC history with yfinance',
      'Engineer technical and crypto-linked features',
      'Train regression and classification ensembles',
      'Average prices/returns and majority-vote direction',
      'Save comparison plots and a reusable predict helper',
    ],
    results: [
      'Random Forest price RMSE ~7.53 and MAE ~6.07',
      'XGBoost price RMSE ~11.45; LightGBM price RMSE ~8.28',
      'Return models also reported (e.g. RF return RMSE ~0.06, MAE ~0.04)',
    ],
    lessons: [
      'For crypto-linked equities, Bitcoin context is part of the feature story',
      'Show model disagreement as confidence, not false certainty',
    ],
  },
  {
    slug: 'ontario-housing-capstone',
    title: 'Ontario Housing Market Analysis (Capstone)',
    summary:
      'A city-by-city look at Ontario housing prices — rooms, income, and affordability stretch — told with clear charts rather than a black-box model.',
    problem:
      'Province-wide averages hide how different Toronto feels from smaller Ontario cities when you compare price to income.',
    goal:
      'Answer simple questions with visuals: where prices are highest, how beds/baths line up with price, and which cities look stretched.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    toolkit: [
      group('mlAi', 'ML / AI', ['Feature Engineering']),
      group('dataEngineering', 'Data Engineering', [
        'Data Cleaning',
        'Structured Data Processing',
      ]),
      group('analyticsBi', 'Analytics / BI', [
        'Exploratory Data Analysis',
        'Data Visualization',
        'Dashboards',
        'Root Cause Analysis',
      ]),
      group('toolsPlatforms', 'Tools / Platforms', [
        'Jupyter Notebook',
        'Python',
        'GitHub',
      ]),
    ],
    highlights: [
      'City-level average price comparisons across Ontario',
      'Beds and baths vs price charts',
      'Income vs price and affordability-ratio views',
    ],
    githubUrl: 'https://github.com/amitvaghela19/Ontario-housing-analysis-capstone',
    image: '/project-images/ontario-housing.svg',
    category: 'Analytics',
    featured: false,
    details:
      'Story-driven capstone analysis with Pandas, NumPy, Matplotlib, and Seaborn. Fields include city, price, bedrooms, bathrooms, median family income, population, and coordinates. The point is readable market context, not claiming a production pricing model.',
    workflow: [
      'Load and focus on Ontario cities in the listings data',
      'Chart average prices by city',
      'Relate bedrooms and bathrooms to price',
      'Compare listing prices with median family income',
      'Summarize affordability stretch and key takeaways',
    ],
    results: [
      'A complete visual narrative covering price, features, income, and affordability',
      'Clear notebook structure so anyone can rerun the analysis end to end',
    ],
    lessons: [
      'Averages hide local pain — city cuts tell a fairer story',
      'Good charts often beat an overfitted model for stakeholder understanding',
    ],
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getCategories(): ProjectCategory[] {
  return [...new Set(projects.flatMap((p) => getProjectCategories(p)))]
}
