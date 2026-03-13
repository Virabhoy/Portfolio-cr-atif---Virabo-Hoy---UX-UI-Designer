"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:Virabhoy@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: "Virabhoy@gmail.com",
      href: "mailto:Virabhoy@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: "+33 6 52 33 26 55",
      href: "tel:+33652332655",
    },
    {
      icon: MapPin,
      label: t("contact.info.location"),
      value: "Paris, Île-de-France",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-xl font-medium opacity-90 mb-4">
              {t("contact.subtitle")}
            </p>
            <p className="text-lg opacity-80 mb-8">
              {t("contact.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">{info.label}</p>
                    <p className="font-medium group-hover:opacity-80 transition-opacity">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 opacity-90"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 opacity-90"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 opacity-90"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                <Send className="w-4 h-4 mr-2" />
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
