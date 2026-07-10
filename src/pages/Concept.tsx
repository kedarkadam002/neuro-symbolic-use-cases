import React from "react";
import { motion, type Variants } from "framer-motion";
import { BrainCircuit, BookOpen, Layers } from "lucide-react";

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

export default function Concept() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl mx-auto">
      <div className="mb-12">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
          <BookOpen size={14} />
          <span>Architecture Explainer</span>
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          What is Neuro-Symbolic AI?
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground font-light max-w-3xl">
          The key differentiator from plain predictive AI is that every recommendation ships with an explanation tied to a specific rule, policy, or precedent.
        </motion.p>
      </div>

      <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Layer 1: Neural */}
        <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <BrainCircuit size={100} className="text-primary" />
          </div>
          <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
            <span className="font-mono font-bold">01</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">The Neural Layer</h3>
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Large Language Models</p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Reads unstructured data that traditional systems can't parse: doctor's notes, medical records, insurance claims, dense policy documents, and emails.
          </p>
          <div className="bg-secondary/50 rounded p-4 border border-border/50 text-sm font-mono text-muted-foreground">
            Input: Unstructured Text<br/>
            Output: Extracted Entities & Intent
          </div>
        </motion.div>

        {/* Layer 2: Symbolic */}
        <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Layers size={100} className="text-emerald-500" />
          </div>
          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 mb-6">
            <span className="font-mono font-bold">02</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">The Symbolic Layer</h3>
          <p className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-6">Rules & Ontologies</p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Takes the extracted data and runs it through deterministic business rules, compliance guidelines (CMS/HIPAA), and knowledge graphs.
          </p>
          <div className="bg-secondary/50 rounded p-4 border border-border/50 text-sm font-mono text-muted-foreground">
            Input: Extracted Entities<br/>
            Output: Deterministic Action + Proof
          </div>
        </motion.div>
      </motion.div>

      {/* The Result */}
      <motion.div variants={itemVariants} className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
        <h3 className="text-2xl font-bold mb-4">The Output: Deterministic "Why"</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Unlike pure LLMs which act as black boxes predicting the next word, a neuro-symbolic system produces a decision trail.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-card border border-border rounded p-4 shadow-sm">
            <span className="block text-xs font-mono text-muted-foreground uppercase mb-1">Decision</span>
            <strong className="text-lg text-emerald-500">APPROVE CLAIM</strong>
          </div>
          <div className="bg-card border border-border rounded p-4 shadow-sm sm:col-span-2">
            <span className="block text-xs font-mono text-muted-foreground uppercase mb-1">Traceable Reason</span>
            <span className="text-sm text-foreground">Patient satisfies CMS Rule 41.2, Insurance Policy Section 6, and previous required treatment is documented.</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
