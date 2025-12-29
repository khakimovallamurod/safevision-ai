
import React from 'react';
import { LayoutDashboard, Video, AlertCircle, PieChart, MoreHorizontal } from 'lucide-react';

const DashboardMockup: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-manrope font-medium mb-6">Live Dashboard Mockup</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Barcha xavfsizlik ko'rsatkichlari, real vaqt rejimidagi ogohlantirishlar va kamera oqimlarini qulay interfeys orqali boshqaring.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl flex flex-col md:flex-row h-[600px]">
          {/* Sidebar */}
          <div className="w-full md:w-64 border-r border-white/10 p-6 hidden md:block">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center font-bold text-slate-950 text-xs">SV</div>
              <span className="font-bold tracking-widest text-xs">SAFEVISION</span>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: <LayoutDashboard className="w-4 h-4" />, label: 'Dashboard', active: true },
                { icon: <Video className="w-4 h-4" />, label: 'Cameras', active: false },
                { icon: <AlertCircle className="w-4 h-4" />, label: 'Incidents', active: false },
                { icon: <PieChart className="w-4 h-4" />, label: 'Reports', active: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 text-xs font-medium cursor-pointer transition-colors ${item.active ? 'text-amber-500' : 'text-slate-500 hover:text-white'}`}>
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-slate-900/50 flex flex-col overflow-hidden">
            <header className="p-4 border-b border-white/10 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400">PROJECT</span>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs">JS</div>
              </div>
            </header>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 overflow-auto">
              {/* Main Camera View */}
              <div className="md:col-span-2 space-y-4">
                <div className="aspect-video relative rounded-xl overflow-hidden bg-black border border-white/5">
                  <img src="assets/images/photo_2025-12-28_09-18-32.jpg" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute top-4 left-4 bg-slate-950/80 px-2 py-1 rounded text-[10px] font-bold border border-white/10">CAM 01 — SOUTH GATE</div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="bg-amber-500 text-slate-950 px-2 py-1 rounded-sm text-[8px] font-bold uppercase">Recording</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="aspect-video bg-slate-800 rounded-lg border border-white/5 opacity-50 relative overflow-hidden">
                       <img src={`https://picsum.photos/seed/${i}/400/225`} className="w-full h-full object-cover grayscale" />
                       <div className="absolute inset-0 bg-black/40"></div>
                       <div className="absolute bottom-2 left-2 text-[8px] font-bold uppercase">CAM 0{i+1}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Stats */}
              <div className="space-y-6">
                <div className="p-4 glass rounded-xl border border-white/5">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Daily Stats</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span>PPE Compliance</span>
                        <span className="text-amber-500">87.2%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: '94.2%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-white/5">
                      <span className="text-[10px] text-slate-400">Total Workers</span>
                      <span className="text-sm font-bold">5</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 glass rounded-xl border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Recent Alerts</h4>
                    <MoreHorizontal className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { time: '14:22', msg: 'No Helmet Detected', zone: 'Zone B', level: 'high' },
                      { time: '13:58', msg: 'Helmet Detected', zone: 'Zone A', level: 'medium' },
                      { time: '12:45', msg: 'Vest Detected', zone: 'Zone C', level: 'info' },
                    ].map((alert, i) => (
                      <div key={i} className="flex gap-3 border-l-2 border-amber-500 pl-3 py-1">
                        <div className="flex-1">
                          <p className="text-[10px] font-bold">{alert.msg}</p>
                          <p className="text-[8px] text-slate-500">{alert.zone} · {alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMockup;
