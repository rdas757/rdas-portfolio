
import { Folder, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Multi-Agent AI Research System",
    description: "A multi-agent AI pipeline where three specialized agents collaborate to research any topic: a Researcher searches the web, an Analyst fact-checks and adds context, and a Writer produces a polished professional report — all automatically.",
    technologies: ["Python", "LangChain", "Google Gemini", "Streamlit", "DuckDuckGo Search", "Multi-Agent AI"],
    githubUrl: "https://github.com/rdas757/-Multi-agent-researcher",
  },
  {
    title: "Game Player Behavior Analytics",
    description: "Analyzed mobile game player behavior using K-Means clustering to segment players (Casual, Mid-Core, Hardcore, Whales) and built a Random Forest churn prediction model. Includes an interactive Streamlit dashboard with KPI tracking and visualizations.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Plotly", "Pandas", "K-Means", "Random Forest"],
    githubUrl: "https://github.com/rdas757/game-player-analytics",
  },
  {
    title: "Content-Based Image Retrieval",
    description: "Conducted a thesis on content-based image retrieval using joint color texture techniques such as LTP, LTrP and Color Histogram. Presented at the 28th International Conference on Computer and Information Technology (ICCIT 2025).",
    technologies: ["Python", "OpenCV", "Machine Learning", "Image Processing"],
    githubUrl: "https://github.com/rdas757/Content-Based-Image-Retrieval",
  },
  {
    title: "Transport System",
    description: "A comprehensive transport management system to streamline operations, track vehicles, and manage schedules.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/rdas757/Transport-System",
  },
  {
    title: "NutriAI",
    description: "An AI-powered health platform that generates personalized nutrition and workout plans based on blood type. Includes a full user app and a super admin dashboard.",
    technologies: ["AI", "React", "Node.js", "MongoDB", "Health Tech"],
    githubUrl: "https://github.com/rdas757/BloodFit",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Folder size={24} className="text-neon-cyan mr-3" />
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-dark-800 border-dark-700 hover:border-neon-cyan transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(0,238,255,0.15)]"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center overflow-hidden group">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Folder size={64} className="text-neon-cyan opacity-70 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-white font-semibold">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-400 mb-4">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {project.githubUrl && (
                <CardFooter className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors text-sm"
                  >
                    <Github size={16} /> View on GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neon-green hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
