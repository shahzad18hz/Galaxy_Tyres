import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

import forcelandLogo from '@assets/generated_images/Forceland_tire_logo_39b632c1.png';
import dunlopLogo from '@assets/generated_images/Dunlop_style_logo_ce45e10b.png';
import yokohamaLogo from '@assets/generated_images/Yokohama_style_logo_b0756d16.png';
import michelinLogo from '@assets/generated_images/Michelin_style_logo_76006bae.png';
import bridgestoneLogo from '@assets/generated_images/Bridgestone_style_logo_cf94c6cf.png';
import continentalLogo from '@assets/generated_images/Continental_style_logo_d9204fcf.png';
import hankookLogo from '@assets/generated_images/Hankook_style_logo_dc961046.png';
import pirelliLogo from '@assets/generated_images/Pirelli_style_logo_acbe6b81.png';

export function Footer() {
  const { content, isRTL } = useLanguage();

  const navLinks = [
    { path: '/', label: content.nav.home },
    { path: '/about', label: content.nav.about },
    { path: '/services', label: content.nav.services },
    { path: '/contact', label: content.nav.contact },
  ];

  const brandLogos = [
    forcelandLogo,
    dunlopLogo,
    yokohamaLogo,
    michelinLogo,
    bridgestoneLogo,
    continentalLogo,
    hankookLogo,
    pirelliLogo,
  ];

  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-b border-border">
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="h-16 w-32 bg-background rounded-md border border-border hover-elevate transition-all duration-300 overflow-hidden"
              data-testid={`footer-brand-${index}`}
            >
              <img
                src={logo}
                alt={`Brand logo ${index + 1}`}
                className="w-full h-full object-contain p-2"
              />
            </div>
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

        <div className="pt-8  border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm text-center text-muted-foreground" data-testid="text-copyright">
              {content.footer.copyright}
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
