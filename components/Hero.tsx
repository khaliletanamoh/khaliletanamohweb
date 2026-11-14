import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { site } from "@/data/site";
import { homeCopy } from "@/data/redesign";

export default function Hero() {
  const { personal } = portfolioData;
  const projectCount = site.projects.length;

  return (
    <section id="home" className="hero-section relative isolate min-h-svh overflow-hidden">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="container relative z-10 grid min-h-svh items-center gap-10 py-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
        <div className="mx-auto w-full max-w-2xl pt-4 sm:pt-8 lg:mx-0 lg:pt-0">
          <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-200 sm:text-sm">
            <Sparkles size={15} className="text-yellow-300" />
            {homeCopy.hero.badge}
          </span>
          <h1 className="mt-6 font-display text-[clamp(2.65rem,10vw,5.75rem)] font-bold leading-[1.04] tracking-tight text-[var(--foreground)]">
            Hi, I’m <span className="text-blue-400">Khalil Etana</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-[var(--muted)] sm:text-xl">
            {homeCopy.hero.subtitle}
          </p>
          <p className="mt-5 border-l-2 border-yellow-400 py-1 pl-4 text-sm font-medium leading-6 text-[var(--foreground)] sm:text-base">
            {homeCopy.hero.tagline}
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
            <a href="#projects" className="btn btn-primary w-full justify-center min-[420px]:w-auto">
              Explore My Work <ArrowRight size={17} />
            </a>
            <a href={personal.cv} download className="btn btn-outline w-full justify-center min-[420px]:w-auto">
              Download CV <ArrowDownToLine size={17} />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3" aria-label="Social profiles">
            <a className="social-icon" href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a className="social-icon" href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a className="social-icon" href={`mailto:${personal.email}`} aria-label="Email"><Mail size={18} /></a>
            <span className="ml-1 inline-flex items-center gap-1.5 text-xs text-[var(--muted)]"><MapPin size={14} className="text-blue-400" />{personal.location}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl pb-3 pt-2 lg:pb-0">
          <div aria-hidden="true" className="hero-photo-glow absolute inset-8 rounded-full blur-3xl" />
          <div className="hero-photo-frame relative mx-auto aspect-[4/4.5] w-[min(100%,26rem)] overflow-hidden rounded-[2rem] border border-blue-400/30 shadow-2xl shadow-blue-950/50 sm:aspect-[4/4.2] lg:w-full">
            <Image src="/images/photo.jpg" alt="Khalil Etana, Industrial Engineering student and web developer" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040a18]/80 via-transparent to-blue-900/10" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-200">{personal.role}</p>
              <p className="mt-1 text-lg font-bold text-white sm:text-xl">{personal.name}</p>
            </div>
          </div>
          <span className="floating-badge absolute left-0 top-[16%] rounded-2xl border border-blue-300/30 bg-[var(--surface)]/95 p-3 font-mono text-sm font-bold text-blue-300 shadow-xl sm:-left-3 sm:p-4">&lt;/&gt;</span>
          <span className="floating-badge absolute right-0 top-[43%] rounded-2xl border border-cyan-300/25 bg-[var(--surface)]/95 px-3 py-2 text-xs font-bold text-cyan-200 shadow-xl sm:-right-4 sm:px-4 sm:py-3">React</span>
          <span className="floating-badge absolute bottom-[13%] right-2 rounded-2xl border border-yellow-300/25 bg-[var(--surface)]/95 px-3 py-2 text-xs font-bold text-yellow-200 shadow-xl sm:bottom-[11%] sm:right-6 sm:px-4 sm:py-3">JS · TS</span>
          <div className="mt-5 flex items-center justify-between gap-4 px-1 text-xs text-[var(--muted)] sm:text-sm">
            <span>{homeCopy.hero.photoCaption}</span>
            <span className="inline-flex shrink-0 items-center gap-2 font-semibold text-blue-300"><span className="h-2 w-2 rounded-full bg-blue-400" />{String(projectCount).padStart(2, "0")} projects</span>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-[var(--muted)] hover:text-blue-300 lg:inline-flex"><span>Scroll to explore</span><ArrowDown size={14} /></a>
      <span className="sr-only"><ArrowUpRight /></span>
    </section>
  );
}
