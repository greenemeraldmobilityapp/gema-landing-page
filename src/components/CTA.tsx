"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";

const WhatsAppLink = "https://wa.me/6281250070876";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 dark:from-emerald-800 dark:to-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-10">
            {t("subtitle")}
          </p>
          <a
            href={WhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all hover:shadow-xl hover:shadow-white/20"
          >
            <MessageCircle className="w-6 h-6" />
            {t("button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}