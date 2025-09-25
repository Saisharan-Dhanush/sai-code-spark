import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#product" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Integrations", href: "/integrations" },
      { name: "Security", href: "/security" },
      { name: "API Documentation", href: "/docs" },
    ],
    solutions: [
      { name: "Enterprise", href: "/solutions/enterprise" },
      { name: "Startups", href: "/solutions/startups" },
      { name: "Agencies", href: "/solutions/agencies" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "ROI Calculator", href: "/roi" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Whitepapers", href: "/resources" },
      { name: "Webinars", href: "/webinars" },
      { name: "Community", href: "/community" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Data Processing", href: "/data-processing" },
      { name: "Compliance", href: "/compliance" },
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/sai_dev", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/sai-dev", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/sai-dev", icon: Github },
    { name: "Email", href: "mailto:hello@sai.dev", icon: Mail },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@sai.dev", href: "mailto:hello@sai.dev" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: null },
  ];

  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-3xl font-heading font-bold text-gradient mr-3">
                  SAI
                </div>
                <div className="text-sm text-muted-foreground">
                  Smart AI
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Enterprise AI-development platform delivering 10x–100x faster software delivery 
                through AI-augmented Agile development and project-specific AI agents.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <contact.icon className="h-4 w-4 text-primary mr-3" />
                    {contact.href ? (
                      <a 
                        href={contact.href} 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{contact.text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 glass-card rounded-lg hover:scale-110 transition-bounce group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 SAI (Smart AI). All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SAI (Smart AI)",
              "description": "Enterprise AI-development platform delivering 10x–100x faster software delivery through AI-augmented Agile development",
              "url": "https://sai.dev",
              "logo": "https://sai.dev/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "Sales",
                "email": "hello@sai.dev"
              },
              "sameAs": [
                "https://twitter.com/sai_dev",
                "https://linkedin.com/company/sai-dev",
                "https://github.com/sai-dev"
              ]
            })
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;