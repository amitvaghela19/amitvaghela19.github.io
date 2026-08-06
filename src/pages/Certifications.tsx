import { useState } from 'react'
import { Award } from 'lucide-react'
import { certificates, type Certificate } from '../data/certificates'
import { SectionReveal } from '../components/shared/SectionReveal'
import { CertificateModal } from '../components/shared/CertificateModal'
import styles from './Certifications.module.css'

export function Certifications() {
  const [active, setActive] = useState<Certificate | null>(null)

  return (
    <div className="page">
      <div className={`container ${styles.wrap}`}>
        <SectionReveal>
          <p className="section-eyebrow">Credentials</p>
          <h1 className="section-title">Certifications</h1>
          <p className={`section-lead ${styles.lead}`}>
            {certificates.length > 0
              ? `${certificates.length} certificates — click a name to view the credential.`
              : 'Add certificate files (PDF, PNG, JPEG, JPG) to public/certificates/ to populate this list.'}
          </p>
        </SectionReveal>

        {certificates.length === 0 ? (
          <SectionReveal>
            <div className={styles.empty}>
              <Award size={28} />
              <p>No certificates uploaded yet.</p>
            </div>
          </SectionReveal>
        ) : (
          <SectionReveal>
            <ul className={styles.list}>
              {certificates.map((cert) => (
                <li key={cert.id}>
                  <button
                    type="button"
                    className={styles.row}
                    onClick={() => setActive(cert)}
                  >
                    <span className={styles.icon} aria-hidden>
                      <Award size={18} />
                    </span>
                    <span className={styles.name}>{cert.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </SectionReveal>
        )}
      </div>

      {active && (
        <CertificateModal certificate={active} onClose={() => setActive(null)} />
      )}
    </div>
  )
}
