import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Aayush Arya. Built with React, TailwindCSS, and lots of ☕
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed and developed with passion for clean code and beautiful UX
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
