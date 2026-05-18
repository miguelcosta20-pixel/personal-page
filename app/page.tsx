import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <section className="min-h-[88dvh] flex flex-col justify-center py-16 hero-fade">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">

          {/* Left — content */}
          <div className="flex-1 max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-medium bg-[#D1EFFF] text-[#002A86] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070F2] inline-block" />
              Open to new roles
            </span>

            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter text-[#0a0a0a] mb-4 leading-[1.05]">
              Miguel<br />Costa Paulo.
            </h1>

            <h2 className="text-xl font-medium tracking-tight text-[#737373] mb-6">
              SAP BTP &amp; AI Architect
            </h2>

            <p className="text-base text-[#737373] mb-10 max-w-lg leading-relaxed">
              8+ years designing and delivering production AI and cloud solutions for global enterprises.
              Specialising in SAP AI Core, Generative AI Hub, and BTP cloud architecture —
              bridging solution advisory with hands-on delivery worldwide.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#0070F2] active:scale-[0.97]"
                style={{ transition: "background-color 160ms ease-out, transform 160ms ease-out" }}
              >
                View projects
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
              </Link>
              <Link
                href="/cv"
                className="contact-link inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e5e5e5] text-sm font-medium text-[#0a0a0a] bg-white active:scale-[0.97]"
                style={{ transition: "border-color 160ms ease-out, background-color 160ms ease-out, transform 160ms ease-out" }}
              >
                View CV
              </Link>
            </div>
          </div>

          {/* Right — photo */}
          <div className="shrink-0 self-center sm:self-auto">
            <div className="ring-1 ring-black/[0.06] p-1.5 rounded-[2rem] bg-black/[0.03]">
              <Image
                src="/miguel.jpg"
                alt="Miguel Costa Paulo"
                width={220}
                height={220}
                className="w-40 h-40 sm:w-52 sm:h-52 rounded-[calc(2rem-0.375rem)] object-cover object-top shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]"
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
