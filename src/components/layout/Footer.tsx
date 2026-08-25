import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../shared/SocialIcons'
import { site } from '../../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>{site.name}</p>
          <p className={styles.role}>{site.role}</p>
        </div>
        <div className={styles.links}>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.social}>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className={`container ${styles.copy}`}>
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  )
}
