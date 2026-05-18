import { FadeIn } from "./FadeIn";
import { languages } from "@/lib/data";

export function Languages() {
  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <h2 className="text-sm font-medium text-[#737373] uppercase tracking-wide shrink-0 w-32">
            Languages
          </h2>
          <div className="flex flex-wrap gap-6">
            {languages.map((lang, i) => (
              <div key={i}>
                <span className="text-sm font-medium text-[#0a0a0a]">{lang.name}</span>
                <span className="text-sm text-[#737373] ml-1.5">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
