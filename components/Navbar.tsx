"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { homeCopy } from "@/data/redesign";

const links = homeCopy.navigation;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const initial = stored === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.15, 0.35, 0.6] }
    );
    links.forEach(({ href }) => {
      const target = document.querySelector(href);
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="container flex h-[var(--header-height)] items-center justify-between gap-4" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="inline-flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight text-[var(--foreground)] sm:text-xl" aria-label="Khalil Etana home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-extrabold text-white">K</span>
          <span>Khalil <span className="text-blue-400">Etana</span></span>
        </a>
        <div className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} aria-current={active === link.href.slice(1) ? "page" : undefined} className={`nav-link ${active === link.href.slice(1) ? "nav-link-active" : ""}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Social href={portfolioData.personal.github} label="GitHub"><Github size={17} /></Social>
          <Social href={portfolioData.personal.linkedin} label="LinkedIn"><Linkedin size={17} /></Social>
          <ThemeButton theme={theme} onClick={toggleTheme} />
        </div>
        <button type="button" className="icon-button xl:hidden" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-menu">
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {isOpen && <div id="mobile-menu" className="mobile-menu xl:hidden">
        <div className="container flex flex-col gap-1 py-4">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu} className={`nav-link ${active === link.href.slice(1) ? "nav-link-active" : ""}`}>{link.label}</a>)}
          <div className="mt-3 flex items-center gap-2 border-t border-[var(--border)] pt-4">
            <Social href={portfolioData.personal.github} label="GitHub"><Github size={17} /></Social>
            <Social href={portfolioData.personal.linkedin} label="LinkedIn"><Linkedin size={17} /></Social>
            <ThemeButton theme={theme} onClick={toggleTheme} />
          </div>
        </div>
      </div>}
    </header>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a className="icon-button" href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} aria-label={label}>{children}</a>;
}

function ThemeButton({ theme, onClick }: { theme: "dark" | "light"; onClick: () => void }) {
  return <button type="button" className="icon-button" onClick={onClick} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
