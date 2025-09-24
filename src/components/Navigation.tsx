import { useEffect, useRef, useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onSectionClick: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection, onSectionClick }: NavigationProps) {
  const navItems = ['Home', 'Resume', 'About', 'Projects'];
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0, opacity: 0 });

  const handleItemClick = (item: string) => {
    setActiveSection(item);
    onSectionClick(item);
  };

  useEffect(() => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLButtonElement;
      if (activeButton) {
        const navContainer = navRef.current;
        const containerRect = navContainer.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setUnderlineStyle({
          width: buttonRect.width,
          left: buttonRect.left - containerRect.left,
          opacity: 1
        });
      }
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleItemClick('Home')}
            className="font-medium hover:text-primary/80 transition-colors font-ibm-mono"
          >
            Yuk Yi Wong
          </button>
          
          <div ref={navRef} className="relative flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                data-section={item}
                onClick={() => handleItemClick(item)}
                className={`relative px-3 py-2 transition-colors font-ibm-mono ${
                  activeSection === item 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Animated underline */}
            <div 
              className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-out"
              style={{
                width: `${underlineStyle.width}px`,
                left: `${underlineStyle.left}px`,
                opacity: underlineStyle.opacity
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}