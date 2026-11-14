import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { homeCopy } from "@/data/redesign";

export default function Footer() {
  const { personal } = portfolioData;
  return <footer className="site-footer"><div className="container">
    <div className="flex flex-col gap-6 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-center sm:justify-between">
      <a href="#home" className="inline-flex items-center gap-2 text-lg font-bold"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">K</span><span>Khalil <span className="text-blue-400">Etana</span></span></a>
      <p className="text-sm font-medium tracking-wide text-[var(--muted)]">{homeCopy.footer.tagline}</p>
      <div className="flex gap-2"><a className="social-icon" href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a className="social-icon" href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a className="social-icon" href={`mailto:${personal.email}`} aria-label="Email"><Mail size={17} /></a></div>
    </div>
    <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 py-5 text-xs text-[var(--muted)]">{homeCopy.navigation.map((link) => <a key={link.href} href={link.href} className="hover:text-blue-300">{link.label}</a>)}</nav>
    <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Khalil Etana. All rights reserved.</p><a href="#home" className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-[var(--border)] px-4 hover:text-blue-300 sm:self-auto">Back to top <ArrowUp size={14} /></a></div>
  </div></footer>;
}
