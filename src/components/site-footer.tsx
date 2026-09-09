import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-foreground">Backrest</p>
            <p className="mt-1 text-sm text-muted-foreground">
              by Shree Sacha Foam Industries
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Premium quality mattresses crafted for comfort — trusted by
              dealers across India.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  54/1, Kone, Bhiwandi–Wada Rd, Shirishpada,
                  Maharashtra 421303, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:backrest@sachafoam.com"
                  className="transition-colors hover:text-foreground"
                >
                  backrest@sachafoam.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>+91 84519 45853</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-foreground">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <a href="/#contact" className="transition-colors hover:text-foreground">
                  Contact
                </a>
              </li>
              <li>
                <a href="/#about" className="transition-colors hover:text-foreground">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Shree Sacha Foam Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
