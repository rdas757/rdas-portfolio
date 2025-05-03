
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
    period: "Current",
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
    period: "2022",
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
    <section id="experience" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Briefcase size={24} className="text-accent mr-3" />
          <h2 className="section-title">Work Experience</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-navy-800">{exp.title}</h3>
                <h4 className="text-navy-600 font-medium mb-2">{exp.company}</h4>
                <p className="text-sm text-navy-500 mb-3">{exp.period}</p>
                <ul className="list-disc pl-5 space-y-1 text-navy-700">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
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
