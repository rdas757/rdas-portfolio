
import { Github, Bookmark } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

const DevProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      username: "rdas757",
      url: "https://github.com/rdas757",
      icon: Github,
      description: "View my open source projects and code repositories"
    },
    {
      name: "LeetCode",
      username: "rdas757",
      url: "https://leetcode.com/u/rdas757/",
      icon: Bookmark,
      description: "Check my coding problem solutions and algorithmic skills"
    }
  ];

  return (
    <section id="dev-profiles" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Dev <span className="text-neon-cyan">Profiles</span>
        </h2>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <HoverCard key={profile.name}>
              <HoverCardTrigger asChild>
                <Card className="glass-card p-6 border-dark-700 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,238,255,0.2)]">
                  <a 
                    href={profile.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-gray-300 hover:text-neon-cyan transition-colors"
                  >
                    <div className="flex items-center">
                      <profile.icon size={24} className="text-neon-cyan mr-3" />
                      <div>
                        <h3 className="font-medium text-white">{profile.name}</h3>
                        <p className="text-sm text-gray-400">@{profile.username}</p>
                      </div>
                    </div>
                    <div className="text-neon-cyan">→</div>
                  </a>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-dark-800 border-dark-700 text-white">
                {profile.description}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevProfiles;
