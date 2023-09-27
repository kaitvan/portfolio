import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserGroup,
  faLink,
  faHelmetSafety,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./ProjectCard.module.css";
import DinoProject from "../assets/projects/dino-kennel.png";

const ProjectCard = ({ project }) => {
  const links = (
    <>
      <a href={project.url} target="blank">
        <FontAwesomeIcon icon={faLink} className={styles.icon} />
      </a>
      <a href={project.githubUrl} target="blank">
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
    </>
  );

  const underConstruction = (
    <div className={styles.label}>
      <a href={project.githubUrl} target="blank">
        Under Construction
      </a>
    </div>
  );

  return (
    <div className={styles.card}>
      {/* <img className={styles["card-image"]} src={DinoProject} /> */}
      <div className={styles.content}>
        <div>
          <div className={styles.title}>
            <h2>{project.title}</h2>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div className={styles["btn-container"]}>
          {!project.inProgress && links}
          {project.inProgress && underConstruction}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
