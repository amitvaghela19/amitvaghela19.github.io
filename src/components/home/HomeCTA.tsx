import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import { SectionReveal } from '../shared/SectionReveal'
import styles from './HomeCTA.module.css'

export function HomeCTA() {
  return (
    <section className="section">
      <div className="container">
        <SectionReveal>
          <div className={styles.panel}>
            <div>
              <h2 className={styles.title}>Let’s build the next data product</h2>
              <p className={styles.lead}>
                Open to ML engineering, analytics, and full-stack AI roles — and selective freelance delivery.
              </p>
            </div>
            <div className={styles.actions}>
              <Link to="/contact" className="btn btn-primary">
                Get in touch
              </Link>
              <a href={site.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
