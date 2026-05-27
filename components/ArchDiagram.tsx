"use client";

import { useEffect, useState } from "react";
import {
  ReactFlow,
  Handle,
  Position,
  MarkerType,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { FlowNodeDef, FlowEdgeDef, FlowGroupDef } from "@/lib/data";

// ─── ServiceNode ───────────────────────────────────────────────────────────────

type ServiceData = {
  label: string;
  icon: string | null;
  abbr?: string;
  color?: string;
  bg?: string;
};

const HANDLE_STYLE = { width: 6, height: 6, background: "transparent", border: "none" };

function ServiceNode({ data }: NodeProps) {
  const d = data as ServiceData;
  const borderColor = d.color ?? "#0070F2";
  const iconBg = d.bg ?? "#e8f4fd";

  return (
    <>
      <Handle type="target" position={Position.Left}   id="left"   style={HANDLE_STYLE} />
      <Handle type="target" position={Position.Top}    id="top"    style={HANDLE_STYLE} />
      <div
        className="bg-white rounded-xl px-2.5 pt-3 pb-2.5 flex flex-col items-center gap-2"
        style={{
          width: 110,
          minHeight: 96,
          border: `1.5px solid ${borderColor}`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          transition: "box-shadow 160ms ease-out, border-color 160ms ease-out",
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ background: iconBg }}
        >
          {d.icon ? (
            <img src={d.icon} alt={d.label} className="w-7 h-7 object-contain" />
          ) : (
            <span
              className="text-[10px] font-bold tracking-tight text-center leading-tight px-1"
              style={{ color: borderColor }}
            >
              {d.abbr}
            </span>
          )}
        </div>
        <span className="text-[9.5px] text-[#0f172a] font-medium text-center leading-tight">
          {d.label}
        </span>
      </div>
      <Handle type="source" position={Position.Right}  id="right"  style={HANDLE_STYLE} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={HANDLE_STYLE} />
    </>
  );
}

// ─── GroupNode ─────────────────────────────────────────────────────────────────

type GroupData = {
  label: string;
  color: string;
  groupStyle: "solid" | "dashed";
};

function GroupNode({ data }: NodeProps) {
  const d = data as GroupData;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        border: `1.5px ${d.groupStyle === "dashed" ? "dashed" : "solid"} ${d.color}`,
        borderRadius: 12,
        background: `${d.color}0d`,
        position: "relative",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 6,
          left: 10,
          fontSize: 8,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: d.color,
          opacity: 0.85,
        }}
      >
        {d.label}
      </span>
    </div>
  );
}

const nodeTypes = { service: ServiceNode, group: GroupNode };

// ─── Edge conversion ───────────────────────────────────────────────────────────

function toRFEdges(defs: FlowEdgeDef[]): Edge[] {
  return defs.map((d) => {
    const isTrust = d.edgeType === "trust";
    const isDashed = d.edgeType === "dashed" || isTrust;
    const isHttps = d.edgeType === "https";
    const isBidir = d.bidirectional || isTrust;
    const color = isTrust ? "#CC00DC" : "#334155";

    const edge: Edge = {
      id: d.id,
      source: d.source,
      target: d.target,
      type: "smoothstep",
      style: {
        stroke: color,
        strokeWidth: 2,
        ...(isDashed && { strokeDasharray: "5 4" }),
      },
      markerEnd: { type: MarkerType.ArrowClosed, color, width: 12, height: 12 },
    };

    if (isBidir) {
      edge.markerStart = { type: MarkerType.ArrowClosed, color, width: 12, height: 12 };
    }

    if (isHttps) {
      edge.label = "HTTPS";
      edge.labelStyle = { fontSize: 8, fontWeight: 600, fill: "#334155" };
      edge.labelBgStyle = { fill: "#e2e8f0" };
      edge.labelBgPadding = [4, 3];
      edge.labelBgBorderRadius = 4;
    }

    if (isTrust) {
      edge.label = "Trust";
      edge.labelStyle = { fontSize: 8, fontWeight: 600, fill: "#CC00DC" };
      edge.labelBgStyle = { fill: "#fce7ff" };
      edge.labelBgPadding = [4, 3];
      edge.labelBgBorderRadius = 4;
    }

    return edge;
  });
}

// ─── Node conversion ───────────────────────────────────────────────────────────

const NODE_W = 110;
const NODE_H = 100;
const PAD_X = 22;
const PAD_TOP = 28;
const PAD_BOTTOM = 16;

function toRFNodes(nodeDefs: FlowNodeDef[], groups?: FlowGroupDef[]): Node[] {
  const serviceNodes: Node[] = nodeDefs.map((d) => ({
    id: d.id,
    type: "service",
    position: { x: d.x, y: d.y },
    data: { label: d.label, icon: d.icon, abbr: d.abbr, color: d.color, bg: d.bg },
    zIndex: 2,
    selectable: false,
    draggable: false,
  }));

  if (!groups?.length) return serviceNodes;

  const posMap = Object.fromEntries(nodeDefs.map((n) => [n.id, { x: n.x, y: n.y }]));

  const groupNodes: Node[] = groups.flatMap((g) => {
    const positions = g.nodeIds.map((id) => posMap[id]).filter(Boolean);
    if (!positions.length) return [];

    const xs = positions.map((p) => p.x);
    const ys = positions.map((p) => p.y);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);

    return [{
      id: g.id,
      type: "group",
      position: { x: minX - PAD_X, y: minY - PAD_TOP },
      style: {
        width:  (maxX - minX) + NODE_W + PAD_X * 2,
        height: (maxY - minY) + NODE_H + PAD_TOP + PAD_BOTTOM,
        pointerEvents: "none" as const,
      },
      data: { label: g.label, color: g.color, groupStyle: g.style },
      zIndex: 0,
      selectable: false,
      draggable: false,
    }];
  });

  return [...groupNodes, ...serviceNodes];
}

// ─── Component ────────────────────────────────────────────────────────────────

interface ArchDiagramProps {
  nodes: FlowNodeDef[];
  edges: FlowEdgeDef[];
  groups?: FlowGroupDef[];
}

export function ArchDiagram({ nodes, edges, groups }: ArchDiagramProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className="w-full rounded-2xl ring-1 ring-black/[0.06] bg-[#f8fafc]"
        style={{ height: 380 }}
      />
    );
  }

  return (
    <div
      className="w-full rounded-2xl overflow-hidden ring-1 ring-black/[0.06]"
      style={{ height: 380 }}
      role="img"
      aria-label="Architecture diagram showing the solution components and their connections"
    >
      <ReactFlow
        nodes={toRFNodes(nodes, groups)}
        edges={toRFEdges(edges)}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.22 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll={false}
        zoomOnScroll={true}
        panOnDrag={true}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: "#f8fafc" }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          color="#cbd5e1"
          gap={20}
          size={1}
        />
      </ReactFlow>
    </div>
  );
}
