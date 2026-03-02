import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-gold via-gold-light to-gold-dark rounded-full flex items-center justify-center">
                  <span className="text-royal font-cinzel font-bold text-sm">CE</span>
                </div>
                <span className="font-cinzel font-bold text-lg text-white">Christ Embassy</span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               3103 North National Road,<br/>
               Columbus Indiana 47201
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-royal transition-all duration-300">
                 <Facebook size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-royal transition-all duration-300">
                 <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-royal transition-all duration-300">
                 <Youtube size={18} />
               </a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">First Timers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Testimonies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-cinzel font-bold text-white mb-6">Service Times</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-400 text-sm">Sunday Service</span>
                <span className="text-gold text-sm font-semibold">10:00 AM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-400 text-sm">Wednesday Service</span>
                <span className="text-gold text-sm font-semibold">7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel font-bold text-white mb-6">Contact Us</h4>
             <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                 <Phone size={16} className="text-gold" />
                 <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                 <Mail size={16} className="text-gold" />
                 <span>info@christembassycolumbus.org</span>
              </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-montserrat">
            &copy; 2026 Christ Embassy Columbus. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
