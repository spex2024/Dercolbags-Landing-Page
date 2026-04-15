import { FloatingPathsBackground } from "@/components/ui/floating-paths";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FloatingPathsBackgroundExample() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <FloatingPathsBackground
        className="max-w-5xl aspect-video rounded-3xl border border-border shadow-2xl flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm overflow-hidden"
        position={-0.5}
      >
        <div className="relative z-20 text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary self-center animate-in fade-in slide-in-from-bottom-3 duration-1000">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-wider uppercase">Premium Background Effect</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Elevate Your Interface with <span className="text-primary italic">Fluid Motion</span>
          </h1>
          
          <p className="text-muted-foreground text-lg max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-400">
            The FloatingPathsBackground component adds a sophisticated, dynamic layer to your designs without overwhelming the content.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-600 pt-4">
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 backdrop-blur-md hover:bg-muted/50 transition-all active:scale-95">
              View Components
            </Button>
          </div>
        </div>
      </FloatingPathsBackground>
      
      <div className="mt-12 text-center text-muted-foreground max-w-md animate-in fade-in duration-1000 delay-1000">
        <p className="text-sm">
          Try hovering over the card or resizing your browser window to see the fluid response of the SVG paths.
        </p>
      </div>
    </div>
  );
}
