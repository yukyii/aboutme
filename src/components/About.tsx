import { ImageWithFallback } from './figma/ImageWithFallback';
import { FilmReelCarousel } from './FilmReelCarousel';

export function About() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-6xl font-medium font-dotemp">About Me</h1>
        </div>

        <div className="grid grid-cols-1 grid-aboutme gap-12">
          {/* Main content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate developer and designer who believes in creating digital experiences 
                that are both beautiful and functional. My journey in tech started with a curiosity 
                about how things work and has evolved into a career focused on building user-centered solutions.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new design trends, experimenting with 
                creative projects, or diving into the latest web technologies. I'm particularly 
                interested in the intersection of art and technology, and how we can use code as 
                a medium for creative expression.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile image placeholder */}
            <div className="border-4 border-primary/20 p-4 bg-card">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row with What I Value and Quick Facts */}
        <div className="grid grid-cols-1 grid-aboutme gap-12 mt-12">
          {/* Values */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="font-medium pb-2 font-ibm-mono">What I Value</h3>
              <div className="absolute bottom-0 left-0 right-0 border-b-2 border-border"></div>
            </div>
            <div className="py-1">
              <FilmReelCarousel />
            </div>
            <div className="border-b-2 border-border mt-4"></div>
          </div>

          {/* Quick facts */}
          <div className="border-2 border-border p-6 bg-card">
            <h3 className="font-medium mb-4 text-primary font-ibm-mono">Quick Facts</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex justify-between">
                <span>Location</span>
                <span>Your City</span>
              </div>
              <div className="flex justify-between">
                <span>Experience</span>
                <span>5+ years</span>
              </div>
              <div className="flex justify-between">
                <span>Focus</span>
                <span>Frontend</span>
              </div>
              <div className="flex justify-between">
                <span>Coffee</span>
                <span>☕ Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}