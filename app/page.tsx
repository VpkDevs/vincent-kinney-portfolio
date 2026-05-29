'use client'

import { useState, useEffect, useMemo } from 'react'
import {
  ArrowRight,
  ChevronDown,
  Mail,
  GitBranch,
  ExternalLink,
  Search,
  Layers3,
  Code2,
  ShieldCheck,
  Rocket,
  ClipboardCheck,
  Handshake,
  MessageCircle,
  Send,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import { projectAtlas } from '@/data/projectAtlas'

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [activeContactForm, setActiveContactForm] = useState<string | null>(null)
  const [atlasQuery, setAtlasQuery] = useState('')
  const [atlasCategory, setAtlasCategory] = useState('all')

  // Scroll observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 'shipwright',
      name: 'Shipwright',
      icon: 'rocket' as const,
      tagline: 'AI system designed to take over unfinished software projects, complete the missing work, and turn them into launchable products.',
      description: 'For founders and teams stuck at "almost shipped": Shipwright is being built to analyze a codebase, finish the missing implementation, run tests, identify blockers, prepare deployment, and package the product for market.',
      tags: ['AI Automation', 'Full-Stack Systems', 'Product Launch'],
      category: 'Founder Tools / AI Systems',
      status: 'Active Development',
      caseStudy: `## The Problem
You have a project that's 80% done. The remaining 20%—tests, edge cases, performance optimization, deployment, marketing, operations—is what kills momentum. Either you ship something unpolished, or you spend months perfecting something that might not find a market.

## How Shipwright Works
**Orient**: AI analyzes your codebase, architecture, and current state
**Complete**: Finishes all remaining development, features, and quality standards
**Test & Polish**: Comprehensive testing, bug fixes, refactoring
**Deploy**: Handles all deployment infrastructure and configuration
**Launch**: Full marketing campaign, positioning, initial user acquisition
**Operate**: Continues to manage the product, monitor performance, iterate based on user feedback

## What This Says About Me
This project reveals how I think about software and business. I see "shipping" as a complete arc, not just "code written." Every project has infrastructure, marketing, and operational needs. Shipwright automates the entire journey. It's the product architect's dream: a system that understands both technical depth and business reality.

## Strategic Insight
Most developers think shipping is 70% of the work. Shipwright is built around the thesis that completing + marketing + operating is actually the challenge. The ability to architect this full loop—and delegate it to AI—is a significant competitive advantage.`,
      signal: 'Systems thinking across the full product lifecycle. I understand that shipping is not just code—it\'s orchestrating development, testing, deployment, marketing, and operations. I can architect complex workflows.'
    },
    {
      id: 'narrative-engine',
      name: 'Narrative Engine',
      icon: 'sparkles' as const,
      tagline: 'AI director system for single-player campaigns where the AI is the DM. Pre-generates story beats, assets, voice, and video through latency masking.',
      description: 'A next-generation approach to AI-driven narrative. Unlike character chatbots, Narrative Engine treats latency as a design tool. It predicts likely story beats, pre-generates assets (images, voice lines, video clips), and manifests them seamlessly when needed—making the world feel alive and pre-existing, not generated on the fly.',
      tags: ['AI Architecture', 'Narrative Design', 'Real-Time Systems'],
      category: 'Narrative & AI Systems',
      status: 'Active Development',
      caseStudy: `## The Vision
Every AI narrative system exposes its machinery. You ask the AI something, it thinks for 3 seconds, then responds. It feels like talking to a computer. What if latency was hidden? What if the world seemed to already exist?

## The Architecture
**Directory Layer**: Predicts the most likely upcoming story beats based on player behavior
**Timing Layer**: Masks AI latency by pre-generating assets (art, voice, video) before they're needed
**Asset Pipeline**: While you're reading dialogue, the system is already generating the next scene, voice lines, even video clips
**Seamless Manifesting**: When a story moment arrives, all assets are ready. No loading screens. No delays. Just pure narrative flow.

## Technical Challenges Solved
- How to predict narrative direction with confidence
- How to manage asset generation pipelines at scale
- How to mask multiple concurrent AI processes
- How to recover gracefully if predictions miss
- How to maintain narrative coherence across probabilistic systems

## What This Says About Me
I think about hard technical problems in service of experience. I don't just use AI; I architect how it behaves. I understand systems at depth—latency management, asset pipelines, prediction systems. I care about the invisible work that makes things feel magical.

## Market Perspective
This is a technique that every game studio, VR platform, and interactive narrative company will eventually use. The competitive advantage goes to whoever figures it out first and at scale.`,
      signal: 'Deep technical systems thinking. Ability to solve hard architectural problems. Care for craft and experience quality. I don\'t just use AI—I architect how it behaves.'
    },
    {
      id: 'shadowlight',
      name: 'Shadowlight',
      icon: 'moon' as const,
      tagline: 'Dark fantasy single-player RPG that handles real-life trauma—substance abuse, loss, recovery—with grit and respect.',
      description: 'A narrative-first game where mechanics serve story. Shadowlight weaves real human struggles into a high-fantasy setting, exploring addiction, grief, and redemption with authenticity. It\'s entertainment that matters—where players engage with genuine emotional territory.',
      tags: ['Narrative Design', 'Game Mechanics', 'Authentic Storytelling'],
      category: 'Interactive Narrative / Games',
      status: 'Active Development',
      caseStudy: `## The Concept
Most fantasy games use real-world problems as window dressing. Shadowlight inverts this: it uses fantasy as a lens to explore addiction, trauma, and recovery with complete seriousness.

## Design Approach
**Narrative First**: Every mechanic exists to deepen the story, not distract from it
**Authenticity**: Consulted with people in recovery; no romanticization, no exploitation
**Dark Tone**: Doesn't shy away from suffering, but also doesn't glorify it
**Agency**: Player choices have weight; recovery is possible but hard
**Respect**: Treats the subject matter with seriousness it deserves

## Mechanics & Story
- **Choice System**: Decisions ripple; there are no "correct" paths, only consequences
- **Relationship Systems**: NPCs remember your choices; trust is earned slowly
- **Progression**: Getting better is non-linear; relapse is possible and meaningful
- **Atmosphere**: World design reflects internal states; environments feel alive and hostile
- **Craft**: Writing is literary-grade; dialogue has weight

## What This Says About Me
I believe entertainment can matter. I'm not interested in maximizing engagement or addictive loops—I'm interested in meaningful interaction. I can combine technical game design with narrative depth. I care about doing important work, not just lucrative work.

## Audience
People who want games that respect their intelligence. People in recovery who see themselves reflected authentically. Players who want entertainment with substance.`,
      signal: 'I combine technical capability with artistic vision and emotional intelligence. I\'m willing to tackle hard subjects respectfully. Quality of execution matters more to me than pure metrics.'
    },
  ]

  const capabilities = [
    {
      name: 'Product Architecture',
      description: 'How to build systems that scale, not just features. I design for defensibility, maintainability, and long-term leverage.'
    },
    {
      name: 'AI & Prompt Systems',
      description: 'Using LLMs and agentic workflows as first-class design tools, not afterthoughts. Orchestrating AI components into coherent systems.'
    },
    {
      name: 'Narrative & Experience Design',
      description: 'Immersive systems where AI becomes invisible. Combining storytelling craft with technical infrastructure.'
    },
    {
      name: 'Full-Stack Execution',
      description: 'Architecture → design → implementation → deployment → operation. I build toward complete product arcs, not isolated components.'
    },
    {
      name: 'Rapid Iteration',
      description: 'Speed with taste. Moving fast without sacrificing coherence, quality, or strategic thinking.'
    }
  ]

  const principles = [
    { title: 'Leverage Over Busyness', desc: 'Every system should amplify output, not just fill time.' },
    { title: 'Shipped Beats Perfect', desc: 'Iteration in market beats theoretical completeness.' },
    { title: 'Systems Over Hacks', desc: 'Real architecture beats brilliant shortcuts that break at scale.' },
    { title: 'Speed with Taste', desc: 'Fast doesn\'t mean disposable; taste doesn\'t mean slow.' },
    { title: 'Breadth on Foundation', desc: 'You can ship multiple ambitious projects if your systems are sound.' },
    { title: 'Defensibility First', desc: 'Build things that are hard to copy, not easy to clone.' },
  ]

  const auditTiers = [
    {
      name: 'Quick Triage',
      price: '$49',
      description: 'A sharp one-page read on what your app is, what is blocking it, and the fastest route to public proof.',
      bullets: ['Ship/readiness memo', 'Top 5 blockers', 'One concrete next action']
    },
    {
      name: 'Full Rescue Audit',
      price: '$199',
      description: 'A deeper repo or prototype review with product, positioning, README, and launch recommendations.',
      bullets: ['Prioritized fix list', 'README/positioning rewrite', '7-day ship plan']
    },
    {
      name: 'Launch Prep Sprint',
      price: '$499',
      description: 'Async readiness sprint to package a stalled product, fix the obvious blockers, and prepare the strongest possible public release path.',
      bullets: ['Deploy-readiness checklist', 'Pricing and offer pass', 'Reddit/Product Hunt post draft']
    },
  ]

  const proofLedger = [
    {
      label: 'Live artifact',
      value: 'Portfolio deployed',
      detail: 'GitHub Pages is serving the hardened public site.',
      href: 'https://vpkdevs.github.io/vincent-kinney-portfolio/'
    },
    {
      label: 'Source',
      value: 'Public repo',
      detail: 'Code, history, and static Pages branch are public.',
      href: 'https://github.com/VpkDevs/vincent-kinney-portfolio'
    },
    {
      label: 'Security posture',
      value: 'Audit clean',
      detail: 'Next 16 / React 19 build with local npm audit at zero vulnerabilities.',
      href: '#audit'
    },
  ]

  const shippingSteps = [
    { name: 'Deployed', status: 'done', detail: 'Live URL verified.' },
    { name: 'Hardened', status: 'done', detail: 'Static-safe contact, accessibility, dependency pass.' },
    { name: 'Distributed', status: 'next', detail: 'Public post/outreach still pending.' },
    { name: 'Revenue', status: 'open', detail: 'Audit offer is live; first buyer is the next proof.' },
  ]

  const auditDeliverables = [
    'Ship-readiness score with blunt recommendation',
    'Top blockers, ranked by revenue and launch risk',
    'README / landing page rewrite',
    'Smallest public version and 7-day action plan',
    'Pricing, buyer, and distribution angle',
  ]

  const atlasCategories = useMemo(() => {
    const categories = new Map<string, { label: string; count: number }>()

    projectAtlas.forEach((project) => {
      const current = categories.get(project.category)
      categories.set(project.category, {
        label: project.categoryLabel,
        count: current ? current.count + 1 : 1
      })
    })

    return [
      { category: 'all', label: 'All', count: projectAtlas.length },
      ...Array.from(categories.entries())
        .map(([category, value]) => ({ category, ...value }))
        .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
    ]
  }, [])

  const filteredAtlas = useMemo(() => {
    const query = atlasQuery.trim().toLowerCase()

    return projectAtlas.filter((project) => {
      const matchesCategory = atlasCategory === 'all' || project.category === atlasCategory
      const searchable = `${project.name} ${project.slug} ${project.categoryLabel} ${project.focus} ${project.description} ${project.bestUse} ${project.nextAction} ${project.status}`.toLowerCase()
      return matchesCategory && (!query || searchable.includes(query))
    })
  }, [atlasCategory, atlasQuery])

  const publicRepoCount = useMemo(
    () => projectAtlas.filter((project) => project.status === 'Public repo').length,
    []
  )

  return (
    <div id="top" className="min-h-screen bg-surface">
      <a href="#proof" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-surface focus:shadow-lg">
        Skip to main content
      </a>
      <Navigation />
      <noscript>
        <div className="border-b border-accent/30 bg-accent/10 px-6 py-3 text-center text-sm text-text-secondary">
          This portfolio is readable without JavaScript. Search, filters, and expandable case studies need JavaScript enabled.
        </div>
      </noscript>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-40 pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
            <div className="absolute inset-x-0 top-28 h-px bg-border/40"></div>
            <div className="absolute inset-x-0 top-56 h-px bg-border/25"></div>
            <div className="absolute inset-y-0 right-1/4 w-px bg-border/25"></div>
          </div>

          <div className="space-y-8 fade-in relative z-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold leading-tight">
                I build AI-native software systems and experiences.
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed">
                Founder-grade products that combine technical depth with unusual speed. <span className="text-text">This site is the first public proof artifact in a larger push: turn a huge private build surface into shipped work, useful services, and revenue.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#work" className="btn btn-primary group">
                View Featured Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#proof" className="btn btn-secondary">
                See Live Proof
              </a>
              <a href="#atlas" className="btn btn-secondary">
                Explore Project Atlas
              </a>
              <a href="#audit" className="btn btn-secondary">
                Get an App Rescue Audit
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="pt-12 hidden sm:flex items-center text-text-secondary text-sm">
              <span>Scroll to explore</span>
              <svg className="ml-2 w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIC PROOF SECTION */}
      <section id="proof" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-accent font-semibold mb-3">Public Proof</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Deployed work beats private ambition.</h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
                The honest status is better than pretending: this portfolio is live, hardened, and public. It is not fully shipped by my own standard until distribution happens, but the proof loop has started.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent mt-6"></div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {shippingSteps.map((step) => (
                  <div key={step.name} className="rounded-lg border border-border/60 bg-surface/70 p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold text-text">{step.name}</h3>
                      <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${
                        step.status === 'done'
                          ? 'border-accent/40 bg-accent/10 text-accent'
                          : step.status === 'next'
                            ? 'border-yellow-500/40 bg-yellow-500/10 text-yellow-300'
                            : 'border-border/70 bg-surface-secondary text-text-secondary'
                      }`}>
                        {step.status === 'done' ? 'Done' : step.status === 'next' ? 'Next' : 'Open'}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-2">
              <div className="mb-6 flex items-center gap-3">
                <ShieldCheck size={26} className="text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-2xl font-bold">Proof Ledger</h3>
                  <p className="text-sm text-text-secondary">The claims that can be checked right now.</p>
                </div>
              </div>

              <div className="space-y-4">
                {proofLedger.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block rounded-lg border border-border/60 bg-surface/70 p-4 hover:border-accent/50 hover:bg-surface-tertiary/30 transition-colors"
                  >
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase text-accent">{item.label}</span>
                      <ExternalLink size={14} className="text-text-secondary" aria-hidden="true" />
                    </div>
                    <p className="font-bold text-text">{item.value}</p>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.detail}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section id="work" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Work</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedProject === project.id}
                onToggle={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT ATLAS SECTION */}
      <section id="atlas" className="atlas-section border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="atlas-hero">
            <div className="max-w-4xl">
              <p className="section-kicker">Project Atlas</p>
              <h2 className="atlas-heading">A dossier wall for the entire build surface.</h2>
              <p className="atlas-lede">
                Each project now has a longer strategic description, a best-use read, and a concrete next pass. The goal is not to make every project look finished. The goal is to make every project legible enough that an AI chief of staff can choose what to ship, monetize, improve, or expose publicly.
              </p>
            </div>
            <a href="#audit" className="btn btn-primary atlas-cta">
              Turn one into revenue <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="atlas-metrics">
            {[
              { num: projectAtlas.length, label: 'canonical project dossiers' },
              { num: publicRepoCount, label: 'public repo links attached' },
              { num: atlasCategories.length - 1, label: 'product lanes represented' },
              { num: 343, label: 'local projects in the broader catalog' }
            ].map((stat) => (
              <div key={stat.label} className="atlas-metric">
                <div className="atlas-metric__num">{stat.num}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="atlas-console">
            <div className="relative atlas-search-wrap">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                value={atlasQuery}
                onChange={(event) => setAtlasQuery(event.target.value)}
                placeholder="Search names, categories, descriptions, next actions"
                className="atlas-search w-full pl-11"
                aria-label="Search project atlas"
              />
            </div>

            <div className="atlas-filters">
              {atlasCategories.map((item) => (
                <button
                  key={item.category}
                  onClick={() => setAtlasCategory(item.category)}
                  aria-pressed={atlasCategory === item.category}
                  className="atlas-filter"
                >
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="atlas-readout">
            <span>Showing {filteredAtlas.length} of {projectAtlas.length} dossiers</span>
            <span>{atlasCategory === 'all' ? 'All lanes' : atlasCategories.find((item) => item.category === atlasCategory)?.label}</span>
          </div>

          {filteredAtlas.length === 0 ? (
            <div className="atlas-empty">
              <p>No projects match that search yet.</p>
            </div>
          ) : (
            <div className="atlas-grid">
              {filteredAtlas.map((project) => (
                <article key={project.id} data-category={project.category} className="atlas-card">
                  <div className="atlas-card__topline">
                    <span className="atlas-category">
                      <Layers3 size={14} aria-hidden="true" />
                      {project.categoryLabel}
                    </span>
                    <span className="atlas-status">{project.status}</span>
                  </div>

                  <h3 className="atlas-card__title">{project.name}</h3>
                  <p className="atlas-card__focus">{project.focus}</p>
                  <p className="atlas-card__description">{project.description}</p>

                  <div className="atlas-card__intel">
                    <div>
                      <span>Best use</span>
                      <p>{project.bestUse}</p>
                    </div>
                    <div>
                      <span>Next pass</span>
                      <p>{project.nextAction}</p>
                    </div>
                  </div>

                  <div className="atlas-card__footer">
                    <code>{project.slug}</code>
                    <div className="atlas-card__links">
                      <span>
                        <Code2 size={15} aria-hidden="true" />
                        {project.lastActive}
                      </span>
                      {project.remote ? (
                        <a
                          href={project.remote.replace(/\.git$/, '')}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.name} repository`}
                        >
                          Repo <ExternalLink size={14} aria-hidden="true" />
                        </a>
                      ) : (
                        <span>Local</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="capabilities" className="py-20 px-6 bg-surface-secondary/50 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-text-secondary mb-0 max-w-2xl text-lg">Five interconnected areas that form a complete product architecture system.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="group observe">
                <div className="relative p-6 rounded-lg border border-border/50 hover:border-accent/40 bg-surface/50 hover:bg-surface-tertiary/30 transition-all duration-400 hover:shadow-lg hover:shadow-accent/10">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-1 h-8 bg-accent/60 group-hover:bg-accent transition-colors duration-300"></div>
                      <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors duration-300">{cap.name}</h3>
                    </div>
                    <p className="text-text-secondary/90 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How I Think</h2>
            <p className="text-text-secondary max-w-2xl text-lg">I operate from principles that guide every product I build and system I architect.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((prin, idx) => (
              <div key={idx} className="group observe">
                <div className="relative p-6 rounded-lg border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 hover:to-accent/5 transition-all duration-400 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-l-lg group-hover:w-1.5 transition-all duration-300"></div>
                  <div className="pl-4">
                    <h3 className="font-bold text-text mb-3 text-lg group-hover:text-accent transition-colors duration-300">{prin.title}</h3>
                    <p className="text-text-secondary/90 leading-relaxed">{prin.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY SECTION */}
      <section className="py-20 px-6 bg-surface-secondary/50 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Track Record</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { num: '300+', label: 'Local projects cataloged across AI, gaming, productivity, education, commerce, and creative tools' },
              { num: '3+', label: 'Major products in active development, each representing significant technical depth' },
              { num: 'Full-Stack', label: 'From architecture and design through implementation, deployment preparation, launch copy, and operations planning' }
            ].map((stat, idx) => (
              <div key={idx} className="group observe">
                <div className="relative p-8 rounded-lg border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-surface hover:from-accent/20 hover:via-accent/5 transition-all duration-400 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold bg-gradient-to-br from-accent via-accent to-accent/70 bg-clip-text text-transparent mb-4 group-hover:from-accent group-hover:via-accent/90">
                      {stat.num}
                    </div>
                    <p className="text-text-secondary/90 leading-relaxed group-hover:text-text-secondary transition-colors">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAID OFFER SECTION */}
      <section id="audit" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-accent font-semibold mb-3">Paid Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI App Rescue Audit</h2>
            <p className="text-text-secondary max-w-3xl text-lg leading-relaxed">
              For founders, vibe coders, and indie builders with an app, repo, or prototype that is close but not moving. I review what exists, identify the real blockers, and turn the mess into a ship plan.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {auditTiers.map((tier) => (
              <div key={tier.name} className="group observe">
                <div className="relative h-full p-6 rounded-lg border border-border/50 hover:border-accent/50 bg-surface/70 hover:bg-surface-tertiary/30 transition-all duration-400 hover:shadow-xl hover:shadow-accent/15">
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">{tier.name}</h3>
                    <span className="text-2xl font-bold text-accent">{tier.price}</span>
                  </div>
                  <p className="text-text-secondary/90 leading-relaxed mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-text-secondary">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-8 mb-10">
            <div className="rounded-lg border border-border/60 bg-surface/70 p-6">
              <div className="mb-4 flex items-center gap-3">
                <Rocket size={24} className="text-accent" aria-hidden="true" />
                <h3 className="text-2xl font-bold">What You Actually Get</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Not vague consulting. A concrete operating memo that tells you whether your app should ship, simplify, reposition, or pause.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {auditDeliverables.map((deliverable) => (
                <div key={deliverable} className="flex gap-3 rounded-lg border border-border/60 bg-surface/70 p-4">
                  <ClipboardCheck size={18} className="mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm text-text-secondary leading-relaxed">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-accent/30 bg-accent/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stuck with a nearly-finished app?</h3>
                <p className="text-text-secondary max-w-2xl">
                  Send the repo, demo, screenshots, or rough context. I will tell you what is real, what is weak, what to ship first, and what could plausibly make money.
                </p>
              </div>
              <a
                href="mailto:vincekinney1991@gmail.com?subject=AI%20App%20Rescue%20Audit"
                className="btn btn-primary whitespace-nowrap"
              >
                Request Audit <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LAB SECTION */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Lab & Ideas</h2>
          <p className="text-text-secondary mb-8 max-w-3xl">Ongoing exploration in systems thinking, prompt engineering, product architecture, and narrative design. Coming soon.</p>
          <a href="#contact" className="btn btn-primary">
            Get Notified <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 bg-surface-secondary/50 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk</h2>
            <p className="text-text-secondary/90 text-lg">Interested in partnership, collaboration, or discussing a project? I typically respond within 48 hours.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent mt-6"></div>
          </div>

          <div className="space-y-4 mb-10">
            {[
              { id: 'partnership', title: 'Partnership or Co-Founder Interest', desc: 'Interested in building together', Icon: Handshake },
              { id: 'product', title: 'Product Feedback or User Inquiry', desc: 'About Shipwright, Narrative Engine, or Shadowlight', Icon: MessageCircle },
              { id: 'general', title: 'General Inquiry', desc: 'Everything else', Icon: Send },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveContactForm(activeContactForm === option.id ? null : option.id)}
                className={`w-full text-left p-6 rounded-lg border transition-all duration-300 group ${
                  activeContactForm === option.id
                    ? 'border-accent bg-accent/5 shadow-lg shadow-accent/20'
                    : 'border-border/50 hover:border-accent/50 bg-surface/50 hover:bg-surface-tertiary/30 hover:shadow-lg hover:shadow-accent/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent group-hover:border-accent/50 group-hover:bg-accent/15 transition-colors">
                    <option.Icon size={22} aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 transition-colors duration-300 ${
                      activeContactForm === option.id ? 'text-accent' : 'text-text group-hover:text-accent'
                    }`}>{option.title}</h3>
                    <p className="text-sm text-text-secondary/80">{option.desc}</p>
                  </div>
                  <ChevronDown size={20} className={`flex-shrink-0 transition-all duration-300 ${
                    activeContactForm === option.id ? 'rotate-180 text-accent' : 'text-text-secondary group-hover:text-accent'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {activeContactForm && (
            <div className="animate-fadeIn">
              <ContactForm type={activeContactForm as 'partnership' | 'product' | 'general'} />
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border flex gap-6 justify-center flex-wrap">
            <a href="mailto:vincekinney1991@gmail.com" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2">
              <Mail size={20} /> Email
            </a>
            <a href="https://github.com/VpkDevs" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2">
              <GitBranch size={20} /> GitHub
            </a>
            <a href="https://github.com/VpkDevs/vincent-kinney-portfolio" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2">
              <ExternalLink size={20} /> Source
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
