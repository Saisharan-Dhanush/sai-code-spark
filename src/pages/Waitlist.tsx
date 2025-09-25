import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Zap, Shield, CheckCircle } from "lucide-react";

const Waitlist = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [challenges, setChallenges] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const benefits = [
    { icon: <Zap className="h-5 w-5" />, title: "10x-100x Faster Development", description: "AI-powered acceleration of your entire development lifecycle" },
    { icon: <Shield className="h-5 w-5" />, title: "Enterprise-Grade Security", description: "Built with security and compliance at the core" },
    { icon: <Users className="h-5 w-5" />, title: "Seamless Team Integration", description: "Works with your existing tools and workflows" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="relative pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-30" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-particle-flow opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm text-primary mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-glow-pulse" />
                Enterprise Demo
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
                <span className="text-gradient">Request Enterprise Demo</span>
                <br />
                <span className="text-foreground">Tailored for Your Team</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Get a personalized demo tailored to your team's needs and see how SAI can transform your development process.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Waitlist Form */}
              <div className="order-2 lg:order-1">
                <Card className="glass-card border-primary/20 animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gradient">
                      {isSubmitted ? "Demo Requested!" : "Request Enterprise Demo"}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {isSubmitted 
                        ? "We'll contact you within 24 hours to schedule your demo"
                        : "Get a personalized demo tailored to your team's needs"
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Demo Requested!</h3>
                        <p className="text-muted-foreground mb-6">
                          We'll contact you within 24 hours to schedule your personalized demo.
                        </p>
                        <Badge variant="outline" className="text-primary border-primary">
                          Response within 24 hours
                        </Badge>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-waitlist">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="bg-muted/50 border-muted-foreground/20 focus:border-primary"
                            data-testid="input-fullname"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-muted/50 border-muted-foreground/20 focus:border-primary"
                            data-testid="input-email"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Company *</Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Your Company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                            className="bg-muted/50 border-muted-foreground/20 focus:border-primary"
                            data-testid="input-company"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select value={role} onValueChange={setRole}>
                            <SelectTrigger className="bg-muted/50 border-muted-foreground/20 focus:border-primary">
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cto">CTO</SelectItem>
                              <SelectItem value="engineering-manager">Engineering Manager</SelectItem>
                              <SelectItem value="senior-developer">Senior Developer</SelectItem>
                              <SelectItem value="team-lead">Team Lead</SelectItem>
                              <SelectItem value="product-manager">Product Manager</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="teamSize">Team Size</Label>
                          <Select value={teamSize} onValueChange={setTeamSize}>
                            <SelectTrigger className="bg-muted/50 border-muted-foreground/20 focus:border-primary">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 developers</SelectItem>
                              <SelectItem value="6-20">6-20 developers</SelectItem>
                              <SelectItem value="21-50">21-50 developers</SelectItem>
                              <SelectItem value="51-100">51-100 developers</SelectItem>
                              <SelectItem value="100+">100+ developers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="challenges">Tell us about your development challenges</Label>
                          <Textarea
                            id="challenges"
                            placeholder="What challenges are you facing with your current development process?"
                            value={challenges}
                            onChange={(e) => setChallenges(e.target.value)}
                            className="bg-muted/50 border-muted-foreground/20 focus:border-primary min-h-[100px]"
                            data-testid="input-challenges"
                          />
                        </div>

                        <Button type="submit" className="w-full" variant="hero" data-testid="button-submit">
                          Request Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Benefits */}
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-2xl font-bold text-center lg:text-left mb-8">
                  Why Request a Demo?
                </h2>
                
                {benefits.map((benefit, index) => (
                  <Card key={index} className="glass-card border-primary/10 hover:border-primary/30 transition-smooth animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="glass-card p-6 mt-8 text-center animate-fade-in-up">
                  <h3 className="font-semibold mb-2 text-primary">Limited Time Offer</h3>
                  <p className="text-sm text-muted-foreground">
                    Early access members get 6 months free when we launch
                  </p>
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

export default Waitlist;