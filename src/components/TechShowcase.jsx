import React from 'react';
import { motion } from 'framer-motion';

const TechShowcase = () => {
  const techs = ['React', 'Node.js', 'AI', 'GPT-4', 'Framer', 'Cloud', 'Vite', 'Three.js'];

  return (
    <section className="py-40 bg-[#0a0d14] relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-12">
          {techs.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white/10 hover:text-[#00df81] transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
