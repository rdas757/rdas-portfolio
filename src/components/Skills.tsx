
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number; }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 90 }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 90 },
      { name: "NodeJS", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 85 },
      { name: "Express", level: 80 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    title: "Monitoring Tools",
    skills: [
      { name: "Dynatrace", level: 90 },
      { name: "Elastic", level: 85 },
      { name: "Grafana", level: 85 },
      { name: "SolarWinds", level: 75 },
      { name: "MaxGauge", level: 75 }
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 90 },
      { name: "Jira", level: 80 },
      { name: "Excel", level: 75 }
    ]
  }
];

const getLevelColor = (level: number): string => {
  if (level >= 90) return "bg-neon-cyan text-dark-900 hover:bg-neon-cyan/80";
  if (level >= 80) return "bg-neon-blue text-dark-900 hover:bg-neon-blue/80";
  if (level >= 70) return "bg-neon-green text-dark-900 hover:bg-neon-green/80";
  return "bg-neon-pink text-dark-900 hover:bg-neon-pink/80";
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Code size={24} className="text-neon-cyan mr-3" />
          <h2 className="section-title">Skills</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="tech-card mb-8"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <Badge 
                    key={skill.name} 
                    className={`text-sm py-1.5 px-4 transition-all duration-300 hover:shadow-glow ${getLevelColor(skill.level)}`}
                    variant="outline"
                  >
                    {skill.name}
                    <span className="ml-2 font-bold">{skill.level}%</span>
                  </Badge>
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
