"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            stash<span className="text-accent">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("problem")}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollTo("solution")}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollTo("features")}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Features
            </button>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-white bg-foreground hover:bg-foreground/90 px-4 py-2 rounded-full transition-all hover:shadow-lg cursor-pointer"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path d="M4 4l12 12M16 4L4 16" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 glass shadow-lg mx-4 rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollTo("problem")}
                className="text-sm text-muted hover:text-foreground transition-colors text-left"
              >
                Problem
              </button>
              <button
                onClick={() => scrollTo("solution")}
                className="text-sm text-muted hover:text-foreground transition-colors text-left"
              >
                Solution
              </button>
              <button
                onClick={() => scrollTo("features")}
                className="text-sm text-muted hover:text-foreground transition-colors text-left"
              >
                Features
              </button>
              <Link
                href="/privacy-policy"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white bg-foreground px-4 py-2 rounded-full text-center"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
