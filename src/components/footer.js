import React from "react";

export const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (Opens in new tab)"
          className="font-medium text-slate-400 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
        >
          Visual Studio Code
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (Opens in new tab)"
          className="font-medium text-slate-400 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (Opens in new tab)"
          className="font-medium text-slate-400 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
        >
          Tailwind CSS
        </a>
        . Deployed with{" "}
        <a
          href="https://www.vercel.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (Opens in new tab)"
          className="font-medium text-slate-400 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
};
