import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Languages } from "@/components/Languages";
import { DownloadCVButton } from "@/components/DownloadCVButton";

export const metadata = {
  title: "CV — Miguel Costa Paulo",
  description: "Full CV for Miguel Costa Paulo, SAP BTP & AI Architect.",
};

export default function CVPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-16">
      <div className="no-print flex justify-end pt-4">
        <DownloadCVButton />
      </div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
      <Languages />
    </main>
  );
}
