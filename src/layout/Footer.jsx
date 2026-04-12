import { Code2 } from "lucide-react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/aliDibrahim/", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/ali-d-ibraheem/", label: "LinkedIn" },
  { icon: FiFacebook, href: "https://www.facebook.com/ali.ibraheem.35513/", label: "Facebook" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo & Copyright */}
          <div className="text-center">
            <a href="#" className="text-xl font-bold tracking-tight text-primary">
              <div className="flex items-center justify-center gap-1">
                <Code2 className="w-8 h-8" />
                Ali Dev
              </div>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} ALI IBRAHIM. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm md:text-lg text-primary-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
