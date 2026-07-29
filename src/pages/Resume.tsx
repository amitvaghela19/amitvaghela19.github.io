import { Download, FileText } from 'lucide-react'
import { site } from '../data/site'
import { SectionReveal } from '../components/shared/SectionReveal'
import styles from './Resume.module.css'

export function Resume() {
  return (
    <div className="page">
      <div className={`container ${styles.wrap}`}>
        <SectionReveal>
          <p className="section-eyebrow">Resume</p>
          <h1 className="section-title">Experience snapshot</h1>
          <p className="section-lead">
            Download the PDF resume, or scan the positioning below. Replace{' '}
            <code>public/resume.pdf</code> anytime to update the downloadable file.
          </p>

          <div className={styles.panel}>
            <div className={styles.icon}>
              <FileText size={28} />
            </div>
            <div>
              <h2>{site.name}</h2>
              <p>{site.role}</p>
              <p className={styles.hint}>
                Focus: forecasting systems · agentic AI · healthcare & retail analytics · full-stack data products
              </p>
            </div>
            <a className="btn btn-primary" href={site.resumePath} download>
              <Download size={16} /> Download PDF
            </a>
          </div>

          <ul className={styles.bullets}>
            <li>Builds leakage-safe forecasting and hybrid ML pipelines for retail and equities.</li>
            <li>Ships agentic brand-intelligence and document workflows with RAG and LangGraph.</li>
            <li>Delivers explainable healthcare risk analytics with RBAC dashboards.</li>
            <li>Owns full-stack surfaces (React, FastAPI, Streamlit) for ops and market intelligence.</li>
            <li>Freelance delivery experience with a live hospital website in production.</li>
          </ul>
        </SectionReveal>
      </div>
    </div>
  )
}
