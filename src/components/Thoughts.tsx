import { useState } from 'react';

export function Thoughts() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const thoughts = [
    {
      title: "The Art of Minimal Design",
      date: "September 15, 2024",
      article: "Essay",
      excerpt: "Exploring how constraints can actually enhance creativity and lead to more impactful design solutions.",
      content: "In today's cluttered digital landscape, minimalism stands as a beacon of clarity. This comprehensive exploration delves into how constraints paradoxically unlock creativity, examining case studies from successful brands like Apple and Google. We'll explore the psychology behind minimal design, its impact on user cognition, and practical frameworks for implementing minimalist principles in your own work. From typography choices to whitespace utilization, every element serves a purpose in creating experiences that feel both sophisticated and accessible."
    },
    {
      title: "Building with Intention",
      date: "August 28, 2024",
      article: "Guide",
      excerpt: "Why every design decision should have a purpose, and how to avoid feature creep in digital products.",
      content: "Feature creep is the silent killer of great products. This guide provides a systematic approach to intentional design, starting with clear problem definition and user research. Learn how to establish design principles that guide decision-making, create effective stakeholder alignment, and implement review processes that catch unnecessary additions before they compromise your product's core value proposition. Includes real-world examples and templates for maintaining design integrity throughout the development process."
    },
    {
      title: "The Future of Web Interactions",
      date: "August 12, 2024",
      article: "Research",
      excerpt: "Thoughts on emerging web technologies and how they're shaping the next generation of user experiences.",
      content: "Web interactions are evolving rapidly with new technologies like WebXR, advanced gesture recognition, and AI-powered interfaces. This research piece examines current trends in interaction design, analyzes emerging patterns from leading tech companies, and predicts how these changes will reshape user expectations. We'll explore the implications for accessibility, performance, and cross-platform consistency, providing actionable insights for designers and developers preparing for the next wave of web innovation."
    },
    {
      title: "Accessibility as a Design Principle",
      date: "July 30, 2024",
      article: "Article",
      excerpt: "Making the web more inclusive isn't just good practice—it's essential for reaching all users effectively.",
      content: "Accessibility isn't an afterthought—it's a fundamental design principle that benefits everyone. This article breaks down the business case for inclusive design, explores common accessibility barriers, and provides practical solutions for creating universally usable interfaces. From color contrast and keyboard navigation to screen reader compatibility and cognitive accessibility, we'll cover essential techniques that improve usability for all users while meeting WCAG guidelines and legal requirements."
    },
    {
      title: "Code as a Creative Medium",
      date: "July 18, 2024",
      article: "Opinion",
      excerpt: "How programming can be a form of artistic expression, and why developers should embrace their creative side.",
      content: "Programming is often viewed as purely technical, but it's fundamentally a creative act. This opinion piece argues for recognizing code as a legitimate creative medium, exploring parallels between programming and traditional arts. We'll examine how elegant code structure mirrors good composition, how algorithmic thinking can generate unexpected solutions, and why embracing the artistic aspects of development leads to better software. Includes perspectives from creative coders and examples of code as art."
    }
  ];

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-6xl font-medium font-dotemp">Thoughts</h1>
        </div>

        {/* Thoughts grid */}
        <div className="space-y-8">
          {thoughts.map((thought, index) => {
            const isExpanded = expandedItems.has(index);
            
            return (
              <article key={index} className="border-2 border-border p-6 bg-card hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
                        {thought.title}
                      </h2>
                    </div>
                    
                    <div className="flex items-center gap-4 text-muted-foreground font-ibm-mono text-sm">
                      <time>{thought.date}</time>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      <span>{thought.article}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {thought.excerpt}
                  </p>
                  
                  {isExpanded && (
                    <div className="pt-3 border-t border-border">
                      <p className="text-foreground leading-relaxed">
                        {thought.content}
                      </p>
                    </div>
                  )}
                  
                  <div className="pt-3">
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="inline-flex items-center gap-2 text-primary font-ibm-mono text-sm hover:gap-3 transition-all"
                    >
                      {isExpanded ? 'Collapse' : 'Expand'}
                      <span className="w-4 h-4 flex items-center justify-center">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}