import React from "react";
import { motion, type Variants } from "framer-motion";
import { Target, ArrowRight, Layers, LayoutList } from "lucide-react";
import { useCases, topRecommendations } from "@/data/content";

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

export default function UseCases() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-16">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
          <Layers size={14} />
          <span>Operational Catalog</span>
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Neuro-Symbolic Use Cases
        </motion.h1>
      </div>

      {/* Top 5 Recommendations Table */}
      <motion.section variants={containerVariants} className="mb-24">
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
          <Target size={24} className="text-primary" />
          <h2 className="text-2xl font-bold">Top 5 Recommendations for Firstsource</h2>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary/30 border-b border-border">
                  <th className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider w-24">Priority</th>
                  <th className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Use Case</th>
                  <th className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Why it fits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {topRecommendations.map((rec) => (
                  <tr key={rec.rank} className="hover:bg-secondary/10 transition-colors">
                    <td className="p-4 font-mono text-2xl font-light text-primary/70">{rec.rank}</td>
                    <td className="p-4 font-bold text-foreground">{rec.title}</td>
                    <td className="p-4 text-muted-foreground text-sm leading-relaxed">{rec.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.section>

      {/* All 12 Use Cases List */}
      <motion.section variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
          <LayoutList size={24} className="text-muted-foreground" />
          <h2 className="text-2xl font-bold">All 12 Use Cases</h2>
          <div className="h-px bg-border flex-1 ml-4 hidden sm:block"></div>
        </motion.div>

        <div className="grid gap-12">
          {useCases.map((useCase) => (
            <motion.div 
              key={useCase.id}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col relative"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-3xl font-light text-muted-foreground/30">{useCase.id}</span>
                  <h3 className="text-2xl font-bold leading-tight pt-1">{useCase.title}</h3>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-mono uppercase tracking-wider shrink-0">
                  {useCase.industry}
                </div>
              </div>

              {/* Current state (if present) */}
              {useCase.current && (
                <div className="mb-6 border-l-2 border-border pl-4">
                  <p className="text-sm text-muted-foreground italic">"{useCase.current}"</p>
                </div>
              )}

              {/* Architecture Flow Chips */}
              <div className="mb-8">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  How the system works <ArrowRight size={12} />
                </h4>
                <div className="flex flex-wrap gap-2 items-center">
                  {useCase.flow.split('→').map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <span className="bg-secondary/50 px-3 py-1.5 border border-border rounded text-xs font-mono text-foreground/80">
                        {step.trim()}
                      </span>
                      {i < arr.length - 1 && <span className="text-muted-foreground/40"><ArrowRight size={14} /></span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Grid for Output Example and Benefits */}
              <div className="grid md:grid-cols-2 gap-6 mt-auto">
                {/* Example Output Box */}
                {useCase.output ? (
                  <div className="bg-primary/5 border border-primary/20 rounded p-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                    <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Example Output</h4>
                    <div className="mb-3 flex items-start gap-2">
                      <span className="font-mono text-[10px] text-muted-foreground mt-1 shrink-0">DECISION:</span>
                      <strong className="text-foreground text-sm tracking-wide">{useCase.output.decision}</strong>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[10px] text-muted-foreground mt-1 shrink-0">REASON:</span>
                      <span className="text-sm text-muted-foreground leading-snug">{useCase.output.reason}</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-secondary/20 border border-border/50 rounded p-5 flex items-center justify-center text-sm text-muted-foreground italic">
                    Output structure varies by implementation
                  </div>
                )}

                {/* Benefits */}
                {useCase.benefits && (
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded p-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                    <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-500 mb-4">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.benefits.split(',').map((benefit, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                          {benefit.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
