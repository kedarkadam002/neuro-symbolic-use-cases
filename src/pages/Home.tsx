import React from "react";
import { motion, type Variants } from "framer-motion";
import { Info, AlertTriangle, CheckCircle2, Target, ArrowRight, Layers, Users, BookOpen, Network, Check } from "lucide-react";
import { Link } from "wouter";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const execSummary = [
  {
    icon: Info,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    content: "Neuro-symbolic AI is about pairing two things: AI that reads unstructured data (like medical records or emails), and rule-based systems that enforce policy and compliance. The result is decisions that can be explained and audited. This matters more than ever because the European Union (EU) AI Act now requires traceable, explainable decisions for high-risk uses like insurance underwriting and claims by August 2, 2026."
  },
  {
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    content: "EXL Service is the competitor to watch most closely. It has a patented, NVIDIA-backed insurance language model and an agentic layer already live in claims and underwriting."
  },
  {
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    content: "Expert.ai is the clearest pure-play neuro-symbolic vendor in insurance. If a rival partners with or buys a similar company, they could close the gap fast."
  },
  {
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    content: "Genpact, Concentrix, and WNS (Holdings) have not publicly branded neuro-symbolic AI yet. That gives Firstsource a short window to position itself first, but it will not last long."
  },
  {
    icon: Target,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    content: "Firstsource's best opportunities are in healthcare Revenue Cycle Management (RCM) / denial management and mortgage document processing. These are already rule-heavy processes where we own the data, the clients, and the delivery infrastructure."
  }
];

export default function Home() {
  const getBaseUrl = () => import.meta.env.BASE_URL || "/";
  const linkPath = (path: string) => `${getBaseUrl() === "/" ? "" : getBaseUrl()}${path}`;

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* HERO SECTION */}
      <section className="mb-16 md:mb-24 flex flex-col items-center text-center">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-8">
          <Target size={14} />
          <span>July 2026 Assessment</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Neuro-Symbolic <span className="text-primary">AI Portal</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl font-light">
          Moving beyond predictive black boxes to deterministic, explainable AI architectures for enterprise operations.
        </motion.p>
      </section>

      {/* NAV CARDS */}
      <motion.section variants={containerVariants} className="grid md:grid-cols-3 gap-6 mb-24">
        <Link href={linkPath("/concept")}>
          <motion.div variants={itemVariants} className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 text-primary border border-border group-hover:bg-primary/10 transition-colors">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">The Concept</h3>
            <p className="text-muted-foreground mb-6 flex-1">Understand the architecture: neural models paired with symbolic logic for auditable decisions.</p>
            <div className="flex items-center text-sm font-medium text-primary uppercase tracking-wide gap-2">
              Explore Concept <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </Link>

        <Link href={linkPath("/competitors")}>
          <motion.div variants={itemVariants} className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 text-primary border border-border group-hover:bg-primary/10 transition-colors">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Competitors</h3>
            <p className="text-muted-foreground mb-6 flex-1">A three-tier market view showing where rivals stand and where our opening exists.</p>
            <div className="flex items-center text-sm font-medium text-primary uppercase tracking-wide gap-2">
              View Landscape <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </Link>

        <Link href={linkPath("/use-cases")}>
          <motion.div variants={itemVariants} className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 text-primary border border-border group-hover:bg-primary/10 transition-colors">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Use Cases</h3>
            <p className="text-muted-foreground mb-6 flex-1">BFSI, Healthcare and Energy &amp; Utility — the highest-leverage decision points for Firstsource's US and UK clients.</p>
            <div className="flex items-center text-sm font-medium text-primary uppercase tracking-wide gap-2">
              Browse Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </Link>
      </motion.section>

      {/* EXECUTIVE SUMMARY */}
      <motion.section variants={containerVariants} className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Executive Summary</h2>
          <div className="h-px bg-border flex-1 ml-4 hidden md:block"></div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {execSummary.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-card border border-border rounded-xl p-6 hover:bg-secondary/20 transition-colors"
              >
                <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center ${item.bg} ${item.border} ${item.color}`}>
                  <Icon size={24} />
                </div>
                <div className="flex-1 text-muted-foreground leading-relaxed">
                  {item.content}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
}
