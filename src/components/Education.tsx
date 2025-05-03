
import { Book, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

const educations: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "NIT Rourkela",
    year: "2022",
    details: "CGPA: 7.27/10"
  }
];

const certifications: CertificationItem[] = [
  {
    title: "Full Stack Web Development",
    issuer: "TechnoColabs Academy",
    year: "2021"
  },
  {
    title: "System Performance Monitoring",
    issuer: "Dynatrace University",
    year: "2022"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <Book size={24} className="text-neon-cyan mr-3" />
            <h2 className="section-title">Education</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {educations.map((edu) => (
              <div key={edu.degree} className="tech-card">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <h4 className="text-neon-cyan font-medium mb-2">{edu.institution}</h4>
                <p className="text-sm text-gray-400 mb-3">{edu.year}</p>
                <p className="text-gray-300">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-center mb-10">
            <Award size={24} className="text-neon-cyan mr-3" />
            <h2 className="section-title">Certifications</h2>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="tech-card">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-neon-cyan">{cert.issuer}</p>
                <p className="text-sm text-gray-400">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
