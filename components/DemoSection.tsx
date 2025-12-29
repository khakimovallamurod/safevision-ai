import React from 'react';
import { Play } from 'lucide-react';

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-red-500">
                LIVE DEMO
              </span>
            </div>

            <h2 className="text-4xl font-manrope font-medium mb-6 uppercase tracking-tight">
              Real Vaqtda Ishlashini Ko'ring
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              SafeVision qanday qilib soniyalar ichida PPE (Xavfsizlik vositalari)
              qoidabuzarliklarini aniqlashini va mas'ul shaxslarni ogohlantirishini
              amalda ko'ring.
            </p>

            <ul className="space-y-4">
              {[
                "100ms dan kam tahlil vaqti",
                "88.5% aniqlik darajasi",
                "Telegram orqali lahzali xabarlar",
                "Eksport qilinadigan batafsil hisobotlar"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl">
              
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/duxOGr4E61E"
                title="SafeVision Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-white/10 backdrop-blur-md pointer-events-none">
                <p className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-1">
                  Live Demo Video
                </p>
                <p className="text-xs text-slate-400">
                  SAFEVISION v2.5 — PRODUCTION GRADE AI
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;
