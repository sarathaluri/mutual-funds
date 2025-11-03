import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">ALURI Srinivas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AMFI Registered Mutual Fund Distributor providing professional wealth management and comprehensive insurance advisory services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="footer-phone">
                <Phone className="h-4 w-4" />
                <span>+91 94401 43378</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="footer-email">
                <Mail className="h-4 w-4" />
                <span>sarath9284@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mutual-funds">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-mf">
                    Mutual Fund Advisory
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/insurance">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-gi">
                    General Insurance Advisory
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/insurance">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-mi">
                    Motor Insurance Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/insurance">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-li">
                    Life Insurance Consultation
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-home">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/business-cards">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-cards">
                    Business Cards
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-contact">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} ALURI Srinivas. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              DISCLAIMER: Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}