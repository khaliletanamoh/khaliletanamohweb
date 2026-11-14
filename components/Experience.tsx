import { ArrowUpRight, Award, BookOpen, BriefcaseBusiness, GraduationCap, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { homeCopy } from "@/data/redesign";

export default function Experience() {
  const education = portfolioData.education[0];
  return (
    <section id="certifications" className="section-shell scroll-mt-[var(--header-height)]">
      <div className="container">
        <div className="section-heading-row mb-8"><div><span className="section-badge">{homeCopy.credentials.badge}</span><h2 className="section-title mt-4"><span className="text-yellow-400">Certifications</span> &amp; Journey</h2><p className="section-description mt-3">Verified credentials and the learning path documented in my portfolio.</p></div><a href="#certificate-list" className="btn btn-outline hidden shrink-0 sm:inline-flex">View Certificates <ArrowUpRight size={16} /></a></div>
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <article className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300"><Award size={22} /></span><div><h3 className="font-bold">Credentials</h3><p className="text-xs text-[var(--muted)]">{portfolioData.certifications.length} certificates listed</p></div></div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Each credential links to its issuer’s verification page. Preview artwork is not available in the repository yet.</p>
            <div className="certificate-placeholder mt-5 flex min-h-44 flex-col items-center justify-center rounded-2xl border border-dashed border-blue-400/35 px-5 text-center">
              <Award size={30} className="text-blue-300" /><p className="mt-3 font-semibold">Certificates &amp; learning</p><p className="mt-1 text-xs text-[var(--muted)]">Open a credential below to verify it with the issuer.</p>
            </div>
            <a href="#certificate-list" className="btn btn-primary mt-5 w-full justify-center">View Certificates <ArrowUpRight size={16} /></a>
          </article>
          <article className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300"><BriefcaseBusiness size={21} /></span><div><h3 className="font-bold">Experience &amp; education</h3><p className="text-xs text-[var(--muted)]">Current journey, using documented details</p></div></div>
            <div className="relative mt-6 space-y-6 border-l border-blue-500/40 pl-5">
              {education && <div className="relative"><span className="absolute -left-[1.63rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-300 bg-[var(--surface)]" /><p className="text-xs font-semibold text-blue-300">{education.period}</p><h4 className="mt-1 text-sm font-bold">{education.qualification} student</h4><p className="mt-1 text-xs text-[var(--muted)]">{education.institution}</p></div>}
              {portfolioData.experience.length > 0 ? portfolioData.experience.map((item) => <div className="relative" key={`${item.role}-${item.organization}`}><span className="absolute -left-[1.63rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-300 bg-[var(--surface)]" /><p className="text-xs font-semibold text-blue-300">{item.period}</p><h4 className="mt-1 text-sm font-bold">{item.role}</h4><p className="mt-1 text-xs text-[var(--muted)]">{item.organization}</p><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{item.description}</p></div>) : <div className="relative"><span className="absolute -left-[1.63rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-300 bg-[var(--surface)]" /><p className="text-xs font-semibold text-blue-300">Ongoing</p><h4 className="mt-1 text-sm font-bold">Independent web projects</h4><p className="mt-1 text-xs leading-5 text-[var(--muted)]">Building and sharing personal projects listed in the portfolio.</p></div>}
            </div>
          </article>
        </div>
        <div id="certificate-list" className="mt-8 scroll-mt-[var(--header-height)]">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><GraduationCap size={20} className="text-blue-300" />Verified certificates</h3>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {portfolioData.certifications.map((certificate) => <article key={certificate.credentialUrl} className="glass-card flex min-w-0 flex-col p-4">
              <div className="flex items-start gap-3"><BookOpen size={18} className="mt-0.5 shrink-0 text-blue-300" /><div className="min-w-0"><h4 className="break-words text-sm font-semibold">{certificate.title}</h4><p className="mt-1 text-xs text-[var(--muted)]">{certificate.provider}</p></div></div>
              <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-blue-300 hover:text-blue-200">Verify certificate <ExternalLink size={14} /></a>
            </article>)}
          </div>
        </div>
        <p className="mt-5 text-xs leading-5 text-[var(--muted)]">Testimonials are omitted because no testimonial text or author is present in the supplied portfolio data.</p>
      </div>
    </section>
  );
}
