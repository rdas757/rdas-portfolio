
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pb-20 pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hi, I'm <span className="text-neon-cyan animate-glow">Rahul Das</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Software Engineer
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.5s" }}>
              Turning ideas into fast, functional, and beautiful products.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <Button asChild variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                <a href="#about">
                  <FileText size={18} className="mr-2" />
                  View Portfolio
                </a>
              </Button>
              <Button asChild className="bg-neon-cyan hover:bg-neon-cyan/80 text-dark-900">
                <a href="mailto:rahul470das@gmail.com">
                  <Mail size={18} className="mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative animate-float">
              <div className="w-64 h-64 rounded-full border-4 border-neon-cyan/30 overflow-hidden shadow-[0_0_30px_rgba(0,238,255,0.3)]">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/lovable-uploads/5e036802-54b9-49c9-99e9-26512a9b4a62.png" 
                    alt="Rahul Das" 
                    className="object-cover w-full h-full object-[center_35%]"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-dark-700 to-dark-900 text-neon-cyan text-6xl font-bold">
                    RD
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute inset-0 rounded-full border-[1px] border-neon-cyan/20 animate-ping [animation-duration:3s]"></div>
              <div className="absolute inset-[-4px] rounded-full border border-neon-cyan/30"></div>
              <div className="absolute inset-[-10px] rounded-full border border-neon-cyan/10"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="text-neon-cyan">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
