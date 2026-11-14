import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Cog, Code2, Lightbulb, Sparkles } from "lucide-react";
import { homeCopy } from "@/data/redesign";

const icons = [Cog, Code2, Lightbulb, Sparkles];

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-[var(--header-height)]">
      <div className="container grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] border border-blue-500/25" />
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.7rem] border border-blue-400/30 shadow-2xl shadow-blue-950/30">
            <Image src="/images/photo.jpg" alt="Khalil Etana exploring engineering and technology" fill sizes="(max-width: 1024px) 90vw, 38vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040a18]/60 to-transparent" />
            <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#040a18]/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">Engineering × technology</span>
          </div>
        </div>
        <div>
          <span className="section-badge">{homeCopy.about.badge}</span>
          <h2 className="section-title mt-4">Who Am <span className="text-blue-400">I?</span></h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">{homeCopy.about.description}</p>
          <a href="#experience" className="btn btn-primary mt-6 w-full justify-center sm:w-auto">Learn More <ArrowUpRight size={17} /></a>
          <div className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4">
            {homeCopy.about.highlights.map((item, index) => {
              const Icon = icons[index] ?? CheckCircle2;
              return <article key={item.title} className="glass-card p-4 sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300"><Icon size={20} /></div>
                <h3 className="mt-3 text-sm font-bold text-[var(--foreground)] sm:text-base">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-[var(--muted)] sm:text-sm">{item.detail}</p>
              </article>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
