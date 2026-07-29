import { useMemo, useState } from 'react'
import { getAllProjects, getCategories, type ProjectCategory } from '../data/projects'
import { ProjectGrid } from '../components/projects/ProjectGrid'
import { SectionReveal } from '../components/shared/SectionReveal'
import styles from './Projects.module.css'

export function Projects() {
  const all = getAllProjects()
  const categories = getCategories()
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')

  const visible = useMemo(
    () => (filter === 'All' ? all : all.filter((p) => p.category === filter)),
    [all, filter],
  )

  return (
    <div className="page">
      <div className="container">
        <SectionReveal>
          <div className="section-head">
            <p className="section-eyebrow">Portfolio</p>
            <h1 className="section-title">All projects</h1>
            <p className="section-lead">
              {all.length} curated projects across forecasting, agentic AI, healthcare, quant research, and full-stack products.
            </p>
          </div>
        </SectionReveal>

        <div className={styles.filters} role="tablist" aria-label="Filter by category">
          <button
            type="button"
            className={`${styles.chip} ${filter === 'All' ? styles.chipActive : ''}`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.chip} ${filter === category ? styles.chipActive : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ProjectGrid projects={visible} />
      </div>
    </div>
  )
}
