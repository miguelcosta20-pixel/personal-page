import type { FlowNodeDef, FlowEdgeDef, FlowGroupDef } from "./data";

type DiagramDef = { nodes: FlowNodeDef[]; edges: FlowEdgeDef[]; groups?: FlowGroupDef[] };

export const flowDiagrams: Record<string, DiagramDef> = {
  "open-item-matching": {
    nodes: [
      { id: "s4",      x: 0,   y: 80,  label: "S/4HANA (F.13)",   icon: null, abbr: "S/4",  color: "#7a3a1a", bg: "#fde8d6" },
      { id: "mesh",    x: 220, y: 80,  label: "Event Mesh",        icon: null, abbr: "EM",   color: "#1a4a6b", bg: "#d6eaf8" },
      { id: "cap",     x: 440, y: 80,  label: "CAP Service",       icon: "/icons/cap.svg" },
      { id: "aicore",  x: 660, y: 80,  label: "SAP AI Core",       icon: "/icons/ai-core.svg" },
      { id: "hana",    x: 440, y: 240, label: "HANA Cloud",        icon: "/icons/hana-cloud.svg" },
      { id: "cockpit", x: 660, y: 240, label: "Solution Cockpit",  icon: null, abbr: "UI",   color: "#002A86", bg: "#D1EFFF" },
    ],
    edges: [
      { id: "e1", source: "s4",     target: "mesh",    edgeType: "https" },
      { id: "e2", source: "mesh",   target: "cap" },
      { id: "e3", source: "cap",    target: "aicore",  bidirectional: true },
      { id: "e4", source: "cap",    target: "hana" },
      { id: "e5", source: "hana",   target: "cockpit" },
    ],
    groups: [
      { id: "g-onprem", label: "On-Premise", nodeIds: ["s4"],                              color: "#64748b", style: "dashed" },
      { id: "g-btp",    label: "SAP BTP",    nodeIds: ["mesh","cap","aicore","hana","cockpit"], color: "#0070F2", style: "solid"  },
    ],
  },

  "langchain-react-agent": {
    nodes: [
      { id: "cap",    x: 0,   y: 80,  label: "CAP Service",     icon: "/icons/cap.svg" },
      { id: "agent",  x: 220, y: 80,  label: "LangChain Agent", icon: null, abbr: "LC",  color: "#1a6b3c", bg: "#d4f0e0" },
      { id: "llm",    x: 460, y: 0,   label: "SAP AI Core",     icon: "/icons/ai-core.svg" },
      { id: "vector", x: 460, y: 160, label: "HANA Vector",     icon: "/icons/hana-cloud.svg" },
      { id: "odata",  x: 460, y: 300, label: "OData API",       icon: null, abbr: "API", color: "#737373", bg: "#f5f5f5" },
    ],
    edges: [
      { id: "e1", source: "cap",   target: "agent", bidirectional: true },
      { id: "e2", source: "agent", target: "llm",   bidirectional: true },
      { id: "e3", source: "agent", target: "vector" },
      { id: "e4", source: "agent", target: "odata",  edgeType: "https" },
    ],
  },

  "banking-automation-platform": {
    nodes: [
      { id: "bank", x: 0,    y: 80, label: "Bank Systems",      icon: null,                          abbr: "Bank", color: "#1a5f1a", bg: "#d6f5d6" },
      { id: "cc",   x: 220,  y: 80, label: "Cloud Connector",   icon: null,                          abbr: "CC",   color: "#1a4a6b", bg: "#d6eaf8" },
      { id: "is",   x: 440,  y: 80, label: "Cloud Integration", icon: "/icons/integration-suite.svg" },
      { id: "hana", x: 660,  y: 80, label: "HANA Cloud",        icon: "/icons/hana-cloud.svg" },
      { id: "cap",  x: 880,  y: 80, label: "CAP Service",       icon: "/icons/cap.svg" },
      { id: "ai",   x: 1100, y: 0,  label: "SAP AI Core",       icon: "/icons/ai-core.svg" },
      { id: "ui",   x: 1100, y: 80, label: "BTP UI",            icon: null,                          abbr: "UI",   color: "#002A86", bg: "#D1EFFF" },
      { id: "api",  x: 1100, y: 160,label: "Internal API",      icon: null,                          abbr: "API",  color: "#737373", bg: "#f5f5f5" },
    ],
    edges: [
      { id: "e1", source: "bank", target: "cc",   edgeType: "https" },
      { id: "e2", source: "cc",   target: "is" },
      { id: "e3", source: "is",   target: "hana" },
      { id: "e4", source: "hana", target: "cap" },
      { id: "e5", source: "cap",  target: "ai" },
      { id: "e6", source: "cap",  target: "ui" },
      { id: "e7", source: "cap",  target: "api" },
    ],
    groups: [
      { id: "g-ext", label: "External",  nodeIds: ["bank","cc"],                    color: "#64748b", style: "dashed" },
      { id: "g-btp", label: "SAP BTP",   nodeIds: ["is","hana","cap","ai","ui","api"], color: "#0070F2", style: "solid"  },
    ],
  },

  "enterprise-genai-assistant": {
    nodes: [
      { id: "data",   x: 0,    y: 80,  label: "Enterprise Data",   icon: null,                       abbr: "Data", color: "#737373", bg: "#f5f5f5" },
      { id: "aicore", x: 220,  y: 80,  label: "SAP AI Core",       icon: "/icons/ai-core.svg" },
      { id: "vector", x: 220,  y: 240, label: "Vector Store",      icon: "/icons/hana-cloud.svg" },
      { id: "lc",     x: 440,  y: 80,  label: "LangChain",         icon: null,                       abbr: "LC",   color: "#1a6b3c", bg: "#d4f0e0" },
      { id: "hub",    x: 660,  y: 80,  label: "Generative AI Hub", icon: "/icons/ai-launchpad.svg" },
      { id: "cap",    x: 880,  y: 80,  label: "CAP Service",       icon: "/icons/cap.svg" },
      { id: "ui",     x: 1100, y: 80,  label: "Chat UI",           icon: null,                       abbr: "UI",   color: "#002A86", bg: "#D1EFFF" },
    ],
    edges: [
      { id: "e1", source: "data",   target: "aicore" },
      { id: "e2", source: "aicore", target: "vector" },
      { id: "e3", source: "aicore", target: "lc" },
      { id: "e4", source: "vector", target: "lc" },
      { id: "e5", source: "lc",     target: "hub",  bidirectional: true },
      { id: "e6", source: "hub",    target: "cap" },
      { id: "e7", source: "cap",    target: "ui" },
    ],
    groups: [
      { id: "g-src",  label: "Data Sources",  nodeIds: ["data"],                       color: "#64748b", style: "dashed" },
      { id: "g-ai",   label: "AI Layer",       nodeIds: ["aicore","vector","lc","hub"], color: "#00627F", style: "solid"  },
      { id: "g-app",  label: "Application",    nodeIds: ["cap","ui"],                  color: "#CC00DC", style: "solid"  },
    ],
  },

  "s4hana-ux-transformation": {
    nodes: [
      { id: "s4",    x: 0,   y: 80,  label: "S/4HANA",            icon: null, abbr: "S/4",   color: "#7a3a1a", bg: "#fde8d6" },
      { id: "fiori", x: 220, y: 80,  label: "Fiori Launchpad",    icon: null, abbr: "UI5",   color: "#002A86", bg: "#D1EFFF" },
      { id: "wz",    x: 440, y: 80,  label: "Workzone",           icon: null, abbr: "WZ",    color: "#1a7a4a", bg: "#d6f5e8" },
      { id: "pa",    x: 660, y: 80,  label: "Process Automation", icon: null, abbr: "PA",    color: "#6a1a7a", bg: "#f0d6f5" },
      { id: "ricef", x: 220, y: 240, label: "Custom Apps",        icon: null, abbr: "RICEF", color: "#5a5a1a", bg: "#f5f5d6" },
    ],
    edges: [
      { id: "e1", source: "s4",    target: "fiori" },
      { id: "e2", source: "fiori", target: "wz" },
      { id: "e3", source: "wz",    target: "pa" },
      { id: "e4", source: "fiori", target: "ricef" },
    ],
    groups: [
      { id: "g-s4",  label: "S/4HANA",  nodeIds: ["s4"],                   color: "#64748b", style: "dashed" },
      { id: "g-btp", label: "SAP BTP",  nodeIds: ["fiori","wz","pa","ricef"], color: "#0070F2", style: "solid"  },
    ],
  },

  "btp-integration-platform": {
    nodes: [
      { id: "ecc", x: 0,   y: 0,   label: "SAP ECC",          icon: null,                          abbr: "ECC", color: "#7a3a1a", bg: "#fde8d6" },
      { id: "s4",  x: 0,   y: 140, label: "S/4HANA",          icon: null,                          abbr: "S/4", color: "#7a3a1a", bg: "#fde8d6" },
      { id: "sf",  x: 0,   y: 280, label: "Salesforce",       icon: null,                          abbr: "SF",  color: "#1a5f7a", bg: "#d6eef5" },
      { id: "is",  x: 260, y: 140, label: "Integration Suite",icon: "/icons/integration-suite.svg" },
      { id: "api", x: 520, y: 60,  label: "API Management",   icon: null,                          abbr: "API", color: "#002A86", bg: "#D1EFFF" },
      { id: "hana",x: 520, y: 220, label: "HANA Cloud",       icon: "/icons/hana-cloud.svg" },
    ],
    edges: [
      { id: "e1", source: "ecc", target: "is", edgeType: "https" },
      { id: "e2", source: "s4",  target: "is" },
      { id: "e3", source: "sf",  target: "is", edgeType: "https" },
      { id: "e4", source: "is",  target: "api" },
      { id: "e5", source: "is",  target: "hana" },
    ],
    groups: [
      { id: "g-src", label: "Source Systems", nodeIds: ["ecc","s4","sf"],   color: "#64748b", style: "dashed" },
      { id: "g-btp", label: "SAP BTP",        nodeIds: ["is","api","hana"], color: "#0070F2", style: "solid"  },
    ],
  },
};
