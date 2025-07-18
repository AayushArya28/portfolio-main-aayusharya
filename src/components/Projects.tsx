import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Users } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Lifeer App",
      description: "A comprehensive full-stack application currently in development, featuring user authentication, real-time data management, and responsive design. Built with modern technologies for optimal performance.",
      tech: ["React", "TailwindCSS", "Firebase Auth", "Golang", "MongoDB"],
      status: "In Development",
      role: "Full Stack Developer",
      liveUrl: "https://lifeer-app.vercel.app/",
      githubUrl: "https://github.com/AayushArya28/lifeer-app",
      highlights: ["User Authentication", "Real-time Updates", "Responsive Design", "RESTful APIs"]
    },
    {
      title: "Technika'24",
      description: "Official website for Technika'24 tech fest, featuring event management, registration system, and dynamic content display. Designed to handle high traffic during event registration.",
      tech: ["React", "CSS3", "JavaScript", "Node.js"],
      status: "Completed",
      role: "Frontend Developer",
      githubUrl: "https://github.com/AayushArya28",
      highlights: ["Event Management", "Registration System", "Performance Optimization", "Mobile Responsive"]
    },
    {
      title: "IMPACT'25 Conference Website",
      description: "Professional conference website with speaker profiles, schedule management, and attendee registration. Features modern design with smooth animations and user-friendly interface.",
      tech: ["React", "TailwindCSS", "JavaScript", "HTML5"],
      status: "Completed",
      role: "Frontend Developer, UI/UX Developer",
      liveUrl: "https://impact2025.bitmesra.ac.in/",
      githubUrl: "https://github.com/AayushArya28",
      highlights: ["Speaker Profiles", "Schedule Display", "Registration Form", "Smooth Animations"]
    },
    {
      "title": "Hack the Github Graph",
      "description": "A Python script that automates creating back-dated commits, allowing users to 'paint' custom patterns onto their GitHub contribution activity graph.",
      "tech": ["Python", "Git", "Shell Scripting"],
      "status": "Completed",
      "role": "Sole Developer",
      "githubUrl": "https://github.com/AayushArya28/hacktheactivitygraph",
      "highlights": ["GitHub Graph Manipulation", "Commit Automation", "Custom Pattern Creation", "Date Manipulation"]
    },
    {
      title: "JEE Advanced Question Bank",
      description: "Comprehensive compilation of JEE Advanced questions with categorized topics, difficulty levels, and detailed solutions. Aimed at helping students prepare effectively for competitive exams.",
      tech: ["Content Developer", "PDF Processing"],
      status: "Completed",
      role: "Content Developer",
      // githubUrl is intentionally omitted here
      highlights: ["Question Categorization", "Difficulty Levels", "Search Functionality", "PDF Generation"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant={project.status === 'In Development' ? 'secondary' : 'outline'}>
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {project.role}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {/* Conditionally render Code button if githubUrl exists */}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="btn-primary">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  {/* Conditionally render Live Demo button if liveUrl exists */}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};