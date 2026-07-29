import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import { SectionReveal } from '../shared/SectionReveal'
import styles from './AboutSnapshot.module.css'

export function AboutSnapshot() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <SectionReveal>
          <div className={styles.panel}>
            <p className="section-eyebrow">About</p>
            <h2 className="section-title">From raw data to deployable experience</h2>
            <p className={styles.copy}>
              Forecasting systems, agentic AI, healthcare analytics, and full-stack data products —
              built with problem framing, technical rigor, and outcomes you can demo. Client work
              like the live hospital site sits alongside research platforms on GitHub.
            </p>
            <ul className={styles.focus}>
              {site.aboutFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-ghost">
              More about me
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
