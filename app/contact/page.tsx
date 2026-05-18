export const metadata = {
  title: "Contact — Miguel Costa Paulo",
  description: "Get in touch with Miguel Costa Paulo — SAP BTP & AI Architect based in Lisbon.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center text-center px-6 hero-fade">
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#0a0a0a] mb-6 leading-[1.0]">
        Let&apos;s Work<br />Together
      </h1>

      <p className="text-base text-[#737373] max-w-sm leading-relaxed mb-10">
        I&apos;m always excited to collaborate, innovate, and build meaningful
        solutions. Whether you have a project, a job opportunity, or just want
        to connect, send me a message.
      </p>

      <a
        href="mailto:miguelcosta20@gmail.com"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#0070F2] active:scale-[0.97]"
        style={{ transition: "background-color 160ms ease-out, transform 160ms ease-out" }}
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" width="14" height="14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4.5A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v7A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5v-7ZM2 5l6 4 6-4" />
        </svg>
        Get in Touch
      </a>
    </main>
  );
}
