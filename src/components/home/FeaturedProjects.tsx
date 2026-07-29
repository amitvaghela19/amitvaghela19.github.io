import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '../../data/projects'
import { ProjectGrid } from '../projects/ProjectGrid'
import { SectionReveal } from '../shared/SectionReveal'
import styles from './FeaturedProjects.module.css'

export function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="section">
      <div className="container">
        <SectionReveal>
          <div className={`section-head ${styles.head}`}>
            <div>
              <p className="section-eyebrow">Selected work</p>
              <h2 className="section-title">Featured projects</h2>
              <p className="section-lead">
                Six recruiter-facing platforms spanning freelance delivery, forecasting,
                healthcare ML, agentic AI, and full-stack intelligence products.
              </p>
            </div>
            <Link to="/projects" className="btn btn-ghost">
              All projects <ArrowRight size={16} />
            </Link>
          </div>
        </SectionReveal>
        <ProjectGrid projects={featured} />
      </div>
    </section>
  )
}
