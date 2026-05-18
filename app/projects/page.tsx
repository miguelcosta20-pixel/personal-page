import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Miguel Costa Paulo",
  description: "Selected projects by Miguel Costa Paulo — enterprise AI and SAP BTP architecture work.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-16">
      <section className="pt-16 pb-12 hero-fade">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-3">
          Projects
        </h1>
        <p className="text-base text-[#737373] max-w-lg leading-relaxed">
          A mix of client work and personal projects. Customer engagements are under NDA, summaries reflect my role and technical scope without naming the customer.
        </p>
      </section>

      <section className="pb-16 space-y-5">
        {projects.map((project, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <Link
              href={`/projects/${project.slug}`}
              className="group block ring-1 ring-black/[0.06] p-1.5 rounded-[1.5rem] bg-black/[0.02] hover:bg-black/[0.04]"
              style={{ transition: "background-color 160ms ease-out" }}
            >
              <div className="rounded-[calc(1.5rem-0.375rem)] bg-white border border-[#f0f0f0] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-semibold text-[#0a0a0a]">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#D1EFFF] text-[#002A86] border border-[#89D1FF]">
                      {project.role}
                    </span>
                    <span className="px-2.5 py-1 text-xs rounded-full bg-[#f5f5f5] text-[#737373] border border-[#e5e5e5]">
                      {project.badge ?? "Under NDA"}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#404040] leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-[#a3a3a3] mr-1">{project.year}</span>
                    {project.stack.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 text-xs text-[#0a0a0a] border border-[#e5e5e5] rounded-full bg-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-[#0070F2] group-hover:underline shrink-0">
                    View case study →
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </section>
    </main>
  );
}
