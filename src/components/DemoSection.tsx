import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DemoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        teamSize: "",
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="demo" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                See <span className="text-gradient">SAI</span> in Action
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Watch how SAI transforms your development workflow with AI-augmented Agile, 
                project-specific agents, and the Organization Brain.
              </p>
            </div>

            {/* Interactive Demo Preview */}
            <div className="glass-card p-8 rounded-2xl border border-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-semibold">
                  Interactive Demo
                </h3>
                <Button variant="hero" size="sm">
                  <Play className="mr-2 h-4 w-4" />
                  Start Demo
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">Project setup & agent configuration</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">AI-assisted code generation & review</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">Organization Brain dashboard tour</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">Team collaboration features</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary">
                  ⚡ 5-minute interactive walkthrough covering all key features
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">
                What you'll learn:
              </h4>
              <ul className="space-y-3">
                {[
                  "How AI agents understand your specific project context",
                  "Real-time collaboration and code review processes",
                  "Organization Brain's audit and analytics capabilities",
                  "Integration setup with your existing tools"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Demo Request Form */}
          <div className="glass-card p-8 rounded-2xl">
            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    Request Enterprise Demo
                  </h3>
                  <p className="text-muted-foreground">
                    Get a personalized demo tailored to your team's needs
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className="bg-background/50 border-primary/20">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="vp-eng">VP Engineering</SelectItem>
                          <SelectItem value="eng-manager">Engineering Manager</SelectItem>
                          <SelectItem value="product-manager">Product Manager</SelectItem>
                          <SelectItem value="tech-lead">Tech Lead</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="team-size">Team Size</Label>
                      <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                        <SelectTrigger className="bg-background/50 border-primary/20">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 developers</SelectItem>
                          <SelectItem value="11-50">11-50 developers</SelectItem>
                          <SelectItem value="51-100">51-100 developers</SelectItem>
                          <SelectItem value="100+">100+ developers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your development challenges</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-background/50 border-primary/20 focus:border-primary min-h-[100px]"
                      placeholder="What challenges are you facing with your current development process?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll contact you within 24 hours to schedule your demo
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your demo request has been submitted successfully. 
                  Our team will contact you within 24 hours to schedule your personalized demo.
                </p>
                <p className="text-sm text-primary">
                  Check your email for confirmation details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;