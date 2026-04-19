"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppLink = "https://wa.me/6281250070876";

export default function WhatsAppFloating() {
  return (
    <motion.a
      href={WhatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </motion.a>
  );
}