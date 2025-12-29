
import React from 'react';
import { PlayCircle, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden gradient-bg">
      {/* AI Scan Line Animation */}
      <div className="scan-line"></div>
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-10">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-amber-500">SAFEVISION - AI</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-manrope font-black leading-[1.1] mb-8 tracking-tighter text-white">
              Qurilishda
              <span className="block text-amber-500">
                AI Monitoring
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed font-medium">
              Mavjud kameralarni <span className="text-white border-b-2 border-amber-500/30">real vaqtda</span> tahlil qiluvchi AI platformasi. 
              Xavfsizlikni 24/7 avtomatik nazorat qiling.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <button className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-full flex items-center gap-3 transition-all group shadow-xl shadow-amber-500/20 active:scale-95">
                <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                WATCH DEMO
              </button>
              <button className="px-10 py-5 border-2 border-white/10 hover:border-amber-500/50 hover:bg-white/5 text-white font-black rounded-full flex items-center gap-2 transition-all active:scale-95">
                GET IN TOUCH
                <ChevronRight className="w-5 h-5 opacity-50" />
              </button>
            </div>
          </div>

          {/* Visual Right */}
          <div className="relative group perspective-1000 hidden lg:block">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 glass shadow-2xl transition-transform duration-500 group-hover:rotate-y-2 group-hover:scale-[1.02]">
              <img 
                src="assets/images/photo_2025-12-28_18-58-29.jpg" 
                alt="Construction Site Monitoring" 
                className="w-full aspect-[4/3] object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              {/* Status Panel */}
              <div className="absolute top-6 left-6 flex gap-3">
                <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">
                  <div className="relative">
                    <span className="block w-3 h-3 bg-red-600 rounded-full"></span>
                    <span className="absolute inset-0 w-3 h-3 bg-red-600 rounded-full animate-ping opacity-75"></span>
                  </div>
                  <span className="text-xs font-black text-white uppercase tracking-[0.2em]">LIVE ACTIVE</span>
                </div>
              </div>

              {/* Data Bars */}
              <div className="absolute bottom-10 right-10 flex gap-2 items-end h-20">
                {[50, 85, 40, 100, 75, 90, 60, 80, 55, 70].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-2 bg-gradient-to-t from-amber-600 to-amber-400 rounded-full animate-bounce" 
                    style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-amber-500/10 blur-[120px] -z-10 rounded-full group-hover:bg-amber-500/20 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
