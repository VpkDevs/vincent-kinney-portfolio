import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, '..')
const defaultSource = path.resolve(projectRoot, '..', 'PROJECTS.md')
const source = process.env.PROJECTS_REGISTRY || process.argv[2] || defaultSource
const outPath = path.join(projectRoot, 'data', 'projectAtlas.ts')

const meta = {
  ai: {
    label: 'AI Systems',
    sentenceLabel: 'AI systems',
    focus: 'LLM infrastructure, prompt systems, and agent workflows',
    role: 'AI systems work',
    audience: 'builders who need leverage from models, agents, local inference, or AI-assisted workflows',
    shipPath: 'turn the strongest workflow into a reproducible demo with a clear before/after result',
  },
  api: {
    label: 'APIs & Backend',
    sentenceLabel: 'APIs and backend',
    focus: 'Backend services, integrations, and platform infrastructure',
    role: 'backend infrastructure work',
    audience: 'products that need reliable data movement, integrations, APIs, or operational plumbing',
    shipPath: 'document the contract, add a minimal example client, and expose one useful endpoint publicly',
  },
  game: {
    label: 'Games & Interactive',
    sentenceLabel: 'games and interactive',
    focus: 'Playable systems, RPG worlds, and interactive experiments',
    role: 'interactive systems work',
    audience: 'players, worldbuilders, and creators who care about mechanics, atmosphere, and agency',
    shipPath: 'cut it down to one playable loop that can be recorded, shared, and improved from feedback',
  },
  lib: {
    label: 'Libraries',
    sentenceLabel: 'libraries',
    focus: 'Reusable packages, shared logic, and foundation code',
    role: 'reusable foundation work',
    audience: 'future Vincent projects that need shared primitives instead of one-off implementation',
    shipPath: 'publish a tiny package-style README with installation, API examples, and a first consumer project',
  },
  life: {
    label: 'Life OS',
    sentenceLabel: 'Life OS',
    focus: 'Personal systems, planning workflows, and productivity tools',
    role: 'personal operating-system work',
    audience: 'people trying to convert scattered information, plans, and habits into an actual operating cadence',
    shipPath: 'show the workflow on real data and turn the strongest repeatable routine into a template',
  },
  mobile: {
    label: 'Mobile Apps',
    sentenceLabel: 'mobile apps',
    focus: 'Cross-platform apps and companion experiences',
    role: 'mobile product work',
    audience: 'users who need a focused companion experience available away from the desktop',
    shipPath: 'ship one narrow mobile flow with screenshots, install instructions, and a clear user promise',
  },
  org: {
    label: 'Workspace Systems',
    sentenceLabel: 'workspace systems',
    focus: 'Project organization, catalogs, and operating infrastructure',
    role: 'workspace infrastructure work',
    audience: 'AI agents and humans trying to understand, prioritize, and operate a large project surface',
    shipPath: 'connect the catalog to one decision workflow: ship, monetize, archive, or improve',
  },
  tool: {
    label: 'Tools & Automation',
    sentenceLabel: 'tools and automation',
    focus: 'Developer utilities, automation, and operational helpers',
    role: 'automation tool work',
    audience: 'operators and developers who want tedious recurring tasks handled with less friction',
    shipPath: 'turn the core utility into a command, UI, or documented workflow that saves measurable time',
  },
  web: {
    label: 'Web Apps',
    sentenceLabel: 'web apps',
    focus: 'Web products, SaaS experiments, and browser experiences',
    role: 'web product work',
    audience: 'users who need a browser-accessible product with a clear landing page and practical workflow',
    shipPath: 'deploy the smallest useful version, add screenshots, and write the offer around the problem solved',
  },
}

const keywordSignals = [
  { words: ['cerebras', 'qwen', 'llama', 'model', 'models', 'inference', 'gpu'], signal: 'model infrastructure and performance experimentation' },
  { words: ['cline', 'assistant', 'agent', 'agents', 'mcp', 'prompt'], signal: 'AI-assisted development and agent workflow design' },
  { words: ['image', 'stable', 'diffusion', 'comfyui', 'video', 'voice', 'audio'], signal: 'creative generation pipelines and multimodal output' },
  { words: ['chat', 'conversation', 'bot', 'companion'], signal: 'interactive AI conversation and user-facing assistant behavior' },
  { words: ['casino', 'sweepstakes', 'deals', 'discounts', 'commerce', 'ebay', 'shop'], signal: 'commercial research, sourcing, and revenue discovery' },
  { words: ['dashboard', 'tracker', 'tracking', 'analytics', 'monitor'], signal: 'visibility, measurement, and decision support' },
  { words: ['vault', 'obsidian', 'memory', 'knowledge', 'notes'], signal: 'personal knowledge management and durable memory systems' },
  { words: ['portfolio', 'landing', 'website', 'site'], signal: 'public presentation, conversion, and trust-building' },
  { words: ['game', 'rpg', 'quest', 'story', 'narrative', 'world'], signal: 'playable narrative systems and worldbuilding' },
  { words: ['window', 'desktop', 'cli', 'automation', 'script'], signal: 'local workflow automation and desktop utility' },
  { words: ['api', 'server', 'backend', 'database', 'supabase'], signal: 'service architecture and data-backed product infrastructure' },
  { words: ['mobile', 'ios', 'android', 'expo'], signal: 'companion app UX and mobile delivery' },
]

const acronymMap = new Map([
  ['ai', 'AI'],
  ['api', 'API'],
  ['cli', 'CLI'],
  ['cms', 'CMS'],
  ['crm', 'CRM'],
  ['ios', 'iOS'],
  ['llm', 'LLM'],
  ['mcp', 'MCP'],
  ['nft', 'NFT'],
  ['os', 'OS'],
  ['pdf', 'PDF'],
  ['rpg', 'RPG'],
  ['saas', 'SaaS'],
  ['seo', 'SEO'],
  ['sql', 'SQL'],
  ['ui', 'UI'],
  ['ux', 'UX'],
  ['vr', 'VR'],
  ['webgpu', 'WebGPU'],
  ['3d', '3D'],
])

function readRegistry(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project registry not found: ${filePath}`)
  }

  const bytes = fs.readFileSync(filePath)
  const hasNullBytes = bytes.subarray(0, 200).includes(0)
  return bytes.toString(hasNullBytes ? 'utf16le' : 'utf8').replace(/^\uFEFF/, '')
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function titleize(raw) {
  const cleaned = raw
    .replace(/^web---app---/i, '')
    .replace(/^app--/i, '')
    .replace(/^app-/i, '')
    .replace(/^tool-/i, '')
    .replace(/^game-/i, '')
    .replace(/^mobile-/i, '')
    .replace(/^ai-/i, 'ai-')
    .replace(/[_]+/g, '-')

  return cleaned
    .split('-')
    .filter(Boolean)
    .map((part) => {
      const lower = part.toLowerCase()
      if (acronymMap.has(lower)) return acronymMap.get(lower)
      if (/^v\d+$/i.test(part)) return part.toUpperCase()
      if (/^\d/.test(part)) return part.toUpperCase()
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join(' ')
    .replace(/\bAnd\b/g, 'and')
}

function activeLabel(rawDate) {
  if (!rawDate || rawDate === '(no commits)') return 'Local build'
  const parsed = new Date(rawDate)
  if (Number.isNaN(parsed.getTime())) return rawDate
  return parsed.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function compactList(items) {
  if (items.length === 0) return ''
  if (items.length === 1) return items[0]
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`
}

function articleFor(label) {
  return /^[aeiou]/i.test(label) ? 'an' : 'a'
}

function inferSignals(rawName, category) {
  const haystack = `${rawName} ${category}`.toLowerCase()
  const signals = keywordSignals
    .filter((entry) => entry.words.some((word) => haystack.includes(word)))
    .map((entry) => entry.signal)

  return signals.length ? signals.slice(0, 3) : ['product exploration, implementation practice, and shipping potential']
}

function buildDescription({ name, rawName, categoryMeta, remote, lastActive }) {
  const signals = inferSignals(rawName, categoryMeta.label)
  const visibility = remote
    ? 'It already has a public repository attached, which makes it a better candidate for README cleanup, demo packaging, and portfolio proof.'
    : 'It is currently cataloged as private or local, so the first job is to verify what runs, what is valuable, and whether a public slice can be safely exposed.'

  return `${name} is part of Vincent's ${categoryMeta.role}, with catalog signals pointing toward ${compactList(signals)}. The value of this project is not just the code; it is evidence of a larger pattern: taking raw experiments, naming the product lane, and deciding what deserves to become public proof. Last activity is recorded as ${lastActive}. ${visibility}`
}

function buildBestUse({ name, categoryMeta }) {
  const label = categoryMeta.sentenceLabel ?? categoryMeta.label.toLowerCase()
  return `Best used as ${articleFor(label)} ${label} proof point for ${categoryMeta.audience}.`
}

function buildNextAction({ categoryMeta, remote }) {
  const verificationStep = remote
    ? 'verify the repo still builds'
    : 'open the local folder and confirm the current runnable state'

  return `Next pass: ${verificationStep}, then ${categoryMeta.shipPath}.`
}

function parseProjects(text) {
  const rows = text
    .split(/\r?\n/)
    .filter((line) => line.startsWith('|') && !line.includes('|-') && !line.includes('|Prefix|'))

  const usedIds = new Set()

  return rows
    .map((line) => {
      const parts = line.split('|').slice(1, -1).map((s) => s.trim().replace(/\\_/g, '_'))
      return { category: parts[0], rawName: parts[1], remote: parts[2], lastActiveRaw: parts[3] }
    })
    .filter((project) => project.rawName && project.rawName !== 'Project Name')
    .map((project) => {
      const categoryMeta = meta[project.category] ?? {
        label: titleize(project.category),
        sentenceLabel: titleize(project.category).toLowerCase(),
        focus: 'Product and software experiments',
        role: 'product and software experiment work',
        audience: 'future buyers, collaborators, or users who need the strongest version of the idea',
        shipPath: 'write the smallest useful public proof and define the next shipping decision',
      }
      const remote = project.remote && project.remote !== '(local only)' ? project.remote : undefined
      const name = titleize(project.rawName)
      const lastActive = activeLabel(project.lastActiveRaw)
      let id = `${project.category}-${slugify(project.rawName)}`
      let suffix = 2

      while (usedIds.has(id)) {
        id = `${project.category}-${slugify(project.rawName)}-${suffix}`
        suffix += 1
      }
      usedIds.add(id)

      return {
        id,
        name,
        slug: project.rawName,
        category: project.category,
        categoryLabel: categoryMeta.label,
        focus: categoryMeta.focus,
        description: buildDescription({
          name,
          rawName: project.rawName,
          categoryMeta,
          remote,
          lastActive,
        }),
        bestUse: buildBestUse({ name, categoryMeta }),
        nextAction: buildNextAction({ categoryMeta, remote }),
        status: remote ? 'Public repo' : 'Private/local',
        lastActive,
        ...(remote ? { remote } : {}),
      }
    })
}

const projects = parseProjects(readRegistry(source))

const content = `// Generated by scripts/generate-project-atlas.mjs from ${path.basename(source)}.
// Do not edit project entries by hand; update the source registry and rerun npm run generate:atlas.

export type ProjectAtlasItem = {
  id: string
  name: string
  slug: string
  category: string
  categoryLabel: string
  focus: string
  description: string
  bestUse: string
  nextAction: string
  status: 'Public repo' | 'Private/local'
  lastActive: string
  remote?: string
}

export const projectAtlas = ${JSON.stringify(projects, null, 2)} satisfies ProjectAtlasItem[]
`

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, content, 'utf8')
console.log(`Wrote ${projects.length} projects to ${path.relative(projectRoot, outPath)}`)
