import React from "react";
import { motion, type Variants } from "framer-motion";
import { Layers, ArrowRight, Landmark, Activity, Zap } from "lucide-react";
import { Link } from "wouter";
import { domains, useCases, domainSummary, type DomainId } from "@/data/content";

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
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl">
          Enterprise-grade applications of neuro-symbolic AI that Firstsource can build, integrate or consult on for its clients across the US and UK. Choose a domain to see the decision points that matter most.
        </motion.p>
      </div>

      {/* Domain Cards */}
      <motion.section variants={containerVariants} className="grid md:grid-cols-3 gap-6">
        {domains.map((domain) => {
          const Icon = domainIcons[domain.id];
          const count = useCases.filter((uc) => uc.domain === domain.id).length;
          return (
            <Link key={domain.id} href={linkPath(`/use-cases/${domain.id}`)}>
              <motion.div
                variants={itemVariants}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all cursor-pointer overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 text-primary border border-border group-hover:bg-primary/10 transition-colors">
                  <Icon size={24} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{domain.regions}</span>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{domain.name}</h3>
                <p className="text-sm text-muted-foreground/80 mb-4">{domain.tagline}</p>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">{domain.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{count} use cases</span>
                  <div className="flex items-center text-sm font-medium text-primary uppercase tracking-wide gap-2">
                    View <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.section>

      {/* Domain summaries */}
      <motion.section variants={containerVariants} className="mt-16 grid gap-4">
        {domains.map((domain) => (
          <motion.div key={domain.id} variants={itemVariants} className="flex items-start gap-4 border-l-2 border-border pl-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground shrink-0 mt-1 w-28">{domain.name}</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{domainSummary[domain.id]}</p>
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
}
