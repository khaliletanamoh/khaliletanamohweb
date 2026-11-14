import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";
import { homeCopy } from "@/data/redesign";

const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-[var(--header-height)]">
      <div className="container">
        <div className="section-heading-row mb-8"><div><span className="section-badge">{homeCopy.projects.badge}</span><h2 className="section-title mt-4">Featured <span className="text-yellow-400">Projects</span></h2><p className="section-description mt-3">Personal projects built through curiosity, practice, and a focus on practical solutions.</p></div><a href="https://github.com/khaliletanamoh?tab=repositories" target="_blank" rel="noreferrer" className="btn btn-outline hidden shrink-0 sm:inline-flex">View All Projects <ArrowUpRight size={16} /></a></div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {site.projects.slice(0, 4).map((project) => {
            const isGitHub = project.href.includes("github.com");
            return <article key={project.title} className="glass-card group flex min-w-0 flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
                <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-base font-bold leading-6">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--muted)]">{project.text}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] text-blue-200">{tag}</span>)}</div>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {!isGitHub && <a className="btn btn-primary min-h-10 flex-1 px-3 py-2 text-xs" href={project.href} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={14} /></a>}
                  {isGitHub && <a className="btn btn-outline min-h-10 flex-1 px-3 py-2 text-xs" href={project.href} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>}
                  <Link className="btn btn-outline min-h-10 flex-1 px-3 py-2 text-xs" href={`/product/${slugify(project.title)}`}>Details <ArrowUpRight size={14} /></Link>
                </div>
              </div>
            </article>;
          })}
        </div>
        <a href="https://github.com/khaliletanamoh?tab=repositories" target="_blank" rel="noreferrer" className="btn btn-outline mt-5 w-full justify-center sm:hidden">View All Projects <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
