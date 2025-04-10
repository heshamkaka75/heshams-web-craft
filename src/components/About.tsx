
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Columns, Cpu } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-teal-500" />,
      title: "Frontend Development",
      description: "Creating responsive, pixel-perfect UIs with modern frameworks like React, Vue, and Angular."
    },
    {
      icon: <Server className="w-8 h-8 text-teal-500" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and database technologies."
    },
    {
      icon: <Columns className="w-8 h-8 text-teal-500" />,
      title: "Full Stack Solutions",
      description: "End-to-end web application development from UI design to server implementation."
    },
    {
      icon: <Cpu className="w-8 h-8 text-teal-500" />,
      title: "API Development",
      description: "Designing and implementing RESTful APIs and GraphQL services for seamless data flow."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title pb-3">About Me</h2>
            <p className="text-lg mb-6">
              I'm Hesham Elhag, a passionate <span className="highlight">Fullstack Web Developer</span> with a strong foundation in both frontend and backend technologies.
            </p>
            <p className="mb-6">
              With expertise in modern JavaScript frameworks, responsive design, and server-side programming, I create seamless web experiences that combine functionality with aesthetics.
            </p>
            <p className="mb-6">
              My approach to development focuses on writing clean, maintainable code while always keeping the end user's experience at the forefront of my work.
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
