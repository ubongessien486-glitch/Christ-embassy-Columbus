import React, { useEffect, useRef } from 'react';
import { BookOpen, Heart, Tv } from 'lucide-react';
import { MinistryCardProps } from '../types';

const MinistryCard: React.FC<MinistryCardProps> = ({ title, description, image, icon, span }) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl shadow-xl ${span} h-[300px] md:h-[400px]`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {/* Dark overlay specifically for card legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/90 via-royal/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
        <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
           <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-4 border border-white/30">
             {icon}
           </div>
           <h3 className="font-cinzel font-bold text-2xl text-white mb-2 group-hover:text-gold transition-colors">{title}</h3>
           <p className="font-montserrat text-sm text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 leading-relaxed max-w-sm">
             {description}
           </p>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

const MinistryGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      const cards = sectionRef.current?.children;
      if (cards) {
        window.gsap.fromTo(cards, 
          { y: 100, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  return (
    <section id="ministries" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl text-royal mb-4">Our Ministries</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="font-montserrat text-gray-500 mt-4 max-w-2xl mx-auto">
            Impactful arms of the ministry designed to reach the world with the gospel.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MinistryCard 
            title="Rhapsody of Realities"
            description="The world's number one daily devotional, bringing the richness of God's Word to billions in every known language."
            image="https://picsum.photos/600/800?random=1"
            icon={<BookOpen size={24} />}
            span="md:col-span-1"
          />
          <MinistryCard 
            title="Healing School"
            description="Taking divine healing to the nations. Experience the miraculous power of God that restores hope and life."
            image="https://picsum.photos/600/800?random=2"
            icon={<Heart size={24} />}
            span="md:col-span-1"
          />
          <MinistryCard 
            title="LoveWorld USA"
            description="Broadcasting the glory of God to the nations through cutting-edge television ministry."
            image="https://picsum.photos/600/800?random=3"
            icon={<Tv size={24} />}
            span="md:col-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default MinistryGrid;