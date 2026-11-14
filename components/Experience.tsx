import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section bg-[#0d121c]">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY JOURNEY</p>
          <h2 className="heading">
            Building solutions through
            <span className="gradient-text"> engineering and technology.</span>
          </h2>
          <p className="section-description">
            My journey combines Industrial Engineering, software development,
            and continuous learning. I focus on transforming ideas into
            practical digital solutions while developing my technical and
            problem-solving abilities.
          </p>
        </div>

        <div className="mb-16 sm:mb-20">
          <div className="mb-7 flex items-center gap-3 sm:mb-9">
            <BriefcaseBusiness className="text-teal-400" size={23} />
            <h3 className="text-xl font-bold sm:text-2xl">Experience</h3>
          </div>
          <div className="space-y-5 sm:space-y-6">
            {portfolioData.experience.map((item, index) => (
              <article key={item.role} className="card relative">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                      0{index + 1} / {item.period}
                    </span>
                    <h4 className="mt-3 text-lg font-bold sm:text-xl">{item.role}</h4>
                    <p className="mt-1 text-sm text-blue-400">{item.organization}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-gray-400">{item.description}</p>
                <ul className="mt-5 space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm font-semibold leading-6 text-teal-400">
            My approach: Think systematically. Build creatively. Solve practically.
          </p>
        </div>

        <div className="mb-16 sm:mb-20">
          <div className="mb-7 flex items-center gap-3 sm:mb-8">
            <GraduationCap className="text-teal-400" size={24} />
            <h3 className="text-xl font-bold sm:text-2xl">Education</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {portfolioData.education.map((item) => (
              <article key={item.institution} className="card">
                <BookOpen size={25} className="text-blue-400" />
                <h4 className="mt-5 text-lg font-bold">{item.qualification}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-400">{item.institution}</p>
                <p className="mt-4 text-xs text-teal-400">{item.period}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-7 flex items-center gap-3 sm:mb-8">
            <Award className="text-teal-400" size={24} />
            <h3 className="text-xl font-bold sm:text-2xl">Certificates &amp; credentials</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {portfolioData.certifications.map((certificate) => {
              const isPdf = certificate.previewUrl.toLowerCase().endsWith(".pdf");

              return (
                <article
                  key={certificate.credentialUrl}
                  className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#101622] shadow-lg shadow-black/10"
                >
                  <div className="relative flex aspect-[1.42/1] flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-200 p-3 text-slate-900 sm:p-4">
                    <div className="absolute -left-12 -top-14 h-44 w-44 rounded-full border-[18px] border-teal-700/10" />
                    <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full border-[22px] border-amber-500/10" />

                    <div className="relative z-10 min-h-0 flex-1 overflow-hidden rounded-lg border border-slate-300 bg-white">
                      {isPdf ? (
                        <iframe
                          src={`${certificate.previewUrl}#toolbar=0&navpanes=0`}
                          title={`${certificate.title} certificate preview`}
                          className="h-full min-h-0 w-full"
                        />
                      ) : (
                        <img
                          src={certificate.previewUrl}
                          alt={`${certificate.title} certificate`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      )}
                    </div>

                    <div className="relative z-10 mt-2 flex items-center justify-between gap-2 border-t border-slate-300/80 pt-2">
                      <span className="truncate text-[9px] font-bold uppercase tracking-[0.15em] text-teal-800 sm:text-[10px] sm:tracking-[0.2em]">
                        {certificate.provider}
                      </span>
                      <span className="shrink-0 rounded-full border border-teal-800/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-teal-800">
                        Credential
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h4 className="break-words text-base font-semibold leading-6 text-white">
                      {certificate.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-400">Issued by {certificate.provider}</p>
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${certificate.title} certificate from ${certificate.provider}`}
                      className="btn btn-primary mt-4 inline-flex min-h-11 w-full justify-center"
                    >
                      Verify credential
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
