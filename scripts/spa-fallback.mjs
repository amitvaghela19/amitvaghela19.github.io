import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve('dist')
const indexHtml = resolve(dist, 'index.html')
const fallback = resolve(dist, '404.html')

if (!existsSync(indexHtml)) {
  console.error('dist/index.html missing — build before spa-fallback')
  process.exit(1)
}

copyFileSync(indexHtml, fallback)
console.log('Created dist/404.html for GitHub Pages SPA routes')
