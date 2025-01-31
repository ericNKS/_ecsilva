// components/TechBanner.js
import React from "react";
import styles from "./style/TechBanner.module.css";
import Image from "next/image";

const techLogos = [
  { name: "TypeScript", src: "/tech-logo/Typescript.png" },
  { name: "Javascript", src: "/tech-logo/Javascript.png" },
  { name: "React", src: "/tech-logo/React.png" },
  { name: "Vue", src: "/tech-logo/vuejs.png" },
  { name: "Git", src: "/tech-logo/git.png" },
  { name: "Node", src: "/tech-logo/node.png" },
  { name: "PHP", src: "/tech-logo/php.png" },
  { name: "Laravel", src: "/tech-logo/Laravel.png" },
  { name: "Next.js", src: "/tech-logo/nextjs.png" },
  { name: "Go", src: "/tech-logo/Go.png" },
  { name: "CSS3", src: "/tech-logo/CSS3.png" },
  { name: "MySQL", src: "/tech-logo/mysql.svg" },
  { name: "Postgresql", src: "/tech-logo/Postgresql.png" },
  { name: "RabbitMQ", src: "/tech-logo/Rabbitmq.png" },
  { name: "Redis", src: "/tech-logo/Redis.png" },
  { name: "TypeScript", src: "/tech-logo/Typescript.png" },
  { name: "Javascript", src: "/tech-logo/Javascript.png" },
  { name: "React", src: "/tech-logo/React.png" },
  { name: "Vue", src: "/tech-logo/vuejs.png" },
  { name: "Git", src: "/tech-logo/git.png" },
  { name: "Node", src: "/tech-logo/node.png" },
  { name: "PHP", src: "/tech-logo/php.png" },
  { name: "Laravel", src: "/tech-logo/Laravel.png" },
  { name: "Next.js", src: "/tech-logo/nextjs.png" },
  { name: "Go", src: "/tech-logo/Go.png" },
  { name: "CSS3", src: "/tech-logo/CSS3.png" },
  { name: "MySQL", src: "/tech-logo/mysql.svg" },
  { name: "Postgresql", src: "/tech-logo/Postgresql.png" },
  { name: "RabbitMQ", src: "/tech-logo/Rabbitmq.png" },
  { name: "Redis", src: "/tech-logo/Redis.png" },
];

export default function Technology() {
    return (
        <div className={styles.bannerContainer}>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {techLogos.map((tech, index) => (
              <div className={styles.slide} key={index}>
                <Image src={tech.src} alt={tech.name} width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
        </div>
      );
}
