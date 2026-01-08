
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* LOGO ICON + TEXT O'RNIGA BITTA IMAGE */}
          <span className="font-manrope font-black text-slate-950 text-lg">
            <div className="flex items-center gap-6 cursor-pointer">
              <img
                src="assets/images/safevision-logo.png"
                alt="SafeVision Logo"
                className="w-36 h-auto object-contain"
              />
            </div>
          </span>
        </div>
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-white/80 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="px-7 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-sm font-black rounded-full"
          >
            REQUEST DEMO
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold tracking-widest text-white/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full py-4 bg-amber-500 text-slate-950 text-center text-xs font-black rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            REQUEST DEMO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
