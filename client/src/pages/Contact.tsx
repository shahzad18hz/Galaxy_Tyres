"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

import officeBuilding from "@assets/generated_images/Corporate_office_building_d277f73a.png";

export default function Contact() {
  const { content, isRTL } = useLanguage();

  const [success, setSuccess] = useState(false);

  // ---------------------------
  // FORM SUBMIT WITHOUT REDIRECT + POPUP
  // ---------------------------
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/shahzad18hz@gmail.com", {
      method: "POST",
      body: formData,
    });

    setSuccess(true);
    e.target.reset();

    // Hide popup after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20 relative">

      {/* SUCCESS POPUP */}
      <div
        className={`fixed top-6 right-6 z-[9999] px-6 py-4 rounded-lg shadow-lg text-white font-semibold bg-green-600 transition-all duration-500 ${
          success ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        ✔ Your message has been sent successfully!
      </div>

      {/* Hero Section */}
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
              >
                {content.contact.hero.title}
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground"
                variants={fadeInUp}
              >
                {content.contact.hero.subtitle}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* FORM SECTION */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {content.contact.form.title}
                </h2>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">

                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg">
                    {content.contact.form.submit}
                  </Button>
                </form>

              </Card>
            </motion.div>

            {/* RIGHT SIDE INFO */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {content.contact.info.title}
                </h3>

                <div className="space-y-4">

                  <div className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        {content.contact.info.address}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href={`tel:${content.contact.info.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {content.contact.info.phone}
                      </a>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href={`mailto:${content.contact.info.email}`}
                        className="text-sm text-muted-foreground hover:text-primary break-all"
                      >
                        {content.contact.info.email}
                      </a>
                    </div>
                  </div>

                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
