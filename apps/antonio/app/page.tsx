export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <p className="section-label mb-6">Solicitador · Vila Real</p>
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--color-ink)" }}>
          António<br />Costa Paulo
        </h1>
        <div
          className="accent-banner mt-6 px-4 py-2 text-sm font-semibold tracking-widest uppercase"
        >
          Solicitador
        </div>
        <p className="mt-8 text-sm" style={{ color: "var(--color-slate)" }}>
          Site em construção.
        </p>
      </div>
    </main>
  );
}
