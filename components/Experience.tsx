"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/lib/data";

export function Experience() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${i * 0.05}s`;
            el.setAttribute("data-visible", "");
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        <h2 className="text-sm font-medium text-[#737373] uppercase tracking-wide shrink-0 w-32">
          Experience
        </h2>
        <div className="flex-1 space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-fade
              className="relative pl-5 border-l border-[#e5e5e5]"
            >
              <span className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full border-2 border-[#0070F2] bg-[#D1EFFF]" />
              <p className="text-base font-medium text-[#0a0a0a] leading-snug">
                {exp.role}
              </p>
              <p className="text-sm text-[#737373] mt-0.5 mb-3">
                {exp.company} · {exp.location} · {exp.period}
              </p>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-[#404040] leading-relaxed flex gap-2">
                    <span aria-hidden="true" className="text-[#737373] shrink-0 mt-0.5">–</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
