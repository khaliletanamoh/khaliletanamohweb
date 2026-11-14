import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Cpu,
  Layers3,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const skillTags = ["Next.js", "React", "TypeScript", "Industrial Engineering"];

export default function Hero() {
  const { personal, hero } = portfolioData;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-[#070b14] pb-20 pt-28 sm:min-h-screen"
    >
      {/* Original abstract tech backdrop: layered gradients, no image asset. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(14,165,233,0.17),transparent_38%),radial-gradient(ellipse_at_90%_15%,rgba(45,212,191,0.12),transparent_28%),linear-gradient(135deg,#070b14_0%,#0b1424_52%,#08111e_100%)]" />
        <div className="absolute -right-32 top-12 h-[28rem] w-[28rem] rounded-full border border-cyan-300/10 sm:right-0 sm:top-1/2 sm:-translate-y-1/2" />
        <div className="absolute -right-20 top-24 h-[22rem] w-[22rem] rounded-full border border-blue-300/10 sm:right-12 sm:top-1/2 sm:-translate-y-1/2" />
        <div className="absolute right-8 top-36 h-[16rem] w-[16rem] rounded-full border border-teal-300/10 sm:right-24 sm:top-1/2 sm:-translate-y-1/2" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(90deg,black,transparent_85%)]" />
        <div className="absolute -left-36 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow">{hero.eyebrow}</p>

            <h1 className="heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
              {personal.name}
              <br />
              <span className="gradient-text">{hero.title}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              {hero.description}
            </p>

            <p className="mt-5 text-sm font-medium text-gray-200 sm:text-base">
              {personal.role}
              <span className="mx-3 text-teal-400">/</span>
              {personal.location}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary shadow-lg shadow-blue-500/20">
                {hero.primaryButton}
                <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="btn btn-outline border-white/20 bg-white/[0.03]">
                {hero.secondaryButton}
                <Mail size={17} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <span className="text-xs uppercase tracking-widest text-gray-500">
                Connect
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-400 transition hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-400 transition hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send email"
                className="text-gray-400 transition hover:text-teal-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Abstract engineering + software visual, drawn with interface elements. */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-cyan-500/10 blur-[90px]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#0b1220]/80 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-md sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[11px] tracking-wide text-gray-500">
                  ENGINEERING × TECHNOLOGY
                </span>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-2xl border border-cyan-300/10 bg-[#070d18] p-5 sm:p-7">
                <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-cyan-300/10" />
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-blue-300/10" />
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-xs text-teal-300">&lt;solution /&gt;</span>
                  <Code2 className="text-cyan-300" size={20} />
                </div>

                <div className="relative mt-8 space-y-3 font-mono text-sm">
                  <p className="text-gray-500"><span className="text-fuchsia-300">const</span> approach = &#123;</p>
                  <p className="pl-5 text-gray-300">mindset: <span className="text-amber-200">"systems thinking"</span>,</p>
                  <p className="pl-5 text-gray-300">tools: <span className="text-emerald-300">"modern web"</span>,</p>
                  <p className="pl-5 text-gray-300">goal: <span className="text-cyan-200">"practical impact"</span></p>
                  <p className="text-gray-500">&#125;;</p>
                </div>

                <div className="relative mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-blue-300/10 bg-blue-400/[0.07] p-3">
                    <Code2 size={18} className="text-blue-300" />
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-gray-400">Software</p>
                  </div>
                  <div className="rounded-xl border border-teal-300/10 bg-teal-400/[0.07] p-3">
                    <Cpu size={18} className="text-teal-300" />
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-gray-400">Engineering</p>
                  </div>
                  <div className="rounded-xl border border-violet-300/10 bg-violet-400/[0.07] p-3">
                    <Layers3 size={18} className="text-violet-300" />
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-gray-400">Solutions</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mt-14 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 transition hover:text-teal-400 sm:mt-16"
        >
          Discover more
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
