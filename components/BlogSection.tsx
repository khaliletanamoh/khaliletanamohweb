import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Post } from "@/lib/blog";
import { homeCopy } from "@/data/redesign";

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="section-shell scroll-mt-[var(--header-height)]">
      <div className="container">
        <div className="section-heading-row mb-8"><div><span className="section-badge">From the blog</span><h2 className="section-title mt-4">Latest <span className="text-yellow-400">Articles</span></h2><p className="section-description mt-3">Ideas and updates from my learning and project journey.</p></div><a className="btn btn-outline hidden shrink-0 sm:inline-flex" href={homeCopy.blog.url} target="_blank" rel="noreferrer">Read Blog <ArrowUpRight size={16} /></a></div>
        {posts.length > 0 ? <div className="grid gap-5 md:grid-cols-2">
          {posts.slice(0, 2).map((post) => <article key={post.url} className="glass-card overflow-hidden">
            <div className="relative aspect-[16/8] overflow-hidden bg-[var(--surface)]"><Image src="/images/portfolio.jpg" alt="Khalil Etana portfolio and technology article" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
            <div className="p-5"><p className="inline-flex items-center gap-2 text-xs text-[var(--muted)]"><CalendarDays size={14} />{post.date || "Recently published"}</p><h3 className="mt-3 line-clamp-2 text-lg font-bold">{post.title}</h3><a href={post.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-300">Read More <ArrowUpRight size={16} /></a></div>
          </article>)}
        </div> : <div className="glass-card p-6 text-sm text-[var(--muted)]">Recent blog articles are temporarily unavailable. Visit the blog directly to browse posts.</div>}
        <a className="btn btn-outline mt-5 w-full justify-center sm:hidden" href={homeCopy.blog.url} target="_blank" rel="noreferrer">Read Blog <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
