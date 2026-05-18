import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "About — Miguel Costa Paulo",
  description: "SAP BTP & AI Architect with 8+ years delivering enterprise AI and cloud solutions.",
};

const techGroups = [
  {
    label: "AI & Generative AI",
    items: [
      { label: "SAP AI Core",         icon: "/icons/ai-core.svg" },
      { label: "AI Launchpad",        icon: "/icons/ai-launchpad.svg" },
      { label: "Joule",               icon: "/icons/joule.svg" },
      { label: "LangChain",           icon: null, abbr: "LC",  color: "#1a6b3c", bg: "#d4f0e0" },
    ],
  },
  {
    label: "BTP Platform",
    items: [
      { label: "HANA Cloud",          icon: "/icons/hana-cloud.svg" },
      { label: "Integration Suite",   icon: "/icons/integration-suite.svg" },
      { label: "Business Data Cloud", icon: "/icons/business-data-cloud.svg" },
      { label: "CAP",                 icon: "/icons/cap.svg" },
      { label: "Cloud Foundry",       icon: "/icons/cloud-foundry.svg" },
    ],
  },
  {
    label: "UX & Applications",
    items: [
      { label: "SAP Fiori",           icon: null, abbr: "UI5", color: "#002A86", bg: "#D1EFFF" },
      { label: "S/4HANA",             icon: null, abbr: "S/4", color: "#7a3a1a", bg: "#fde8d6" },
    ],
  },
  {
    label: "Languages & Frameworks",
    items: [
      { label: "Python",              icon: "/icons/python.svg" },
      { label: "Node.js",             icon: "/icons/nodejs.svg" },
      { label: "Java",                icon: "/icons/java.svg" },
      { label: "TypeScript",          icon: null, abbr: "TS",  color: "#1a5276", bg: "#d6eaf8" },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-16">

      {/* What I do */}
      <section className="min-h-[50dvh] flex flex-col justify-center pt-16 pb-12 hero-fade">
        <h1 className="text-4xl font-semibold tracking-tighter text-[#0a0a0a] mb-6">
          What I Do
        </h1>
        <p className="text-base text-[#737373] leading-relaxed max-w-lg">
          SAP BTP &amp; AI Architect with 8+ years designing and delivering
          production AI and cloud solutions across the enterprise. I specialise
          in SAP AI Core, Generative AI Hub, and BTP cloud architecture,
          bridging solution advisory with hands-on delivery across EMEA
          and beyond. Focused on turning complex SAP landscapes into intelligent,
          scalable platforms.
        </p>
      </section>

      {/* Tech I Work With */}
      <FadeIn>
        <section className="border-t border-[#e5e5e5] pb-16 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] mb-10">
            Tech I Work With
          </h2>
          <div className="flex flex-col gap-8">
            {techGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-medium text-[#737373] uppercase tracking-wide mb-3">
                  {group.label}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {group.items.map((t) => (
                    <div
                      key={t.label}
                      className="ring-1 ring-black/[0.06] p-1 rounded-2xl bg-black/[0.02] h-full"
                    >
                      <div className="rounded-[calc(1rem-0.25rem)] bg-white border border-[#f0f0f0] p-4 flex flex-col items-center gap-2 h-full min-h-[96px] justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                        {t.icon ? (
                          <Image src={t.icon} alt={t.label} width={40} height={40} className="w-10 h-10" />
                        ) : (
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold tracking-tight"
                            style={{ background: t.bg, color: t.color }}
                          >
                            {t.abbr}
                          </div>
                        )}
                        <span className="text-xs text-[#0a0a0a] font-medium text-center leading-tight">
                          {t.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
