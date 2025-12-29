
import React from 'react';
import { DETECTION_CLASSES } from '../constants';

const DetectionClasses: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-manrope font-black mb-6 uppercase tracking-tight text-white">AI Detection Classes</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Platformamiz eng zamonaviy Computer Vision algoritmlari yordamida quyidagi obyektlarni real vaqtda yuqori aniqlik bilan tanib oladi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DETECTION_CLASSES.map((cls, idx) => (
            <div 
              key={cls.id} 
              className={`p-10 glass rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-amber-500/5 hover:border-amber-500/40 hover:-translate-y-2 group ${idx >= 4 ? 'lg:translate-x-1/2 lg:relative' : ''}`}
            >
              <div className="mb-8 p-6 bg-slate-900 rounded-3xl text-slate-400 group-hover:text-amber-500 group-hover:bg-amber-500/10 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all duration-500">
                {React.cloneElement(cls.icon as React.ReactElement, { className: 'w-12 h-12' })}
              </div>
              <span className="text-xs uppercase tracking-[0.4em] font-black text-white mb-3 group-hover:text-amber-500 transition-colors">{cls.name}</span>
              <p className="text-sm text-slate-500 font-bold tracking-wide">{cls.uzName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetectionClasses;
