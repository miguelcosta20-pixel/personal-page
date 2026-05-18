"use client";

export function DownloadCVButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print contact-link inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5e5e5] text-sm text-[#0a0a0a] bg-white"
    >
      Download PDF
      <span className="w-5 h-5 rounded-full bg-[#f5f5f5] flex items-center justify-center text-xs">↓</span>
    </button>
  );
}
