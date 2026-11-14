import { ArrowUpRight, Code2, Cog, Lightbulb, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { site } from "@/data/site";
import { homeCopy } from "@/data/redesign";

const icons = [Cog, Code2, Wrench];

export default function Skills() {
  const facts = [
    { number: String(site.projects.length), label: "Real projects", icon: Lightbulb },
    { number: String(portfolioData.certifications.length), label: "Listed credentials", icon: Code2 },
    { number: String(portfolioData.education.length), label: "Degree in progress", icon: Cog },
  ];
  return (
    <section id="skills" className="section-shell scroll-mt-[var(--header-height)]">
      <div className="container">
        <div className="section-heading-row">
          <div><span className="section-badge">{homeCopy.skills.badge}</span><h2 className="section-title mt-4">Technical <span className="text-yellow-400">Skills</span></h2><p className="section-description mt-3">{homeCopy.skills.description}</p></div>
          <a href="#projects" className="btn btn-outline hidden shrink-0 sm:inline-flex">View Projects <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {portfolioData.skills.map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return <article key={group.title} className="glass-card p-5 sm:p-6">
              <div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300"><Icon size={22} /></span><span className="font-mono text-xs text-[var(--muted)]">0{index + 1}</span></div>
              <h3 className="mt-5 text-lg font-bold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">{group.items.map((skill) => <li key={skill} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]">{skill}</li>)}</ul>
            </article>;
          })}
        </div>
        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-blue-500/25 bg-[var(--surface)] min-[480px]:grid-cols-3">
          {facts.map(({ number, label, icon: Icon }) => <div key={label} className="flex items-center gap-3 border-b border-[var(--border)] p-4 last:border-b-0 min-[480px]:justify-center min-[480px]:border-b-0 min-[480px]:border-r min-[480px]:last:border-r-0 sm:p-5"><Icon size={19} className="shrink-0 text-blue-400" /><div><p className="text-lg font-bold leading-tight">{number}</p><p className="mt-1 text-[11px] text-[var(--muted)] sm:text-xs">{label}</p></div></div>)}
        </div>
        <p className="mt-3 text-xs leading-5 text-[var(--muted)]">Counts reflect items currently listed in this portfolio; no follower total or learning duration is available in the source data.</p>
      </div>
    </section>
  );
}
