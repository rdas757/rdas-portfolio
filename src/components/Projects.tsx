
import { Folder } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Content-Based Image Retrieval",
    description: "A system that retrieves images similar to a query image based on visual features like color, texture, and shape.",
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
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Folder size={24} className="text-accent mr-3" />
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="h-48 bg-navy-100 flex items-center justify-center">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Folder size={64} className="text-navy-300" />
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-navy-800">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-navy-600 mb-4">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-navy-50 text-navy-600 rounded-full">
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
