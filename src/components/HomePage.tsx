import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TrailImage {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

interface HomePageProps {
  activeSection: string;
}

export function HomePage({ activeSection }: HomePageProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trailImages, setTrailImages] = useState<TrailImage[]>([]);
  const lastImagePos = useRef({ x: 0, y: 0 });
  const homeRef = useRef<HTMLDivElement>(null); // Add ref for home section

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (activeSection !== 'Home') {
        return;
      }

      // Check if mouse is within the home section bounds
      if (homeRef.current) {
        const rect = homeRef.current.getBoundingClientRect();
        const isWithinHome = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        
        if (!isWithinHome) {
          return; // Don't create trail if mouse is outside home section
        }
      }

      const currentX = e.clientX;
      const currentY = e.clientY;
      
      // Calculate distance from last image position
      const distance = Math.sqrt(
        Math.pow(currentX - lastImagePos.current.x, 2) + 
        Math.pow(currentY - lastImagePos.current.y, 2)
      );
      
      // Only add new image if mouse has moved at least 80 pixels from last image
      if (distance > 80) {
        setMousePos({ x: currentX, y: currentY });
        
        const newImage: TrailImage = {
          id: Date.now(),
          x: currentX,
          y: currentY,
          opacity: 1
        };
        
        setTrailImages(prev => [...prev.slice(-8), newImage]); // Keep last 9 images
        lastImagePos.current = { x: currentX, y: currentY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [activeSection]);

  useEffect(() => {
    // Clear trail images when leaving homepage
    if (activeSection !== 'Home') {
      setTrailImages([]);
      return;
    }

    // Fade out trail images
    const interval = setInterval(() => {
      setTrailImages(prev => 
        prev.map(img => ({ ...img, opacity: img.opacity * 0.92 }))
          .filter(img => img.opacity > 0.05)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [activeSection]);

  return (
    <div ref={homeRef} className="min-h-screen pt-20 px-6 overflow-hidden relative">
      {/* Trail images */}
      {trailImages.map((img) => (
        <div
          key={img.id}
          className="fixed pointer-events-none z-0"
          style={{
            left: img.x - 25,
            top: img.y - 25,
            opacity: img.opacity,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1626444170626-303f62d83718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHNoYXBlc3xlbnwxfHx8fDE3NTg1ODczMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-12 h-12 object-cover border-2 border-primary/20"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Introduction */}
          <div className="space-y-8 relative z-20">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight font-dotemp">
                Hello, I'm
                <br />
                <span className="text-primary">Yuk Yi!</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-base text-muted-foreground max-w-lg">
                I'm a senior at Barnard College, Columbia University studying Cognitive Science and Sociology.
                My experiences span brand strategy, social work, HCI research and product design. 
                With a multidisciplinary background, finding connections between social science 
                and emerging technologies is what excites me most.
              </p>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 border-4 border-primary/20 transform rotate-12"></div>
              <div className="absolute inset-4 border-2 border-primary/40 transform -rotate-6"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-primary/10 to-primary/30"></div>
              
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-primary transform rotate-45"></div>
              <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-4 border-primary"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary/60 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}