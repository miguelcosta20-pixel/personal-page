import { FadeIn } from "./FadeIn";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        <h2 className="text-sm font-medium text-[#737373] uppercase tracking-wide shrink-0 w-32">
          Skills
        </h2>
        <div className="flex-1 space-y-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: i === 0 ? '#002A86' : '#737373' }}>
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      i === 0
                        ? 'skill-pill-accent'
                        : 'text-[#0a0a0a] border-[#e5e5e5] bg-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
