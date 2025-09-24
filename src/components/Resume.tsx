import { useState, useEffect, useRef } from 'react';

export function Resume() {
  const [activeTab, setActiveTab] = useState('Experience');
  const tabsRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0, opacity: 0 });

  const tabs = ['Experience', 'Education'];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Led development of user-facing features for a SaaS platform serving 10k+ users. Implemented responsive designs and improved performance by 40%.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed custom websites and web applications for clients across various industries. Collaborated with design teams to ensure pixel-perfect implementations.",
      technologies: ["React", "JavaScript", "CSS", "WordPress"]
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2019 - 2020",
      description: "Built and maintained company website and internal tools. Gained experience in full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University Name",
      period: "2015 - 2019",
      details: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
    },
    {
      degree: "Frontend Development Certification",
      school: "Online Learning Platform",
      period: "2019",
      details: "Intensive program covering modern JavaScript frameworks, responsive design, and web accessibility standards"
    }
  ];

  useEffect(() => {
    if (tabsRef.current) {
      const activeButton = tabsRef.current.querySelector(`[data-tab="${activeTab}"]`) as HTMLButtonElement;
      if (activeButton) {
        const containerRect = tabsRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setUnderlineStyle({
          width: buttonRect.width,
          left: buttonRect.left - containerRect.left,
          opacity: 1
        });
      }
    }
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === 'Experience') {
      return (
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-2 border-border p-6 bg-card">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <span className="text-muted-foreground font-medium font-ibm-mono">{exp.period}</span>
                  </div>
                  
                  <h4 className="text-lg text-primary font-ibm-mono">{exp.company}</h4>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-2 border-border p-6 bg-card">
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-medium">{edu.degree}</h3>
                    <span className="text-muted-foreground font-medium font-ibm-mono">{edu.period}</span>
                  </div>
                  
                  <h4 className="text-lg text-primary font-ibm-mono">{edu.school}</h4>
                </div>
                
                <p className="text-muted-foreground">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-6xl font-medium font-dotemp">Resume</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-start">
          <div ref={tabsRef} className="relative flex space-x-8 border-b-2 border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                data-tab={tab}
                onClick={() => handleTabClick(tab)}
                className={`relative px-4 py-3 transition-colors font-ibm-mono ${
                  activeTab === tab 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
            
            {/* Animated underline */}
            <div 
              className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-out"
              style={{
                width: `${underlineStyle.width}px`,
                left: `${underlineStyle.left}px`,
                opacity: underlineStyle.opacity,
                transform: 'translateY(2px)'
              }}
            />
          </div>
        </div>

        {/* Content */}
        <section className="space-y-8 pb-12">
          {renderContent()}
        </section>
      </div>
    </div>
  );
}