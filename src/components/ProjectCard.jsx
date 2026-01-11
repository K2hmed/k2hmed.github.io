import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Card from "./Card.jsx";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    // Avoid layout shift when scrollbar disappears
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [locked]);
}

function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;

    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 w-full h-full cursor-default bg-black/30 backdrop-blur-md"
      />

      {/* Modal panel */}
      <div className="relative z-[101] mx-auto flex min-h-[100dvh] items-center justify-center p-3 sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          className={cx(
            "w-full max-w-3xl rounded-[28px] border border-border/70",
            "bg-surface/85 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.22)]",
            "dark:bg-slate-900/70",
            // ✅ mobile = full-height sheet, desktop = capped modal
            "h-[95dvh] sm:h-auto sm:max-h-[85vh]",
            "overflow-hidden"
          )}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  // Safe defaults so it never crashes if fields are missing
  const data = useMemo(() => {
    const p = project || {};
    return {
      kicker: p.kicker ?? "PROJECT",
      title: p.title ?? "Untitled Project",
      impact: p.impact ?? "Add a 1–2 line impact statement here.",
      chips: p.chips ?? ["ML", "NLP", "Healthcare"],
      proof:
        p.proof ??
        [
          p.github ? { label: "GitHub", href: p.github } : null,
          p.demo ? { label: "Demo", href: p.demo } : null,
        ].filter(Boolean),
      details:
        p.details ??
        "Add a fuller description: problem, approach, stack, and measurable outcomes.",
      stack: p.stack ?? ["Python", "Pandas", "XGBoost"],
      whatBuilt: p.whatBuilt ?? null,
      outcome: p.outcome ?? null,
      bullets: p.bullets ?? [
        "What you built and why it matters.",
        "A measurable result or performance lift.",
        "A production detail: tests, CI, deployment, monitoring, etc.",
      ],
    };
  }, [project]);

  return (
    <>
      {/* Card */}
      <Card className="h-full">
        <div className="flex h-full flex-col">
          {/* Media placeholder (keeps all cards equal height) */}
          {project.image ? (
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-black/[0.02]">
              <img
                src={project.image}
                alt={project.imageAlt || `${project.title} preview`}
                className="h-44 w-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="h-44 rounded-2xl border border-black/5 bg-black/[0.02]" />
          )}

          <div className="mt-5 flex flex-1 flex-col">
            <div className="text-lg font-semibold text-fg">{data.title}</div>

            <p className="mt-2 text-sm text-muted leading-relaxed">{data.impact}</p>

            {/* Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {data.chips.slice(0, 4).map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-border/70 bg-surface/55 px-3 py-1 text-xs font-semibold text-fg/80"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Proof links + Show more */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                {data.proof.slice(0, 2).map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href?.startsWith("http") ? "_blank" : undefined}
                    rel={l.href?.startsWith("http") ? "noreferrer" : undefined}
                    className="text-xs font-semibold text-accent hover:text-accent2 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <button
                onClick={() => setOpen(true)}
                className="text-xs tracking-widest font-semibold text-muted hover:text-fg transition-colors"
              >
                SHOW MORE
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Full-screen modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="h-full flex flex-col">
          {/* Sticky header (close always visible) */}
          <div className="sticky top-0 z-10 shrink-0 flex items-start justify-between gap-4 px-6 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-6 bg-surface/80 dark:bg-slate-900/55 backdrop-blur-xl border-b border-border/60">
            <div>
              <div className="text-xs tracking-widest text-muted">{data.kicker}</div>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-fg">
                  {data.title}
                </h3>
              </div>
              
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-full border border-border bg-surface/60 px-3 py-2 text-sm font-semibold text-fg hover:bg-surface/80 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            
            {/* Scrollable body */}
            <div className="flex-1 px-6 pb-10 sm:px-8 sm:pb-10 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
              <p className="mt-4 text-muted leading-relaxed">{data.details}</p>
              
              {data.whatBuilt && (
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  <span className="font-semibold text-fg">What I built:</span>{" "}
                  {data.whatBuilt}
                </p>
              )}
              
              {data.outcome && (
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  <span className="font-semibold text-fg">Outcome:</span>{" "}
                  {data.outcome}
                </p>
              )}
              
              {/* Chips / stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {data.stack.slice(0, 8).map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-border/70 bg-surface/55 px-3 py-1 text-xs font-semibold text-fg/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
              
              {/* Bullets */}
              <ul className="mt-6 space-y-2 list-disc pl-5 text-fg/80">
                {data.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {/* Proof links */}
              <div className="mt-7 flex flex-wrap gap-3">
                {data.proof.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href?.startsWith("http") ? "_blank" : undefined}
                    rel={l.href?.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border border-border bg-surface/55 px-4 py-2 text-sm font-semibold text-fg hover:bg-surface/80 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Modal>
    </>
  );
}
