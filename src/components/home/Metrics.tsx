import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { site } from '../../data/site'
import { SectionReveal } from '../shared/SectionReveal'
import styles from './Metrics.module.css'

function parseMetricValue(raw: string): { target: number; suffix: string } | null {
  const match = raw.match(/^(\d+)(.*)$/)
  if (!match) return null
  return { target: Number(match[1]), suffix: match[2] ?? '' }
}

function MetricValue({ value }: { value: string }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const parsed = parseMetricValue(value)
  const [display, setDisplay] = useState(() =>
    reduce || !parsed ? value : `0${parsed.suffix}`,
  )

  useEffect(() => {
    const data = parseMetricValue(value)
    if (!data || reduce || !inView) {
      if (reduce) setDisplay(value)
      return
    }

    const duration = 1100
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      const current = Math.round(data.target * eased)
      setDisplay(`${current}${data.suffix}`)
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value])

  return (
    <p ref={ref} className={styles.value}>
      {display}
    </p>
  )
}

export function Metrics() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionReveal>
          <div className={styles.grid}>
            {site.metrics.map((metric) => (
              <div key={metric.label} className={styles.item}>
                <MetricValue value={metric.value} />
                <p className={styles.label}>{metric.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
