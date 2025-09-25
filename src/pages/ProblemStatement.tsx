import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, DollarSign, AlertTriangle, TrendingDown, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";

const ProblemStatement = () => {
  const problems = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Development Velocity Crisis",
      stat: "73%",
      description: "of engineering teams report missing delivery deadlines consistently",
      impact: "Projects take 2-3x longer than estimated"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Spiraling Development Costs",
      stat: "$85B",
      description: "wasted annually on failed software projects globally",
      impact: "Average cost overrun of 189% for large projects"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Quality & Technical Debt",
      stat: "60%",
      description: "of developer time spent on maintenance vs. new features",
      impact: "Technical debt slows teams by 23% year-over-year"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Knowledge Silos",
      stat: "42%",
      description: "of critical project knowledge exists only in individual minds",
      impact: "Team member departure causes 3-month delays"
    }
  ];

  const painPoints = [
    "Manual code reviews taking days instead of hours",
    "Repetitive tasks consuming 40% of developer time",
    "Context switching reducing productivity by 50%",
    "Legacy systems without proper documentation",
    "Inconsistent coding standards across teams",
    "Deployment processes taking hours with manual steps"
  ];

  const industriesCosts = [
    { industry: "Financial Services", cost: "$2.8M", timeDelay: "8 months" },
    { industry: "Healthcare", cost: "$1.9M", timeDelay: "12 months" },
    { industry: "E-commerce", cost: "$3.5M", timeDelay: "6 months" },
    { industry: "Manufacturing", cost: "$2.1M", timeDelay: "10 months" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="relative pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-20" />
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-destructive rounded-full animate-particle-flow opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: `${12 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm text-destructive mb-8 animate-fade-in">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Critical Industry Challenge
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
                <span className="text-gradient">The Development Crisis</span>
                <br />
                <span className="text-foreground">Choking Innovation</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Software development is broken. Teams struggle with outdated processes, 
                manual workflows, and knowledge silos that drain productivity and stifle innovation.
              </p>
            </div>

            {/* Core Problems Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {problems.map((problem, index) => (
                <Card key={index} className="glass-card border-destructive/20 hover:border-destructive/40 transition-smooth animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-3 bg-destructive/10 rounded-lg text-destructive">
                        {problem.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gradient mb-1">{problem.stat}</div>
                        <CardTitle className="text-xl">{problem.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-3">
                      {problem.description}
                    </CardDescription>
                    <div className="text-sm text-destructive font-medium">
                      💡 Impact: {problem.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Daily Pain Points */}
            <div className="mb-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Daily Developer Pain Points</h2>
                <p className="text-muted-foreground text-center mb-12">
                  The reality of modern software development
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {painPoints.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3 glass-card p-4 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <TrendingDown className="h-5 w-5 text-destructive flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Cost Analysis */}
            <div className="mb-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Real-World Impact by Industry</h2>
                <p className="text-muted-foreground text-center mb-12">
                  Average cost of development inefficiencies per failed project
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {industriesCosts.map((item, index) => (
                    <Card key={index} className="glass-card border-primary/20 text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-destructive mb-2">{item.cost}</div>
                        <div className="text-sm text-muted-foreground mb-2">Average Loss</div>
                        <div className="text-lg font-semibold text-primary mb-1">{item.timeDelay}</div>
                        <div className="text-xs text-muted-foreground mb-3">Delay</div>
                        <Badge variant="outline" className="text-xs">{item.industry}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* The Status Quo is Unsustainable */}
            <div className="max-w-4xl mx-auto">
              <Card className="glass-card border-destructive/30 bg-destructive/5">
                <CardContent className="p-8 text-center">
                  <Code className="h-16 w-16 text-destructive mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-4">The Status Quo is Unsustainable</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    While businesses demand faster innovation, traditional development approaches 
                    are hitting their limits. Teams need AI-augmented solutions to bridge the gap 
                    between market demands and development capabilities.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="hero" size="lg" data-testid="link-demo">
                      <Link to="/mvp-demo">
                        See the Solution
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" data-testid="link-waitlist">
                      <Link to="/waitlist">
                        Join Early Access
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProblemStatement;