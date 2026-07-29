import type { Project } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import styles from './ProjectGrid.module.css'

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  )
}
