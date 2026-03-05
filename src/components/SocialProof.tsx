"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            {/* Placeholder avatars */}
            <div className="flex -space-x-3">
              {[
                "bg-gradient-to-br from-indigo-400 to-purple-500",
                "bg-gradient-to-br from-pink-400 to-rose-500",
                "bg-gradient-to-br from-amber-400 to-orange-500",
                "bg-gradient-to-br from-emerald-400 to-teal-500",
                "bg-gradient-to-br from-sky-400 to-blue-500",
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${gradient} border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-medium`}
                >
                  {["A", "M", "S", "K", "J"][i]}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-foreground border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-medium">
                +
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Join early users building
            <br />
            <span className="gradient-text">their second brain.</span>
          </h2>

          <p className="text-muted text-lg mb-2">
            Be part of the first wave.
          </p>

          <div className="mt-8">
            <p className="text-3xl font-bold text-foreground">100+</p>
            <p className="text-sm text-muted">people on the waitlist</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
