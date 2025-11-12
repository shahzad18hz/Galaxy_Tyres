import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { content, isRTL } = useLanguage();

  const brands = content.services.brands.brandList;

  const navLinks = [
    { path: '/', label: content.nav.home },
    { path: '/about', label: content.nav.about },
    { path: '/services', label: content.nav.services },
    { path: '/contact', label: content.nav.contact },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-b border-border">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-background text-sm font-medium text-muted-foreground rounded-md border border-border hover-elevate transition-all duration-300"
              data-testid={`footer-brand-${index}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold text-foreground" data-testid="text-footer-about-title">
              {content.footer.about.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {content.footer.about.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {brands.slice(0, 4).map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-background text-xs font-medium text-muted-foreground rounded-md border border-border"
                  data-testid={`text-brand-${index}`}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold text-foreground" data-testid="text-footer-quicklinks-title">
              {content.footer.quickLinks.title}
            </h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <span
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        (e.target as HTMLElement).click();
                      }
                    }}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover-elevate px-2 py-1 rounded-md cursor-pointer"
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold text-foreground" data-testid="text-footer-contact-title">
              {content.footer.contact.title}
            </h3>
            <div className="space-y-3">
              <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground" data-testid="text-footer-address">
                  {content.contact.info.address}
                </p>
              </div>
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${content.contact.info.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  {content.contact.info.phone}
                </a>
              </div>
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${content.contact.info.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  {content.contact.info.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              {content.footer.copyright}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center hover-elevate transition-all duration-300 text-muted-foreground hover:text-primary"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
