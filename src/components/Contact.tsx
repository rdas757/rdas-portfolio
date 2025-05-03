
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="bg-navy-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
        
        <div className="max-w-md mx-auto text-center">
          <p className="mb-8 text-navy-100">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-navy-800 hover:bg-navy-100">
              <a href="mailto:rahul470das@gmail.com">
                <Mail size={18} className="mr-2" />
                rahul470das@gmail.com
              </a>
            </Button>
            
            <Button asChild variant="outline" className="text-white border-white hover:bg-navy-700">
              <a href="https://linkedin.com/in/rahul-das-" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
