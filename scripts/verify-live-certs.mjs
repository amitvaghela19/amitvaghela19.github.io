const urls = [
  'https://amitvaghela19.github.io/',
  'https://amitvaghela19.github.io/assets/index-xV-2t5o4.js',
  'https://amitvaghela19.github.io/certificates/Google_Data_Analytics.pdf',
  'https://amitvaghela19.github.io/certificates/SQL%20(Basic)-%20HackerRank.pdf',
  'https://amitvaghela19.github.io/404.html',
]

for (const u of urls) {
  const r = await fetch(u, { redirect: 'follow' })
  const buf = await r.arrayBuffer()
  console.log(r.status, u, `bytes=${buf.byteLength}`, `ct=${r.headers.get('content-type') || ''}`)
}

const index = await (await fetch('https://amitvaghela19.github.io/')).text()
const assetMatch = index.match(/src="(\/assets\/[^"]+\.js)"/)
console.log('live asset', assetMatch?.[1] ?? 'none')

if (assetMatch) {
  const js = await (await fetch(`https://amitvaghela19.github.io${assetMatch[1]}`)).text()
  console.log('js has Certifications?', js.includes('Certifications'))
  console.log('js has Google Data Analytics?', js.includes('Google Data Analytics'))
  console.log('js has Accelerate Your Job Search?', js.includes('Accelerate Your Job Search with AI'))
  const titles = [
    'Google Data Analytics',
    'Google Advanced Data Analytics',
    'Google AI Certificate',
    'SQL (Intermediate)',
    'SQL (Basic)',
    'Nuts and Bolts of Machine Learning',
    'Google Regression Analysis',
    'Introduction to Data Analysis Using Python',
    'Go Beyond the Numbers',
    'Autodesk AutoCAD Professional',
    'Autodesk Revit Professional',
    'Procore GC',
    'Procore PM',
    'LEED Green Associate',
    'Get the Most Out of Jira',
    'Get the Most Out of Confluence',
    'Google Data Analytics Capstone',
    'Google AI Fundamentals',
    'Google AI for Data Analysis',
    'Google AI for Research and Insights',
    'Google AI for Brainstorming and Planning',
    'Google AI for Content Creation',
    'Google AI for Writing and Communicating',
    'Accelerate Your Job Search with AI',
  ]
  const missing = titles.filter((t) => !js.includes(t))
  console.log('titles found', titles.length - missing.length, '/', titles.length)
  if (missing.length) console.log('missing', missing)
}
