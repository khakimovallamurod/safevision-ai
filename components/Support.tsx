
import React from 'react';
import { HelpCircle, Mail, Phone, BookOpen, AtSign } from 'lucide-react';

const Support: React.FC = () => {
  const faqs = [
    { q: "Tizimni o'rnatish qancha vaqt oladi?", a: "Agar sizda mavjud IP kameralar bo'lsa, integratsiya atigi 1 soatdan 3 soatgacha vaqt oladi." },
    { q: "Internet uzilib qolsa tizim ishlaydimi?", a: "Ha, bizda 'Edge Computing' yechimi mavjud bo'lib, u internet yo'q bo'lgan taqdirda ham lokal serverda tahlilni davom ettiradi." },
    { q: "Telegram orqali xabarnomalar bepulmi?", a: "Ha, barcha bazaviy ogohlantirishlar va Telegram bot xizmatlari litsenziya narxiga kiritilgan." }
  ];

  return (
    <section id="support" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-manrope font-medium mb-8 uppercase">Support & FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 glass rounded-2xl border border-white/5">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-amber-500" />
                    {faq.q}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-manrope font-medium mb-6">Adminga Bog'lanish</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Mail />, label: "Email Support", value: "bekzodrajabof@gmail.com" },
                { icon: <Phone />, label: "Call Center", value: "+998 88 671-88-99" },
                { icon: <Phone />, label: "Call Center", value: "+998 99 310-03-22" },
                { icon: <AtSign />, label: "Help Center", value: "@zikrillayasakov" },
              ].map((item, i) => (
                <div key={i} className="p-6 glass rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all cursor-pointer">
                  <div className="text-amber-500 mb-4">{React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6' })}</div>
                  <h5 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{item.label}</h5>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
