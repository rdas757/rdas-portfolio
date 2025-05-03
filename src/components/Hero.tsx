
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pb-20 pt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-800 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hi, I'm <span className="text-accent">Rahul Das</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-navy-600 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            System Monitoring Engineer & Full Stack Developer
          </h2>
          
          <p className="text-lg text-navy-600 mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Crafting reliable solutions with modern technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Button asChild className="bg-navy-800 hover:bg-navy-700 text-white">
              <a href="mailto:rahul470das@gmail.com">
                <Mail size={18} className="mr-2" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://linkedin.com/in/rahul-das-" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={28} className="text-navy-500" />
        </a>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f3f9_1px,transparent_1px),linear-gradient(to_bottom,#f0f3f9_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
    </section>
  );
};

export default Hero;
