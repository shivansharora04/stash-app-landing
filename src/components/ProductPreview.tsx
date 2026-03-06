"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProductPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
            Product Preview
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            A calm home for <span className="gradient-text">your ideas.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Search Interface Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 p-4 sm:p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:shadow-accent/5 transition-all group"
          >
            <p className="text-xs font-medium text-accent uppercase tracking-wide mb-4">
              Intelligent Search
            </p>
            <div className="rounded-xl bg-background border border-border p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 min-w-0">
                <svg
                  className="w-4 h-4 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-sm text-foreground truncate min-w-0">
                  that startup funding article
                </span>
                <span className="ml-auto text-xs text-muted shrink-0">3 results</span>
              </div>
              <div className="space-y-2">
                {[
                  {
                    title: "How to Raise a Seed Round",
                    source: "paulgraham.com",
                    tag: "Article",
                  },
                  {
                    title: "YC on Fundraising Strategy",
                    source: "ycombinator.com",
                    tag: "Bookmark",
                  },
                  {
                    title: "Startup funding notes",
                    source: "Personal note",
                    tag: "Note",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-accent-subtle/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-xs shrink-0">
                      📄
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted">{item.source}</p>
                    </div>
                    <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium shrink-0">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Categories Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:shadow-accent/5 transition-all"
          >
            <p className="text-xs font-medium text-accent uppercase tracking-wide mb-4">
              Auto-Categories
            </p>
            <div className="space-y-3">
              {[
                { name: "Recipes", count: 34, color: "bg-orange-100 text-orange-600" },
                { name: "Travel", count: 22, color: "bg-sky-100 text-sky-600" },
                { name: "Fitness", count: 18, color: "bg-emerald-100 text-emerald-600" },
                { name: "Shopping", count: 27, color: "bg-pink-100 text-pink-600" },
                { name: "Work", count: 41, color: "bg-indigo-100 text-indigo-600" },
                { name: "Inspiration", count: 15, color: "bg-amber-100 text-amber-600" },
              ].map((cat) => (
                <div
                  key={cat.name}
                  className="flex items-center justify-between gap-2 p-3 rounded-xl bg-background border border-border hover:border-accent/20 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] sm:text-xs px-2 py-0.5 rounded-full font-medium ${cat.color}`}
                    >
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-muted shrink-0">{cat.count} items</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Saved Items Feed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-3 p-4 sm:p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:shadow-accent/5 transition-all"
          >
            <p className="text-xs font-medium text-accent uppercase tracking-wide mb-4">
              Recent Saves
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  icon: "🎬",
                  type: "Video",
                  title: "Building with AI — Sam Altman",
                  time: "2 hours ago",
                  gradient: "from-red-50 to-orange-50",
                },
                {
                  icon: "🐦",
                  type: "Tweet",
                  title: "@naval on happiness and wealth",
                  time: "5 hours ago",
                  gradient: "from-sky-50 to-blue-50",
                },
                {
                  icon: "📸",
                  type: "Screenshot",
                  title: "Mobile app inspiration",
                  time: "Yesterday",
                  gradient: "from-green-50 to-emerald-50",
                },
                {
                  icon: "🔗",
                  type: "Link",
                  title: "The best of HN this week",
                  time: "2 days ago",
                  gradient: "from-purple-50 to-violet-50",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} border border-border/50 hover:border-accent/30 hover:shadow-md transition-all`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs font-medium text-muted">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted">{item.time}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
