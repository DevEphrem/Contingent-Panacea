import { motion } from "framer-motion";

export const PremiumImage = ({ src, alt, className = "" }) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* 1. THE MASK CONTAINER (Low-Level Radiuses & Shadows) */}
      <div className="relative z-10 rounded-premium overflow-hidden aspect-[4/5] shadow-2xl bg-gray-100">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          /* 2. THE REVEAL ANIMATION (Zooming from 1.2 down to 1) */
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* 3. THE LUXURY OVERLAY (Subtle gradient) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* 4. THE DESIGNER DETAIL (Decorative Glow) */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors duration-700" />
    </motion.div>
  );
};
