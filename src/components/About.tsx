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
                I'm passionate about bridging social science knowledge with technological development,
                so that we may better define and address digital inequalities.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                When I'm not heads down in coding assignments or deconstructing social theories, you'll probably
                find me running a club event somewhere on campus! As Vice-President of Columbia's largest gaming club,
                and President of the Singapore Students' Association, I'm always exploring ways to connect people 
                over things that bring us joy.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile image placeholder */}
            <div className="border-2 border-primary/20 p-4 bg-card">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/imgs/profile.png" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row with What I Value and Quick Facts */}
        <div className="grid grid-cols-1 grid-aboutme gap-12 mt-12">
          {/* Values */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="font-medium pb-2 font-ibm-mono">Where I've Been...</h3>
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
                <span className="flex items-center gap-2">
                  <img src="/icons/location.svg" alt="Location pin" className="w-4 h-4" />
                </span>
                <span>NYC</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <img src="/icons/home.svg" alt="Hometown" className="w-4 h-4" />
                </span>
                <span>Singapore</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <img src="/icons/heart.svg" alt="Likes" className="w-4 h-4" />
                </span>
                <span>Boardgames, Horror</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <img src="/icons/heart-broken.svg" alt="Dislikes" className="w-4 h-4" />
                </span>
                <span>Horror</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}