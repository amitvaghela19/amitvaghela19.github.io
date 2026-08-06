import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import {
  certificateSrc,
  isImageCertificate,
  isPdfCertificate,
  type Certificate,
} from '../../data/certificates'
import styles from './CertificateModal.module.css'

interface CertificateModalProps {
  certificate: Certificate
  onClose: () => void
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const src = certificateSrc(certificate.image)
  const isPdf = isPdfCertificate(certificate.image)
  const isImage = isImageCertificate(certificate.image)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div className={styles.backdrop} role="presentation" onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            {certificate.title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            aria-label="Close certificate"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        <div className={styles.frame}>
          {isPdf ? (
            <iframe src={src} title={certificate.title} className={styles.pdf} />
          ) : isImage ? (
            <img src={src} alt={certificate.title} className={styles.image} />
          ) : (
            <p className={styles.unsupported}>
              Unsupported file type. Use PDF, PNG, JPEG, or JPG.
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
