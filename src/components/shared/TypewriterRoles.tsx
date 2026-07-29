import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import styles from './TypewriterRoles.module.css'

const EMPTY_ROLES = ['']

interface TypewriterRolesProps {
  roles: string[]
  prefix?: string
  className?: string
  typeSpeedMs?: number
  eraseSpeedMs?: number
  holdMs?: number
}

export function TypewriterRoles({
  roles,
  prefix = 'I am',
  className,
  typeSpeedMs = 62,
  eraseSpeedMs = 40,
  holdMs = 1600,
}: TypewriterRolesProps) {
  const reduce = useReducedMotion()
  const list = roles.length > 0 ? roles : EMPTY_ROLES
  const [roleIndex, setRoleIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing'>('typing')

  useEffect(() => {
    if (reduce) {
      setDisplay(list[0] ?? '')
      return
    }

    const current = list[roleIndex] ?? ''

    if (phase === 'typing') {
      if (display.length >= current.length) {
        setPhase('holding')
        return
      }
      const t = window.setTimeout(() => {
        setDisplay(current.slice(0, display.length + 1))
      }, typeSpeedMs)
      return () => window.clearTimeout(t)
    }

    if (phase === 'holding') {
      const t = window.setTimeout(() => setPhase('erasing'), holdMs)
      return () => window.clearTimeout(t)
    }

    if (display.length === 0) {
      const t = window.setTimeout(() => {
        setRoleIndex((i) => (i + 1) % list.length)
        setPhase('typing')
      }, 200)
      return () => window.clearTimeout(t)
    }

    const t = window.setTimeout(() => {
      setDisplay((d) => d.slice(0, -1))
    }, eraseSpeedMs)
    return () => window.clearTimeout(t)
  }, [display, phase, roleIndex, reduce, list, typeSpeedMs, eraseSpeedMs, holdMs])

  const srText = `${prefix} ${list.join(', ')}`

  return (
    <p className={[styles.root, className].filter(Boolean).join(' ')}>
      <span className={styles.prefix}>{prefix}</span>{' '}
      <span className={styles.role} aria-hidden="true">
        {display}
        {!reduce && <span className={styles.caret} />}
      </span>
      <span className={styles.srOnly}>{srText}</span>
    </p>
  )
}
