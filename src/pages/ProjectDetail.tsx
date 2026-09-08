import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getProjectBySlug, getProjectCategories } from '../data/projects'
import { SectionReveal } from '../components/shared/SectionReveal'
import { GithubIcon } from '../components/shared/SocialIcons'
import styles from './ProjectDetail.module.css'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="section-title">Project not found</h1>
          <p className="section-lead">That case study doesn’t exist in the portfolio catalog.</p>
          <Link to="/projects" className="btn btn-ghost">
            <ArrowLeft size={16} /> Back to projects
          </Link>
        </div>
      </div>
    )
  }

  const categories = getProjectCategories(project)

  return (
    <div className="page">
      <div className="container">
        <SectionReveal>
          <Link to="/projects" className={styles.back}>
            <ArrowLeft size={16} /> All projects
          </Link>
          <div className={styles.hero}>
            <div>
              <div className={styles.categoryRow}>
                {categories.map((cat, i) => (
                  <span key={cat} className={`tag ${i === 0 ? 'tag-accent' : ''}`}>
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.summary}>{project.summary}</p>
              <div className={styles.actions}>
                {project.githubUrl && (
                  <a href={project.githubUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                    <GithubIcon size={16} /> GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>
            <div className={styles.heroMedia}>
              <img src={project.image} alt="" />
            </div>
          </div>
        </SectionReveal>

        <div className={styles.grid}>
          <SectionReveal>
            <section className={styles.block}>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </section>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <section className={styles.block}>
              <h2>Goal</h2>
              <p>{project.goal}</p>
            </section>
          </SectionReveal>
        </div>

        <SectionReveal>
          <section className={`${styles.block} ${styles.toolkitBlock}`}>
            <h2>Tools / Stack / API / MCP</h2>
            <p className={styles.toolkitLead}>
              Everything used in this project, grouped for quick scanning.
            </p>
            <div className={styles.toolkitGroups}>
              {project.toolkit.map((section) => (
                <div key={section.id} className={styles.toolkitGroup}>
                  <h3>{section.label}</h3>
                  <div className={styles.tags}>
                    {section.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className={styles.block}>
            <h2>Overview</h2>
            <p>{project.details}</p>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className={styles.block}>
            <h2>Workflow / pipeline</h2>
            <ol className={styles.list}>
              {project.workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        </SectionReveal>

        <div className={styles.grid}>
          <SectionReveal>
            <section className={styles.block}>
              <h2>Key results</h2>
              <ul className={styles.list}>
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <section className={styles.block}>
              <h2>Challenges & learnings</h2>
              <ul className={styles.list}>
                {project.lessons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </SectionReveal>
        </div>

        <SectionReveal>
          <div className={styles.footerNav}>
            <Link to="/projects" className="btn btn-ghost">
              <ArrowLeft size={16} /> Back to projects
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
