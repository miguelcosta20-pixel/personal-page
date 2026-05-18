export const metadata = {
  title: "Contact — Miguel Costa Paulo",
  description: "Get in touch with Miguel Costa Paulo, SAP BTP & AI Architect based in Lisbon.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-16">
      <section className="min-h-[calc(100dvh-8rem)] flex flex-col justify-center py-16 hero-fade">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter text-[#0a0a0a] mb-6 leading-[1.05]">
          Get in touch.
        </h1>

        <p className="text-base text-[#737373] max-w-md leading-relaxed mb-10">
          I take on a small number of AI architecture and BTP engagements at a time.
          If you have something worth building, reach out.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:miguelcosta20@gmail.com"
            className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full text-sm font-medium text-white bg-[#0070F2]"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" width="14" height="14" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 4.5A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v7A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5v-7ZM2 5l6 4 6-4" />
            </svg>
            miguelcosta20@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/miguelcosta20"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full border border-[#e5e5e5] text-sm font-medium text-[#0a0a0a] bg-white active:scale-[0.97]"
            style={{ transition: "border-color 160ms ease-out, background-color 160ms ease-out, transform 160ms ease-out" }}
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
