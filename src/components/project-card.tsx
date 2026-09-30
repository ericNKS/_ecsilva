import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
}

export function ProjectCard({
  title,
  description,
  image,
  techs,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/60 dark:hover:border-accent/60 transition-all duration-300">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={`Banner do projeto ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm mb-6 line-clamp-4 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                !liveUrl ? "flex-1 flex items-center justify-center gap-2 font-medium" : ""
              } p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:text-accent hover:border-accent transition-all`}
              aria-label="GitHub Repository"
            >
              {!liveUrl && <span className="mr-2">GitHub</span>}
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
