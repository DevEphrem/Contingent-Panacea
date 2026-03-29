import { motion } from "framer-motion";

export const SectionHeader = ({ tag, title }) => (
  <motion.div
    className="mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="accent-line" />
      <span className="type-tag">{tag}</span>
    </div>
    <h2 className="type-title">{title}</h2>
  </motion.div>
);
