
import { Code } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { 
  Html, 
  Css, 
  Javascript, 
  React as ReactIcon, 
  Python, 
  Typescript, 
  Git, 
  Database, 
  Github 
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: React.ReactNode }[];
}

const getIconForSkill = (name: string) => {
  const iconProps = { size: 16, className: "mr-2" };
  
  switch (name.toLowerCase()) {
    case 'html': return <Html {...iconProps} />;
    case 'css': return <Css {...iconProps} />;
    case 'javascript': return <Javascript {...iconProps} />;
    case 'react': return <ReactIcon {...iconProps} />;
    case 'python': return <Python {...iconProps} />;
    case 'typescript': return <Typescript {...iconProps} />;
    case 'github': return <Github {...iconProps} />;
    case 'git': return <Git {...iconProps} />;
    case 'mongodb':
    case 'mysql': 
      return <Database {...iconProps} />;
    default: return null;
  }
};

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

const getProgressGradient = (level: number): string => {
  if (level >= 90) return "from-neon-cyan to-neon-blue";
  if (level >= 80) return "from-neon-blue to-neon-green";
  if (level >= 70) return "from-neon-green to-neon-cyan";
  return "from-neon-pink to-neon-purple";
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Code size={24} className="text-neon-cyan mr-3" />
          <h2 className="section-title">Skills</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="tech-card"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map(skill => (
                    <HoverCard key={skill.name} openDelay={200} closeDelay={100}>
                      <HoverCardTrigger asChild>
                        <div className="group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              {getIconForSkill(skill.name)}
                              <span className="font-medium text-gray-200 group-hover:text-neon-cyan transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-400 group-hover:text-neon-cyan transition-colors">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-dark-800"
                          >
                            <div 
                              className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(skill.level)} transition-all duration-500 group-hover:shadow-[0_0_8px_rgba(0,238,255,0.6)]`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </Progress>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="glass-card border-neon-cyan/20 w-80">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold">{skill.name}</h4>
                            <p className="text-sm text-gray-400">Proficiency: {skill.level}%</p>
                          </div>
                          <div className="text-neon-cyan">
                            {getIconForSkill(skill.name) || <Code size={24} />}
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
