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

        {/* Development of Anything - Enhanced Interactive Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Development of <span className="text-gradient">Anything</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Supporting development of <span className="text-primary font-semibold">ANYTHING</span> in your company - from web apps with React.js and Tailwind CSS to enterprise systems with Spring Boot, Python, Java, C++, Go, Rust, and beyond. We automate <span className="text-primary font-semibold">ALL tasks</span> in the development process, 100x-ing your speed with intelligent automation through MCP connections.
            </p>
          </div>
          
          {/* Interactive Development Capabilities */}
          <div className="space-y-16">
            
            {/* Develop Anything */}
            <div className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/attached_assets/stock_images/modern_software_deve_1ed9014a.jpg" 
                    alt="Development Team" 
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mr-4">
                      <Code className="h-8 w-8 text-background" />
                    </div>
                    <h4 className="text-3xl font-heading font-bold text-gradient">Develop Anything</h4>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    From simple web applications to complex enterprise systems, we support every technology stack and programming language your company needs.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-primary mb-3">Frontend & Web</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• React.js, Vue.js, Angular</li>
                        <li>• Tailwind CSS, Bootstrap</li>
                        <li>• TypeScript, JavaScript</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-3">Backend & Systems</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Spring Boot, Python, Node.js</li>
                        <li>• Java, C++, Go, Rust</li>
                        <li>• AI/ML: TensorFlow, PyTorch</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automate All Tasks */}
            <div className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 gradient-secondary rounded-2xl mr-4">
                      <Zap className="h-8 w-8 text-background" />
                    </div>
                    <h4 className="text-3xl font-heading font-bold text-gradient">Automate All Tasks</h4>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Every single step of your development process is automated - from initial requirements gathering to final deployment and monitoring.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-secondary mb-3">Development Phase</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Requirements analysis</li>
                        <li>• Code generation</li>
                        <li>• Architecture design</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-secondary mb-3">Operations Phase</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Testing & QA automation</li>
                        <li>• Documentation & deployment</li>
                        <li>• Monitoring & maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden order-1 lg:order-2">
                  <img 
                    src="/attached_assets/stock_images/ai_automation_and_ro_2a0b66ae.jpg" 
                    alt="AI Automation" 
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-secondary/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* MCP-Powered Automation */}
            <div className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/attached_assets/stock_images/mcp_server_connectio_d32b2351.jpg" 
                    alt="MCP Network" 
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/20" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mr-4">
                      <Workflow className="h-8 w-8 text-background" />
                    </div>
                    <h4 className="text-3xl font-heading font-bold text-gradient">MCP-Powered Automation</h4>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Model Context Protocol (MCP) connections enable seamless integration with databases, APIs, and services, automating every aspect of your infrastructure.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-primary mb-3">Infrastructure</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Database automation</li>
                        <li>• API integrations</li>
                        <li>• CI/CD pipelines</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary mb-3">Operations</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Monitoring & alerting</li>
                        <li>• Security & compliance</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Vision & Mission - Enhanced with Image */}
        <div id="about" className="mb-32">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="relative">
              <img 
                src="/attached_assets/stock_images/business_team_vision_c7da29b1.jpg" 
                alt="Vision and Mission" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-4xl font-heading font-bold text-center mb-4">
                  Our <span className="text-gradient">Vision & Mission</span>
                </h3>
              </div>
            </div>
            <div className="p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mr-4">
                      <BarChart3 className="h-6 w-6 text-background" />
                    </div>
                    <h4 className="text-3xl font-heading font-bold text-gradient">Vision</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To revolutionize software development by creating AI-powered platforms that seamlessly integrate with existing workflows, making intelligent development accessible to teams of all sizes while maintaining enterprise-grade security and performance standards.
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className="flex items-center justify-center w-12 h-12 gradient-secondary rounded-xl mr-4">
                      <Users className="h-6 w-6 text-background" />
                    </div>
                    <h4 className="text-3xl font-heading font-bold text-gradient">Mission</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We empower development teams by providing AI agents that understand project context, integrate with all major development tools, and accelerate productivity by 100x. Our mission is to make AI adaptation effortless in your workflow while ensuring robust, scalable, and secure application development.
                  </p>
                </div>
              </div>
            </div>
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