import React from 'react';

const LogoCloud = () => {
  const partners = [
    { name: 'amazon', color: '#ff9900' },
    { name: 'android', color: '#3ddc84' },
    { name: 'microsoft', color: '#00a4ef' },
    { name: 'youtube', color: '#ff0000' },
    { name: 'google play', color: '#4285f4' },
    { name: 'google cloud', color: '#ea4335' },
    { name: 'heroku', color: '#430098' },
    { name: 'netlify', color: '#00ad9f' }
  ];

  return (
    <section className="py-24 bg-[#14171d] border-y border-white/5">
      <div className="section-container">
        <h2 className="text-[#00df81] text-center text-4xl font-black uppercase italic tracking-tighter mb-16 italic">
          We also work for
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40">
           {partners.map(p => (
             <div key={p.name} className="flex justify-center group cursor-pointer hover:opacity-100 transition-opacity">
               <span className="font-black text-2xl uppercase tracking-tighter italic text-gray-400 group-hover:text-white">{p.name}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
