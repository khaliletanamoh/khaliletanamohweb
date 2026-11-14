import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  ArrowUpRight,
  BookOpen,
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
            My journey combines Industrial Engineering, software
            development, and continuous learning. I focus on transforming
            ideas into practical digital solutions while developing my
            technical and problem-solving abilities.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <div className="mb-9 flex items-center gap-3">
            <BriefcaseBusiness className="text-teal-400" size={23} />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>

          <div className="space-y-6">
            {portfolioData.experience.map((item, index) => (
              <article key={item.role} className="card relative">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                      0{index + 1} / {item.period}
                    </span>

                    <h4 className="mt-3 text-xl font-bold">{item.role}</h4>

                    <p className="mt-1 text-sm text-blue-400">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm font-semibold text-teal-400">
            My Approach: Think systematically. Build creatively. Solve practically.
          </p>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="text-teal-400" size={24} />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {portfolioData.education.map((item) => (
              <article key={item.institution} className="card">
                <BookOpen size={25} className="text-blue-400" />

                <h4 className="mt-5 text-lg font-bold">
                  {item.qualification}
                </h4>

                <p className="mt-2 text-sm text-gray-400">{item.institution}</p>

                <p className="mt-4 text-xs text-teal-400">{item.period}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Award className="text-teal-400" size={24} />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {portfolioData.certifications.map((certificate, index) => {
              const isPdf = certificate.previewUrl.toLowerCase().endsWith(".pdf");

              return (
                <article
                  key={certificate.credentialUrl}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#101622] shadow-lg shadow-black/10"
                >
                  <div className="relative flex aspect-[1.42/1] flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-200 p-5 text-slate-900 sm:p-6">
                    <div className="absolute -left-12 -top-14 h-44 w-44 rounded-full border-[18px] border-teal-700/10" />
                    <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full border-[22px] border-amber-500/10" />

                    {certificate.previewUrl ? (
                      <div className="relative z-10 overflow-hidden rounded-xl border border-slate-300 bg-white/60">
                        {isPdf ? (
                          <embed
                            src={certificate.previewUrl}
                            type="application/pdf"
                            className="h-52 w-full object-cover"
                          />
                        ) : (
                          <img
                            src={certificate.previewUrl}
                            alt={certificate.title}
                            className="h-52 w-full object-cover"
                          />
                        )}
                      </div>
                    ) : (
                      <div className="relative z-10 flex h-52 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white/40">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                          Certificate
                        </span>
                      </div>
                    )}

                    <div className="relative z-10 mt-3 flex items-center justify-between gap-3 border-t border-slate-300/80 pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-800 sm:text-xs">
                        {certificate.provider}
                      </span>
                      <span className="rounded-full border border-teal-800/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-teal-800 sm:text-[10px]">
                        Cert {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-base font-semibold text-white">
                      {certificate.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-400">
                      {certificate.provider}
                    </p>
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-5 inline-flex w-full justify-center"
                    >
                      Verify Certificate
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
