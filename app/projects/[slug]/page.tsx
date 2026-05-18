import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { ArchDiagram } from "@/components/ArchDiagram";
import { projects, type ArchNode } from "@/lib/data";
import { flowDiagrams } from "@/lib/diagrams";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Miguel Costa Paulo`,
    description: project.summary,
  };
}

function ArchNodeCard({ node }: { node: ArchNode }) {
  return (
    <div className="ring-1 ring-black/[0.06] p-1 rounded-2xl bg-black/[0.02]">
      <div className="rounded-[calc(1rem-0.25rem)] bg-white border border-[#f0f0f0] p-3 flex flex-col items-center gap-2 min-h-[80px] justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
        {node.icon ? (
          <Image src={node.icon} alt={node.label} width={32} height={32} className="w-8 h-8" />
        ) : (
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold tracking-tight"
            style={{ background: node.bg, color: node.color }}
          >
            {node.abbr}
          </div>
        )}
        <span className="text-[11px] text-[#0a0a0a] font-medium text-center leading-tight">
          {node.label}
        </span>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const flowDiagram = flowDiagrams[project.slug];

  return (
    <main className="max-w-3xl mx-auto px-6 pb-16">

      {/* Header */}
      <section className="pt-16 pb-10 hero-fade">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#0a0a0a] mb-8"
          style={{ transition: "color 160ms ease-out" }}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
            <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#D1EFFF] text-[#002A86] border border-[#89D1FF]">
            {project.role}
          </span>
          <span className="px-2.5 py-1 text-xs rounded-full bg-[#f5f5f5] text-[#737373] border border-[#e5e5e5]">
            {project.badge ?? "Under NDA"}
          </span>
          <span className="text-xs text-[#a3a3a3]">{project.year}</span>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs text-[#0a0a0a] border border-[#e5e5e5] rounded-full bg-white">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* The Challenge */}
      <FadeIn>
        <section className="border-t border-[#e5e5e5] py-12">
          <h2 className="text-xs font-medium text-[#737373] uppercase tracking-wide mb-4">
            The Challenge
          </h2>
          <p className="text-base text-[#404040] leading-relaxed max-w-2xl">
            {project.challenge}
          </p>
        </section>
      </FadeIn>

      {/* Technology */}
      <FadeIn delay={0.05}>
        <section className="border-t border-[#e5e5e5] py-12">
          <h2 className="text-xs font-medium text-[#737373] uppercase tracking-wide mb-6">
            Technology
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.architecture.flatMap((row) => row).map((node, ni) => (
              <ArchNodeCard key={ni} node={node} />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Architecture Diagram */}
      {flowDiagram && (
        <FadeIn delay={0.08}>
          <section className="border-t border-[#e5e5e5] py-12">
            <h2 className="text-xs font-medium text-[#737373] uppercase tracking-wide mb-6">
              Architecture
            </h2>
            <ArchDiagram nodes={flowDiagram.nodes} edges={flowDiagram.edges} />
          </section>
        </FadeIn>
      )}

      {/* My Role */}
      <FadeIn delay={0.1}>
        <section className="border-t border-[#e5e5e5] py-12">
          <h2 className="text-xs font-medium text-[#737373] uppercase tracking-wide mb-4">
            My Role
          </h2>
          <ul className="space-y-3">
            {project.contributions.map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-[#404040] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070F2] shrink-0 mt-[0.55rem]" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Outcomes */}
      <FadeIn delay={0.15}>
        <section className="border-t border-[#e5e5e5] py-12">
          <h2 className="text-xs font-medium text-[#737373] uppercase tracking-wide mb-4">
            Outcomes
          </h2>
          <ul className="space-y-3">
            {project.outcomes.map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-[#404040] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070F2] shrink-0 mt-[0.55rem]" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

    </main>
  );
}
