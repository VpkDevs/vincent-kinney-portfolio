'use client'

import { ChevronDown } from 'lucide-react'

interface ProjectCardProps {
  project: {
    id: string
    name: string
    emoji: string
    tagline: string
    description: string
    tags: string[]
    category: string
    status: string
    caseStudy: string
    signal: string
  }
  isExpanded: boolean
  onToggle: () => void
}

export default function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  return (
    <div className={`card border rounded-lg overflow-hidden transition-all duration-500 ${
      isExpanded
        ? 'bg-gradient-to-br from-surface-secondary via-surface to-surface border-accent shadow-2xl shadow-accent/20'
        : 'bg-surface-secondary border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10'
    }`}>
      <button
        onClick={onToggle}
        className="w-full p-8 md:p-10 text-left hover:bg-surface-tertiary/50 transition-colors duration-300 group"
        aria-expanded={isExpanded}
        aria-controls={`${project.id}-details`}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{project.emoji}</span>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 flex-wrap mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-text">{project.name}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent rounded-full">{project.status}</span>
                </div>
                <p className="text-xs uppercase text-text-secondary/70 font-medium">{project.category}</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed">{project.tagline}</p>
              <p className="text-text/90 leading-relaxed">{project.description}</p>

              <div className="flex gap-2 flex-wrap pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 bg-accent/5 text-text-secondary rounded-full border border-accent/20 hover:border-accent/40 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 mt-2">
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isExpanded ? 'bg-accent/10' : 'group-hover:bg-accent/5'
            }`}>
              <ChevronDown
                size={24}
                className={`transition-all duration-500 ${isExpanded ? 'rotate-180 text-accent' : 'text-text-secondary group-hover:text-accent'}`}
              />
            </div>
          </div>
        </div>
      </button>

      {isExpanded && (
        <div id={`${project.id}-details`} className="px-8 md:px-10 py-10 bg-gradient-to-b from-surface-tertiary/20 to-surface border-t border-accent/20">
          <div className="prose prose-invert max-w-none space-y-4 animate-fadeIn">
            {project.caseStudy.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('##')) {
                const heading = paragraph.replace('## ', '')
                return (
                  <h4 key={idx} className="text-xl font-bold mt-6 mb-3 text-text">
                    {heading}
                  </h4>
                )
              }

              if (paragraph.startsWith('**') && paragraph.includes(':')) {
                // Bullet list style
                const items = paragraph.split('\n').filter(line => line.trim())
                return (
                  <div key={idx} className="space-y-2">
                    {items.map((item, i) => (
                      <div key={i} className="text-text-secondary leading-relaxed">
                        {item}
                      </div>
                    ))}
                  </div>
                )
              }

              if (paragraph.trim().startsWith('-')) {
                const items = paragraph.split('\n').filter(line => line.trim())
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-text-secondary">
                        {item.replace(/^-\s*/, '')}
                      </li>
                    ))}
                  </ul>
                )
              }

              if (paragraph.trim()) {
                return (
                  <p key={idx} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                )
              }

              return null
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-text-secondary/75 mb-3">What This Signals</p>
            <p className="text-text-secondary leading-relaxed">{project.signal}</p>
          </div>
        </div>
      )}
    </div>
  )
}
