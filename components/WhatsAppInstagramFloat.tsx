// components/WhatsAppInstagramFloat.tsx
"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const WhatsAppInstagramFloat = () => {
  const whatsappNumber = "+919510990170";
  const instagramLink = "https://www.instagram.com/patel_vaghasiya_ca/";

  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-5"
    >
      {/* WhatsApp */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-14 h-14 rounded-full flex items-center justify-center
        bg-[#25D366]/90 backdrop-blur-md
        shadow-lg shadow-green-500/40
        ring-2 ring-white/20"
      >
        <FaWhatsapp className="text-white text-3xl" />

        {/* Pulse */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30" />

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2
        bg-black/80 backdrop-blur text-white text-xs px-3 py-1.5 rounded-lg
        opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Instagram */}
      <motion.a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-14 h-14 rounded-full flex items-center justify-center
        bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
        shadow-lg shadow-pink-500/40
        ring-2 ring-white/20"
      >
        <FaInstagram className="text-white text-3xl" />

        {/* Glow */}
        <span className="absolute inset-0 rounded-full blur-md bg-pink-500/30 -z-10" />

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2
        bg-black/80 backdrop-blur text-white text-xs px-3 py-1.5 rounded-lg
        opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Follow on Instagram
        </span>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppInstagramFloat;
