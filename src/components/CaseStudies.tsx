import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      company: "TechScale Inc",
      logo: "TS",
      industry: "Fintech",
      challenge: "Slow development cycles with legacy codebase",
      solution: "AI-augmented refactoring and automated testing",
      results: {
        speedup: "15x",
        metric1: { label: "Deploy Frequency", value: "Daily", before: "Monthly" },
        metric2: { label: "Bug Reduction", value: "85%", before: "High" },
        metric3: { label: "Team Velocity", value: "+300%", before: "Baseline" }
      },
      quote: "SAI transformed our development process. We went from monthly releases to daily deployments with significantly higher code quality.",
      author: "Sarah Chen, CTO"
    },
    {
      company: "InnovateLab",
      logo: "IL",
      industry: "Healthcare",
      challenge: "Complex compliance requirements slowing development",
      solution: "Project-specific agents with compliance knowledge",
      results: {
        speedup: "25x",
        metric1: { label: "Compliance Review", value: "2 days", before: "3 weeks" },
        metric2: { label: "Code Coverage", value: "98%", before: "65%" },
        metric3: { label: "Audit Prep", value: "4 hours", before: "2 weeks" }
      },
      quote: "The Organization Brain's audit capabilities made our SOC2 certification process seamless. We saved months of preparation time.",
      author: "Dr. Michael Rodriguez, VP Engineering"
    },
    {
      company: "DevFlow Corp",
      logo: "DF",
      industry: "E-commerce",
      challenge: "Scaling engineering team with knowledge gaps",
      solution: "Centralized knowledge base and AI mentoring",
      results: {
        speedup: "40x",
        metric1: { label: "Onboarding Time", value: "3 days", before: "6 weeks" },
        metric2: { label: "Knowledge Sharing", value: "+500%", before: "Baseline" },
        metric3: { label: "Code Consistency", value: "95%", before: "60%" }
      },
      quote: "New developers are productive in days, not months. The AI agents provide consistent mentoring at scale.",
      author: "Jennifer Walsh, Head of Engineering"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Customer <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies achieve 10x–100x faster software delivery with SAI
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.company}
              className={`glass-card p-8 lg:p-12 rounded-2xl ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Company Info & Results */}
                <div>
                  {/* Company Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center text-background font-bold text-xl mr-4">
                      {caseStudy.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        {caseStudy.company}
                      </h3>
                      <p className="text-primary">{caseStudy.industry}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-8">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Challenge
                      </h4>
                      <p className="text-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Solution
                      </h4>
                      <p className="text-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-primary pl-6 mb-6">
                    <p className="text-lg italic text-muted-foreground mb-3">
                      "{caseStudy.quote}"
                    </p>
                    <cite className="text-sm text-primary font-medium">
                      — {caseStudy.author}
                    </cite>
                  </blockquote>
                </div>

                {/* Metrics */}
                <div>
                  {/* Main Speedup */}
                  <div className="text-center mb-8 p-6 gradient-hero rounded-2xl border border-primary/20">
                    <div className="text-4xl lg:text-6xl font-heading font-bold text-gradient mb-2">
                      {caseStudy.results.speedup}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Faster Development
                    </div>
                  </div>

                  {/* Detailed Metrics */}
                  <div className="grid grid-cols-1 gap-4">
                    {[caseStudy.results.metric1, caseStudy.results.metric2, caseStudy.results.metric3].map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg">
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                          <div className="text-xs text-muted-foreground/60">
                            From: {metric.before}
                          </div>
                        </div>
                        <div className="text-xl font-bold text-primary">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to achieve similar results?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 50+ companies that have transformed their development process with SAI
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Schedule Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;