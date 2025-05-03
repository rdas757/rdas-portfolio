
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <User size={24} className="text-accent mr-3" />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-navy-700 mb-4 leading-relaxed">
              I am a motivated Computer Science graduate from NIT Rourkela, India with a strong foundation in both 
              system monitoring and full stack development. Currently working as a System Monitoring Engineer at 
              Titan Technologies Ltd (contracted to Hyundai USA), I specialize in monitoring enterprise systems and 
              ensuring they operate at peak performance.
            </p>
            
            <p className="text-navy-700 mb-4 leading-relaxed">
              My expertise includes working with modern monitoring tools like Dynatrace, Elastic, Grafana, SolarWinds, 
              and MaxGauge, as well as full stack development using the MERN stack (MongoDB, Express, React, Node.js).
            </p>
            
            <p className="text-navy-700 leading-relaxed">
              I'm passionate about creating efficient, user-friendly applications and implementing robust monitoring 
              solutions that help businesses maintain system reliability and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
