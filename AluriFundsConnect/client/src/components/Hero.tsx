import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";
import heroImage from "@assets/generated_images/Financial_consulting_hero_image_e51cfc0d.png";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            ALURI Srinivas
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Certified Financial Advisor & Insurance Consultant
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Providing professional wealth management services through mutual fund distribution and comprehensive insurance advisory. Authorized distributor for all major Asset Management Companies (AMCs) in India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-start">
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-background/80 backdrop-blur"
              data-testid="button-hero-cards"
            >
              Download Contact Information
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3" data-testid="feature-investments">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Investment Advisory</div>
                <div className="text-sm text-muted-foreground">Authorized AMC Partner</div>
              </div>
            </div>

            <div className="flex items-center gap-3" data-testid="feature-insurance">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Insurance Solutions</div>
                <div className="text-sm text-muted-foreground">Comprehensive Coverage</div>
              </div>
            </div>

            <div className="flex items-center gap-3" data-testid="feature-trust">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Professional Service</div>
                <div className="text-sm text-muted-foreground">Client-Focused Approach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}