
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { t, language } = useLanguage();
  
  const projects = [
    {
      title: language === 'en' ? "E-Commerce Platform" : "منصة تجارة إلكترونية",
      description: language === 'en' 
        ? "A full-featured e-commerce platform built with React, Node.js, and MongoDB."
        : "منصة تجارة إلكترونية كاملة المميزات مبنية باستخدام React وNode.js وMongoDB.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=E-Commerce+App",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "#",
      demo: "#"
    },
    {
      title: language === 'en' ? "Task Management App" : "تطبيق إدارة المهام",
      description: language === 'en'
        ? "A drag-and-drop task management application with user authentication."
        : "تطبيق إدارة مهام بخاصية السحب والإفلات مع مصادقة المستخدم.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Task+Management",
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "frontend",
      github: "#",
      demo: "#"
    },
    {
      title: language === 'en' ? "Restaurant Booking System" : "نظام حجز المطاعم",
      description: language === 'en'
        ? "A booking system for restaurants with real-time availability updates."
        : "نظام حجز للمطاعم مع تحديثات التوافر في الوقت الفعلي.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Booking+System",
      tags: ["Vue.js", "Node.js", "PostgreSQL"],
      category: "fullstack",
      github: "#",
      demo: "#"
    },
    {
      title: language === 'en' ? "Weather Dashboard" : "لوحة معلومات الطقس",
      description: language === 'en'
        ? "A weather dashboard showcasing current and forecast weather data."
        : "لوحة معلومات الطقس تعرض بيانات الطقس الحالية والمتوقعة.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Weather+App",
      tags: ["JavaScript", "API Integration", "CSS3"],
      category: "frontend",
      github: "#",
      demo: "#"
    },
    {
      title: language === 'en' ? "Blog API" : "واجهة برمجة تطبيقات المدونة",
      description: language === 'en'
        ? "A RESTful API for a blog platform with authentication and authorization."
        : "واجهة برمجة تطبيقات RESTful لمنصة مدونة مع المصادقة والتفويض.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Blog+API",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      github: "#",
      demo: "#"
    },
    {
      title: language === 'en' ? "Real-time Chat Application" : "تطبيق دردشة في الوقت الحقيقي",
      description: language === 'en'
        ? "A chat application with real-time messaging and user presence."
        : "تطبيق دردشة مع رسائل في الوقت الحقيقي وتواجد المستخدم.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Chat+App",
      tags: ["Socket.io", "React", "Node.js", "Redis"],
      category: "fullstack",
      github: "#",
      demo: "#"
    }
  ];
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center pb-3 mb-4">{t('projects.title')}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('projects.description')}
        </p>
        
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">{t('projects.all')}</TabsTrigger>
              <TabsTrigger value="frontend">{t('projects.frontend')}</TabsTrigger>
              <TabsTrigger value="backend">{t('projects.backend')}</TabsTrigger>
              <TabsTrigger value="fullstack">{t('projects.fullstack')}</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="frontend" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fullstack" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const { t } = useLanguage();
  
  return (
    <Card className="project-card overflow-hidden h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span 
              key={tagIndex} 
              className="px-2 py-1 bg-secondary text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="gap-2">
          <Github size={16} />
          {t('projects.code')}
        </Button>
        <Button size="sm" className="gap-2">
          <ExternalLink size={16} />
          {t('projects.demo')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
