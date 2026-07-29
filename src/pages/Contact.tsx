import { Mail } from 'lucide-react'
import { site } from '../data/site'
import { SectionReveal } from '../components/shared/SectionReveal'
import { GithubIcon, LinkedinIcon } from '../components/shared/SocialIcons'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <div className="page">
      <div className={`container ${styles.wrap}`}>
        <SectionReveal>
          <p className="section-eyebrow">Contact</p>
          <h1 className="section-title">Let’s connect</h1>
          <p className="section-lead">
            For roles, collaborations, or freelance web/data product work — reach out directly.
          </p>

          <div className={styles.cards}>
            <a className={styles.card} href={`mailto:${site.email}`}>
              <Mail size={22} />
              <div>
                <h2>Email</h2>
                <p>{site.email}</p>
              </div>
            </a>
            <a className={styles.card} href={site.github} target="_blank" rel="noreferrer">
              <GithubIcon size={22} />
              <div>
                <h2>GitHub</h2>
                <p>amitvaghela19</p>
              </div>
            </a>
            <a className={styles.card} href={site.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={22} />
              <div>
                <h2>LinkedIn</h2>
                <p>Amit Vaghela</p>
              </div>
            </a>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
