import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Zap, Shield, CheckCircle } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
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
                Early Access Program
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
                <span className="text-gradient">Join the Revolution</span>
                <br />
                <span className="text-foreground">Be Among the First</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Get exclusive early access to SAI and transform your development process. 
                Limited spots available for forward-thinking engineering teams.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Waitlist Form */}
              <div className="order-2 lg:order-1">
                <Card className="glass-card border-primary/20 animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gradient">
                      {isSubmitted ? "Welcome to SAI!" : "Join the Waitlist"}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {isSubmitted 
                        ? "Thank you for joining! We'll be in touch soon with your early access details."
                        : "Secure your spot and be among the first to experience AI-augmented development."
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
                        <p className="text-muted-foreground mb-6">
                          We'll notify you as soon as early access is available.
                        </p>
                        <Badge variant="outline" className="text-primary border-primary">
                          Position: #{Math.floor(Math.random() * 100) + 1}
                        </Badge>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-waitlist">
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
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Your Company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="bg-muted/50 border-muted-foreground/20 focus:border-primary"
                            data-testid="input-company"
                          />
                        </div>

                        <Button type="submit" className="w-full" variant="hero" data-testid="button-submit">
                          Join Waitlist
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
                  Why Join Early Access?
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