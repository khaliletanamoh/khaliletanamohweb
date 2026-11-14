"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Github, Linkedin, LoaderCircle, Mail, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { homeCopy } from "@/data/redesign";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setIsSubmitting(true); setStatus(null);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your message. Please try again.");
      setStatus({ type: "success", message: "Your message has been sent by email. Thank you!" });
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    } finally { setIsSubmitting(false); }
  };
  const { personal } = portfolioData;
  return <section id="contact" className="section-shell scroll-mt-[var(--header-height)] pb-24 sm:pb-20">
    <div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
      <div className="flex flex-col justify-center"><span className="section-badge">Let’s work together</span><h2 className="section-title mt-4">Get <span className="text-yellow-400">In Touch</span></h2><p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">{homeCopy.contact.description}</p><a href="#contact-form" className="btn btn-primary mt-6 w-full justify-center sm:w-fit">Send Message <ArrowUpRight size={17} /></a>
        <div className="mt-7 flex flex-wrap gap-3"><a className="social-icon" href={`mailto:${personal.email}`} aria-label="Email"><Mail size={18} /></a><a className="social-icon" href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a className="social-icon" href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a></div><a href={`mailto:${personal.email}`} className="mt-3 break-all text-sm text-blue-300 hover:text-blue-200">{personal.email}</a>
      </div>
      <form id="contact-form" onSubmit={handleSubmit} className="glass-card scroll-mt-[var(--header-height)] space-y-4 p-5 sm:p-7">
        <div><label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label><input id="name" name="name" type="text" required maxLength={100} value={form.name} onChange={handleChange} autoComplete="name" placeholder="Your name" /></div>
        <div><label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label><input id="email" name="email" type="email" required maxLength={254} value={form.email} onChange={handleChange} autoComplete="email" placeholder="you@example.com" /></div>
        <div><label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject</label><input id="subject" name="subject" type="text" required maxLength={150} value={form.subject} onChange={handleChange} placeholder="What would you like to discuss?" /></div>
        <div><label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label><textarea id="message" name="message" required maxLength={5000} rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your idea..." /></div>
        <div className="hidden" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} /></div>
        {status && <p role="status" aria-live="polite" className={`text-sm ${status.type === "success" ? "text-emerald-400" : "text-red-400"}`}>{status.message}</p>}
        <button type="submit" disabled={isSubmitting} className="btn btn-primary min-h-11 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? <><LoaderCircle className="animate-spin" size={18} />Sending…</> : <>Send Message <Send size={17} /></>}</button>
        <p className="text-xs leading-5 text-[var(--muted)]">Your message is delivered to {personal.email} using the existing secure email service.</p>
      </form>
    </div>
  </section>;
}
