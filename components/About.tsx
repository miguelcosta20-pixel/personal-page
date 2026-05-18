import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <h2 className="text-sm font-medium text-[#737373] uppercase tracking-wide shrink-0 w-32">
            About
          </h2>
          <p className="text-base text-[#404040] leading-relaxed">
            8+ years of customer-facing experience in the SAP ecosystem,
            specialising in AI and cloud architecture on SAP BTP. I work across
            the full solution lifecycle, from solution advisory and RFx to hands-on
            implementation, helping enterprise customers turn SAP AI capabilities
            into real business outcomes. Currently based in Lisbon, focused on
            SAP AI Core, Generative AI Hub, and the future of intelligent
            enterprise software.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
