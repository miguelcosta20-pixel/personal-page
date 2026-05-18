import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <section className="min-h-[80dvh] flex flex-col justify-center items-center text-center py-16 hero-fade">
        <p className="text-[#0070F2] font-medium mb-4 text-lg">
          Hi, I&apos;m
        </p>

        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#0a0a0a] mb-4 leading-[1.05]">
          Miguel Costa Paulo.
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#a3a3a3] mb-6 leading-[1.1]">
          SAP BTP &amp; AI Architect
        </h2>

        <p className="text-base text-[#737373] mb-10 max-w-md">
          I design and build AI &amp; cloud solutions for the enterprise.
          Based in Lisbon, <span className="text-[#0070F2]">open to new roles</span>.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
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
            className="contact-link inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e5e5e5] text-sm font-medium text-[#0a0a0a] bg-white"
          >
            View CV
          </Link>
        </div>
      </section>
    </main>
  );
}
