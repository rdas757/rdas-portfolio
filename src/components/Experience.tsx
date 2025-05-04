
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "System Monitoring Engineer",
    company: "Titan Technologies Ltd (contracted to Hyundai USA)",
    period: "July 2024 - Present",
    description: [
      "Monitor enterprise systems using Dynatrace, Elastic, Grafana, SolarWinds, and MaxGauge.",
      "Analyze system performance metrics and troubleshoot issues to maintain optimal performance.",
      "Create and maintain monitoring dashboards for real-time system visibility.",
      "Collaborate with infrastructure and development teams to resolve system issues."
    ]
  },
  {
    title: "Full Stack Developer Intern",
    company: "TechnoColabs Software",
    period: "June 2023 - July 2023",
    description: [
      "Developed project management tools using the MERN stack (MongoDB, Express, React, Node.js).",
      "Implemented responsive UI designs with React and material design principles.",
      "Collaborated with team members on code reviews and feature implementation.",
      "Engaged in agile development practices including daily standups and sprint planning."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Briefcase size={24} className="text-neon-cyan mr-3" />
          <h2 className="section-title">Work Experience</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.title} 
              className="relative pl-8 pb-12 border-l border-neon-cyan/30 last:border-0 last:pb-0"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="absolute -left-1.5 bg-neon-cyan w-3 h-3 rounded-full shadow-[0_0_10px_rgba(0,238,255,0.7)]"></div>
              <div className="glass-card p-6 ml-6">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <h4 className="text-neon-cyan font-medium mb-2">{exp.company}</h4>
                <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                <ul className="space-y-2 text-gray-300">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-neon-cyan mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
