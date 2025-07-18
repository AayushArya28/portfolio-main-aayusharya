import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, GraduationCap, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resume from '@/assets/AayushArya_Resume.pdf';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Info */}
          <Card className="project-card">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Personal Information</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">aayush10738@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+91 8603128570</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Patna, India</span>
                </div>
              </div>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Button className="w-full btn-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="project-card">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>

              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">B.Tech in Electronics and Communication</h4>
                  </div>
                  <p className="text-muted-foreground">BIT Patna</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">2024 - 2028</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Objective */}
        <Card className="project-card mt-8">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              Motivated and detail-oriented front-end developer skilled in HTML, CSS, and JavaScript.
              Passionate about responsive design and problem-solving. Active in tech fests and team projects.
              Fast learner with strong communication skills, eager to contribute to innovative web solutions
              and grow in the field of modern web development.
            </p>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Card className="text-center p-6 hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </Card>
          <Card className="text-center p-6 hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </Card>
          <Card className="text-center p-6 hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">LeetCode Problems</div>
          </Card>
          <Card className="text-center p-6 hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </Card>
        </div>
      </div>
    </section >
  );
};