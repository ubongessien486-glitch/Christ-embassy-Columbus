import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Partnership: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
     if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.fromTo(containerRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );
     }
  }, []);

  return (
    <section id="partner" className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal/5 rounded-full filter blur-3xl"></div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-3xl p-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <div className="bg-white rounded-[22px] px-8 py-16 md:px-16 md:py-24 relative overflow-hidden">
             {/* Inner Pattern */}
             <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[radial-gradient(#001F3F_1px,transparent_1px)] [background-size:20px_20px]"></div>
             
             <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
               <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4 text-gold-dark">
                    <Star fill="currentColor" size={20} />
                    <span className="font-montserrat font-bold tracking-widest uppercase text-sm">Kingdom Impact</span>
                  </div>
                  <h2 className="font-cinzel font-bold text-3xl md:text-5xl text-royal mb-6 leading-tight">
                    Partner With Us to <br/>Change Lives
                  </h2>
                  <p className="font-montserrat text-lg text-gray-600 mb-8 max-w-xl">
                    Join forces with us in taking the Gospel to the ends of the earth. Your partnership makes the vision a reality.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <div className="flex flex-col">
                        <span className="font-cinzel text-3xl font-bold text-gold">100+</span>
                        <span className="text-gray-500 text-sm font-medium">Nations Reached</span>
                     </div>
                     <div className="w-px h-12 bg-gray-200 mx-4"></div>
                     <div className="flex flex-col">
                        <span className="font-cinzel text-3xl font-bold text-gold">24/7</span>
                        <span className="text-gray-500 text-sm font-medium">Global Impact</span>
                     </div>
                  </div>
               </div>

               <div className="md:w-1/3 flex justify-center md:justify-end">
                  <button className="group relative overflow-hidden bg-royal hover:bg-royal-light text-white font-bold py-6 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    <span className="relative z-10 flex items-center gap-3 font-cinzel text-lg">
                      GIVE NOW <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;