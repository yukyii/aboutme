import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Resume } from './components/Resume';
import { About } from './components/About';
import { Thoughts } from './components/Thoughts';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 800); // Slightly longer than typical smooth scroll duration
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Don't update activeSection during programmatic scrolling
      if (isScrolling) return;
      
      const sections = ['home', 'resume', 'about', 'thoughts'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <div className="bg-background">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onSectionClick={scrollToSection}
      />
      <main>
        <section id="home">
          <HomePage activeSection={activeSection} />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="thoughts">
          <Thoughts />
        </section>
      </main>
    </div>
  );
}