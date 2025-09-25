import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Zap, Users, Building, CheckCircle2 } from "lucide-react";

const MvpDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    useCase: "",
    timeline: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const demoFeatures = [
    { icon: <Zap className="h-6 w-6" />, title: "AI-Powered Code Generation", description: "See how SAI generates production-ready code from natural language" },
    { icon: <Users className="h-6 w-6" />, title: "Team Collaboration", description: "Experience seamless collaboration with AI-augmented project management" },
    { icon: <Building className="h-6 w-6" />, title: "Enterprise Integration", description: "Discover how SAI integrates with your existing development stack" }
  ];

  const teamSizes = [
    "1-5 developers",
    "6-15 developers", 
    "16-50 developers",
    "51-100 developers",
    "100+ developers"
  ];

  const roles = [
    "Engineering Manager",
    "CTO/VP Engineering", 
    "Lead Developer",
    "DevOps Engineer",
    "Product Manager",
    "Founder/CEO",
    "Other"
  ];

  const timelines = [
    "Immediately",
    "Within 1 month",
    "Within 3 months",
    "Within 6 months",
    "Just exploring"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="relative pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-30" />
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-particle-flow opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.8}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm text-primary mb-8 animate-fade-in">
                <Play className="w-4 h-4 mr-2" />
                Live Demo Request
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
                <span className="text-gradient">Experience SAI</span>
                <br />
                <span className="text-foreground">In Action</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                See how SAI transforms your development workflow with a personalized demo 
                tailored to your team's specific needs and challenges.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Demo Request Form */}
              <div className="order-2 lg:order-1">
                <Card className="glass-card border-primary/20 animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gradient">
                      {isSubmitted ? "Demo Scheduled!" : "Request Your Demo"}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {isSubmitted 
                        ? "Thank you! Our team will contact you within 24 hours to schedule your personalized demo."
                        : "Tell us about your team and we'll customize the demo to your specific needs."
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">We'll be in touch soon!</h3>
                        <p className="text-muted-foreground mb-6">
                          Expect to hear from our team within 24 hours to schedule your demo.
                        </p>
                        <div className="space-y-2">
                          <Badge variant="outline" className="text-primary border-primary block">
                            Demo Duration: 30-45 minutes
                          </Badge>
                          <Badge variant="outline" className="text-primary border-primary block">
                            Customized to your use case
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-demo">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              required
                              className="bg-muted/50 border-muted-foreground/20 focus:border-primary"
                              data-testid="input-firstname"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              type="text"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              required
                              className="bg-muted/50 border-muted-foreground/20 focus:border-primary"
                              data-testid="input-lastname"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="bg-muted/50 border-muted-foreground/20 focus:border-primary"
                            data-testid="input-email"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company *</Label>
                            <Input
                              id="company"
                              type="text"
                              value={formData.company}
                              onChange={(e) => handleInputChange("company", e.target.value)}
                              required
                              className="bg-muted/50 border-muted-foreground/20 focus:border-primary"
                              data-testid="input-company"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="role">Role *</Label>
                            <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)} required>
                              <SelectTrigger className="bg-muted/50 border-muted-foreground/20 focus:border-primary" data-testid="select-role">
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                              <SelectContent>
                                {roles.map((role) => (
                                  <SelectItem key={role} value={role}>{role}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="teamSize">Team Size *</Label>
                            <Select value={formData.teamSize} onValueChange={(value) => handleInputChange("teamSize", value)} required>
                              <SelectTrigger className="bg-muted/50 border-muted-foreground/20 focus:border-primary" data-testid="select-teamsize">
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                              <SelectContent>
                                {teamSizes.map((size) => (
                                  <SelectItem key={size} value={size}>{size}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeline">Implementation Timeline</Label>
                            <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                              <SelectTrigger className="bg-muted/50 border-muted-foreground/20 focus:border-primary" data-testid="select-timeline">
                                <SelectValue placeholder="When do you need this?" />
                              </SelectTrigger>
                              <SelectContent>
                                {timelines.map((timeline) => (
                                  <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="useCase">Specific Use Case or Challenge</Label>
                          <Textarea
                            id="useCase"
                            placeholder="Tell us about your current development challenges or what you'd like to see in the demo..."
                            value={formData.useCase}
                            onChange={(e) => handleInputChange("useCase", e.target.value)}
                            className="bg-muted/50 border-muted-foreground/20 focus:border-primary min-h-[100px]"
                            data-testid="textarea-usecase"
                          />
                        </div>

                        <Button type="submit" className="w-full" variant="hero" data-testid="button-submit">
                          Request Personalized Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Demo Features */}
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-2xl font-bold text-center lg:text-left mb-8">
                  What You'll See in the Demo
                </h2>
                
                {demoFeatures.map((feature, index) => (
                  <Card key={index} className="glass-card border-primary/10 hover:border-primary/30 transition-smooth animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Demo Stats */}
                <div className="glass-card p-6 mt-8 animate-fade-in-up">
                  <h3 className="font-semibold mb-4 text-center">Demo Highlights</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">30-45</div>
                      <div className="text-xs text-muted-foreground">Minutes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">Customized</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Live</div>
                      <div className="text-xs text-muted-foreground">Real-time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Q&A</div>
                      <div className="text-xs text-muted-foreground">Interactive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MvpDemo;