import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Car, Heart, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Fund Distribution",
      description: "Professional advisory services for equity, debt, hybrid, and sector-specific mutual fund schemes. Authorized distributor for all registered Asset Management Companies in India.",
      features: ["Portfolio Management", "Systematic Investment Plans", "Risk Assessment & Planning"],
    },
    {
      icon: Shield,
      title: "General Insurance Advisory",
      description: "Comprehensive risk management solutions for property, business, and asset protection. Customized coverage plans aligned with your requirements.",
      features: ["Property & Casualty", "Commercial Insurance", "Liability Coverage"],
    },
    {
      icon: Car,
      title: "Motor Insurance Services",
      description: "Expert guidance for vehicle insurance including comprehensive policies and statutory third-party coverage. Efficient claims support and policy management.",
      features: ["Comprehensive Policies", "Third-Party Coverage", "Claims Assistance"],
    },
    {
      icon: Heart,
      title: "Life Insurance Consultation",
      description: "Strategic life insurance planning including term assurance, unit-linked insurance plans, and traditional endowment policies for financial security.",
      features: ["Term Life Insurance", "ULIP Solutions", "Whole Life Policies"],
    },
  ];

  return (
    <section className="py-16 md:py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Financial Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored investment and insurance solutions designed to meet your financial objectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} className="hover-elevate" data-testid={`card-service-${idx}`}>
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, fidx) => (
                      <li
                        key={fidx}
                        className="text-sm text-foreground flex items-center"
                        data-testid={`feature-${idx}-${fidx}`}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between"
                    data-testid={`button-learn-more-${idx}`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}