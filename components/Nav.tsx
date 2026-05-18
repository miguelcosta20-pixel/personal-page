"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    href: "/about",
    label: "About",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
    ),
  },
  {
    href: "/cv",
    label: "CV",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
        <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2Zm2 1v1h6V3H5Zm0 3v1h6V6H5Zm0 3v1h4V9H5Z" />
      </svg>
    ),
  },
  {
    href: "/projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
        <path fillRule="evenodd" d="M2 2.5A.5.5 0 0 1 2.5 2h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm-6 6A.5.5 0 0 1 2.5 8h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" width="13" height="13">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 4.5A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v7A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5v-7ZM2 5l6 4 6-4" />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/miguelcosta20-pixel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/miguelcosta20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Left — name */}
          <Link href="/" className="text-sm font-semibold text-[#0a0a0a] hover:text-[#0070F2] whitespace-nowrap" style={{ transition: "color 160ms ease-out" }}>
            Miguel Costa Paulo
          </Link>

          {/* Center — pill nav (desktop) */}
          <nav className="hidden sm:flex items-center gap-1 bg-[#f5f5f5] rounded-full px-2 py-1.5">
            {navLinks.map(({ href, label, icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${
                    active
                      ? "bg-white text-[#0070F2] shadow-sm font-medium"
                      : "text-[#737373] hover:text-[#0a0a0a]"
                  }`}
                  style={{ transition: "color 160ms ease-out, background-color 160ms ease-out" }}
                >
                  {icon}
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right — hamburger (mobile) */}
          <div className="flex items-center">
            <button
              onClick={() => setOpen(true)}
              className="sm:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Open menu"
            >
              <span className="block w-4 h-px bg-[#0a0a0a] rounded-full" />
              <span className="block w-4 h-px bg-[#0a0a0a] rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-[#e5e5e5] text-[#737373] hover:text-[#0a0a0a]"
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-2xl font-medium mobile-nav-item ${pathname === href ? "text-[#0070F2]" : "text-[#737373]"}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-5 mt-4">
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-[#a3a3a3]">
                  {icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
