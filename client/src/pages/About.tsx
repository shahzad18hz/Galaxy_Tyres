import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

import officeBuilding from '@assets/generated_images/Corporate_office_building_d277f73a.png';
import warehouse from '@assets/generated_images/Warehouse_facility_interior_b3aaa8c8.png';
import partnership from '@assets/generated_images/Business_partnership_handshake_13a877ed.png';

export default function About() {
  const { content, isRTL } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src={officeBuilding}
          alt="Galaxy Tires Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground"
              data-testid="text-about-hero-title"
            >
              {content.about.hero.title}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className={isRTL ? 'lg:col-start-2' : ''}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                variants={fadeInUp}
                data-testid="text-overview-title"
              >
                {content.about.overview.title}
              </motion.h2>
              {content.about.overview.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-muted-foreground leading-relaxed mb-4"
                  variants={fadeInUp}
                  data-testid={`text-overview-paragraph-${index}`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}
            >
              <img
                src={warehouse}
                alt="Warehouse Facility"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover-elevate transition-all duration-300" data-testid="card-vision">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {content.about.vision.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {content.about.vision.content}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full hover-elevate transition-all duration-300" data-testid="card-mission">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {content.about.mission.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {content.about.mission.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground leading-relaxed flex gap-2"
                      data-testid={`text-mission-point-${index}`}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full hover-elevate transition-all duration-300" data-testid="card-purpose">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {content.about.purpose.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {content.about.purpose.content}
                </p>
              </Card>
            </motion.div>
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
            <img
              src={partnership}
              alt="Partnership"
              className="w-full max-w-3xl mx-auto h-auto rounded-lg shadow-lg mb-8"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {isRTL
                ? 'التزامنا بالتميز'
                : 'Our Commitment to Excellence'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isRTL
                ? 'نحن ملتزمون ببناء علاقات طويلة الأمد مع عملائنا من خلال تقديم منتجات وخدمات عالية الجودة'
                : 'We are committed to building long-term relationships with our clients by delivering high-quality products and exceptional service'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
