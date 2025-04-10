
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Columns, Cpu } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Code className="w-8 h-8 text-teal-500" />,
      title: t('service.frontend'),
      description: t('service.frontend.desc')
    },
    {
      icon: <Server className="w-8 h-8 text-teal-500" />,
      title: t('service.backend'),
      description: t('service.backend.desc')
    },
    {
      icon: <Columns className="w-8 h-8 text-teal-500" />,
      title: t('service.fullstack'),
      description: t('service.fullstack.desc')
    },
    {
      icon: <Cpu className="w-8 h-8 text-teal-500" />,
      title: t('service.api'),
      description: t('service.api.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title pb-3">{t('about.title')}</h2>
            <p className="text-lg mb-6">
              {t('about.intro')} <span className="highlight">{t('about.fullstack')}</span> 
            </p>
            <p className="mb-6">
              {t('about.description1')}
            </p>
            <p className="mb-6">
              {t('about.description2')}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "SQL", "HTML/CSS", "Git"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="backdrop-blur-sm bg-card/80 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
