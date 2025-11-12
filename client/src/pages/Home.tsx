import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Award, TrendingUp, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

import heroBanner1 from '@assets/generated_images/Hero_banner_premium_tire_8a55fe95.png';
import heroBanner2 from '@assets/generated_images/Night_highway_journey_eb40f802.png';
import heroBanner3 from '@assets/generated_images/Warehouse_facility_interior_b3aaa8c8.png';
import heroBanner4 from '@assets/generated_images/SUV_tire_product_shot_c883c2d4.png';

const heroImages = [heroBanner1, heroBanner2, heroBanner3, heroBanner4];

export default function Home() {
  const { content, isRTL } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featureIcons = [CheckCircle2, Award, TrendingUp, Truck];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const brands = content.services.brands.brandList;

  return (
    <div className="min-h-screen">
      <section className="relative h-[85vh] overflow-hidden">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
          </motion.div>
        ))}

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              className={`max-w-3xl ${isRTL ? 'mr-0' : 'ml-0'}`}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                variants={fadeInUp}
                data-testid="text-hero-title"
              >
                {content.home.hero.title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={fadeInUp}
                data-testid="text-hero-subtitle"
              >
                {content.home.hero.subtitle}
              </motion.p>
              <motion.div
                className={`flex flex-wrap gap-4 ${isRTL ? 'justify-start' : 'justify-start'}`}
                variants={fadeInUp}
              >
                <Link href="/services">
                  <Button size="lg" className="text-base" data-testid="button-explore-products">
                    {content.home.hero.cta1}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-base" data-testid="button-contact-us">
                    {content.home.hero.cta2}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className={`absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Button
            variant="outline"
            size="icon"
            className="pointer-events-auto bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() =>
              setCurrentImageIndex((prev) =>
                isRTL
                  ? (prev + 1) % heroImages.length
                  : (prev - 1 + heroImages.length) % heroImages.length
              )
            }
            aria-label={isRTL ? 'الشريحة التالية' : 'Previous slide'}
            data-testid="button-slider-prev"
          >
            {isRTL ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="pointer-events-auto bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() =>
              setCurrentImageIndex((prev) =>
                isRTL
                  ? (prev - 1 + heroImages.length) % heroImages.length
                  : (prev + 1) % heroImages.length
              )
            }
            aria-label={isRTL ? 'الشريحة السابقة' : 'Next slide'}
            data-testid="button-slider-next"
          >
            {isRTL ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30'
              }`}
              data-testid={`button-slider-dot-${index}`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-welcome-title">
              {content.home.welcome.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {content.home.welcome.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
            data-testid="text-whychoose-title"
          >
            {content.home.whyChoose.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.home.whyChoose.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-brands-title">
              {content.home.brands.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.home.brands.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-8 flex items-center justify-center h-32 hover-elevate transition-all duration-300" data-testid={`card-brand-${index}`}>
                  <span className="text-lg font-semibold text-foreground text-center">
                    {brand}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
              {isRTL ? 'جاهز للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {isRTL
                ? 'اتصل بنا اليوم للحصول على أفضل أسعار الإطارات المتميزة'
                : 'Contact us today for the best prices on premium tyres'}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-base"
                data-testid="button-cta-contact"
              >
                {content.nav.contact}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
