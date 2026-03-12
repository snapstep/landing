import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { title: 'Home Repair AI', category: 'Creative Solves', id: '01' },
    { title: 'Auto Diagnostic', category: 'System Logic', id: '02' },
    { title: 'Tech Support', category: 'Creative Solves', id: '03' }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white text-black">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-1 bg-[#00df81]" />
              <span className="text-[#00df81] font-bold text-xs tracking-widest uppercase italic border-b-2 border-[#00df81]/10 pb-1">Our Portfolio</span>
            </div>
            <p className="text-gray-500 max-w-lg text-lg italic uppercase font-bold leading-none tracking-tight">
              Projects that we have produced recently for a better understanding.
            </p>
          </div>
          <button className="btn-primary" style={{ padding: '14px 34px', fontSize: '0.75rem' }}>
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-gray-100 p-10 flex items-center justify-center border border-black/5 relative overflow-hidden group-hover:bg-gray-50 transition-colors">
                 <span className="text-8xl font-black text-black/5 italic uppercase transform -rotate-12 group-hover:scale-110 transition-transform">Solve</span>
                 <div className="absolute top-6 left-6 text-[10px] font-black text-black/20 italic">{project.id}</div>
              </div>
              <div className="mt-8">
                <div className="text-[10px] text-[#00df81] font-black uppercase tracking-widest mb-3 italic">{project.category}</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-[#0066ff] transition-colors">{project.title}</h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed italic">
                  Advanced AI analysis for complex problem recognition.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
