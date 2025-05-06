
import { Code } from "lucide-react";
import { 
  FileCode, 
  CircleEqual, 
  Braces, 
  SquareCode, 
  Terminal, 
  GitBranch, 
  Database 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon?: React.ReactNode;
  category: string;
}

const getIconForSkill = (name: string) => {
  const iconProps = { size: 24, className: "mb-2" };
  
  switch (name.toLowerCase()) {
    case 'html': return <FileCode {...iconProps} />;
    case 'css': return <CircleEqual {...iconProps} />;
    case 'javascript': return <Braces {...iconProps} />;
    case 'react': return <SquareCode {...iconProps} />;
    case 'python': return <Terminal {...iconProps} />;
    case 'typescript': return <FileCode {...iconProps} />;
    case 'github': 
    case 'git': return <GitBranch {...iconProps} />;
    case 'mongodb':
    case 'mysql': 
      return <Database {...iconProps} />;
    default: return <Code {...iconProps} />;
  }
};

const skills: Skill[] = [
  // Programming Languages
  { name: "C", category: "Programming Languages" },
  { name: "C++", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  
  // Web Development
  { name: "React", category: "Web Development" },
  { name: "NodeJS", category: "Web Development" },
  { name: "HTML", category: "Web Development" },
  { name: "CSS", category: "Web Development" },
  { name: "Express", category: "Web Development" },
  
  // Databases
  { name: "MongoDB", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  
  // Monitoring Tools
  { name: "Dynatrace", category: "Monitoring Tools" },
  { name: "Elastic", category: "Monitoring Tools" },
  { name: "Grafana", category: "Monitoring Tools" },
  { name: "SolarWinds", category: "Monitoring Tools" },
  { name: "MaxGauge", category: "Monitoring Tools" },
  
  // Developer Tools
  { name: "VS Code", category: "Developer Tools" },
  { name: "GitHub", category: "Developer Tools" },
  { name: "Jira", category: "Developer Tools" },
  { name: "Excel", category: "Developer Tools" }
];

// Group skills by category
const skillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Code size={24} className="text-neon-cyan mr-3" />
          <h2 className="section-title">Skills</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-white">{category}</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categorySkills.map(skill => (
                  <div 
                    key={`${category}-${skill.name}`}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-dark-800/80 border border-dark-700 transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,238,255,0.3)] hover:-translate-y-1"
                  >
                    <div className="text-neon-cyan">
                      {getIconForSkill(skill.name)}
                    </div>
                    <span className="text-gray-200 text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
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
