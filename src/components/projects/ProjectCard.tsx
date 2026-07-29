import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'
import { GithubIcon } from '../shared/SocialIcons'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
    >
      <Link to={`/projects/${project.slug}`} className={styles.media}>
        <img src={project.image} alt="" loading="lazy" />
        <span className={`tag tag-accent ${styles.category}`}>{project.category}</span>
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className={styles.problem}>{project.problem}</p>
        <div className={styles.tags}>
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
        <ul className={styles.highlights}>
          {project.highlights.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link to={`/projects/${project.slug}`} className={styles.detail}>
            Case study <ArrowUpRight size={16} />
          </Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label="Live demo">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
