import React, { useEffect, useMemo, useState } from "react";
import Magnetic from "../components/Magnetic.jsx";
import KAAchievementToast from "../components/KAAchievementToast.jsx";

export default function Navbar({ onReset, rightPillLabel = "Tools Stack", rightCTA = "Let’s connect" }) {
  const links = ["Home", "Projects", "Experience", "Skills", "Education", "Contact"];

  const [toolsOpen, setToolsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [kaToastOpen, setKaToastOpen] = useState(false);
  const [kaToastKey, setKaToastKey] = useState(0);
  
  function fireKAToast() {
    setKaToastOpen(true);
    setKaToastKey((k) => k + 1);
  }

  const tools = useMemo(
    () => [
      "Python","PyTorch","TensorFlow","LangChain","NLP","Bayesian Stats",
      "SQL","PySpark","Hadoop","HDFS","Kibana","Excel","AWS","GCP","Azure","Tableau"
    ],
    []
  );

  function toolDotClass(name) {
    const key = name.toLowerCase();
    if (/(aws|azure|gcp|cloud)/.test(key)) return "bg-sky-500/70 dark:bg-sky-400/75";
    if (/(sql|pyspark|hadoop|hdfs|kibana|etl|pipeline)/.test(key)) return "bg-teal-500/70 dark:bg-teal-400/75";
    if (/(excel|tableau|dashboard|bi)/.test(key)) return "bg-rose-500/70 dark:bg-rose-400/75";
    if (/(bayes|stats|math|analysis)/.test(key)) return "bg-violet-500/65 dark:bg-violet-400/75";
    if (/(pytorch|tensorflow|langchain|nlp|ml|ai)/.test(key)) return "bg-amber-500/65 dark:bg-amber-400/75";
    return "bg-slate-500/60 dark:bg-slate-400/70";
  }

  function toggleDark() {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
  }

  // Close on ESC + lock scroll
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setToolsOpen(false);
        setMenuOpen(false);
      }
    }
    const anyOpen = toolsOpen || menuOpen;
    if (anyOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [toolsOpen, menuOpen]);

  function openTools() {
    setMenuOpen(false);
    setToolsOpen(true);
  }

  function openMenu() {
    setToolsOpen(false);
    setMenuOpen(true);
  }

  return (
    <>
      <KAAchievementToast
          key={kaToastKey}
          open={kaToastOpen}
          onClose={() => setKaToastOpen(false)}
          title="Achievement unlocked"
          subtitle="You discovered an Easter egg!"
      />

      {/* ===================== NAVBAR ===================== */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/80 dark:bg-slate-950/55 dark:border-slate-700/70">
        <div className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-5 py-4 sm:px-6 lg:px-8 lg:py-4">
          {/* Left: Logo + Desktop links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={fireKAToast}
              aria-label="KA easter egg"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fg text-bg font-semibold transition-transform active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              KA
            </button>


            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7 ml-6">
              {links.map((t) => (
                <a
                  key={t}
                  href={`#${t.toLowerCase()}`}
                  className="text-sm font-semibold tracking-[0.14em] text-muted hover:text-accent hover:font-bold hover:scale-105 transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.toUpperCase()}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={openMenu}
              className="md:hidden ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/55 px-3 py-2 text-xs font-semibold text-fg hover:bg-surface/75 transition-colors"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>

          {/* Right: Desktop buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden rounded-full border border-border bg-surface/55 px-5 py-2 text-sm font-semibold text-fg hover:bg-surface/75 transition-colors md:inline-flex"
              onClick={openTools}
            >
              {rightPillLabel}
            </button>

            <Magnetic strength={20}>
            <a
              href="#contact"
              className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white sm:px-5 hover:brightness-95 active:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() => setMenuOpen(false)}
            >
              {rightCTA}
            </a>
            </Magnetic>

            {/* On mobile, move these into the menu so the navbar breathes */}
            <button
              className="hidden sm:inline-flex rounded-full border border-border bg-surface/45 px-3.5 py-2.5 text-xs font-semibold text-muted hover:bg-surface/75 transition-colors"
              onClick={toggleDark}
              title="Toggle dark mode"
            >
              Dark
            </button>

            <button
              onClick={onReset}
              className="hidden sm:inline-flex rounded-full border border-border bg-surface/45 px-3.5 py-2.5 text-xs font-semibold text-muted hover:bg-surface/75 transition-colors"
              title="Reset visitor choice"
            >
              Reset
            </button>
          </div>
        </div>
      </header>

      {/* ===================== MOBILE MENU ===================== */}
      <div className={`fixed inset-0 z-[75] ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!menuOpen}>
        {/* Overlay */}
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 w-full h-full bg-slate-950/25 backdrop-blur-sm transition-opacity duration-200 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="Close menu"
        />

        {/* Mobile panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-[320px] max-w-[88vw] bg-surface/85 dark:bg-slate-950/75 border-r border-border/70 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-transform duration-250 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
            <div className="text-base font-semibold text-fg">Menu</div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-border bg-surface/50 px-3 py-2 text-sm font-semibold text-muted hover:bg-surface/70 transition-colors"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="px-5 py-4">
            <nav className="grid gap-2">
              {links.map((t) => (
                <a
                  key={t}
                  href={`#${t.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-border/70 bg-surface/55 px-4 py-3 text-sm font-semibold tracking-[0.12em] text-fg hover:bg-surface/75 transition-colors"
                >
                  {t.toUpperCase()}
                </a>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openTools();
                }}
                className="mt-4 w-full rounded-2xl border border-border bg-surface/55 px-4 py-3 text-sm font-semibold text-fg hover:bg-surface/75 transition-colors"
              >
                {rightPillLabel}
              </button>

              {/* Mobile-only: Dark + Reset live here */}
              <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={() => {
                    toggleDark();
                    setMenuOpen(false);
                  }}
                  className="w-full rounded-2xl border border-border bg-surface/55 px-4 py-3 text-sm font-semibold text-fg hover:bg-surface/75 transition-colors"
                >
                  Dark
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onReset?.();
                    setMenuOpen(false);
                  }}
                  className="w-full rounded-2xl border border-border bg-surface/55 px-4 py-3 text-sm font-semibold text-fg hover:bg-surface/75 transition-colors"
                >
                  Reset
                </button>
              </div>

              <p className="mt-4 text-xs text-muted">Tip: Tap Tools Stack to see the full drawer.</p>
            </nav>
          </div>
        </aside>
      </div>

      {/* ===================== TOOLS DRAWER (RIGHT) ===================== */}
      <div className={`fixed inset-0 z-[70] ${toolsOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!toolsOpen}>
        {/* Overlay */}
        <button
          type="button"
          onClick={() => setToolsOpen(false)}
          className={`absolute inset-0 w-full h-full bg-slate-950/25 backdrop-blur-sm transition-opacity duration-200 ${toolsOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="Close tools drawer"
        />

        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-[360px] max-w-[92vw] bg-surface/80 dark:bg-slate-950/70 border-l border-border/70 shadow-[0_30px_90px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-transform duration-250 ease-out ${toolsOpen ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Tools Stack"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
            <div className="text-lg font-semibold text-fg">Tools Stack</div>
            <button
              type="button"
              onClick={() => setToolsOpen(false)}
              className="rounded-full border border-border bg-surface/50 px-3 py-2 text-sm font-semibold text-muted hover:bg-surface/70 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="px-6 py-5">
            <p className="text-sm text-muted">The core tools I use to build ML systems and analytics workflows.</p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {tools.map((t) => (
                <div
                  key={t}
                  className="group rounded-2xl border border-border/70 bg-surface/55 px-4 py-3 text-sm font-semibold text-fg hover:bg-surface/75 transition-colors flex items-center gap-3"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${toolDotClass(t)} animate-soft-pulse shadow-[0_0_0_3px_rgba(255,255,255,0.55)] dark:shadow-[0_0_0_3px_rgba(15,23,42,0.55)]`}
                    aria-hidden="true"
                  />
                  <span className="leading-none">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
