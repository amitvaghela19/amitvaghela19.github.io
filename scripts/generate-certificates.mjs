import { readdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const certDir = join(root, 'public', 'certificates')
const outFile = join(root, 'src', 'data', 'certificates.ts')

const MEDIA_EXT = /\.(png|jpe?g|webp|gif|svg|pdf)$/i

/** Preferred display order (match filename loosely). Unlisted files append alphabetically. */
const ORDER = [
  'Google_Data_Analytics.pdf',
  'Google Advanced data analytics.pdf',
  'Google AI Certificate.pdf',
  'SQL (Intermediate)- HackerRank.pdf',
  'SQL (Basic)- HackerRank.pdf',
  // ML
  'Nuts and Bolts of Machine Learning.pdf',
  'Google Regression Analysis.pdf',
  'Introduction to Data Analysis Using Python.pdf',
  'Go Beyond the number certificate.pdf',
  // IT
  'Autodesk_Autocad_Professional.pdf',
  'Autodeskt_Revit_Professional.pdf',
  'Procore_GC.pdf',
  'Procore_PM.pdf',
  'LEED_Green_Associate.pdf',
  'Get the most out of Jira.pdf',
  'Get the most out of Confluence.pdf',
]

const TITLE_OVERRIDES = {
  'Google Advanced data analytics.pdf': 'Google Advanced Data Analytics',
  'SQL (Intermediate)- HackerRank.pdf': 'SQL (Intermediate) — HackerRank',
  'SQL (Basic)- HackerRank.pdf': 'SQL (Basic) — HackerRank',
  'Go Beyond the number certificate.pdf': 'Go Beyond the Numbers',
  'Autodesk_Autocad_Professional.pdf': 'Autodesk AutoCAD Professional',
  'Autodeskt_Revit_Professional.pdf': 'Autodesk Revit Professional',
  'Get the most out of Jira.pdf': 'Get the Most Out of Jira',
  'Get the most out of Confluence.pdf': 'Get the Most Out of Confluence',
  'Accelerate your job search with AI.pdf': 'Accelerate Your Job Search with AI',
}

function filenameToTitle(filename) {
  if (TITLE_OVERRIDES[filename]) return TITLE_OVERRIDES[filename]
  const base = filename.replace(/\.[^.]+$/, '')
  return base.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
}

function slugify(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function orderIndex(file) {
  const i = ORDER.findIndex((o) => o.toLowerCase() === file.toLowerCase())
  return i === -1 ? ORDER.length + 1 : i
}

let files = []
try {
  files = readdirSync(certDir).filter((f) => MEDIA_EXT.test(f) && !f.startsWith('.'))
} catch {
  files = []
}

files.sort((a, b) => {
  const diff = orderIndex(a) - orderIndex(b)
  if (diff !== 0) return diff
  return filenameToTitle(a).localeCompare(filenameToTitle(b), undefined, { sensitivity: 'base' })
})

const entries = files
  .map((file) => {
    const title = filenameToTitle(file)
    const id = slugify(file)
    const image = `/certificates/${file}`
    return `  {\n    id: ${JSON.stringify(id)},\n    title: ${JSON.stringify(title)},\n    image: ${JSON.stringify(image)},\n  }`
  })
  .join(',\n')

const content = `export interface Certificate {
  id: string
  title: string
  image: string
}

/** Display title from a certificate filename (extension stripped; _ and - → spaces). */
export function filenameToTitle(filename: string): string {
  const base = filename.replace(/\\.[^.]+$/, '')
  return base.replace(/[_-]+/g, ' ').replace(/\\s+/g, ' ').trim()
}

export function isPdfCertificate(path: string): boolean {
  return /\\.pdf$/i.test(path)
}

export function isImageCertificate(path: string): boolean {
  return /\\.(png|jpe?g|webp|gif|svg)$/i.test(path)
}

/** Safe URL for browser fetch (handles spaces in filenames). */
export function certificateSrc(path: string): string {
  return encodeURI(path)
}

/**
 * One entry per file in /public/certificates/.
 * Re-run \`node scripts/generate-certificates.mjs\` after adding files.
 */
export const certificates: Certificate[] = [
${entries}
]
`

writeFileSync(outFile, content, 'utf8')
console.log(`Wrote ${files.length} certificate(s) to src/data/certificates.ts`)
