
import { User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <User size={24} className="text-neon-cyan mr-3" />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card p-8">
          <div className="prose prose-lg prose-invert">
            <p className="text-gray-300 mb-4 leading-relaxed">
              I am a motivated Computer Science graduate from NIT Rourkela, India with a strong foundation in both 
              system monitoring and full stack development. Currently working as a System Monitoring Engineer at 
              Titan Technologies Ltd (contracted to Hyundai USA), I specialize in monitoring enterprise systems and 
              ensuring they operate at peak performance.
            </p>
            
            <Separator className="my-6 bg-dark-700" />
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              My expertise includes working with modern monitoring tools like <span className="text-neon-cyan">Dynatrace</span>, <span className="text-neon-green">Elastic</span>, <span className="text-neon-blue">Grafana</span>, SolarWinds, 
              and MaxGauge, as well as full stack development using the <span className="text-neon-pink">MERN stack</span> (MongoDB, Express, React, Node.js).
            </p>
            
            <p className="text-gray-300 leading-relaxed">
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
