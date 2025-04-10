
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

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=E-Commerce+App",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Task+Management",
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "frontend",
      github: "#",
      demo: "#"
    },
    {
      title: "Restaurant Booking System",
      description: "A booking system for restaurants with real-time availability updates.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Booking+System",
      tags: ["Vue.js", "Node.js", "PostgreSQL"],
      category: "fullstack",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard showcasing current and forecast weather data.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Weather+App",
      tags: ["JavaScript", "API Integration", "CSS3"],
      category: "frontend",
      github: "#",
      demo: "#"
    },
    {
      title: "Blog API",
      description: "A RESTful API for a blog platform with authentication and authorization.",
      image: "https://placehold.it/600x400/1A1F2C/FFFFFF?text=Blog+API",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "A chat application with real-time messaging and user presence.",
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
        <h2 className="section-title text-center pb-3 mb-4">My Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents different skills and technologies.
        </p>
        
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
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
          Code
        </Button>
        <Button size="sm" className="gap-2">
          <ExternalLink size={16} />
          Live Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
