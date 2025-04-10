
import React from 'react';
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Vue.js", level: 80 },
    { name: "Tailwind CSS", level: 85 }
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 75 },
    { name: "GraphQL", level: 70 },
    { name: "RESTful APIs", level: 90 }
  ];
  
  const devOpsTools = [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "CI/CD", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Netlify/Vercel", level: 85 },
    { name: "Testing", level: 80 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center pb-3 mb-16">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="skill-card">
            <h3 className="text-2xl font-bold mb-6 text-teal-500">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-teal-500" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="skill-card">
            <h3 className="text-2xl font-bold mb-6 text-teal-500">Backend</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-teal-500" />
                </div>
              ))}
            </div>
          </div>
          
          {/* DevOps & Tools */}
          <div className="skill-card">
            <h3 className="text-2xl font-bold mb-6 text-teal-500">DevOps & Tools</h3>
            <div className="space-y-6">
              {devOpsTools.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-teal-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
