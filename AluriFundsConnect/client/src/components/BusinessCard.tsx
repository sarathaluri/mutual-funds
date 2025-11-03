import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Download, Share2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@assets/generated_images/Professional_headshot_portrait_224ef997.png";

interface BusinessCardProps {
  variant?: "modern" | "classic" | "minimal";
}

export default function BusinessCard({ variant = "modern" }: BusinessCardProps) {
  const handleDownload = () => {
    console.log("Download business card triggered");
  };

  const handleShare = () => {
    console.log("Share business card triggered");
  };

  const services = [
    "Mutual Fund Distribution (All AMCs)",
    "General Insurance Advisory",
    "Motor Insurance Services",
    "Life Insurance Consultation",
  ];

  if (variant === "modern") {
    return (
      <Card className="relative overflow-hidden p-8 hover-elevate" data-testid="card-business-modern">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-1">ALURI Srinivas</h2>
            <p className="text-lg font-medium text-primary">
              Certified Financial Advisor | AMFI Registered Mutual Fund Distributor
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {services.map((service, idx) => (
                <Badge key={idx} variant="secondary" data-testid={`badge-service-${idx}`}>
                  {service}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center gap-3 text-sm" data-testid="contact-phone">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">+91 94401 43378</span>
            </div>
            <div className="flex items-center gap-3 text-sm" data-testid="contact-email">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-foreground">sarath9284@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm" data-testid="contact-address">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-foreground">Hyderabad, Telangana, India</span>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              data-testid="button-download"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              data-testid="button-share"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === "classic") {
    return (
      <Card className="p-8 text-center hover-elevate" data-testid="card-business-classic">
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profileImage} alt="ALURI Srinivas" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">ALURI Srinivas</h2>
            <div className="h-px bg-primary w-24 mx-auto"></div>
            <p className="text-lg font-medium text-primary">
              AMFI Registered Mutual Fund Distributor
            </p>
            <p className="text-sm text-muted-foreground">
              Insurance & Investment Advisor
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Specialized Services
            </h3>
            {services.map((service, idx) => (
              <div
                key={idx}
                className="text-sm text-foreground font-medium"
                data-testid={`service-${idx}`}
              >
                • {service}
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-4 border-t">
            <div className="text-sm text-foreground" data-testid="contact-phone-classic">
              <Phone className="h-4 w-4 inline mr-2 text-primary" />
              +91 94401 43378
            </div>
            <div className="text-sm text-foreground" data-testid="contact-email-classic">
              <Mail className="h-4 w-4 inline mr-2 text-primary" />
              sarath9284@gmail.com
            </div>
          </div>

          <div className="flex gap-2 justify-center pt-4">
            <Button variant="outline" size="sm" onClick={handleDownload} data-testid="button-download-classic">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare} data-testid="button-share-classic">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 hover-elevate bg-gradient-to-br from-card to-card/50 backdrop-blur" data-testid="card-business-minimal">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profileImage} alt="ALURI Srinivas" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">ALURI Srinivas</h2>
            <p className="text-base text-primary font-medium">
              AMFI Registered Distributor
            </p>
            <p className="text-xs text-muted-foreground">
              Financial & Insurance Advisor
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {services.map((service, idx) => (
              <Badge key={idx} variant="outline" className="text-xs" data-testid={`badge-minimal-${idx}`}>
                {service}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2 text-sm">
            <div data-testid="contact-phone-minimal">
              <Phone className="h-3 w-3 inline mr-2 text-primary" />
              +91 94401 43378
            </div>
            <div data-testid="contact-email-minimal">
              <Mail className="h-3 w-3 inline mr-2 text-primary" />
              sarath9284@gmail.com
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button size="sm" onClick={handleDownload} data-testid="button-download-minimal">
              <Download className="h-3 w-3 mr-1" />
              Save
            </Button>
            <Button size="sm" variant="outline" onClick={handleShare} data-testid="button-share-minimal">
              <Share2 className="h-3 w-3 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}