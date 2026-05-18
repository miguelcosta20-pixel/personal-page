"use client";

import { useEffect, useState } from "react";
import {
  ReactFlow,
  Handle,
  Position,
  MarkerType,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { FlowNodeDef, FlowEdgeDef } from "@/lib/data";

type ServiceData = {
  label: string;
  icon: string | null;
  abbr?: string;
  color?: string;
  bg?: string;
};

function ServiceNode({ data }: NodeProps) {
  const d = data as ServiceData;
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={{ width: 6, height: 6, background: "#d4d4d4", border: "none" }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        style={{ width: 6, height: 6, background: "#d4d4d4", border: "none" }}
      />
      <div className="ring-1 ring-black/[0.06] p-[3px] rounded-xl bg-black/[0.02]">
        <div className="rounded-[calc(0.75rem-3px)] bg-white border border-[#f0f0f0] px-2 py-2 flex flex-col items-center gap-1 w-[90px] min-h-[68px] justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
          {d.icon ? (
            <img src={d.icon} alt={d.label} className="w-6 h-6 object-contain" />
          ) : (
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center text-[8px] font-bold tracking-tight"
              style={{ background: d.bg, color: d.color }}
            >
              {d.abbr}
            </div>
          )}
          <span className="text-[9px] text-[#0a0a0a] font-medium text-center leading-tight">
            {d.label}
          </span>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={{ width: 6, height: 6, background: "#d4d4d4", border: "none" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={{ width: 6, height: 6, background: "#d4d4d4", border: "none" }}
      />
    </>
  );
}

const nodeTypes = { service: ServiceNode };

function toRFNodes(defs: FlowNodeDef[]): Node[] {
  return defs.map((d) => ({
    id: d.id,
    type: "service",
    position: { x: d.x, y: d.y },
    data: { label: d.label, icon: d.icon, abbr: d.abbr, color: d.color, bg: d.bg },
  }));
}

function toRFEdges(defs: FlowEdgeDef[]): Edge[] {
  return defs.map((d) => ({
    id: d.id,
    source: d.source,
    target: d.target,
    type: "smoothstep",
    style: { stroke: "#d4d4d4", strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#d4d4d4", width: 14, height: 14 },
    ...(d.bidirectional && {
      markerStart: { type: MarkerType.ArrowClosed, color: "#d4d4d4", width: 14, height: 14 },
    }),
  }));
}

interface ArchDiagramProps {
  nodes: FlowNodeDef[];
  edges: FlowEdgeDef[];
}

export function ArchDiagram({ nodes, edges }: ArchDiagramProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-full rounded-2xl ring-1 ring-black/[0.06] bg-[#fafaf9]" style={{ height: 260 }} />
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden ring-1 ring-black/[0.06]" style={{ height: 260 }}>
      <ReactFlow
        nodes={toRFNodes(nodes)}
        edges={toRFEdges(edges)}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll={false}
        zoomOnScroll={false}
        panOnDrag={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: "#fafaf9" }}
      />
    </div>
  );
}
