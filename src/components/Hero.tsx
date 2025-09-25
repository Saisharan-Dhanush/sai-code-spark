import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/hero-ai-background.jpg')` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-particle-flow opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm text-primary mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-glow-pulse" />
            AI-Augmented Development Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">SAI — Smart AI:</span>
            <br />
            <span className="text-foreground">100x AI-Accelerated</span>
            <br />
            <span className="text-foreground">Software Delivery</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            AI-augmented Agile, project-specific agents, and a single Organization Brain 
            to make development faster, more auditable, and future-proof.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Button variant="hero" size="xl" className="animate-glow-pulse">
              Request Enterprise Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              See Agents in Action
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;