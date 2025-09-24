import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-medium">About Me</h1>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
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

              <p className="leading-relaxed text-muted-foreground">
                I value clean code, thoughtful design, and meaningful collaboration. Whether working 
                on a complex web application or a simple landing page, I approach each project with 
                attention to detail and a focus on the end user experience.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium border-b-2 border-primary pb-2">What I Value</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-border p-6 bg-card">
                  <h3 className="font-medium mb-3 text-primary">Clean Design</h3>
                  <p className="text-muted-foreground">
                    Believing that simplicity and clarity create the most impactful user experiences.
                  </p>
                </div>
                
                <div className="border-2 border-border p-6 bg-card">
                  <h3 className="font-medium mb-3 text-primary">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Staying curious and always exploring new technologies and methodologies.
                  </p>
                </div>
                
                <div className="border-2 border-border p-6 bg-card">
                  <h3 className="font-medium mb-3 text-primary">User Focus</h3>
                  <p className="text-muted-foreground">
                    Putting user needs and accessibility at the center of every design decision.
                  </p>
                </div>
                
                <div className="border-2 border-border p-6 bg-card">
                  <h3 className="font-medium mb-3 text-primary">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Working closely with teams to create solutions that exceed expectations.
                  </p>
                </div>
              </div>
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

            {/* Quick facts */}
            <div className="border-2 border-border p-6 bg-card">
              <h3 className="font-medium mb-4 text-primary">Quick Facts</h3>
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

            {/* Contact */}
            <div className="border-2 border-border p-6 bg-card">
              <h3 className="font-medium mb-4 text-primary">Let's Connect</h3>
              <div className="space-y-3">
                <div className="px-4 py-2 border border-border hover:border-primary transition-colors cursor-pointer text-center">
                  Email
                </div>
                <div className="px-4 py-2 border border-border hover:border-primary transition-colors cursor-pointer text-center">
                  LinkedIn
                </div>
                <div className="px-4 py-2 border border-border hover:border-primary transition-colors cursor-pointer text-center">
                  GitHub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}