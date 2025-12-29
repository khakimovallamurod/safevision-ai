
import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    cameras: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        company: '',
        name: '',
        phone: '',
        email: '',
        cameras: '',
        message: ''
      });
      
      // Reset back to idle after a while
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 gradient-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-amber-500 p-12 text-slate-950 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-manrope font-bold leading-tight mb-6">Request Demo</h2>
                <p className="font-medium opacity-80 mb-10 leading-relaxed">
                  Mutaxassislarimiz sizga tizim imkoniyatlarini ko'rsatib berishadi va narxlarni hisoblashadi.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-950 text-amber-500 rounded-full flex items-center justify-center font-bold text-xs">1</div>
                  <span className="text-xs font-bold uppercase tracking-widest">LOYIHA TAHLILI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-950 text-amber-500 rounded-full flex items-center justify-center font-bold text-xs">2</div>
                  <span className="text-xs font-bold uppercase tracking-widest">PILOT LOYIHA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-950 text-amber-500 rounded-full flex items-center justify-center font-bold text-xs">3</div>
                  <span className="text-xs font-bold uppercase tracking-widest">TO'LIQ INTEGRATSIYA</span>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-12 bg-slate-950/50">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-2">So'rovingiz qabul qilindi!</h3>
                  <p className="text-slate-400">Tez orada menejerlarimiz siz bilan bog'lanishadi.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Kompaniya nomi</label>
                      <input 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors"
                        placeholder="MCHJ ..."
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Mas'ul shaxs</label>
                      <input 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors"
                        placeholder="Ism sharifingiz"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Telefon raqam</label>
                      <input 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors"
                        placeholder="+998"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Email</label>
                      <input 
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Kameralar soni (taxminan)</label>
                    <input 
                      type="number"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors"
                      placeholder="10"
                      value={formData.cameras}
                      onChange={e => setFormData({...formData, cameras: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Xabar</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors h-24 resize-none"
                      placeholder="Qo'shimcha savollaringiz..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-amber-500 disabled:bg-amber-500/50 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        SO'ROV YUBORISH
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default ContactForm;
