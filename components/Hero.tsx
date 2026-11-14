import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal, hero } = portfolioData;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-[#050b18] pt-28 pb-20 sm:min-h-screen"
    >
      {/* Use the existing portrait asset as the hero background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-[center_30%] bg-no-repeat sm:bg-center"
        style={{ backgroundImage: "url('/images/photo.jpg')" }}
      />

      {/* Contrast overlays keep the text readable while revealing the artwork. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,8,23,0.94)_0%,rgba(3,8,23,0.84)_38%,rgba(3,8,23,0.42)_68%,rgba(3,8,23,0.12)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#050b18] via-transparent to-[#050b18]/15"
      />

      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-up rounded-3xl border border-white/10 bg-[#050b18]/35 p-6 shadow-2xl shadow-black/20 backdrop-blur-[2px] sm:p-10 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="heading mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
            {personal.name}
            <br />
            <span className="gradient-text">{hero.title}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
            {hero.description}
          </p>

          <p className="mt-5 text-sm font-medium text-gray-100 sm:text-base">
            {personal.role}
            <span className="mx-3 text-teal-300">/</span>
            {personal.location}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              {hero.primaryButton}
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="btn btn-outline">
              {hero.secondaryButton}
              <Mail size={17} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-gray-300">
              Connect
            </span>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-200 transition hover:text-white"
            >
              <Github size={20} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-200 transition hover:text-white"
            >
              <Linkedin size={20} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send email"
              className="text-gray-200 transition hover:text-teal-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="mt-14 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-gray-200 transition hover:text-teal-300 sm:mt-20"
        >
          Discover more
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
