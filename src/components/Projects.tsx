import { useState } from 'react';

export function Projects() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const Projects = [
    {
      title: "Units of Measurement",
      date: "Spring 2025",
      article: "Design + Theory",
      excerpt: "Units of Measurement builds on Crawford’s Atlas of AI to reimagine the brand logos of four familiar names in Big Tech. Crawford explored AI development and impact by focusing on breadth: she identified links across a range of systems, using experiences from daily life as context. In a similar vein, the redesigned logos make use of visual art to express the nuance of supply chains. Beyond this, the series focuses on the urban consumer, exploring the impact of marketing on the conceptualization of use—and prospective uses—of current technologies.",
      content: "Insert pdf of slides here."
    },
    {
      title: "Inside a Commuter's Eye: Daily Health Ads in the Manhattan Subway",
      date: "Spring 2025",
      article: "Data Journalism",
      excerpt: "XXX",
      content: "https://wwoc-2025.github.io/wwoc-health/"
    },
    {
      title: "Site 27",
      date: "Spring 2025",
      article: "Video Game",
      excerpt: "A top-down maze horror game about a scientist in a ruined laboratory overrun by its latest experiment.",
      content: "https://hjkimowl.itch.io/site27"
    },
    {
      title: "Haptics project see SRI slides etc",
      date: "Summer 2024",
      article: "Simulation",
      excerpt: "XXX",
      content: "Show images"
    },
    {
      title: "Birds in NYC",
      date: "Spring 2025",
      article: "Educational Website",
      excerpt: "describe refer to UI notes.",
      content: "show snapshots of website?"
    },
    {
      title: "Innovation and Design Lab Product Designs",
      date: "Fall 2024",
      article: "Design Thinking",
      excerpt: "xx about brainstorming etc my drawings",
      content: "show snapshots of drawings of app etc annotate"
    },
    {
      title: "he's just programming",
      date: "Spring 2025",
      article: "Film",
      excerpt: "A satirical film borne from my curiosity about what could happen if we did not care about assigning any form of moral status to AI and sophisticated machines.",
      content: "XXX embed? https://youtu.be/AVxZSSJfgoY"
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
          <h1 className="text-6xl font-medium font-dotemp">Projects</h1>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {Projects.map((project, index) => {
            const isExpanded = expandedItems.has(index);
            
            return (
              <article key={index} className="border-2 border-border p-6 bg-card hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    
                    <div className="flex items-center gap-4 text-muted-foreground font-ibm-mono text-sm">
                      <time>{project.date}</time>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      <span>{project.article}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.excerpt}
                  </p>
                  
                  {isExpanded && (
                    <div className="pt-3 border-t border-border">
                      <p className="text-foreground leading-relaxed">
                        {project.content}
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