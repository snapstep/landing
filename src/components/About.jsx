import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0d14] overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual Frame */}
            <div className="aspect-[4/5] bg-[#1a1c23] border border-white/5 p-12 flex items-center justify-center relative">
               <div className="w-full h-full border border-[#00df81]/20 flex items-center justify-center">
                  <span className="text-8xl font-black text-white/5 uppercase rotate-90 tracking-tighter">HEXA</span>
               </div>
               
               {/* Overlapping Purple Card - Refined Position */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="absolute -bottom-8 -left-8 bg-[#8a2be2] p-10 min-w-[280px] shadow-2xl"
               >
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-4 h-1 bg-white" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Expertise</span>
                 </div>
                 <p className="text-xl font-black italic uppercase leading-none text-white mb-6">
                   Over 10 years <br /> experience in <br /> this industry.
                 </p>
                 <div className="flex items-end justify-between border-t border-white/20 pt-6">
                    <span className="text-4xl font-black italic">99%</span>
                    <div className="w-12 h-1 bg-white/20" />
                 </div>
               </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-[#00df81]" />
              <span className="text-[#00df81] font-bold text-xs tracking-widest uppercase italic">About our company</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[0.9] italic uppercase tracking-tighter text-white">
              1. <span className="text-[#00df81]">HEXA</span> CODE
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              HEXA CODE was founded in 2010. Since then, we've provided high-end solutions through AI research and advanced diagnostic capabilities.
            </p>
            <button className="btn-primary">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
