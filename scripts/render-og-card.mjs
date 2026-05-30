import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, '..')
const source = path.join(projectRoot, 'public', 'og-atlas-background.png')
const output = path.join(projectRoot, 'public', 'og-card.png')

const width = 1200
const height = 630

const overlay = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="leftShade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#0c0b09" stop-opacity="0.98"/>
        <stop offset="58%" stop-color="#0c0b09" stop-opacity="0.88"/>
        <stop offset="100%" stop-color="#0c0b09" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="goldRule" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f6c453" stop-opacity="1"/>
        <stop offset="100%" stop-color="#f6c453" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#leftShade)"/>
    <rect x="62" y="72" width="92" height="4" fill="url(#goldRule)"/>

    <text x="62" y="119" fill="#f6c453" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="700">
      VINCENT KINNEY
    </text>
    <text x="62" y="184" fill="#f7f0df" font-family="Georgia, Times New Roman, serif" font-size="64" font-weight="700">
      <tspan x="62" dy="0">A dossier wall</tspan>
      <tspan x="62" dy="67">for the entire</tspan>
      <tspan x="62" dy="67">build surface.</tspan>
    </text>

    <text x="62" y="422" fill="#d8cdb9" font-family="Segoe UI, Arial, sans-serif" font-size="24">
      AI-native product architecture, public proof, and app rescue audits.
    </text>

    <g transform="translate(62 478)">
      <text x="0" y="0" fill="#f6c453" font-family="Georgia, Times New Roman, serif" font-size="42" font-weight="700">131</text>
      <text x="88" y="0" fill="#f6c453" font-family="Georgia, Times New Roman, serif" font-size="42" font-weight="700">98</text>
      <text x="166" y="0" fill="#f6c453" font-family="Georgia, Times New Roman, serif" font-size="42" font-weight="700">9</text>
      <text x="0" y="31" fill="#bdb3a1" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700">PROJECT DOSSIERS</text>
      <text x="165" y="31" fill="#bdb3a1" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700">PUBLIC REPOS</text>
      <text x="292" y="31" fill="#bdb3a1" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700">PRODUCT LANES</text>
    </g>

    <text x="62" y="584" fill="#64d2ff" font-family="Consolas, Cascadia Mono, monospace" font-size="18" font-weight="700">
      vpkdevs.github.io/vincent-kinney-portfolio
    </text>
  </svg>
`)

await sharp(source)
  .resize(width, height, { fit: 'cover', position: 'centre' })
  .composite([{ input: overlay }])
  .png({ compressionLevel: 9 })
  .toFile(output)

console.log(`Wrote ${path.relative(projectRoot, output)}`)
