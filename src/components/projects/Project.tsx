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
                    <span className=''>Like Counter: 1</span>
                    <input
                        type="button"
                        value='Like'
                        id={projectName}
                        className='bg-purple-900 opacity-70 px-2 py-1 rounded-lg border border-transparent
                        active:bg-transparent active:border-purple-900'
                        onClick={e => console.log(e.target)}
                    />
                </div>
            </div>
        </>
    )
}

export default Project