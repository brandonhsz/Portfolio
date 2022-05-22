import styles from "./projects.module.css";
import Project from "./Project"
import { projectsList } from '../../data/projects.data';

const Projects = () => {
  return (
    <div id="projects" className={` ${styles['projects-container']}`}>
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
