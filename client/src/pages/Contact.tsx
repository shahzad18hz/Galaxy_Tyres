import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import officeBuilding from '@assets/generated_images/Corporate_office_building_d277f73a.png';

export default function Contact() {
  const { content, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src={officeBuilding}
          alt="Contact Us"
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
                data-testid="text-contact-hero-title"
              >
                {content.contact.hero.title}
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground"
                variants={fadeInUp}
                data-testid="text-contact-hero-subtitle"
              >
                {content.contact.hero.subtitle}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="text-form-title">
                  {content.contact.form.title}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      {content.contact.form.name}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-2"
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      {content.contact.form.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      {content.contact.form.phone}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-2"
                      data-testid="input-phone"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      {content.contact.form.message}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="mt-2"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto"
                    data-testid="button-submit"
                  >
                    {content.contact.form.submit}
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6" data-testid="text-info-title">
                  {content.contact.info.title}
                </h3>
                <div className="space-y-4">
                  <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        {isRTL ? 'العنوان' : 'Address'}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid="text-address">
                        {content.contact.info.address}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        {isRTL ? 'الهاتف' : 'Phone'}
                      </p>
                      <a
                        href={`tel:${content.contact.info.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-phone"
                      >
                        {content.contact.info.phone}
                      </a>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        {isRTL ? 'البريد الإلكتروني' : 'Email'}
                      </p>
                      <a
                        href={`mailto:${content.contact.info.email}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        data-testid="link-email"
                      >
                        {content.contact.info.email}
                      </a>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        {isRTL ? 'ساعات العمل' : 'Business Hours'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isRTL ? 'الأحد - الخميس: 8:00 - 18:00' : 'Sunday - Thursday: 8:00 AM - 6:00 PM'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isRTL ? 'السبت: 9:00 - 14:00' : 'Saturday: 9:00 AM - 2:00 PM'}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  {isRTL ? 'هل تحتاج مساعدة فورية؟' : 'Need Immediate Assistance?'}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {isRTL
                    ? 'فريقنا جاهز للمساعدة في جميع استفساراتك عن الإطارات'
                    : 'Our team is ready to help with all your tyre inquiries'}
                </p>
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => window.location.href = `tel:${content.contact.info.phone}`}
                  data-testid="button-call-now"
                >
                  {isRTL ? 'اتصل الآن' : 'Call Now'}
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {isRTL ? 'خريطة الموقع' : 'Map Location'}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Jebel Ali Free Zone, Dubai, UAE
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
