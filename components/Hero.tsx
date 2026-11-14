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
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-[#030817] pt-28 pb-20 sm:min-h-screen"
    >
      {/* Profile artwork with a cinematic blue treatment. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-[center_30%] bg-no-repeat sm:bg-center"
        style={{ backgroundImage: "url('/images/photo.jpg')" }}
      />

      {/* Make the left side dark enough for readable hero copy while retaining the image. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,7,22,0.96)_0%,rgba(2,7,22,0.88)_32%,rgba(2,7,22,0.48)_58%,rgba(2,7,22,0.08)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(0deg,rgba(3,8,23,0.82)_0%,transparent_32%,rgba(3,8,23,0.12)_100%)]"
      />

      {/* Subtle blue glow adds depth without competing with the photo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
      />

      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-up rounded-3xl border border-white/10 bg-[#030817]/45 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-sm sm:p-10 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="heading mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
            {personal.name}
            <br />
            <span className="gradient-text">{hero.title}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-100 sm:text-lg">
            {hero.description}
          </p>

          <p className="mt-5 text-sm font-medium text-white sm:text-base">
            {personal.role}
            <span className="mx-3 text-teal-300">/</span>
            {personal.location}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary shadow-lg shadow-blue-500/20">
              {hero.primaryButton}
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="btn btn-outline border-white/30 bg-white/5 backdrop-blur-sm">
              {hero.secondaryButton}
              <Mail size={17} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-gray-200">
              Connect
            </span>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-100 transition hover:text-white"
            >
              <Github size={20} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-100 transition hover:text-white"
            >
              <Linkedin size={20} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send email"
              className="text-gray-100 transition hover:text-teal-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="mt-14 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-gray-100 transition hover:text-teal-300 sm:mt-20"
        >
          Discover more
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
