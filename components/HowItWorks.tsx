
import React from 'react';
import { Camera, Radio, Brain, Search, Bell } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: <Camera />, title: "Camera", desc: "Mavjud IP kameralar ulangan." },
    { icon: <Radio />, title: "Video Stream", desc: "Real vaqtda video-oqim keladi." },
    { icon: <Brain />, title: "AI Inference", desc: "Sun'iy intellekt tahlil qiladi." },
    { icon: <Search />, title: "Detection", desc: "Qoidabuzarliklar aniqlanadi." },
    { icon: <Bell />, title: "Alerts", desc: "Tezkor ogohlantirish yuboriladi." },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-manrope font-medium mb-6">Tizim Qanday Ishlaydi?</h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-950 border border-white/10 rounded-full flex items-center justify-center text-amber-500 mb-6 shadow-lg shadow-amber-500/5 transition-transform hover:scale-110">
                  {React.cloneElement(step.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <h4 className="font-bold text-sm tracking-widest uppercase mb-3 text-white">{step.title}</h4>
                <p className="text-slate-400 text-xs px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
