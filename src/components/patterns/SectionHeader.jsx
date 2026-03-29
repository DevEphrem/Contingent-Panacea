


import { motion } from "framer-motion";

export const SectionHeader = ({ tag, title }) => (
  <motion.div
    className="mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="h-[1px] w-12 bg-gold/60" />
      <span className="type-tag">{tag}</span>
    </div>
    <h1 className="type-title">{title}</h1>
  </motion.div>
);
