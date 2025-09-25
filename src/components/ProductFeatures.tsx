import { Button } from "@/components/ui/button";
import { 
  Code, 
  GitBranch, 
  Shield, 
  BarChart3, 
  Workflow, 
  Users,
  Lock,
  Zap
} from "lucide-react";

const ProductFeatures = () => {
  const mainFeatures = [
    {
      icon: Code,
      title: "Project-Specific Agents",
      description: "AI agents with deep project context that understand your codebase, patterns, and requirements.",
      features: [
        "Context-aware code generation",
        "Smart bug detection and fixes",
        "Architecture-consistent suggestions",
        "Custom coding standards enforcement"
      ]
    },
    {
      icon: BarChart3,
      title: "Central Organization Brain",
      description: "Unified intelligence platform providing visibility, analytics, and audit capabilities.",
      features: [
        "Real-time project insights",
        "Team contribution analytics",
        "Complete audit trails",
        "Cross-project knowledge sharing"
      ]
    },
    {
      icon: Workflow,
      title: "Developer Dashboard",
      description: "Comprehensive workspace for tracking progress, managing tasks, and monitoring performance.",
      features: [
        "Sprint progress tracking",
        "Time and contribution heatmaps",
        "AI assistance metrics",
        "Team collaboration tools"
      ]
    }
  ];

  const integrations = [
    { name: "GitHub", icon: GitBranch },
    { name: "GitLab", icon: GitBranch },
    { name: "Jira", icon: Workflow },
    { name: "Slack", icon: Users },
    { name: "CI/CD", icon: Zap },
    { name: "SSO", icon: Lock }
  ];

  const securityFeatures = [
    "Role-based access control",
    "End-to-end encryption",
    "SOC2 Type II compliance",
    "Comprehensive audit logs",
    "Data residency options",
    "Enterprise-grade security"
  ];

  return (
    <section id="product" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Product <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade AI development platform built for scale, security, and performance
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-bounce"
            >
              <div className="flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-6">
                <feature.icon className="h-8 w-8 text-background" />
              </div>
              
              <h3 className="text-2xl font-heading font-semibold mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              Seamless <span className="text-gradient">Integrations</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Works with your existing development workflow
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-bounce group"
              >
                <integration.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-primary-glow transition-smooth" />
                <div className="text-sm font-medium text-muted-foreground">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="glass-card p-8 lg:p-12 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 gradient-secondary rounded-xl mr-4">
                  <Shield className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold">
                  Security & <span className="text-gradient">Compliance</span>
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Enterprise-grade security features designed to meet the most stringent 
                compliance requirements while maintaining development velocity.
              </p>
              
              <Button variant="hero" size="lg">
                Security Documentation
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-muted/10 rounded-lg">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;