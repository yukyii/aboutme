export function Thoughts() {
  const thoughts = [
    {
      title: "The Art of Minimal Design",
      date: "September 15, 2024",
      excerpt: "Exploring how constraints can actually enhance creativity and lead to more impactful design solutions.",
      readTime: "3 min read"
    },
    {
      title: "Building with Intention",
      date: "August 28, 2024",
      excerpt: "Why every design decision should have a purpose, and how to avoid feature creep in digital products.",
      readTime: "5 min read"
    },
    {
      title: "The Future of Web Interactions",
      date: "August 12, 2024",
      excerpt: "Thoughts on emerging web technologies and how they're shaping the next generation of user experiences.",
      readTime: "4 min read"
    },
    {
      title: "Accessibility as a Design Principle",
      date: "July 30, 2024",
      excerpt: "Making the web more inclusive isn't just good practice—it's essential for reaching all users effectively.",
      readTime: "6 min read"
    },
    {
      title: "Code as a Creative Medium",
      date: "July 18, 2024",
      excerpt: "How programming can be a form of artistic expression, and why developers should embrace their creative side.",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-medium">Thoughts</h1>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reflections on design, development, and the intersection of technology and creativity.
          </p>
        </div>

        {/* Thoughts grid */}
        <div className="space-y-8">
          {thoughts.map((thought, index) => (
            <article key={index} className="border-2 border-border p-8 bg-card hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-medium group-hover:text-primary transition-colors">
                    {thought.title}
                  </h2>
                  <span className="text-muted-foreground whitespace-nowrap">
                    {thought.readTime}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <time>{thought.date}</time>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <span>Article</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {thought.excerpt}
                </p>
                
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center py-12">
          <div className="border-2 border-border p-8 bg-card">
            <h3 className="text-xl font-medium mb-4">Want to discuss these ideas?</h3>
            <p className="text-muted-foreground mb-6">
              I'd love to hear your thoughts and engage in meaningful conversations about design and development.
            </p>
            <div className="px-6 py-3 bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90 transition-colors cursor-pointer inline-block">
              Get in touch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}