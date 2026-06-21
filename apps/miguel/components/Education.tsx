import { FadeIn } from "./FadeIn";

export function Education() {
  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <h2 className="text-sm font-medium text-[#737373] uppercase tracking-wide shrink-0 w-32">
            Education
          </h2>
          <div className="flex-1">
            <p className="text-base font-medium text-[#0a0a0a]">
              Master&apos;s Degree in Electrical and Computer Engineering
            </p>
            <p className="text-sm text-[#737373] mt-0.5">
              UTAD · Vila Real, Portugal · 2014 – 2016
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
