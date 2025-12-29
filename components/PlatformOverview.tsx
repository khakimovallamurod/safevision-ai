
import React from 'react';
import { Shield, Cpu, Zap } from 'lucide-react';

const PlatformOverview: React.FC = () => {
  return (
    <section id="platform" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-manrope font-medium mb-6">Platforma haqida</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            SafeVision — bu qurilish maydonchalarida inson omilini kamaytiruvchi va xavfsizlikni 
            yangi bosqichga olib chiquvchi sun'iy intellekt tizimi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Cpu className="w-10 h-10 text-amber-500" />,
              title: "AI Vision Engine",
              desc: "Bizning xususiy algoritmlarimiz eng murakkab sharoitlarda ham xatoliklarsiz ishlaydi."
            },
            {
              icon: <Shield className="w-10 h-10 text-amber-500" />,
              title: "Enterprise Safety",
              desc: "Global xavfsizlik standartlariga javob beruvchi, yuqori darajadagi himoya tizimi."
            },
            {
              icon: <Zap className="w-10 h-10 text-amber-500" />,
              title: "Instant Integration",
              desc: "Mavjud IP-kameralaringizni atigi 1 soat ichida tizimga ulash imkoniyati."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl glass border border-white/5 hover:border-amber-500/20 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
