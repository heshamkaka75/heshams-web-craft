
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { t, language } = useLanguage();
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    title.classList.add('animate-fadeIn');
    
    const spans = title.querySelectorAll('span');
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1 + 0.3}s`;
      span.classList.add('animate-fadeIn');
    });
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-navy-900/5 to-transparent">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 py-20 mt-16 md:mt-0 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-4 text-muted-foreground opacity-0 animate-slideInLeft" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {t('hero.hello')}
          </p>
          
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0">
            <span className="block opacity-0">Hesham Elhag</span>
            <span className="text-teal-500 block opacity-0">{t('hero.title')}</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground opacity-0 animate-slideInRight" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button className="btn-primary">{t('hero.viewWork')}</Button>
            <Button variant="outline">{t('hero.getInTouch')}</Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fadeIn cursor-pointer"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <span className="text-sm mb-2">{t('hero.scrollDown')}</span>
        <ArrowDown className="animate-pulse" />
      </a>
    </section>
  );
};

export default Hero;
