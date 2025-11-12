import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { content, toggleLanguage, language, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: content.nav.home },
    { path: '/about', label: content.nav.about },
    { path: '/services', label: content.nav.services },
    { path: '/contact', label: content.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">GT</span>
              </div>
              <div className={`${isRTL ? 'space-x-reverse' : ''}`}>
                <h1 className="text-lg md:text-xl font-bold text-foreground">
                  {content.company.name}
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {content.company.tagline}
                </p>
              </div>
            </motion.div>
          </Link>

          <nav className={`hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.path
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              className="hover-elevate"
            >
              <Globe className="h-5 w-5" />
              <span className={`text-xs font-semibold ${isRTL ? 'mr-1' : 'ml-1'}`}>
                {language === 'en' ? 'AR' : 'EN'}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={isMobileMenuOpen ? (isRTL ? 'إغلاق القائمة' : 'Close menu') : (isRTL ? 'فتح القائمة' : 'Open menu')}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border"
            role="navigation"
            aria-label={isRTL ? 'القائمة الرئيسية' : 'Main navigation'}
          >
            <nav className="px-4 py-4 space-y-2">
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
                    data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors hover-elevate cursor-pointer ${
                      location === link.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-accent'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
