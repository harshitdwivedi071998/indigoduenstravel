import { motion } from "framer-motion";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-5xl mb-5">{service.icon}</div>

        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

        <p className="text-gray-600 leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}
