"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Phone, MapPin, Link2, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const navLinks = [
    { href: "/", label: locale === "id" ? "Beranda" : "Home" },
    { href: "/#about", label: locale === "id" ? "Tentang" : "About" },
    { href: "/#services", label: locale === "id" ? "Layanan" : "Services" },
    { href: "/#features", label: locale === "id" ? "Fitur" : "Features" },
    { href: "/#testimonials", label: locale === "id" ? "Testimoni" : "Testimonials" },
  ];

  const services = [
    locale === "id" ? "Pengembangan Web" : "Web Development",
    locale === "id" ? "Aplikasi Mobile" : "Mobile Apps",
    locale === "id" ? "Strategi Digital" : "Digital Strategy",
    locale === "id" ? "UI/UX Design" : "UI/UX Design",
  ];

  const contacts = [
    { icon: Phone, text: "+62 812 5007 0876" },
    { icon: Mail, text: "hello@gema.id" },
    { icon: MapPin, text: locale === "id" ? "Jakarta, Indonesia" : "Jakarta, Indonesia" },
  ];

  const socials = [
    { icon: Globe, href: "#" },
    { icon: ExternalLink, href: "#" },
    { icon: Link2, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo-gema.png"
                alt="GEMA Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white">GEMA</span>
            </div>
            <p className="text-gray-400 mb-6">{t("tagline")}</p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">{t("services")}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="hover:text-emerald-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">{t("contact")}</h3>
            <ul className="space-y-4">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <contact.icon className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}