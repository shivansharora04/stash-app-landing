"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-subtle/60 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-accent/10 via-purple-300/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            App Coming Soon
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            Save anything.
            <br />
            <span className="gradient-text">Find everything.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Stash is an app that becomes your universal memory for everything
            you save online. Links, screenshots, reels, posts — all in one
            app, searchable instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="group relative px-8 py-3.5 bg-foreground text-white rounded-full text-sm font-medium transition-all hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Privacy Policy
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("problem")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 text-muted hover:text-foreground rounded-full text-sm font-medium transition-colors cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
