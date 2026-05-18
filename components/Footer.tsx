export function Footer() {
  return (
    <footer className="py-12 border-t border-[#e5e5e5]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-sm text-[#737373]">Miguel Costa Paulo</p>
        <div className="flex gap-4">
          <a
            href="mailto:miguelcosta20@gmail.com"
            className="text-sm text-[#737373] hover:text-[#0a0a0a]"
            style={{ transition: "color 160ms ease-out" }}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/miguelcosta20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#737373] hover:text-[#0a0a0a]"
            style={{ transition: "color 160ms ease-out" }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
