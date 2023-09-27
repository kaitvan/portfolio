import styles from "./Portfolio.module.css";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const PortfolioPage = () => {
  const project = {
    title: "Dino Kennel",
    screenshot: "dino-kennel.png",
    description:
      "This is a single-page application with dynamic features. Similar to Tamagotchi digital pets, the user can care for dinos in the kennel by feeding them, petting them, and sending them on adventures!",
    technologiesUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://dino-kennel-kaitvan.netlify.app/",
    githubUrl: "https://github.com/kaitvan/dino-kennel",
    groupProject: false,
    inProgress: true,
    isReady: true,
  };

  return (
    <>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles.projects}>
        {projects.map(
          (project) =>
            project.isReady && (
              <ProjectCard project={project} key={project.id} />
            )
        )}
      </div>
    </>
  );
};

export default PortfolioPage;
