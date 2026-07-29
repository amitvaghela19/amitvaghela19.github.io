import { site } from '../../data/site'
import { SectionReveal } from '../shared/SectionReveal'
import styles from './WhatIBuild.module.css'

export function WhatIBuild() {
  return (
    <section className="section">
      <div className="container">
        <SectionReveal>
          <div className="section-head">
            <p className="section-eyebrow">Capabilities</p>
            <h2 className="section-title">What I build</h2>
            <p className="section-lead">
              Skills grouped by the systems I ship — not a logo wall.
            </p>
          </div>
        </SectionReveal>
        <div className={styles.grid}>
          {site.capabilities.map((group, i) => (
            <SectionReveal key={group.title} delay={i * 0.04}>
              <article className={styles.card}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
