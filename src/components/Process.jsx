import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const hexagons = [
    { label: 'Analyze', color: '#6a6c70', x: 0, y: -80 },
    { label: 'Design', color: '#68ca6a', x: -110, y: -10 },
    { label: 'Code', color: '#4ab4f0', x: 110, y: -10 },
    { label: 'Test', color: '#f5a623', x: -60, y: 70 },
    { label: 'Deploy', color: '#f35d22', x: 60, y: 70 },
  ];

  return (
    <section id="process" className="py-32 bg-[#e8f4f6] text-[#2c3e50] overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-24">
           <div className="text-[#a0afb2] font-black text-[10px] tracking-[0.4em] mb-4 italic uppercase">How it works</div>
           <h2 className="text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">Process</h2>
        </div>

        <div className="relative h-[400px] flex items-center justify-center mb-24">
           {/* Center Hex Visualization */}
           <div className="relative scale-150">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-18 clip-hexagon bg-[#0a0d14]/5 flex items-center justify-center" />
              </div>
              {hexagons.map((hex, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute flex flex-col items-center gap-2"
                  style={{ left: hex.x, top: hex.y }}
                >
                  <div 
                    className="w-16 h-18 clip-hexagon shadow-xl flex items-center justify-center"
                    style={{ backgroundColor: hex.color }}
                  >
                     <div className="w-14 h-16 ml-1 mt-1 clip-hexagon bg-white/10" />
                  </div>
                  <span className="text-[7px] font-black uppercase tracking-widest text-[#2c3e50]">
                    {hex.label}
                  </span>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 mt-20">
           {[
             { label: 'Sketch', text: 'Define problem scope' },
             { label: 'Mock', text: 'AI logic simulation' },
             { label: 'Execute', text: 'Step-by-step solve' }
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center text-center">
                <div className="w-full aspect-video bg-white/40 border border-black/5 mb-8 flex items-center justify-center">
                   <span className="text-4xl grayscale opacity-20">⚙️</span>
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest mb-2 italic">{item.label}</h4>
                <p className="text-[10px] text-gray-400 font-bold italic uppercase tracking-widest">{item.text}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
