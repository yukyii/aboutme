export function Resume() {
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
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code", "Chrome DevTools", "npm/yarn"] },
    { category: "Concepts", items: ["Responsive Design", "Accessibility", "Performance", "SEO", "Testing"] }
  ];

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-medium">Resume</h1>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A summary of my professional experience, education, and skills in software development.
          </p>
        </div>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium border-b-2 border-primary pb-2">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-2 border-border p-6 bg-card">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <span className="text-muted-foreground font-medium">{exp.period}</span>
                  </div>
                  
                  <h4 className="text-lg text-primary">{exp.company}</h4>
                  
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
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium border-b-2 border-primary pb-2">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-2 border-border p-6 bg-card">
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-medium">{edu.degree}</h3>
                    <span className="text-muted-foreground font-medium">{edu.period}</span>
                  </div>
                  
                  <h4 className="text-lg text-primary">{edu.school}</h4>
                  
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8 pb-12">
          <h2 className="text-2xl font-medium border-b-2 border-primary pb-2">Skills</h2>
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="border-2 border-border p-6 bg-card">
                <h3 className="text-lg font-medium mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-secondary text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}