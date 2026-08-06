export interface Certificate {
  id: string
  title: string
  image: string
}

/** Display title from a certificate filename (extension stripped; _ and - → spaces). */
export function filenameToTitle(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, '')
  return base.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
}

const PDF_EXT = /\.pdf$/i
const IMAGE_EXT = /\.(png|jpe?g|webp|gif|svg)$/i

export function isPdfCertificate(path: string): boolean {
  return PDF_EXT.test(path)
}

export function isImageCertificate(path: string): boolean {
  return IMAGE_EXT.test(path)
}

/** Safe URL for browser fetch (handles spaces in filenames). */
export function certificateSrc(path: string): string {
  return encodeURI(path)
}

/**
 * Ordered list: Google Data Analytics → Advanced → AI Certificate → SQL Intermediate/Basic
 * → ML → IT / construction tools → remaining credentials.
 */
export const certificates: Certificate[] = [
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics',
    image: '/certificates/Google_Data_Analytics.pdf',
  },
  {
    id: 'google-advanced-data-analytics',
    title: 'Google Advanced Data Analytics',
    image: '/certificates/Google Advanced data analytics.pdf',
  },
  {
    id: 'google-ai-certificate',
    title: 'Google AI Certificate',
    image: '/certificates/Google AI Certificate.pdf',
  },
  {
    id: 'sql-intermediate-hackerrank',
    title: 'SQL (Intermediate) — HackerRank',
    image: '/certificates/SQL (Intermediate)- HackerRank.pdf',
  },
  {
    id: 'sql-basic-hackerrank',
    title: 'SQL (Basic) — HackerRank',
    image: '/certificates/SQL (Basic)- HackerRank.pdf',
  },
  // ML
  {
    id: 'nuts-and-bolts-of-machine-learning',
    title: 'Nuts and Bolts of Machine Learning',
    image: '/certificates/Nuts and Bolts of Machine Learning.pdf',
  },
  {
    id: 'google-regression-analysis',
    title: 'Google Regression Analysis',
    image: '/certificates/Google Regression Analysis.pdf',
  },
  {
    id: 'introduction-to-data-analysis-using-python',
    title: 'Introduction to Data Analysis Using Python',
    image: '/certificates/Introduction to Data Analysis Using Python.pdf',
  },
  {
    id: 'go-beyond-the-number-certificate',
    title: 'Go Beyond the Numbers',
    image: '/certificates/Go Beyond the number certificate.pdf',
  },
  // IT / construction tools
  {
    id: 'autodesk-autocad-professional',
    title: 'Autodesk AutoCAD Professional',
    image: '/certificates/Autodesk_Autocad_Professional.pdf',
  },
  {
    id: 'autodesk-revit-professional',
    title: 'Autodesk Revit Professional',
    image: '/certificates/Autodeskt_Revit_Professional.pdf',
  },
  {
    id: 'procore-gc',
    title: 'Procore GC',
    image: '/certificates/Procore_GC.pdf',
  },
  {
    id: 'procore-pm',
    title: 'Procore PM',
    image: '/certificates/Procore_PM.pdf',
  },
  {
    id: 'leed-green-associate',
    title: 'LEED Green Associate',
    image: '/certificates/LEED_Green_Associate.pdf',
  },
  {
    id: 'get-the-most-out-of-jira',
    title: 'Get the Most Out of Jira',
    image: '/certificates/Get the most out of Jira.pdf',
  },
  {
    id: 'get-the-most-out-of-confluence',
    title: 'Get the Most Out of Confluence',
    image: '/certificates/Get the most out of Confluence.pdf',
  },
  // Remaining
  {
    id: 'google-data-analytics-capstone',
    title: 'Google Data Analytics Capstone',
    image: '/certificates/Google_Data_Analytics_Capstone.pdf',
  },
  {
    id: 'google-ai-fundamentals',
    title: 'Google AI Fundamentals',
    image: '/certificates/Google AI Fundamentals.pdf',
  },
  {
    id: 'google-ai-for-data-analysis',
    title: 'Google AI for Data Analysis',
    image: '/certificates/Google AI for Data Analysis.pdf',
  },
  {
    id: 'google-ai-for-research-and-insights',
    title: 'Google AI for Research and Insights',
    image: '/certificates/Google AI for Research and Insights.pdf',
  },
  {
    id: 'google-ai-for-brainstorming-and-planning',
    title: 'Google AI for Brainstorming and Planning',
    image: '/certificates/Google AI for Brainstorming and Planning.pdf',
  },
  {
    id: 'google-ai-for-content-creation',
    title: 'Google AI for Content Creation',
    image: '/certificates/Google AI for Content Creation.pdf',
  },
  {
    id: 'google-ai-for-writing-and-communicating',
    title: 'Google AI for Writing and Communicating',
    image: '/certificates/Google AI for Writing and Communicating.pdf',
  },
  {
    id: 'accelerate-your-job-search-with-ai',
    title: 'Accelerate Your Job Search with AI',
    image: '/certificates/Accelerate your job search with AI.pdf',
  },
]
