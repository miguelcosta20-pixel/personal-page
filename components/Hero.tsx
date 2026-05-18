import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-24 pb-16 hero-fade">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10">

        {/* Left — content */}
        <div className="flex-1">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-medium bg-[#D1EFFF] text-[#002A86] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0070F2] inline-block" />
            Available for SAP AI &amp; BTP roles
          </span>

          <h1 className="text-5xl font-semibold tracking-tighter text-[#0a0a0a] mb-3 leading-[1.1]">
            Miguel Costa Paulo
          </h1>
          <p className="text-xl text-[#737373] mb-8">
            SAP BTP &amp; AI Architect
          </p>
          <p className="text-base text-[#404040] max-w-lg leading-relaxed mb-10">
            AI-first architect with 8+ years designing and delivering production AI
            systems on SAP BTP. Specialising in LLM strategy, Generative AI Hub,
            and end-to-end cloud architecture across EMEA.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:miguelcosta20@gmail.com"
              className="contact-link inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full border border-[#e5e5e5] text-sm text-[#0a0a0a] bg-white"
            >
              miguelcosta20@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/miguelcosta20"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full border border-[#e5e5e5] text-sm text-[#0a0a0a] bg-white"
            >
              LinkedIn
              <span aria-hidden="true" className="w-6 h-6 rounded-full bg-[#f5f5f5] flex items-center justify-center text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Right — avatar */}
        <div className="shrink-0 self-start">
          <div className="ring-1 ring-black/[0.06] p-1.5 rounded-[1.75rem] bg-black/[0.03]">
            <Image
              src="/miguel.jpg"
              alt="Miguel Costa Paulo"
              width={160}
              height={160}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-[calc(1.75rem-0.375rem)] object-cover object-top shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
