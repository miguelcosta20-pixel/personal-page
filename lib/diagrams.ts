import type { FlowNodeDef, FlowEdgeDef } from "./data";

type DiagramDef = { nodes: FlowNodeDef[]; edges: FlowEdgeDef[] };

export const flowDiagrams: Record<string, DiagramDef> = {
  "banking-automation-platform": {
    nodes: [
      { id: "bank", x: 0,   y: 80,  label: "Bank Systems",     icon: null,                         abbr: "Bank", color: "#1a5f1a", bg: "#d6f5d6" },
      { id: "cc",   x: 160, y: 80,  label: "Cloud Connector",  icon: null,                         abbr: "CC",   color: "#1a4a6b", bg: "#d6eaf8" },
      { id: "is",   x: 320, y: 80,  label: "Cloud Integration",icon: "/icons/integration-suite.svg" },
      { id: "hana", x: 480, y: 80,  label: "HANA Cloud",       icon: "/icons/hana-cloud.svg" },
      { id: "cap",  x: 640, y: 80,  label: "CAP Service",      icon: "/icons/cap.svg" },
      { id: "ai",   x: 820, y: 10,  label: "SAP AI Core",      icon: "/icons/ai-core.svg" },
      { id: "ui",   x: 820, y: 80,  label: "BTP UI",           icon: null,                         abbr: "UI",   color: "#002A86", bg: "#D1EFFF" },
      { id: "api",  x: 820, y: 150, label: "Internal API",     icon: null,                         abbr: "API",  color: "#737373", bg: "#f5f5f5" },
    ],
    edges: [
      { id: "e1", source: "bank", target: "cc" },
      { id: "e2", source: "cc",   target: "is" },
      { id: "e3", source: "is",   target: "hana" },
      { id: "e4", source: "hana", target: "cap" },
      { id: "e5", source: "cap",  target: "ai" },
      { id: "e6", source: "cap",  target: "ui" },
      { id: "e7", source: "cap",  target: "api" },
    ],
  },

  "enterprise-genai-assistant": {
    nodes: [
      { id: "data",   x: 0,   y: 60,  label: "Enterprise Data",  icon: null,                        abbr: "Data", color: "#737373", bg: "#f5f5f5" },
      { id: "aicore", x: 180, y: 60,  label: "SAP AI Core",      icon: "/icons/ai-core.svg" },
      { id: "vector", x: 180, y: 180, label: "Vector Store",     icon: "/icons/hana-cloud.svg" },
      { id: "lc",     x: 360, y: 60,  label: "LangChain",        icon: null,                        abbr: "LC",   color: "#1a6b3c", bg: "#d4f0e0" },
      { id: "hub",    x: 540, y: 60,  label: "Generative AI Hub",icon: "/icons/ai-launchpad.svg" },
      { id: "cap",    x: 720, y: 60,  label: "CAP Service",      icon: "/icons/cap.svg" },
      { id: "ui",     x: 900, y: 60,  label: "Chat UI",          icon: null,                        abbr: "UI",   color: "#002A86", bg: "#D1EFFF" },
    ],
    edges: [
      { id: "e1", source: "data",   target: "aicore" },
      { id: "e2", source: "aicore", target: "vector" },
      { id: "e3", source: "aicore", target: "lc" },
      { id: "e4", source: "vector", target: "lc" },
      { id: "e5", source: "lc",     target: "hub" },
      { id: "e6", source: "hub",    target: "cap" },
      { id: "e7", source: "cap",    target: "ui" },
    ],
  },

  "s4hana-ux-transformation": {
    nodes: [
      { id: "s4",    x: 0,   y: 60,  label: "S/4HANA",           icon: null, abbr: "S/4",   color: "#7a3a1a", bg: "#fde8d6" },
      { id: "fiori", x: 200, y: 60,  label: "Fiori Launchpad",   icon: null, abbr: "UI5",   color: "#002A86", bg: "#D1EFFF" },
      { id: "wz",    x: 400, y: 60,  label: "Workzone",          icon: null, abbr: "WZ",    color: "#1a7a4a", bg: "#d6f5e8" },
      { id: "pa",    x: 600, y: 60,  label: "Process Automation",icon: null, abbr: "PA",    color: "#6a1a7a", bg: "#f0d6f5" },
      { id: "ricef", x: 200, y: 180, label: "Custom Apps",       icon: null, abbr: "RICEF", color: "#5a5a1a", bg: "#f5f5d6" },
    ],
    edges: [
      { id: "e1", source: "s4",    target: "fiori" },
      { id: "e2", source: "fiori", target: "wz" },
      { id: "e3", source: "wz",    target: "pa" },
      { id: "e4", source: "fiori", target: "ricef" },
    ],
  },

  "btp-integration-platform": {
    nodes: [
      { id: "ecc", x: 0,   y: 0,   label: "SAP ECC",         icon: null,                         abbr: "ECC", color: "#7a3a1a", bg: "#fde8d6" },
      { id: "s4",  x: 0,   y: 120, label: "S/4HANA",         icon: null,                         abbr: "S/4", color: "#7a3a1a", bg: "#fde8d6" },
      { id: "sf",  x: 0,   y: 240, label: "Salesforce",      icon: null,                         abbr: "SF",  color: "#1a5f7a", bg: "#d6eef5" },
      { id: "is",  x: 220, y: 120, label: "Integration Suite",icon: "/icons/integration-suite.svg" },
      { id: "api", x: 440, y: 60,  label: "API Management",  icon: null,                         abbr: "API", color: "#002A86", bg: "#D1EFFF" },
      { id: "hana",x: 440, y: 180, label: "HANA Cloud",      icon: "/icons/hana-cloud.svg" },
    ],
    edges: [
      { id: "e1", source: "ecc", target: "is" },
      { id: "e2", source: "s4",  target: "is" },
      { id: "e3", source: "sf",  target: "is" },
      { id: "e4", source: "is",  target: "api" },
      { id: "e5", source: "is",  target: "hana" },
    ],
  },
};
