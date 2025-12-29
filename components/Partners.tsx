import React from 'react';

const partners = [
  "STARTUP GARAGE",
  "IT PARK",
];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-slate-950 border-y border-white/5">
      <div className="container mx-auto px-6">

        {/* HEADER (PlatformOverview style) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-manrope font-medium mb-6">
            Our Partners
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            SafeVision rivojida bizni qo‘llab-quvvatlayotgan strategik hamkorlar, 
            investorlar va texnologik ekotizim ishtirokchilari.
          </p>
        </div>

        {/* PARTNER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="
                group relative
                p-10
                h-56
                rounded-2xl
                bg-white/5
                backdrop-blur-md
                border border-white/10
                flex items-center justify-center
                transition-all duration-500
                hover:border-amber-500/40
                hover:bg-white/10
                hover:scale-[1.04]
                shadow-lg hover:shadow-amber-500/20
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="relative text-xl font-manrope font-bold tracking-tight text-white opacity-70 group-hover:opacity-100 transition-opacity">
                {partner}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
