import { FadeIn } from "./FadeIn";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <h2 className="text-sm font-medium text-[#737373] uppercase tracking-wide shrink-0 w-32">
            Certifications
          </h2>
          <div className="flex-1 flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm text-[#404040] border border-[#e5e5e5] rounded-lg bg-white leading-snug"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
