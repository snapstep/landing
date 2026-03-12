import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const steps = [
    { title: 'Snap', desc: 'Point your camera at any problem or task.', icon: '📸' },
    { title: 'Analyze', desc: 'Our AI understands the context instantly.', icon: '🧠' },
    { title: 'Solve', desc: 'Get step-by-step solutions or help.', icon: '✅' }
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="features-grid">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card feature-card"
            >
              <div className="feature-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          text-align: left;
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Features;
