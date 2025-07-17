import { ArrowDown, Github, Linkedin, Code, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in-up">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Aayush</span>{' '}
            <span className="text-foreground">Arya</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Frontend Developer | Tech Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Motivated and detail-oriented developer skilled in React, JavaScript, and modern web technologies. 
            Passionate about creating responsive, user-friendly applications.
          </p>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="btn-glow group">
            <FileText className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            View Resume
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Code className="mr-2 h-4 w-4" />
            My Projects
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://github.com/AayushArya28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/aayusharyaiam/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://leetcode.com/u/aayusharya_i_am/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Code className="h-5 w-5" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};