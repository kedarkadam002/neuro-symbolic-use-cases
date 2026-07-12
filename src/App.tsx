import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Switch, Route, Router } from "wouter";
import { Navbar } from "@/components/layout/Navbar";

// Pages
import Home from '@/pages/Home';
import Concept from '@/pages/Concept';
import Competitors from '@/pages/Competitors';
import UseCases from '@/pages/UseCases';
import UseCaseDomain from '@/pages/UseCaseDomain';

const queryClient = new QueryClient();

// Use Vite's base path for routing
const base = import.meta.env.BASE_URL || "/";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router base={base === '/' ? undefined : base}>
          <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-hidden font-sans">
            <div className="noise-overlay" />
            <Navbar />
            <main className="pt-32 md:pt-40 px-6 md:px-12 max-w-7xl mx-auto pb-24">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/concept" component={Concept} />
                <Route path="/competitors" component={Competitors} />
                <Route path="/use-cases" component={UseCases} />
                <Route path="/use-cases/:domain" component={UseCaseDomain} />
                <Route>
                  <div className="text-center py-32">
                    <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
                    <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
                  </div>
                </Route>
              </Switch>
            </main>
          </div>
          <Toaster />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
