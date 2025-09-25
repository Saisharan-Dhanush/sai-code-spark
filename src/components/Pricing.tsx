import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Pilot Program",
      subtitle: "Proof-of-Value",
      price: "Custom",
      duration: "3-month engagement",
      description: "Start small with a focused pilot project to demonstrate SAI's value",
      features: [
        "1 project-specific AI agent",
        "Basic Organization Brain setup",
        "Core development team (up to 10 devs)",
        "Integration with 2 primary tools",
        "Weekly progress reviews",
        "Dedicated success manager",
        "Performance metrics & ROI analysis"
      ],
      cta: "Start Pilot",
      popular: false,
      highlight: false
    },
    {
      name: "Enterprise",
      subtitle: "Full Platform",
      price: "Custom",
      duration: "Annual licensing",
      description: "Complete SAI platform for enterprise development teams",
      features: [
        "Unlimited project-specific agents",
        "Full Organization Brain platform",
        "Unlimited team members",
        "All integrations included",
        "Advanced analytics dashboard",
        "24/7 priority support",
        "Custom agent training",
        "Security compliance suite",
        "API access & customizations"
      ],
      cta: "Contact Sales",
      popular: true,
      highlight: true
    },
    {
      name: "Dedicated Agents",
      subtitle: "Premium Support",
      price: "Custom",
      duration: "Ongoing partnership",
      description: "Dedicated AI agents with hands-on SAI engineering support",
      features: [
        "Everything in Enterprise",
        "Dedicated SAI engineering team",
        "Custom agent development",
        "Architecture consultation",
        "Code review & optimization",
        "Training & best practices",
        "Strategic development planning",
        "Quarterly business reviews"
      ],
      cta: "Learn More",
      popular: false,
      highlight: false
    }
  ];

  const faqs = [
    {
      question: "How is pricing determined?",
      answer: "Pricing is based on team size, number of projects, and specific requirements. We work with you to create a custom package that delivers maximum ROI."
    },
    {
      question: "What's included in the pilot program?",
      answer: "The pilot includes full access to SAI for one project, dedicated support, training, and comprehensive ROI analysis to demonstrate value before scaling."
    },
    {
      question: "Do you offer discounts for multi-year contracts?",
      answer: "Yes, we offer significant discounts for annual and multi-year commitments, plus additional benefits like priority support and custom features."
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Enterprise <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible engagement models designed to scale with your team and deliver measurable ROI
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`glass-card p-8 rounded-2xl relative ${
                plan.highlight 
                  ? 'border-2 border-primary shadow-2xl glow-primary' 
                  : 'border border-primary/20'
              } ${plan.highlight ? 'scale-105' : 'hover:scale-105'} transition-bounce`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary px-4 py-2 rounded-full text-background text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {plan.subtitle}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-heading font-bold text-gradient">
                    {plan.price}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.duration}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? "hero" : "hero-outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="glass-card p-8 lg:p-12 rounded-2xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              Calculate Your <span className="text-gradient">ROI</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              See the potential impact of SAI on your development productivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-muted/10 rounded-xl">
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                10-100x
              </div>
              <div className="text-sm text-muted-foreground">
                Faster Development Cycles
              </div>
            </div>
            <div className="p-6 bg-muted/10 rounded-xl">
              <div className="text-3xl font-heading font-bold text-secondary mb-2">
                85%
              </div>
              <div className="text-sm text-muted-foreground">
                Reduction in Bug Rates
              </div>
            </div>
            <div className="p-6 bg-muted/10 rounded-xl">
              <div className="text-3xl font-heading font-bold text-accent mb-2">
                300%
              </div>
              <div className="text-sm text-muted-foreground">
                Increase in Team Velocity
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="hero" size="lg">
              Get Custom ROI Analysis
            </Button>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h3>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h4 className="text-lg font-heading font-semibold mb-3 text-foreground">
                  {faq.question}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to transform your development process?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a consultation to discuss your specific needs and get a custom proposal
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;