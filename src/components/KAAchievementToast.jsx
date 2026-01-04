import React, { useEffect, useMemo } from "react";

function useReducedMotion() {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);
}

export default function KAAchievementToast({
  open,
  onClose,
  title = "Achievement unlocked",
  subtitle = "You discovered the Easter egg!",
  durationMs = 3500,
}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose?.(), durationMs);
    return () => clearTimeout(t);
  }, [open, onClose, durationMs]);

  if (!open) return null;

  return (
    <div className="fixed left-1/2 top-5 z-[9999] -translate-x-1/2 px-3">
      <div className="relative">
        {/* Pulsating glow */}
        <div
            aria-hidden="true"
            className="
                ka-glow
                absolute -inset-4 rounded-full
                pointer-events-none
                bg-emerald-600/25 dark:bg-emerald-400/20
                shadow-[0_0_45px_rgba(16,185,129,0.35),0_0_80px_rgba(99,102,241,0.18)] 
                dark:shadow-[0_0_45px_rgba(16,185,129,0.28)]
            "
        />
        
        {/* Badge */}
        <div
            role="status"
            aria-live="polite"
            className={[
                "relative",
                "flex items-center gap-3",
                "w-[min(94vw,620px)]",
                "rounded-full px-4 py-3",
                "backdrop-blur-md shadow-lg",
                "bg-zinc-950/60 dark:bg-black/55",
                "border border-white/10",
                reduced ? "" : "animate-in fade-in slide-in-from-top-2 duration-200",
            ].join(" ")}
        >   
        {/* subtle green capsule edge glint */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-full opacity-60"
            style={{
                background:
                "linear-gradient(90deg, rgba(16,185,129,0.0), rgba(16,185,129,0.18), rgba(16,185,129,0.0))",
            }}
        />
        {/* Left “coin” */}
        <div className="relative h-11 w-11 shrink-0">
          <div className="absolute inset-0 rounded-full bg-white/10 border border-white/10 backdrop-blur-md" />
          <div className="absolute inset-[3px] rounded-full bg-black/35 border border-white/10" />
          {/* subtle green accent ring */}
          <div className="absolute inset-[6px] rounded-full border-2 border-emerald-400/55" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[18px]">🏆</span>
          </div>
        </div>

        {/* Text */}
        <div className="min-w-0 leading-tight">
          <div className="text-sm font-semibold text-white/85">{title}</div>

          {/* green-ish accent like the vibe, but restrained */}
          <div className="text-sm font-semibold text-emerald-300/90 truncate">
            {subtitle}
          </div>
        </div>

        {/* KA chip on the right (subtle signature) */}
        <div className="ml-auto hidden sm:flex items-center">
          <div className="rounded-full px-3 py-1 text-[12px] font-medium bg-white/8 border border-white/10 text-white/70">
            KA
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
