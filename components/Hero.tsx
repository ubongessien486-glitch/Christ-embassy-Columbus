import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface HeroProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const tl = window.gsap.timeline();

      tl.fromTo(textRef.current?.children || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-white">
      {/* Background with Overlay - High Key Style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-gray-50 opacity-100"></div>
        {/* Subtle pattern or texture could go here */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-royal/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-block mb-6 px-5 py-1.5 border border-royal/10 rounded-full bg-white/60 backdrop-blur-md shadow-sm">
          <span className="text-royal-light font-montserrat text-xs md:text-sm tracking-[0.3em] uppercase font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            LoveWorld Nation
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          </span>
        </div>

        <h1 className="font-cinzel font-bold text-4xl md:text-6xl lg:text-7xl text-royal mb-6 leading-tight drop-shadow-sm">
          {data?.title || "Welcome to the Place of"} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-metallic pb-2">
            {data?.subtitle || "Your Inheritance"}
          </span>
        </h1>

        <p className="font-montserrat text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-medium leading-relaxed">
          {data?.description || "Raising generations to fulfill their God-given purpose through the word of God and the power of the Holy Spirit."}
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <button className="px-8 py-4 bg-royal hover:bg-royal-light text-white font-bold font-montserrat uppercase tracking-widest text-sm rounded-lg shadow-[0_10px_20px_rgba(0,46,109,0.2)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            Plan Your Visit
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-gold text-royal hover:bg-gold hover:text-white font-bold font-montserrat uppercase tracking-widest text-sm rounded-lg transition-all duration-300">
            Watch Live Stream
          </button>
        </div>
      </div>

      {/* Info Strip */}
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-sm border-t border-gold/10 z-20 py-6 shadow-[0_-5px_30px_rgba(0,0,0,0.03)]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-gray-50 border border-royal/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
              <Calendar className="text-royal" size={24} />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-royal text-lg">Service Times</h3>
              <p className="text-gray-500 text-sm">Sun 10:00 AM &bull; Wed 7:00 PM</p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200 hidden md:block"></div>

          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-gray-50 border border-royal/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
              <MapPin className="text-royal" size={24} />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-royal text-lg">Visit Us</h3>
              <p className="text-gray-500 text-sm">3103 North National Rd, Columbus IN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;