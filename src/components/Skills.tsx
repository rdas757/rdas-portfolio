
import { Code } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript"]
  },
  {
    title: "Web Development",
    skills: ["React", "NodeJS", "HTML", "CSS", "Express"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Monitoring Tools",
    skills: ["Dynatrace", "Elastic", "Grafana", "SolarWinds", "MaxGauge"]
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "GitHub", "Jira", "Excel"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Code size={24} className="text-accent mr-3" />
          <h2 className="section-title">Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-navy-700">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
