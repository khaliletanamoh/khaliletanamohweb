import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Cpu,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const skillTags = ["Next.js", "React", "TypeScript", "Industrial Engineering"];

const processSteps = [
  { number: "01", title: "Think", detail: "Understand the challenge" },
  { number: "02", title: "Build", detail: "Create with purpose" },
  { number: "03", title: "Improve", detail: "Refine for real impact" },
];

export default function Hero() {
  const { personal, hero } = portfolioData;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-[#070b14] pb-16 pt-28 sm:min-h-screen sm:pb-20"
    >
      {/* Image-free, original tech-inspired backdrop. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_38%,rgba(14,165,233,0.16),transparent_36%),radial-gradient(ellipse_at_92%_82%,rgba(45,212,191,0.11),transparent_30%),linear-gradient(135deg,#070b14_0%,#0b1424_54%,#08111e_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_45%,black)]" />
        <div className="absolute -right-36 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-cyan-100 sm:text-sm">
              <Sparkles size={15} className="text-teal-300" />
              <span>{hero.eyebrow}</span>
            </div>

            <h1 className="heading text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {personal.name}
              <span className="mt-2 block gradient-text">{hero.title}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-300">
              <span className="font-medium text-white">{personal.role}</span>
              <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-teal-400 sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-teal-300" />
                {personal.location}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="btn btn-primary shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-blue-500/30"
              >
                {hero.primaryButton}
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#contact"
                className="btn btn-outline border-white/15 bg-white/[0.03] transition duration-200 hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-white/[0.06]"
              >
                {hero.secondaryButton}
                <Mail size={17} />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                Find me
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-white/10" />
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition hover:border-white/25 hover:text-white"
              >
                <Github size={17} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition hover:border-white/25 hover:text-white"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send email"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition hover:border-teal-300/40 hover:text-teal-200"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* A clear, visitor-friendly visual instead of decorative code. */}
          <div className="relative mx-auto w-full max-w-[34rem] lg:justify-self-end">
            <div aria-hidden="true" className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[90px]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1220]/85 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-300">Engineering × technology</p>
                  <h2 className="mt-2 text-lg font-semibold text-white sm:text-xl">Ideas into impact</h2>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200">
                  <Sparkles size={20} />
                </div>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
                Combining engineering thinking and modern web development to create useful, thoughtful solutions.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-blue-300/10 bg-blue-400/[0.06] p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-300/10 text-blue-200">
                    <Cpu size={19} />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-white">Engineering</p>
                  <p className="mt-1 text-[10px] leading-4 text-gray-500">Think in systems</p>
                </div>
                <div className="rounded-2xl border border-teal-300/10 bg-teal-400/[0.06] p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-300/10 text-teal-200">
                    <Code2 size={19} />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-white">Technology</p>
                  <p className="mt-1 text-[10px] leading-4 text-gray-500">Build for people</p>
                </div>
                <div className="rounded-2xl border border-violet-300/10 bg-violet-400/[0.06] p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                    <Layers3 size={19} />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-white">Solutions</p>
                  <p className="mt-1 text-[10px] leading-4 text-gray-500">Make an impact</p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-semibold text-gray-200">How I work</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-teal-300">
                    <Check size={12} /> Purposeful process
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {processSteps.map((step, index) => (
                    <div key={step.number} className="relative">
                      {index < processSteps.length - 1 && (
                        <span aria-hidden="true" className="absolute left-9 right-[-0.5rem] top-[0.7rem] h-px bg-gradient-to-r from-teal-300/40 to-blue-300/20 sm:left-10" />
                      )}
                      <div className="relative flex h-6 w-6 items-center justify-center rounded-full border border-teal-300/25 bg-[#0b1220] font-mono text-[9px] text-teal-200">
                        {step.number}
                      </div>
                      <p className="mt-2 text-[11px] font-semibold text-white">{step.title}</p>
                      <p className="mt-1 pr-1 text-[9px] leading-4 text-gray-500 sm:text-[10px]">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center sm:mt-14 lg:mt-10">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 transition hover:border-teal-300/25 hover:text-teal-200"
          >
            Discover more
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
