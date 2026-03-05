"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sources = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
    label: "Screenshots",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 5l7-3 7 3v6c0 5.25-7 9-7 9s-7-3.75-7-9V5z" />
      </svg>
    ),
    label: "Bookmarks",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    label: "Tweets",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="3" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    label: "Reels",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    label: "Notes",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="relative py-32 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            You save things <span className="gradient-text">everywhere.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-16">
            Your digital life is scattered across dozens of apps, folders, and
            platforms. Important ideas get lost in the chaos.
          </p>
        </motion.div>

        {/* Source cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {sources.map((source, i) => (
            <motion.div
              key={source.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group flex flex-col items-center gap-2 px-6 py-5 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all cursor-default"
            >
              <div className="text-muted group-hover:text-accent transition-colors">
                {source.icon}
              </div>
              <span className="text-sm font-medium text-foreground">
                {source.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Frustration callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 via-purple-300/10 to-accent/10 rounded-3xl blur-xl" />
          <div className="relative p-8 sm:p-10 rounded-2xl bg-card border border-border">
            <div className="text-4xl mb-4">🤔</div>
            <p className="text-xl sm:text-2xl font-semibold text-foreground leading-snug">
              You remember the idea,
              <br />
              <span className="text-muted">but not where you saved it.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
