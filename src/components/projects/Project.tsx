import React from 'react'
import styles from './projects.module.css'
interface IProps {
    projectName: string,
    projectDate: Date | string,
    projectDescription: string,
    projectImage: string,
    projectLink: string
}

const Project = ({ projectName, projectDate, projectDescription, projectImage, projectLink }: IProps) => {
    return (
        <>
            <div className={`${styles.project}`}>

                <img
                    className={`${styles['project-img']}`}
                    src={projectImage}
                    alt={projectName}
                    onClick={() => window.open(projectLink, "_blank")}
                />
                <div className={`${styles['project-info']}`}>
                    <h1 className={`${styles.name}`}>{projectName}</h1>
                    <h3 className={`${styles.position}`}>{projectDate.toString()}</h3>
                    <h4 className={`${styles.about}`}>{projectDescription}</h4>
                    <a href="#contact" className={`${styles['contact-project']}`}>
                        <span>Like</span>
                    </a>
                    <span>Like Counter: 1</span>
                </div>
            </div>
        </>
    )
}

export default Project