import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import styles from './MaskedPhraseReel.module.css'

interface MaskedPhraseReelProps {
  phrases: string[]
  holdMs?: number
  className?: string
}

export function MaskedPhraseReel({
  phrases,
  holdMs = 2400,
  className,
}: MaskedPhraseReelProps) {
  const reduce = useReducedMotion()
  const list = phrases.length > 0 ? phrases : ['']
  const [index, setIndex] = useState(0)
  const [underlineWide, setUnderlineWide] = useState(false)

  useEffect(() => {
    if (reduce || list.length <= 1) return

    let widenTimer: number | undefined
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % list.length)
      setUnderlineWide(true)
      window.clearTimeout(widenTimer)
      widenTimer = window.setTimeout(() => setUnderlineWide(false), 520)
    }, holdMs)

    return () => {
      window.clearInterval(t)
      window.clearTimeout(widenTimer)
    }
  }, [reduce, list.length, holdMs])

  const current = list[index] ?? ''

  return (
    <div className={[styles.reel, className].filter(Boolean).join(' ')}>
      <div className={styles.mask} aria-live="polite" aria-atomic="true">
        {reduce ? (
          <p className={styles.phrase}>{list[0]}</p>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={current}
              className={styles.phrase}
              initial={{ y: '115%', opacity: 0, filter: 'blur(6px)' }}
              animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: '-110%', opacity: 0, filter: 'blur(5px)' }}
              transition={{
                y: { type: 'spring', stiffness: 120, damping: 22, mass: 0.85 },
                opacity: { duration: 0.35 },
                filter: { duration: 0.35 },
              }}
            >
              {current}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
      <span
        className={[styles.underline, underlineWide ? styles.underlinePulse : '']
          .filter(Boolean)
          .join(' ')}
        aria-hidden
      />
      <span className={styles.srOnly}>Focus areas: {list.join(', ')}</span>
    </div>
  )
}
