import styles from "./projects.module.css";
import Project from "./Project"
import { Context } from "../../context/api.context";
import { useContext } from "react";

const Projects = () => {

  const { projects: projectsList } = useContext(Context);

  return (
    <div id="projects" className={` mx-16 ${styles['projects-container']}`}>
      <h1 className={`${styles['project-txt']}`}>Projects</h1>

      {
        projectsList.map(project => (
          <Project
            key={project.projectName}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            projectDate={project.projectDate}
            projectImage={project.projectImage}
            projectLink={project.projectLink}
          />
        ))
      }


    </div>
  );
};

export default Projects;
