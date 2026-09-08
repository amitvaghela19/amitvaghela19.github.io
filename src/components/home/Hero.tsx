import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../data/site'
import { TypewriterRoles } from '../shared/TypewriterRoles'
import styles from './Hero.module.css'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={14} /> Portfolio
          </motion.p>
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {site.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <TypewriterRoles roles={site.roles} className={styles.role} />
          </motion.div>
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            {site.tagline}
          </motion.p>
          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View projects <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn btn-ghost">
              About
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.94 }}
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
              ? { duration: 0.55, delay: 0.15, ease: 'easeOut' }
              : {
                  opacity: { duration: 0.55, delay: 0.15, ease: 'easeOut' },
                  scale: { duration: 0.55, delay: 0.15, ease: 'easeOut' },
                  y: {
                    duration: 5.5,
                    delay: 0.7,
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
        </motion.div>
      </div>
      <div className={styles.glow} aria-hidden />
    </section>
  )
}
