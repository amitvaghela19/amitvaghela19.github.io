import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../data/site'
import { SectionReveal } from '../shared/SectionReveal'
import { MaskedPhraseReel } from '../shared/MaskedPhraseReel'
import styles from './WhatIBuild.module.css'

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
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

const itemVariants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
}

export function WhatIBuild() {
  const reduce = useReducedMotion()

  return (
    <section className="section">
      <div className="container">
        <SectionReveal>
          <div className="section-head">
            <p className="section-eyebrow">Capabilities</p>
            <h2 className="section-title">What I build</h2>
            <MaskedPhraseReel phrases={site.buildFocusPhrases} />
            <p className={`section-lead ${styles.lead}`}>
              From raw data to forecasts, dashboards, and AI-assisted decisions.
            </p>
          </div>
        </SectionReveal>
        <motion.div
          className={styles.grid}
          variants={reduce ? undefined : gridVariants}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
        >
          {site.capabilities.map((group) => (
            <motion.article
              key={group.title}
              className={styles.card}
              variants={reduce ? undefined : cardVariants}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) =>
                  reduce ? (
                    <li key={item}>{item}</li>
                  ) : (
                    <motion.li key={item} variants={itemVariants}>
                      {item}
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
