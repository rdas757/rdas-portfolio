
import { Mail, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Get In <span className="text-neon-cyan">Touch</span>
        </h2>
        
        <div className="max-w-md mx-auto glass-card p-8 neon-border">
          <p className="mb-8 text-gray-300 text-center">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Button asChild className="bg-neon-cyan hover:bg-neon-cyan/80 text-dark-900 w-full">
              <a href="mailto:rahul470das@gmail.com">
                <Mail size={18} className="mr-2" />
                rahul470das@gmail.com
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 w-full">
              <a href="https://linkedin.com/in/rahul-das-" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Button asChild variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 w-full">
              <a href="https://www.facebook.com/profile.php?id=100056906624289" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} className="mr-2" />
                Facebook
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
