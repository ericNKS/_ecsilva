import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, image, techs, liveUrl, githubUrl }: ProjectProps) {
  return (
    <div className="group bg-surface border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech) => (
            <span key={tech} className="text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted text-sm mb-6 line-clamp-3">{description}</p>
        
        <div className="flex items-center gap-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              className="flex-1 bg-accent text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              className="p-2 border border-gray-200 dark:border-gray-800 rounded-lg text-muted hover:text-primary hover:border-accent transition-all"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
