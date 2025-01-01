import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 text-white text-center">
      <div 
        className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{
          backgroundImage: `url('/lovable-uploads/baa6dd9a-102f-4340-938b-002c72534e28.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <span 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 inline-block text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.1)'
            }}
          ></span>
        </div>
      </div>
    </section>
  );
};