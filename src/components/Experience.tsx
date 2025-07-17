import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Users, Award } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Computer Science Expert",
      company: "Chegg India",
      period: "May 2025 - Present",
      location: "Remote",
      type: "Part-time",
      description: "Providing expert solutions and explanations for computer science problems, helping students understand complex concepts in programming, data structures, algorithms, and software development.",
      achievements: [
        "Solved 200+ computer science problems",
        "Maintained 95% solution accuracy rate",
        "Specialized in web development and algorithms",
        "Mentored students in React and JavaScript"
      ],
      skills: ["Problem Solving", "Teaching", "JavaScript", "React", "Algorithms"]
    }
  ];

  const workshops = [
    {
      title: "Robotics Workshop",
      organizer: "Technical Institution",
      date: "March 2025",
      description: "Hands-on workshop covering robotics fundamentals, sensor integration, and autonomous systems development.",
      skills: ["Robotics", "Sensors", "Arduino", "Programming"]
    },
    {
      title: "Drone Technology Workshop",
      organizer: "Tech Academy",
      date: "January 2025",
      description: "Comprehensive workshop on drone technology, flight mechanics, and programming autonomous flight systems.",
      skills: ["Drone Tech", "Flight Control", "IoT", "Automation"]
    }
  ];

  const contributions = [
    {
      title: "Technika'24 Tech Fest",
      role: "Web Developer",
      description: "Contributed to the official website development, implementing responsive design and user registration features.",
      impact: "Handled 1000+ user registrations"
    },
    {
      title: "IMPACT'25 Conference",
      role: "Frontend Developer",
      description: "Developed the conference website with speaker profiles, schedule management, and attendee interface.",
      impact: "Served 500+ conference attendees"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience & Contributions</h2>
        
        {/* Work Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Work Experience</h3>
          {experiences.map((exp, index) => (
            <Card key={index} className="project-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Award className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="tech-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Workshops & Training */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Workshops & Training</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {workshop.organizer}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {workshop.date}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {workshop.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {workshop.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Project Contributions */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gradient">Project Contributions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {contributions.map((contrib, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <CardTitle className="text-lg">{contrib.title}</CardTitle>
                  <Badge variant="secondary">{contrib.role}</Badge>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {contrib.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium">{contrib.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};