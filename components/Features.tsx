
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-manrope font-medium mb-6 uppercase tracking-tight">Asosiy Imkoniyatlar</h2>
            <p className="text-slate-400 text-lg">
              SafeVision AI platformasi eng zamonaviy texnologiyalar yordamida qurilish maydonchangizni to'liq nazorat ostiga oladi.
            </p>
          </div>
          <div className="text-amber-500 font-bold text-sm tracking-[0.2em] border-b border-amber-500 pb-2">
            ALL FEATURES
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="p-10 rounded-3xl glass border border-white/5 hover:border-amber-500/30 transition-all hover:-translate-y-2 group"
            >
              <div className="mb-8 p-4 bg-amber-500/5 rounded-2xl w-fit group-hover:bg-amber-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-manrope font-semibold mb-4 text-white uppercase tracking-wide">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
