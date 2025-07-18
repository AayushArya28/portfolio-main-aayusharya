import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Wrench, Brain, Trophy } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "TailwindCSS" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Go (Golang)" },
        { name: "REST APIs" },
        { name: "MongoDB" },
        { name: "MySQL" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git" },
        { name: "Firebase" },
        { name: "Vercel" },
        { name: "VS Code" }
      ]
    },
    {
      title: "Problem Solving",
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Data Structures" },
        { name: "Algorithms" },
        { name: "LeetCode" },
        { name: "Debugging" }
      ]
    }
  ];

  const certifications = [
    {
      title: "Robotics Workshop",
      issuer: "Technical Institution",
      date: "March 2025",
      icon: <Trophy className="h-5 w-5 text-primary" />
    },
    {
      title: "Drone Technology Workshop",
      issuer: "Tech Academy",
      date: "January 2025",
      icon: <Trophy className="h-5 w-5 text-primary" />
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Online Platform",
      date: "2024",
      icon: <Trophy className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="project-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tech Stack Badges */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "JavaScript", "TypeScript", "TailwindCSS", "Go", "MongoDB", "MySQL", "Firebase", "Git", "HTML5", "CSS3", "Node.js", "REST APIs", "Vercel", "VS Code"].map((tech, index) => (
              <Badge key={index} variant="secondary" className="tech-badge hover-scale">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-gradient">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="project-card text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {cert.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <Badge variant="outline">{cert.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};