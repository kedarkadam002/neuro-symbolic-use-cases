import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Landmark, Activity, Zap, Building2 } from "lucide-react";
import { Link, useParams } from "wouter";
import { domains, useCases, type DomainId } from "@/data/content";

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

const domainIcons: Record<DomainId, React.ComponentType<{ size?: number }>> = {
  bfsi: Landmark,
  healthcare: Activity,
  "energy-utility": Zap,
};

function getBaseUrl() {
  return import.meta.env.BASE_URL || "/";
}
function linkPath(path: string) {
  const base = getBaseUrl();
  return `${base === "/" ? "" : base}${path}`;
}

export default function UseCaseDomain() {
  const params = useParams<{ domain: string }>();
  const domain = domains.find((d) => d.id === params.domain);

  if (!domain) {
    return (
      <div className="max-w-5xl mx-auto text-center py-32">
        <h1 className="text-4xl font-bold mb-4">Domain Not Found</h1>
        <Link href={linkPath("/use-cases")} className="text-primary font-medium">
          Back to Use Cases
        </Link>
      </div>
    );
  }

  const Icon = domainIcons[domain.id];
  const domainUseCases = useCases.filter((uc) => uc.domain === domain.id);

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl mx-auto">

      {/* Back link */}
      <motion.div variants={itemVariants} className="mb-8">
        <Link href={linkPath("/use-cases")} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={16} />
          All Domains
        </Link>
      </motion.div>

      {/* Header */}
      <div className="mb-16">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary border border-border">
            <Icon size={24} />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">{domain.regions}</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{domain.name}</h1>
          </div>
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl">
          {domain.description}
        </motion.p>
      </div>

      {/* Use case cards */}
      <motion.section variants={containerVariants}>
        <div className="grid gap-12">
          {domainUseCases.map((useCase, i) => (
            <motion.div
              key={useCase.id}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col relative"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-3xl font-light text-muted-foreground/30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-bold leading-tight pt-1">{useCase.title}</h3>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-mono uppercase tracking-wider shrink-0">
                  {useCase.region}
                </div>
              </div>

              {/* Current state */}
              <div className="mb-6 border-l-2 border-border pl-4">
                <p className="text-sm text-muted-foreground italic">"{useCase.current}"</p>
              </div>

              {/* Problem & Solution detail */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">The Problem</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">{useCase.problemDetail}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">The Solution</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">{useCase.solutionDetail}</p>
                </div>
              </div>

              {/* Architecture Flow Chips */}
              <div className="mb-8">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  How the system works <ArrowRight size={12} />
                </h4>
                <div className="flex flex-wrap gap-2 items-center">
                  {useCase.flow.split('→').map((step, si, arr) => (
                    <React.Fragment key={si}>
                      <span className="bg-secondary/50 px-3 py-1.5 border border-border rounded text-xs font-mono text-foreground/80">
                        {step.trim()}
                      </span>
                      {si < arr.length - 1 && <span className="text-muted-foreground/40"><ArrowRight size={14} /></span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Grid for Output Example and Benefits */}
              <div className="grid md:grid-cols-2 gap-6 mt-auto">
                {/* Example Output Box */}
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
                  {useCase.output.metrics.length > 0 && (
                    <div className="flex gap-4 mt-4 pt-4 border-t border-primary/10">
                      {useCase.output.metrics.map((m, mi) => (
                        <div key={mi}>
                          <span className="font-mono text-[10px] text-muted-foreground block">{m.label.toUpperCase()}</span>
                          <span className="text-lg font-bold text-primary">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                  <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-500 mb-4">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.benefits.split(',').map((benefit, bi) => (
                      <span key={bi} className="inline-flex items-center px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                        {benefit.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Target Clients */}
              <div className="mt-6 bg-secondary/20 border border-border/60 rounded p-5">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <Building2 size={14} className="text-primary" />
                  Potential Clients to Target
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {useCase.targetClients.map((client, ci) => (
                    <div key={ci} className="flex items-start gap-2">
                      <span className="text-primary/60 mt-1.5 shrink-0">•</span>
                      <div>
                        <span className="text-sm font-semibold text-foreground">{client.name}</span>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{client.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Disclaimer */}
      <motion.p variants={itemVariants} className="mt-10 text-xs text-muted-foreground/70 italic">
        Target companies are illustrative examples that fit each use case's profile, based on public information about company size, sector and regulatory exposure — not confirmed prospects or existing relationships.
      </motion.p>
    </motion.div>
  );
}
