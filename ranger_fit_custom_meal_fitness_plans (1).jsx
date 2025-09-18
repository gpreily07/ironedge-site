import React from "react";
import { motion } from "framer-motion";
import { Check, Dumbbell, Salad, ArrowRight, Sparkles, MapPinned } from "lucide-react";

// Theme: IronEdge with new logo and terrain background
// Palette: dark background (#0f1115), steel gray (#1a1f29), sand (#e6d9b6), and vibrant orange-red (#d3542f)

export default function IronEdge() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans antialiased">
      {/* Background with terrain lines (orange) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'><defs><pattern id=\\'topo\\' width=\\'400\\' height=\\'400\\' patternUnits=\\'userSpaceOnUse\\'><path d=\\'M0,160 C80,80 320,80 400,160 M0,240 C80,320 320,320 400,240 M160,0 C80,80 80,320 160,400 M240,0 C320,80 320,320 240,400\\' fill=\\'none\\' stroke=\\'%23d3542f\\' stroke-width=\\'0.8\\' stroke-opacity=\\'0.5\\'/></pattern></defs><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%230f1115\\'/><rect width=\\'100%\\' height=\\'100%\\' fill=\\'url(%23topo)\\'/></svg>')",
          backgroundSize: "400px 400px",
          mixBlendMode: "soft-light",
        }}
      />
[build]
  node_version = "14"
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Inline SVG Logo */}
            <LogoMark className="h-10 w-28" />
            <span className="text-sm tracking-widest uppercase text-[#e6d9b6]">IronEdge</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#assessment" className="hover:text-white">Assessment</a>
            <a href="#plans" className="hover:text-white">Plans</a>
            <a href="#custom" className="hover:text-white">Customize</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#custom" className="inline-flex items-center gap-2 rounded-xl bg-[#d3542f] px-4 py-2 text-sm font-medium hover:bg-[#e6633f] transition">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <Sparkles className="h-3 w-3" /> Mission-Ready Wellness
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Custom Meal & Fitness Plans
                <span className="block text-[#d3542f]">built with discipline—delivered with ease.</span>
              </h1>
              <p className="mt-4 text-white/70 max-w-prose">
                IronEdge crafts data-driven training and nutrition tailored to your body, goals, and schedule. This program is military-inspired—designed to push limits, forge discipline, and deliver results with relentless intensity.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="#plans" className="rounded-xl bg-[#d3542f] text-white px-5 py-3 text-sm font-medium hover:bg-[#e6633f] transition">View Plans</a>
                <a href="#custom" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">Build My Program</a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
                <div className="flex items-center gap-2"><Dumbbell className="h-4 w-4 text-[#d3542f]" /> Strength, Conditioning, Mobility</div>
                <div className="hidden sm:flex items-center gap-2"><Salad className="h-4 w-4 text-[#d3542f]" /> Macro-smart, budget-aware meals</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative rounded-2xl bg-gradient-to-b from-[#1a1f29] to-[#11151c] p-6 ring-1 ring-white/10 shadow-2xl">
                <div className="absolute -top-4 -right-4 rotate-6 select-none text-white text-[10px] tracking-widest uppercase px-3 py-1 bg-[#d3542f] rounded-md shadow">Mission-Ready</div>
                <div className="grid grid-cols-2 gap-4">
                  <CardStat label="Age" value="25" />
                  <CardStat label="Height" value="5′10″" />
                  <CardStat label="Weight" value="180 lbs" />
                  <CardStat label="Sex" value="Male" />
                </div>
                <div className="mt-6 rounded-xl border border-white/10 p-4">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span className="uppercase tracking-widest">This Week's Op</span>
                    <MapPinned className="h-4 w-4" />
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#d3542f]"/> Lower Body Strength — 60 min</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#d3542f]"/> Tempo Run — 30 min @ Z3</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#e6d9b6]"/> Mobility + Recovery — 20 min</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 justify-between">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-28" />
            <div>
              <div className="text-sm tracking-widest uppercase text-[#e6d9b6]">IronEdge</div>
              <div className="text-xs text-white/50">Mission-ready wellness, made simple.</div>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-white/40">© {new Date().getFullYear()} IronEdge. All rights reserved.</div>
      </footer>
    </div>
  );
}

function LogoMark({ className = "" }: { className?: string }) {
  // Wide diamond with centered sword in IronEdge orange
  return (
    <svg viewBox="0 0 200 100" className={className} aria-label="IronEdge logo" role="img">
      <polygon points="10,50 100,15 190,50 100,85" fill="#d3542f" stroke="#1a1f29" strokeWidth="6" />
      <g stroke="#1a1f29" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M100 25 L105 60 L100 82 L95 60 Z" fill="#1a1f29" />
        <path d="M80 48 H120" />
        <path d="M100 25 V40" />
        <circle cx="100" cy="20" r="4" fill="#1a1f29" />
      </g>
    </svg>
  );
}

function CardStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
    </div>
  );
}
