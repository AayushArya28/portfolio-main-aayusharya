import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, User, Briefcase, Code, Mail, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { id: 'about', label: 'About', icon: <User className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <Code className="h-4 w-4" /> },
    { id: 'skills', label: 'Skills', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'experience', label: 'Experience', icon: <FileText className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex ${mobile ? 'flex-col space-y-4' : 'space-x-6'}`}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
            activeSection === item.id
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-primary hover:bg-muted'
          }`}
        >
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <span className="text-xl font-bold text-gradient">Aayush Arya</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <nav>
              <NavLinks />
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">A</span>
                  </div>
                  <span className="text-xl font-bold text-gradient">Aayush Arya</span>
                </div>
                
                <nav className="flex-1">
                  <NavLinks mobile />
                </nav>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Frontend Developer & Tech Enthusiast
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};