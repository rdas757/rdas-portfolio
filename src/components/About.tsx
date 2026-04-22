
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
              I am a motivated Computer Science graduate from NIT Rourkela, India with a strong foundation in
              data science, system monitoring, and full stack development. Currently working as a <span className="text-neon-cyan">Data Scientist at AppCurators</span>,
              I develop end-to-end data pipelines using Python and SQL, build and optimize machine learning models,
              and conduct data analysis and A/B testing to support product decisions across fintech, gaming, and e-commerce domains.
            </p>
            
            <Separator className="my-6 bg-dark-700" />
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Previously, I worked as a <span className="text-neon-green">System Monitoring Engineer at Titan Technologies Ltd</span> (contracted to Hyundai USA),
              where I specialized in monitoring enterprise systems and ensuring optimal performance and reliability using tools such as{" "}
              <span className="text-neon-cyan">Dynatrace</span>, <span className="text-neon-green">Elastic</span>, <span className="text-neon-blue">Grafana</span>, SolarWinds, and MaxGauge.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My expertise also includes full stack web development using the <span className="text-neon-pink">MERN stack</span> (MongoDB, Express, React, Node.js).
              I am passionate about building scalable, user-friendly applications and implementing data-driven and monitoring
              solutions that enhance system performance and business efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
