import styles from "./Portfolio.module.css";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const PortfolioPage = () => {
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
