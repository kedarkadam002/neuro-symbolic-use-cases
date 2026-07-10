import React from "react";
import { Link, useLocation } from "wouter";
import { Network, Layers, Shield, Target, BookOpen, Users } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const getBaseUrl = () => {
    // Handling Vite preview base url if provided as env
    return import.meta.env.BASE_URL || "/";
  };
  
  // Simplify link path helper
  const linkPath = (path: string) => {
    const base = getBaseUrl() === "/" ? "" : getBaseUrl();
    return `${base}${path}`;
  };

  const navLinks = [
    { name: "Concept", path: "/concept", icon: BookOpen },
    { name: "Competitors", path: "/competitors", icon: Users },
    { name: "Use Cases", path: "/use-cases", icon: Target },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link href={linkPath("/")} className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 bg-primary/10 rounded border border-primary/20 flex items-center justify-center text-primary">
          <Network size={20} />
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-bold text-lg leading-tight tracking-tight text-foreground">Firstsource</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Exec Briefing</span>
        </div>
      </Link>

      <nav className="flex items-center gap-2 bg-card border border-border rounded-full p-1 shadow-sm">
        {navLinks.map((link) => {
          const isActive = location === linkPath(link.path) || (location === "/" && link.path === "/");
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              href={linkPath(link.path)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline-block">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
