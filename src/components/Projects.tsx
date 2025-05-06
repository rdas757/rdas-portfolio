
import { Folder } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Content-Based Image Retrieval",
    description: "Conducted a thesis on content-based image retrieval using joint color texture techniques such as LTP, LTrP and Color Histogram",
    technologies: ["Python", "OpenCV", "Machine Learning", "Image Processing"],
  },
  {
    title: "Transport System",
    description: "A comprehensive transport management system to streamline operations, track vehicles, and manage schedules.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Dice Game",
    description: "An interactive dice game application with multiplayer functionality and score tracking.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
