import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Truck, Landmark } from 'lucide-react';

import passengerTire from '@assets/generated_images/Passenger_car_tire_7e641330.png';
import suvTire from '@assets/generated_images/Sports_tire_close-up_8119047c.png';
import truckTire from '@assets/generated_images/Light_truck_tire_aab183ee.png';
import sportsTire from '@assets/generated_images/Passenger_car_tire_7e641330.png';

export default function Services() {
  const { content, isRTL } = useLanguage();

  const categoryIcons = [Car, Truck, Truck];

  const categoryImages = [passengerTire, suvTire, truckTire];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const brands = content.services.brands.brandList;

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src={sportsTire}
          alt="Premium Tyres"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                variants={fadeInUp}
                data-testid="text-services-hero-title"
              >
                {content.services.hero.title}
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground"
                variants={fadeInUp}
                data-testid="text-services-hero-subtitle"
              >
                {content.services.hero.subtitle}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
            data-testid="text-categories-title"
          >
            {content.services.categories.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.categories.items.map((category, index) => {
              const Icon = categoryIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover-elevate transition-all duration-300" data-testid={`card-category-${index}`}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={categoryImages[index]}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-bold text-foreground">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-brands-title">
              {content.services.brands.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isRTL
                ? 'نوزع أفضل العلامات التجارية العالمية للإطارات'
                : 'Distributing the world\'s finest tyre brands'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className={`flex items-center justify-between flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {content.services.brands.mainBrand}
                  </p>
                  <h3 className="text-2xl font-bold text-primary">
                    {brands[0]}
                  </h3>
                </div>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  {isRTL ? 'الشريك الرسمي' : 'Official Partner'}
                </Badge>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              {content.services.brands.otherBrands}
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {brands.slice(1).map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-4 flex items-center justify-center h-24 hover-elevate transition-all duration-300" data-testid={`card-brand-${index + 1}`}>
                  <span className="text-sm font-semibold text-foreground text-center">
                    {brand}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Landmark className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {isRTL
                ? 'جودة مضمونة، أسعار تنافسية'
                : 'Guaranteed Quality, Competitive Pricing'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isRTL
                ? 'جميع منتجاتنا أصلية ومعتمدة من المصنعين العالميين مع ضمان الجودة والأداء'
                : 'All our products are authentic and certified by global manufacturers with guaranteed quality and performance'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
