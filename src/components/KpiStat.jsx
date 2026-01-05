import React, { useEffect, useMemo, useRef, useState } from "react";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 2);
}

function useInView(options = { threshold: 0.35, rootMargin: "0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect(); // run once
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, inView];
}

function useCountUp({ to, duration = 1100, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const t0 = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = easeOutCubic(t);
      setValue(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, start]);

  return value;
}

function CircularProgress({
  value, // 0..100
  size = 78,
  stroke = 8,
  className = "",
  trackClassName = "",
  indicatorClassName = "",
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * c;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        strokeWidth={stroke}
        className={trackClassName}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c - dash}`}
        className={indicatorClassName}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export default function KpiStat({
  value, // number (e.g., 7900 or 95)
  suffix = "", // "+", "%"
  label,
  helper,
  ring = false,
  ringMax = 100, // ring tracks animated/ringMax * 100
  ringColorClass = "stroke-orange-500/90 dark:stroke-orange-400/90",
}) {
  const [wrapRef, inView] = useInView();
  const animated = useCountUp({ to: value, duration: 1200, start: inView });

  const display = useMemo(() => {
    if (value >= 1000) return animated.toLocaleString();
    return String(animated);
  }, [animated, value]);

  // Key change: ring is driven by the animated number
  const ringPct = ring ? (animated / ringMax) * 100 : 0;

  return (
    <div ref={wrapRef} className="flex h-full flex-col items-center text-center">
        {/* Fixed metric slot (prevents overlap + keeps all rings aligned) */}
        <div className="relative grid h-[70px] w-[70px] place-items-center">
            {ring ? (
                <>
                    <CircularProgress
                        value={inView ? ringPct : 0}
                        size={80}
                        stroke={10}
                        className="absolute inset-0 -translate-x-[6px] -translate-y-[4px]"
                        trackClassName="stroke-slate-200/80 dark:stroke-slate-700/70"
                        indicatorClassName={ringColorClass}
                    />
                    <div className="relative text-3xl font-semibold tracking-tight text-fg">
                        {display}
                        {suffix ? (
                          <span className="ml-[1px] align-top text-base font-semibold tracking-tight text-muted">
                            {suffix}
                          </span>
                        ) : null}
                    </div>
                </>
            ) : (
                <div className="text-3xl font-semibold tracking-tight text-fg">
                    {display}
                    {suffix ? (
                      <span className="ml-[1px] align-top text-base font-semibold tracking-tight text-muted">
                        {suffix}
                      </span>
                    ) : null}
                </div>
            )}
        </div>

        {label ? (
            <div className="mt-2 max-w-[18ch] text-sm leading-snug text-muted">
                {label}
            </div>
        ) : null}

        {helper ? <div className="mt-1 text-xs text-muted/80">{helper}</div> : null}
        </div>
    );
}