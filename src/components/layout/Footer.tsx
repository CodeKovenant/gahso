import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const footerLinks = {
  organization: [
  { name: "About Us", path: "/about" },
  { name: "Thematic Programmes", path: "/programs" },
  { name: "Our Impact", path: "/impact" },
  { name: "Contact Us", path: "/contact" }],

  getInvolved: [
  { name: "Volunteer", path: "/get-involved" },
  { name: "Donate", path: "/donate" },
  { name: "Partner With Us", path: "/get-involved" },
  { name: "Careers", path: "/get-involved" }],

  tatuaInitiative: [
  { name: "TaTua Farms", path: "/tatua-farms" },
  { name: "TaTua Salon", path: "/tatua-salon" },
  { name: "MloFlow", path: "/mloflow" }],

  fundedProjects: [
  { name: "Youth Voice (GE-FS)", path: "/youth-voice" },
  { name: "Digital Inclusion", path: "/digital-inclusion" },
  { name: "The Restorers Project", path: "/restorers-project" }]

};

const socialLinks = [
{ icon: Facebook, href: "https://www.facebook.com/Gahfso", label: "Facebook" },
{ icon: Twitter, href: "https://x.com/GAHSO254", label: "X (Twitter)" },
{ icon: Youtube, href: "https://www.youtube.com/channel/UC2NQHTpNKBP1rz7YJxD8lBg", label: "YouTube" },
{ icon: Linkedin, href: "https://ke.linkedin.com/company/gahso", label: "LinkedIn" }];


export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      

























      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center mb-4">
                <img
                  src={logo}
                  alt="Global Alliance for a Healthy Society (GAHSO)"
                  className="h-14 w-auto object-contain brightness-0 invert" />

              </Link>
              <p className="text-background/70 mb-6 max-w-sm">
                Global Alliance for a Healthy Society (GAHSO) - Empowering youth and transforming communities since 2016.
              </p>
              <div className="space-y-3 text-background/70">
                <a href="mailto:info@gahso.org" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  info@gahso.org
                </a>
                <a href="tel:+254706077426" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  +254 706 077 426
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>Bondo, Kenya</span>
                </div>
              </div>
            </div>

            {/* Organization Links */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Organization</h3>
              <ul className="space-y-3">
                {footerLinks.organization.map((link) =>
                <li key={link.path}>
                    <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors">

                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* Get Involved Links */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Get Involved</h3>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link, index) =>
                <li key={index}>
                    <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors">

                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* TaTua Initiative Links */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">TaTua Initiative</h3>
              <ul className="space-y-3">
                {footerLinks.tatuaInitiative.map((link, index) =>
                <li key={index}>
                    <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors">

                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* Funded Projects Links */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Funded Projects</h3>
              <ul className="space-y-3">
                {footerLinks.fundedProjects.map((link, index) =>
                <li key={index}>
                    <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors">

                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} GAHSO. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) =>
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">

                  <social.icon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>);

}