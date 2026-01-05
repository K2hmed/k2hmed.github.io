import React, { useEffect, useState } from "react";
import VisitorToggle from "../components/VisitorToggle";

export default function Gate({ open, defaultChoice = "recruiter", onEnter }) {
  const [choice, setChoice] = useState(defaultChoice);

  useEffect(() => {
    setChoice(defaultChoice);
  }, [defaultChoice]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Strong blur backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/30 backdrop-blur-xl backdrop-saturate-150"
        onClick={() => onEnter(choice)}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative mx-auto flex min-h-screen max-w-[85rem] items-center justify-center px-6 py-10 lg:px-8">
        <div className="w-full max-w-3xl rounded-[28px] border border-border/60 bg-surface/75 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
          <div className="text-center">
            <div className="text-[11px] font-semibold tracking-[0.22em] text-accent">
              WELCOME
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-fg">
              Before we dive in, who are you?
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-muted">
              I tailor this portfolio so that recruiters see applied data and analytics work,
              while students see the thinking behind it.
            </p>
          </div>

          {/* Segmented choice */}
          <div className="mx-auto mt-8 max-w-lg">
            <VisitorToggle value={choice} onChange={setChoice} />
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => onEnter(choice)}
              className="w-full max-w-lg rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:brightness-95 active:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Enter Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
