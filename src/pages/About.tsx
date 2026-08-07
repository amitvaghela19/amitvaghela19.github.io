import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/site'
import { SectionReveal } from '../components/shared/SectionReveal'
import { TypewriterRoles } from '../components/shared/TypewriterRoles'
import { GithubIcon, LinkedinIcon } from '../components/shared/SocialIcons'
import styles from './About.module.css'

const aboutGridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const aboutCardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
      delayChildren: 0.12,
      staggerChildren: 0.045,
    },
  },
}

const aboutItemVariants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
}

export function About() {
  const reduce = useReducedMotion()

  return (
    <div className="page">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.intro}>
          <motion.div
            className={styles.photoWrap}
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : {
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                  }
            }
            transition={
              reduce
                ? { duration: 0.5, ease: 'easeOut' }
                : {
                    opacity: { duration: 0.5, ease: 'easeOut' },
                    scale: { duration: 0.5, ease: 'easeOut' },
                    y: {
                      duration: 5.5,
                      delay: 0.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }
            }
          >
            <div className={styles.photoRing}>
              <img
                src={site.profileImage}
                alt={`${site.name} — professional headshot`}
                className={styles.photo}
              />
            </div>
            <div className={styles.glow} aria-hidden />
          </motion.div>

          <div className={styles.copyBlock}>
            <motion.p
              className="section-eyebrow"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              About
            </motion.p>
            <motion.h1
              className="section-title"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {site.name}
            </motion.h1>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <TypewriterRoles roles={site.roles} className={styles.role} />
            </motion.div>
            <motion.p
              className={styles.copy}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              I turn complex data into clear forecasts, dashboards, and AI-assisted insights that
              stakeholders can act on. The work centers on leakage-safe time series analysis,
              explainable healthcare analytics, brand intelligence workflows, and reporting that
              connects the numbers to the business decision.
            </motion.p>
            <motion.p
              className={styles.copy}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              Alongside GitHub analytics projects, I deliver client-facing work such as the live
              Shivam Children Hospital website — taking ideas from brief to a polished public site.
            </motion.p>

            <motion.ul
              className={styles.focus}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
            >
              {site.aboutFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </motion.ul>

            <motion.div
              className={styles.actions}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
            >
              <Link to="/projects" className="btn btn-primary">
                See projects
              </Link>
              <Link to="/resume" className="btn btn-ghost">
                Resume
              </Link>
              <Link to="/certifications" className="btn btn-ghost">
                Certificates
              </Link>
              <div className={styles.social}>
                <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className={styles.capabilitiesHead}>
          <SectionReveal>
            <p className="section-eyebrow">Capabilities</p>
            <h2 className="section-title">What I bring</h2>
          </SectionReveal>
        </div>

        <motion.div
          className={styles.grid}
          variants={reduce ? undefined : aboutGridVariants}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
        >
          {site.capabilities.map((group) => (
            <motion.article
              key={group.title}
              className={styles.card}
              variants={reduce ? undefined : aboutCardVariants}
            >
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) =>
                  reduce ? (
                    <li key={item}>{item}</li>
                  ) : (
                    <motion.li key={item} variants={aboutItemVariants}>
                      {item}
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
