
import React from 'react';
import { Globe, Shield, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-black text-slate-950">SV</div>
              <span className="text-2xl font-manrope tracking-tighter text-white">
                <span className="font-black">SAFE</span><span className="font-light">VISION</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Biz qurilish industriyasini AI texnologiyalari orqali xavfsizroq va aqlliroq qilamiz. 
              Real vaqtda monitoring — kelajak xavfsizligi garovi.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/30 transition-all hover:bg-amber-500/10">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Platform</h4>
            <ul className="space-y-4">
              {['Live Dashboard', 'AI Features', 'Integrations', 'Security Standards'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold text-slate-500 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Success Stories', 'Partners', 'Careers'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold text-slate-500 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-slate-400">Samarkand, Uzbekistan</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-slate-400">+998 93 855 46 40</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-slate-400">xakimov2806@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[10px] font-black text-slate-500 tracking-[0.2em]">
            <span>© {currentYear} SAFEVISION.UZ</span>
            <span className="hidden md:block w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
            <span>BARCHA HUQUQLAR HIMOYA QILINGAN</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-slate-600 tracking-[0.1em]">POWERED BY</span>
            <div className="px-3 py-1 bg-white/5 rounded border border-white/5">
              <span className="text-[10px] font-black text-white">Khakimov Allamurod</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
