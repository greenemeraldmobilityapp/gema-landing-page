"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Users, Briefcase, Award, HeadphonesIcon } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { icon: Users, ...t.raw("stat1") },
    { icon: Briefcase, ...t.raw("stat2") },
    { icon: Award, ...t.raw("stat3") },
    { icon: HeadphonesIcon, ...t.raw("stat4") },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-emerald-600" />
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}