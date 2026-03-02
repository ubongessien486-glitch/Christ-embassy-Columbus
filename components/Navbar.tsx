import React, { useState, useEffect } from 'react';
import { Menu, X, PlayCircle } from 'lucide-react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: "I'm New", href: '#new' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Partner', href: '#partner' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gold/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-royal via-royal-light to-royal-dark rounded-full flex items-center justify-center text-white shadow-[0_4px_10px_rgba(0,46,109,0.3)] ring-2 ring-white ring-offset-2 ring-offset-transparent">
            <span className="font-cinzel font-bold text-xl tracking-tighter">CE</span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-bold text-lg leading-none text-royal tracking-wide group-hover:text-gold transition-colors">CHRIST EMBASSY</span>
            <span className="font-montserrat text-[10px] tracking-[0.25em] text-gold-dark uppercase font-semibold">Columbus</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="font-montserrat text-sm font-bold tracking-wide text-royal hover:text-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#live"
            className="flex items-center gap-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white px-7 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-[0_4px_15px_rgba(197,160,40,0.3)] hover:shadow-[0_6px_20px_rgba(197,160,40,0.5)] hover:-translate-y-0.5 transition-all duration-300 border border-white/20"
          >
            <PlayCircle size={18} fill="currentColor" className="text-white" />
            <span className="text-shadow-sm">WATCH LIVE</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-royal hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-gold/20 transition-all duration-500 overflow-hidden shadow-xl ${isMobileMenuOpen ? 'max-h-screen py-8' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-cinzel text-xl text-royal hover:text-gold transition-colors font-bold"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#live" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="flex items-center gap-2 bg-gradient-to-r from-gold via-gold-metallic to-gold-light text-white px-8 py-3 rounded-full font-bold tracking-wider mt-4 shadow-lg"
          >
             <PlayCircle size={20} fill="currentColor" /> WATCH LIVE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;