import React from "react";
import { motion, type Variants } from "framer-motion";
import { Users, Shield, Layers, Puzzle, ArrowRight, Check, AlertTriangle, ArrowRightCircle, Target } from "lucide-react";

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

export default function Competitors() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
          <Users size={14} />
          <span>Market Landscape</span>
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Competitors of Firstsource
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground font-light leading-relaxed">
          A three-tier view of the market: who is building neuro-symbolic Artificial Intelligence (AI) capability, how they talk about it, and where Firstsource has a real opening.
        </motion.p>
      </div>

      {/* Tier Overview Cards */}
      <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6 mb-24">
        {/* Tier 1 */}
        <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6 gradient-border-leader flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-wider font-semibold">
              Tier 1
            </div>
            <Shield size={20} className="text-red-500/70" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Leaders</h3>
          <p className="text-muted-foreground text-sm mb-6 flex-1">
            These companies are already doing enterprise neuro-symbolic AI, even if they call it something else. They lead on research, platforms, or large-scale transformation. (AI = Artificial Intelligence)
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["IBM", "Palantir", "Accenture"].map(name => (
              <span key={name} className="px-2 py-1 bg-secondary rounded text-xs font-mono">{name}</span>
            ))}
          </div>
          <a href="#tier-1" className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
            View Details <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Tier 2 */}
        <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6 gradient-border-operator flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono uppercase tracking-wider font-semibold">
              Tier 2
            </div>
            <Layers size={20} className="text-amber-500/70" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Operators</h3>
          <p className="text-muted-foreground text-sm mb-6 flex-1">
            Business Process Management (BPM) and Customer Experience (CX) operators that are layering AI on top of deep domain expertise. This is the closest peer group to Firstsource, and the most direct competition.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Genpact", "EXL", "WNS", "Concentrix", "Teleperformance"].map(name => (
              <span key={name} className="px-2 py-1 bg-secondary rounded text-xs font-mono">{name}</span>
            ))}
          </div>
          <a href="#tier-2" className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
            View Details <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Tier 3 */}
        <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6 gradient-border-component flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-mono uppercase tracking-wider font-semibold">
              Tier 3
            </div>
            <Puzzle size={20} className="text-blue-500/70" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Component Builders</h3>
          <p className="text-muted-foreground text-sm mb-6 flex-1">
            These firms build the underlying pieces: foundation models, AI agent frameworks, and research breakthroughs. They are not building full reasoning systems for regulated operations.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Microsoft", "Google", "Amazon"].map(name => (
              <span key={name} className="px-2 py-1 bg-secondary rounded text-xs font-mono">{name}</span>
            ))}
          </div>
          <a href="#tier-3" className="text-xs font-bold text-blue-500 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
            View Details <ArrowRight size={14} />
          </a>
        </motion.div>
      </motion.div>

      {/* Detailed Sections */}
      <div className="space-y-24 mb-24">
        
        {/* Tier 1 Details */}
        <section id="tier-1" className="scroll-mt-32">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 border-b border-border pb-4">
            <Shield size={24} className="text-red-500" />
            <h2 className="text-3xl font-bold">Tier 1: Leaders</h2>
            <div className="px-2 py-0.5 rounded bg-red-500/10 text-red-500 text-xs font-mono uppercase">Platform & Consulting</div>
          </motion.div>
          
          <div className="grid gap-6">
            <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">IBM</h3>
              <p className="text-muted-foreground mb-6">
                IBM is arguably the pioneer in formalizing "neuro-symbolic AI" as a distinct research discipline. Through IBM Research and their watsonx data platform, they are aggressively pushing the fusion of neural networks with knowledge graphs and symbolic logic. They focus on highly regulated industries where explainability is non-negotiable.
              </p>
              <div className="mb-6 bg-secondary/30 p-4 border border-border/50 rounded">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Architecture Pattern</h4>
                <div className="font-mono text-xs text-foreground/70 flex flex-wrap gap-2 items-center">
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">watsonx.ai (LLMs)</span>
                  <span className="text-muted-foreground/50">→</span>
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">watsonx.data (Ontology)</span>
                  <span className="text-muted-foreground/50">→</span>
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">watsonx.governance (Rules)</span>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Banking</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Healthcare</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Gov</span>
                </div>
                <div className="text-sm italic text-red-400">Firstsource edge: IBM provides the tools; Firstsource runs the actual operations.</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Palantir</h3>
              <p className="text-muted-foreground mb-6">
                Palantir's AIP (Artificial Intelligence Platform) is effectively a massive neuro-symbolic engine. AIP doesn't just chat with data; it maps organizational logic into an Ontology (symbolic) and allows LLMs (neural) to traverse it, propose actions, and simulate outcomes within strictly enforced permissions.
              </p>
              <div className="mb-6 bg-secondary/30 p-4 border border-border/50 rounded">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Architecture Pattern</h4>
                <div className="font-mono text-xs text-foreground/70 flex flex-wrap gap-2 items-center">
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">AIP Logic</span>
                  <span className="text-muted-foreground/50">→</span>
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">Foundry Ontology</span>
                  <span className="text-muted-foreground/50">→</span>
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">Action Simulation</span>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Defense</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Manufacturing</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Healthcare</span>
                </div>
                <div className="text-sm italic text-red-400">Firstsource edge: Palantir is too expensive for standard BPM/RCM operational scaling.</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tier 2 Details */}
        <section id="tier-2" className="scroll-mt-32">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 border-b border-border pb-4">
            <Layers size={24} className="text-amber-500" />
            <h2 className="text-3xl font-bold">Tier 2: Operators</h2>
            <div className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 text-xs font-mono uppercase">Direct BPM Peers</div>
          </motion.div>
          
          <div className="grid gap-6">
            <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">EXL Service</h3>
              <p className="text-muted-foreground mb-6">
                The most advanced direct competitor. EXL has actively deployed proprietary, NVIDIA-backed insurance language models. They combine LLM extraction with their domain-specific rules engines for claims and underwriting. They are doing applied neuro-symbolic AI at scale in insurance.
              </p>
              <div className="mb-6 bg-secondary/30 p-4 border border-border/50 rounded">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Architecture Pattern</h4>
                <div className="font-mono text-xs text-foreground/70 flex flex-wrap gap-2 items-center">
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">Insurance LLM</span>
                  <span className="text-muted-foreground/50">→</span>
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">Underwriting Rules</span>
                  <span className="text-muted-foreground/50">→</span>
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">Agentic Workflow</span>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Insurance</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Healthcare</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Analytics</span>
                </div>
                <div className="text-sm italic text-amber-400">Firstsource edge: Must counter EXL's technical narrative with our own explicitly branded neuro-symbolic RCM engine.</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                Expert.ai 
                <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-mono uppercase text-muted-foreground font-normal">Pure-Play Vendor Callout</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                While not a BPM operator, Expert.ai is the clearest pure-play neuro-symbolic software vendor in the market. They specifically market their hybrid approach—combining LLMs with deep linguistic rules and insurance ontologies. If a Tier 2 peer acquires or partners with Expert.ai, they instantly leapfrog the market in capability.
              </p>
              <div className="mb-6 bg-secondary/30 p-4 border border-border/50 rounded">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Architecture Pattern</h4>
                <div className="font-mono text-xs text-foreground/70 flex flex-wrap gap-2 items-center">
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">GenAI Layer</span>
                  <span className="text-muted-foreground/50">→</span>
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">Expert Knowledge Graph</span>
                  <span className="text-muted-foreground/50">→</span>
                  <span className="bg-background px-2 py-1 border border-border/50 rounded">Explainable Output</span>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Insurance Claims</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Underwriting</span>
                </div>
                <div className="text-sm italic text-amber-400">Firstsource edge: Potential partnership target or acquisition benchmark.</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Genpact, Concentrix, WNS</h3>
              <p className="text-muted-foreground mb-6">
                These peers are heavily investing in GenAI, but mostly treating it as a conversational or predictive layer added to existing workflows. They have not publicly committed to or branded "neuro-symbolic" reasoning. They remain vulnerable to architectures that prioritize auditability over mere generation.
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">CX</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">F&A</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Healthcare</span>
                </div>
                <div className="text-sm italic text-amber-400">Firstsource edge: First-mover advantage in positioning explainable AI for RCM.</div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      {/* Comparison Table */}
      <motion.section variants={containerVariants} className="mb-24">
        <h2 className="text-3xl font-bold mb-8">Where Firstsource Stands</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary/20">
                <th className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Company</th>
                <th className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Tier</th>
                <th className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Neuro-Symbolic Maturity</th>
                <th className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Firstsource's Edge</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-secondary/10 transition-colors">
                <td className="p-4 font-semibold">IBM / Palantir</td>
                <td className="p-4"><span className="px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded uppercase">Tier 1</span></td>
                <td className="p-4 text-sm text-muted-foreground">High (Platform Level)</td>
                <td className="p-4 text-sm text-muted-foreground">We own the actual operational delivery, not just the software.</td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/10 transition-colors">
                <td className="p-4 font-semibold">EXL Service</td>
                <td className="p-4"><span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-xs rounded uppercase">Tier 2</span></td>
                <td className="p-4 text-sm text-muted-foreground">High (Applied Insurance)</td>
                <td className="p-4 text-sm text-muted-foreground">Pivot focus to Healthcare RCM to flank their insurance dominance.</td>
              </tr>
              
              {/* Highlighted Firstsource Row */}
              <tr className="border-y-2 border-primary bg-primary/5">
                <td className="p-4 font-bold text-primary flex items-center gap-2">
                  <Target size={16} /> Firstsource
                </td>
                <td className="p-4"><span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded uppercase font-bold">Target Position</span></td>
                <td className="p-4 text-sm font-semibold">Emerging (RCM / BFSI specific)</td>
                <td className="p-4 text-sm font-semibold text-foreground">Deep vertical process ownership in healthcare RCM, BFSI, and insurance operations (data + client relationships + delivery infrastructure).</td>
              </tr>

              <tr className="border-b border-border hover:bg-secondary/10 transition-colors">
                <td className="p-4 font-semibold">Expert.ai</td>
                <td className="p-4"><span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-xs rounded uppercase">Tier 2</span></td>
                <td className="p-4 text-sm text-muted-foreground">High (Pure-Play Software)</td>
                <td className="p-4 text-sm text-muted-foreground">Partnership opportunity to accelerate our technical stack.</td>
              </tr>
              <tr className="border-b border-border hover:bg-secondary/10 transition-colors">
                <td className="p-4 font-semibold">Genpact / WNS</td>
                <td className="p-4"><span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-xs rounded uppercase">Tier 2</span></td>
                <td className="p-4 text-sm text-muted-foreground">Low (Focusing on GenAI)</td>
                <td className="p-4 text-sm text-muted-foreground">First-mover narrative advantage in regulated explainability.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Biggest Market Gap */}
      <motion.section variants={containerVariants}>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">The Biggest Market Gap</h2>
          <div className="h-px bg-border flex-1 ml-4 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div variants={itemVariants} className="bg-card border border-border p-6 rounded-xl relative opacity-70">
            <h3 className="text-lg font-mono text-muted-foreground uppercase tracking-widest mb-4">Architecture A</h3>
            <div className="text-2xl font-bold mb-4 flex items-center gap-2">
              Predictive AI <AlertTriangle size={20} className="text-amber-500" />
            </div>
            <p className="text-muted-foreground mb-6">Black-box models that output a prediction or score with no explanation trail. Unsuitable for heavily regulated operations.</p>
            <div className="bg-background border border-border p-3 rounded text-sm font-mono text-center text-muted-foreground line-through">
              Data → Black Box → "94% Fraud Risk"
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-primary/10 border-2 border-primary/30 p-6 rounded-xl relative">
            <h3 className="text-lg font-mono text-primary uppercase tracking-widest mb-4">Architecture B</h3>
            <div className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
              Neuro-Symbolic AI <Check size={20} className="text-primary" />
            </div>
            <p className="text-foreground/90 mb-6">LLM neural extraction fused with a symbolic rule layer, producing a fully auditable decision trail required by regulators.</p>
            <div className="bg-background border border-primary/30 p-3 rounded text-sm font-mono text-center text-primary flex items-center justify-center gap-2">
              Data → Rules → <span className="font-bold">Decision + Policy Reference</span>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="bg-secondary/50 border border-border p-8 rounded-xl flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center text-primary">
            <ArrowRightCircle size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Where this fits best for Firstsource</h4>
            <p className="text-muted-foreground">
              This gap ties directly to Firstsource's <strong className="text-foreground">healthcare RCM/denial management</strong>, <strong className="text-foreground">insurance claims/underwriting</strong>, and <strong className="text-foreground">BFSI/KYC operations</strong>. These are the highest-leverage entry points where rules are strict, and we already own the process.
            </p>
          </div>
        </motion.div>
      </motion.section>

    </motion.div>
  );
}
