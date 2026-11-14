import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";
import { site } from "@/data/site";

const highlights = [
  { value: String(site.projects.length).padStart(2, "0"), label: "Featured projects" },
  { value: String(portfolioData.certifications.length).padStart(2, "0"), label: "Listed certificates" },
  { value: "01", label: "Engineering degree in progress" },
];

export default function Hero() {
  const { personal, hero } = portfolioData;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-[#070b14] pb-14 pt-28 sm:pb-16 lg:min-h-screen lg:pb-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_38%,rgba(14,165,233,0.16),transparent_36%),radial-gradient(ellipse_at_92%_82%,rgba(45,212,191,0.11),transparent_30%),linear-gradient(135deg,#070b14_0%,#0b1424_54%,#08111e_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(90deg,transparent,black_45%,black)]" />
        <div className="absolute -right-36 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="mx-auto w-full max-w-3xl animate-fade-up lg:mx-0">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.12em] text-cyan-100 sm:mb-6 sm:px-3.5 sm:text-xs sm:tracking-[0.16em]">
              <Sparkles size={14} className="shrink-0 text-teal-300" />
              <span>{hero.eyebrow}</span>
            </div>

            <h1 className="heading text-[clamp(2.5rem,9vw,4.5rem)] leading-[1.08] tracking-tight lg:text-7xl xl:text-[5.25rem]">
              {personal.name}
              <span className="mt-2 block gradient-text">{hero.title}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              {hero.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-300 sm:text-sm">
              <span className="font-medium text-white">{personal.role}</span>
              <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-teal-400 sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-teal-300" />
                {personal.location}
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
              <a
                href="#projects"
                className="btn btn-primary w-full justify-center shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 min-[420px]:w-auto"
              >
                {hero.primaryButton}
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#contact"
                className="btn btn-outline w-full justify-center border-white/15 bg-white/[0.03] transition duration-200 hover:-translate-y-0.5 hover:border-teal-300/40 min-[420px]:w-auto"
              >
                {hero.secondaryButton}
                <Mail size={17} />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 sm:mt-9 sm:gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-[11px]">
                Find me
              </span>
              <span aria-hidden="true" className="h-px w-6 bg-white/10 sm:w-8" />
              <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition hover:border-white/25 hover:text-white">
                <Github size={17} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition hover:border-white/25 hover:text-white">
                <Linkedin size={17} />
              </a>
              <a href={`mailto:${personal.email}`} aria-label="Send email" className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition hover:border-teal-300/40 hover:text-teal-200">
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
            <div className="mb-5 flex items-center gap-3 text-teal-300">
              <Code2 size={19} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.24em]">
                Engineering mindset · Web development
              </span>
            </div>

            <p className="max-w-xl text-xl font-medium leading-relaxed text-white sm:text-2xl sm:leading-relaxed lg:text-[1.75rem]">
              I turn thoughtful ideas into practical digital experiences—bringing together systematic problem-solving, modern web skills, and a focus on what people actually need.
            </p>

            <div className="mt-8 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5 sm:mt-10 sm:py-6">
              {highlights.map((item) => (
                <div key={item.label} className="min-w-0 px-2 first:pl-0 last:pr-0 sm:px-4">
                  <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-[10px] leading-4 text-gray-400 sm:text-xs sm:leading-5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-6 text-gray-500 sm:text-sm">
              Currently studying Industrial Engineering at Wollega University, Shambu Campus, while building useful web projects.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-10">
          <a
            href="#about"
            className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 transition hover:border-teal-300/25 hover:text-teal-200 sm:text-[11px] sm:tracking-[0.2em]"
          >
            Discover more
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
