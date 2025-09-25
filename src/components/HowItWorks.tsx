import { Brain, Zap, Target } from "lucide-react";

const HowItWorks = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Augmented Agile",
      description: "Iterative sprints where AI automates repetitive tasks, accelerates code reviews, and optimizes development workflows for maximum velocity.",
      benefits: ["50% faster sprint completion", "Automated code reviews", "Smart task prioritization"]
    },
    {
      icon: Target,
      title: "Project-Specific Agents",
      description: "AI agents trained on your project context, reducing hallucination and increasing alignment with your specific codebase and requirements.",
      benefits: ["Context-aware AI assistance", "Reduced debugging time", "Consistent code patterns"]
    },
    {
      icon: Brain,
      title: "Organization Brain",
      description: "Centralized knowledge store providing project visibility, contribution analytics, and comprehensive audit trails for enterprise compliance.",
      benefits: ["Complete audit trails", "Team performance insights", "Centralized knowledge base"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            How <span className="text-gradient">SAI</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three integrated pillars that transform how enterprise teams develop software
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-bounce group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-6 group-hover:animate-glow-pulse">
                <feature.icon className="h-8 w-8 text-background" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 gradient-secondary rounded-full flex items-center justify-center text-background font-bold text-sm">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see these pillars in action?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="text-primary hover:text-primary-glow transition-smooth font-medium flex items-center"
            >
              Watch Interactive Demo
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;