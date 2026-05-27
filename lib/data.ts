export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: "SAP Intelligent Cloud Development Senior Consultant",
    company: "SAP",
    location: "Lisbon, Portugal",
    period: "April 2023 – Present",
    bullets: [
      "AI-first architect and Subject Matter Expert for SAP BTP AI, including SAP AI Core and Generative AI Hub; designed and delivered production RAG pipelines using LangChain and SAP AI Core vector capabilities.",
      "UX Architect and lead across large-scale S/4HANA transformation projects, owning end-to-end design from architecture through implementation (greenfield and brownfield), applying Clean Core principles throughout.",
      "Lead for SAP BTP and S/4HANA UX throughout full RFx cycles, covering solution advisory, sales, and delivery; translated complex AI and cloud capabilities into measurable business value for enterprise customers.",
      "Solution Architect for cloud and on-premise custom developments; responsible for BTP Integration Architecture and scalable API/microservices design across SAP and non-SAP landscapes.",
      "Mentored junior architects and cloud developers within the team, supporting capability growth in SAP AI and BTP through structured knowledge sharing and code and design reviews.",
      "Worked in Agile and SAP Activate delivery frameworks across all engagements, leading sprint planning, architecture reviews, and stakeholder alignment sessions.",
    ],
  },
  {
    role: "SAP BTP Customer Success Manager",
    company: "SAP",
    location: "Paris, France",
    period: "October 2022 – April 2023",
    bullets: [
      "Provided technical BTP advisory and architecture guidance directly to enterprise customers, acting as the voice of the customer to relay feedback to SAP product stakeholders.",
      "Identified and shaped new AI and automation use cases in collaboration with customers, accelerating adoption of SAP BTP services.",
    ],
  },
  {
    role: "SAP UX & Cloud Senior Consultant",
    company: "SAP",
    location: "Lisbon, Portugal",
    period: "November 2017 – October 2022",
    bullets: [
      "UX lead during S/4HANA implementation projects including RICEF development; set up and configured Workzone/Launchpad environments and Process Automation workflows.",
      "Led and developed cloud and on-premise custom solutions; delivered customer workshops and advisory sessions on cloud solution design and BTP architecture.",
      "Part of the SAP intern mentoring programme for 3 years, supporting early-career developers in cloud and UX development on SAP BTP.",
    ],
  },
  {
    role: "Java FullStack Developer",
    company: "Altran",
    location: "Lisbon, Portugal",
    period: "December 2016 – November 2017",
    bullets: [
      "Java developer in a multidisciplinary team, building a public-facing application for reporting adverse medicine reactions.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Architecture",
    skills: [
      "SAP AI Core",
      "SAP Generative AI Hub",
      "SAP AI Business Services",
      "LangChain",
      "Joule",
      "SAP BTP",
      "Cloud Foundry",
      "CAP",
      "Integration Suite",
      "HANA Cloud",
      "Workzone",
      "Process Automation",
      "SAP LeanIX",
      "S/4HANA UX Architecture",
      "Clean Core",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "SAP HANA Cloud",
      "SAP Analytics Cloud",
      "API & Microservices Design",
      "Vector Engines",
      "ML Model Deployment",
    ],
  },
  {
    category: "Business & Consulting",
    skills: [
      "Stakeholder Engagement",
      "Sales Lifecycle",
      "AI Strategy & Roadmapping",
      "Solution Advisory & RFx",
      "BTP Solution Advisory",
      "Agile / SAP Activate",
    ],
  },
];

export const certifications: string[] = [
  "SAP Certified – Backend Developer – SAP Cloud Application Programming Model",
  "SAP Certified Associate – SAP Generative AI Developer",
  "SAP Certified Professional – Enterprise Architect",
  "SAP Certified Associate – Enterprise Architecture Consultant (SAP LeanIX)",
  "SAP Certified Professional – Solution Architect, BTP",
  "SAP Certified Development Associate – SAP Fiori Application Developer",
  "SAP Technology Knowledge – Extension Black Belt",
  "SAP Consulting Skills 2023 – Consultant to Architect",
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Intermediate" },
  { name: "French", level: "Elementary" },
];

export interface ArchNode {
  label: string;
  icon: string | null;
  abbr?: string;
  color?: string;
  bg?: string;
}

export interface FlowNodeDef {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: string | null;
  abbr?: string;
  color?: string;
  bg?: string;
}

export interface FlowEdgeDef {
  id: string;
  source: string;
  target: string;
  bidirectional?: boolean;
  edgeType?: "https" | "dashed" | "trust";
}

export interface FlowGroupDef {
  id: string;
  label: string;
  nodeIds: string[];
  color: string;
  style: "solid" | "dashed";
}

export interface FlowDiagram {
  nodes: FlowNodeDef[];
  edges: FlowEdgeDef[];
  groups?: FlowGroupDef[];
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  badge?: string;
  stack: string[];
  year: string;
  summary: string;
  challenge: string;
  architecture: ArchNode[][];
  contributions: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    slug: "open-item-matching",
    title: "AI-Driven Open Item Matching",
    role: "Solution Architect",
    stack: ["S/4HANA", "Event Mesh", "CAP", "SAP AI Core", "HANA Cloud"],
    year: "2026",
    summary:
      "Designed an event-driven accounts receivable automation platform for a global FMCG enterprise, capturing S/4HANA open items in real time via Event Mesh and applying AI-based matching to eliminate manual reconciliation.",
    challenge:
      "A global FMCG enterprise was processing thousands of open items daily through S/4HANA's F.13 clearing run, with reconciliation handled manually by finance teams across multiple regions. The challenge was designing an event-driven architecture that could capture open items in real time as F.13 detected them, feed them into an AI matching engine without polling or batch delays, and present validated recommendations in a user-facing cockpit, without disrupting the existing S/4HANA landscape or requiring changes to core financial processes.",
    architecture: [
      [
        { label: "S/4HANA",     icon: null, abbr: "S/4",  color: "#7a3a1a", bg: "#fde8d6" },
        { label: "Event Mesh",  icon: null, abbr: "EM",   color: "#1a4a6b", bg: "#d6eaf8" },
        { label: "CAP Service", icon: "/icons/cap.svg" },
        { label: "SAP AI Core", icon: "/icons/ai-core.svg" },
        { label: "HANA Cloud",  icon: "/icons/hana-cloud.svg" },
      ],
    ],
    contributions: [
      "Led solution architecture from discovery through design, translating finance team requirements into a BTP-native event-driven architecture",
      "Designed the Event Mesh integration layer to capture S/4HANA F.13 open items in real time as they are detected",
      "Architected the CAP application layer for event ingestion, AI orchestration, user validation, and action completion",
      "Defined the SAP AI Core matching model integration and the confidence-based recommendation framework for finance users",
      "Delivered architecture blueprints, design documentation, and stakeholder workshops throughout the engagement",
    ],
    outcomes: [
      "Architecture design approved and handed to development team for implementation",
      "Event-driven pattern eliminates batch processing delays: open items available for AI matching in real time",
      "AI matching layer designed to handle thousands of items per day without manual intervention",
      "Solution designed as a reusable pattern applicable to other S/4HANA finance clearing processes",
    ],
  },
  {
    slug: "langchain-react-agent",
    title: "Agentic AI Assistant on SAP BTP",
    role: "Lead Architect & Developer",
    badge: "Proof of Concept",
    stack: ["LangChain", "SAP AI Core", "HANA Cloud", "CAP", "SAP BTP"],
    year: "2025",
    summary:
      "Designing and building a LangChain ReAct agent on SAP BTP that autonomously selects tools (HANA vector search and SAP OData APIs) to answer enterprise queries through multi-step reasoning.",
    challenge:
      "Enterprise AI systems built on fixed RAG pipelines can only answer questions in one way: retrieve context, generate response. Real business queries are more complex: they require deciding what information to look up, when to call a live system API, and how to combine multiple results before forming an answer. The goal of this PoC is to build a system on SAP BTP where the AI itself reasons about what action to take next, using available tools autonomously without hardcoding the logic for every query type. This demonstrates the agentic pattern the enterprise AI market is converging on.",
    architecture: [
      [
        { label: "CAP Service",     icon: "/icons/cap.svg" },
        { label: "LangChain Agent", icon: null, abbr: "LC",  color: "#1a6b3c", bg: "#d4f0e0" },
        { label: "SAP AI Core",     icon: "/icons/ai-core.svg" },
        { label: "HANA Cloud",      icon: "/icons/hana-cloud.svg" },
      ],
    ],
    contributions: [
      "Designing the ReAct agent loop using LangChain with SAP AI Core as the underlying LLM provider",
      "Implementing HANA Cloud vector store as a retrieval tool available to the agent",
      "Exposing SAP OData endpoints as structured data tools the agent can call autonomously",
      "Building the CAP service layer as the API surface and audit trail for all agent interactions",
      "Instrumenting reasoning traces for observability, capturing every tool call and decision step",
    ],
    outcomes: [
      "Validates LangChain + SAP AI Core as a reusable agentic pattern on BTP",
      "Demonstrates multi-step reasoning with tool selection, going beyond standard RAG pipelines",
      "Establishes a foundation for more complex multi-agent architectures on SAP BTP",
    ],
  },
  {
    slug: "banking-automation-platform",
    title: "Banking Process Automation Platform",
    role: "Lead Architect & Developer",
    stack: ["CAP", "SAP Cloud Integration", "Cloud Connector", "HANA Cloud", "SAP AI Core"],
    year: "2024",
    summary:
      "Designed and built an end-to-end banking process automation platform on SAP BTP, connecting bank customers via Cloud Integration, masking sensitive financial data, and automating receivables and cash application workflows at scale across multiple clients.",
    challenge:
      "A financial services client needed to automate high-volume receivables and cash application processes across multiple bank customers, each with different systems, middleware, and compliance requirements. The platform had to securely connect to external bank systems via Cloud Connector and SAP Cloud Integration, copy and mask sensitive financial data before it reached the UI, and give operations teams a fully configurable automation layer (including AI-driven matching suggestions) that could be tailored per client without code changes. Delivering this across six or more onboarded clients while maintaining throughput in the thousands of transactions per day required a carefully layered architecture balancing security, flexibility, and performance.",
    architecture: [
      [
        { label: "Cloud Connector", icon: null, abbr: "CC", color: "#1a4a6b", bg: "#d6eaf8" },
        { label: "Cloud Integration", icon: "/icons/integration-suite.svg" },
        { label: "HANA Cloud", icon: "/icons/hana-cloud.svg" },
        { label: "CAP Service", icon: "/icons/cap.svg" },
        { label: "SAP AI Core", icon: "/icons/ai-core.svg" },
      ],
    ],
    contributions: [
      "Designed the full solution architecture including the secure bank connectivity layer using Cloud Connector and SAP Cloud Integration",
      "Built the data masking pipeline ensuring sensitive financial data was anonymised before reaching the BTP UI layer",
      "Developed the CAP service layer including the rules engine, client-specific customisation framework, and automation scheduling",
      "Integrated AI-driven matching suggestions for cash application, reducing manual reconciliation effort",
      "Led end-to-end delivery across architecture, development, and client onboarding for 6+ bank customers",
    ],
    outcomes: [
      "Over 300% increase in process profitability following platform go-live",
      "More than 6 bank clients onboarded by delivery completion",
      "Thousands of financial transactions processed automatically per day",
      "Platform architected as a reusable, configurable product: no code changes required between client deployments",
    ],
  },
  {
    slug: "enterprise-genai-assistant",
    title: "Enterprise GenAI Assistant",
    role: "Lead Architect",
    stack: ["SAP AI Core", "Generative AI Hub", "LangChain", "CAP", "SAP BTP"],
    year: "2024",
    summary:
      "Architected a multi-tenant conversational AI assistant for enterprise customers, integrating SAP Generative AI Hub with custom RAG pipelines on SAP BTP.",
    challenge:
      "A global enterprise needed a conversational AI layer over their SAP landscape without exposing raw system access or risking cross-tenant data leakage. The core challenge was building a secure, scalable RAG pipeline capable of ingesting and retrieving tenant-specific data in real time, while keeping response latency low enough for a production chat interface used by thousands of employees.",
    architecture: [
      [
        { label: "SAP AI Core", icon: "/icons/ai-core.svg" },
        { label: "Generative AI Hub", icon: "/icons/ai-launchpad.svg" },
        { label: "CAP Service Layer", icon: "/icons/cap.svg" },
        { label: "Cloud Foundry", icon: "/icons/cloud-foundry.svg" },
      ],
    ],
    contributions: [
      "Defined the overall solution architecture and led technical design across all workstreams",
      "Designed the multi-tenant data isolation model and RAG pipeline using LangChain and SAP AI Core vector store capabilities",
      "Selected and evaluated LLMs available through Generative AI Hub against latency, cost, and accuracy criteria",
      "Built the CAP service layer exposing AI endpoints with role-based access control and audit logging",
      "Ran architecture validation workshops with the customer and SAP product stakeholders",
    ],
    outcomes: [
      "Deployed to production for multiple enterprise tenants within a single BTP subaccount",
      "Average response latency under 3 seconds for retrieval-augmented queries",
      "Zero cross-tenant data exposure incidents since go-live",
      "Architecture pattern adopted as an internal reference design for similar engagements",
    ],
  },
  {
    slug: "s4hana-ux-transformation",
    title: "S/4HANA UX Transformation",
    role: "UX Architect",
    stack: ["SAP Fiori", "Workzone", "Process Automation", "RICEF"],
    year: "2023",
    summary:
      "Led end-to-end UX architecture for a large-scale S/4HANA greenfield implementation, owning Fiori launchpad strategy, Workzone setup, and workflow automation.",
    challenge:
      "A large industrial enterprise was migrating from a heavily customised ECC landscape to S/4HANA greenfield. Thousands of users across multiple regions needed a coherent, role-based digital workplace from day one. The challenge was designing a Fiori and Workzone architecture that could handle complex RICEF requirements, integrate automated approval workflows, and be maintainable by a small internal IT team post-go-live.",
    architecture: [
      [
        { label: "SAP Fiori", icon: null, abbr: "UI5", color: "#002A86", bg: "#D1EFFF" },
        { label: "Workzone", icon: null, abbr: "WZ", color: "#1a7a4a", bg: "#d6f5e8" },
        { label: "Process Automation", icon: null, abbr: "PA", color: "#6a1a7a", bg: "#f0d6f5" },
        { label: "S/4HANA", icon: null, abbr: "S/4", color: "#7a3a1a", bg: "#fde8d6" },
      ],
    ],
    contributions: [
      "Owned the end-to-end Fiori launchpad strategy across all user roles and business areas",
      "Designed and configured the SAP Workzone environment, including site structure, navigation, and content federation",
      "Led RICEF scoping and governed all custom Fiori app developments across the programme",
      "Architected the SAP Process Automation workflows for purchase order approvals and exception handling",
      "Delivered UX design workshops and prototyping sessions with key user groups across three regions",
    ],
    outcomes: [
      "Fiori launchpad live for over 2,000 users across three countries at go-live",
      "Approval cycle time reduced by over 60% through automated workflows",
      "Custom app portfolio scoped down by 40% through standard Fiori app adoption",
      "Internal IT team capable of maintaining the Workzone environment independently post-go-live",
    ],
  },
  {
    slug: "btp-integration-platform",
    title: "BTP Integration Platform",
    role: "Solution Architect",
    stack: ["Integration Suite", "Cloud Foundry", "API Management", "HANA Cloud"],
    year: "2022",
    summary:
      "Designed and delivered a scalable BTP integration platform connecting SAP and non-SAP landscapes for a global enterprise, including API governance and microservices architecture.",
    challenge:
      "A global manufacturing company operated a fragmented integration landscape with point-to-point connections between SAP ECC, S/4HANA, and a range of third-party systems including Salesforce and a proprietary logistics platform. The business needed a unified, governed integration platform that could scale with their SAP cloud migration roadmap while reducing operational complexity and giving the integration team visibility over all data flows.",
    architecture: [
      [
        { label: "Integration Suite", icon: "/icons/integration-suite.svg" },
        { label: "API Management", icon: null, abbr: "API", color: "#002A86", bg: "#D1EFFF" },
        { label: "Cloud Foundry", icon: "/icons/cloud-foundry.svg" },
        { label: "HANA Cloud", icon: "/icons/hana-cloud.svg" },
      ],
    ],
    contributions: [
      "Designed the overall BTP integration architecture and API governance model",
      "Led migration of 30+ existing point-to-point interfaces to SAP Integration Suite iFlows",
      "Built the API Management layer with standardised policies for authentication, rate limiting, and monitoring",
      "Designed the HANA Cloud persistence layer for integration event logging and replay",
      "Delivered architectural documentation and runbooks adopted by the customer operations team",
    ],
    outcomes: [
      "Over 30 interfaces migrated to the new platform with no business disruption",
      "End-to-end visibility over all integration flows through a single operations dashboard",
      "Mean time to resolve integration incidents reduced by 50%",
      "Platform designed to support the customer's 3-year SAP cloud migration roadmap",
    ],
  },
];
