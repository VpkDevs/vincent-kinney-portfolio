import React, { useState } from 'react';
import { ArrowRight, Github, Mail, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';

export default function VincentKinneyWebsite() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeContactForm, setActiveContactForm] = useState(null);

  const projects = [
    {
      id: 'shipwright',
      name: 'Shipwright',
      tagline: 'AI system that takes over unfinished software projects, completes them entirely, launches them, and runs them as a business.',
      description: 'For founders and teams stuck at "almost shipped": Shipwright analyzes your codebase, completes development, runs comprehensive tests, fixes bugs and code smells, handles deployment, and launches with a full marketing campaign. Then it operates the product like a business would.',
      longDescription: `
        ## The Problem
        You have a project that\'s 80% done. The remaining 20%—tests, edge cases, performance optimization, deployment, marketing, operations—is what kills momentum. Either you ship something unpolished, or you spend months perfecting something that might not find a market.

        ## How Shipwright Works
        1. **Orient**: AI analyzes your codebase, architecture, and current state
        2. **Complete**: Finishes all remaining development, features, and quality standards
        3. **Test & Polish**: Comprehensive testing, bug fixes, refactoring
        4. **Deploy**: Handles all deployment infrastructure and configuration
        5. **Launch**: Full marketing campaign, positioning, initial user acquisition
        6. **Operate**: Continues to manage the product, monitor performance, iterate based on user feedback

        ## What This Says About Me
        This project reveals how I think about software and business. I see "shipping" as a complete arc, not just "code written." Every project has infrastructure, marketing, and operational needs. Shipwright automates the entire journey. It's the product architect's dream: a system that understands both technical depth and business reality.

        ## Strategic Insight
        Most developers think shipping is 70% of the work. Shipwright proves that completing + marketing + operating is actually the challenge. The ability to architect this full loop—and delegate it to AI—is a significant competitive advantage.
      `,
      category: 'Founder Tools / AI Systems',
      year: '2025',
      status: 'Active Development',
      image: '🚀',
      tags: ['AI Automation', 'Full-Stack Systems', 'Product Launch'],
      whatItSignals: 'Systems thinking across the full product lifecycle. I understand that shipping is not just code—it\'s orchestrating development, testing, deployment, marketing, and operations. I can architect complex workflows.'
    },
    {
      id: 'narrative-engine',
      name: 'Narrative Engine',
      tagline: 'AI director system for single-player campaigns where the AI is the DM. Pre-generates story beats, assets, voice, and video through latency masking.',
      description: 'A next-generation approach to AI-driven narrative. Unlike character chatbots, Narrative Engine treats latency as a design tool. It predicts likely story beats, pre-generates assets (images, voice lines, video clips), and manifests them seamlessly when needed—making the world feel alive and pre-existing, not generated on the fly.',
      longDescription: `
        ## The Vision
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
        This is a technique that every game studio, VR platform, and interactive narrative company will eventually use. The competitive advantage goes to whoever figures it out first and at scale.
      `,
      category: 'Narrative & AI Systems',
      year: '2025',
      status: 'Active Development',
      image: '✨',
      tags: ['AI Architecture', 'Narrative Design', 'Real-Time Systems'],
      whatItSignals: 'Deep technical systems thinking. Ability to solve hard architectural problems. Care for craft and experience quality. I don\'t just use AI—I architect how it behaves.'
    },
    {
      id: 'shadowlight',
      name: 'Shadowlight',
      tagline: 'Dark fantasy single-player RPG that handles real-life trauma—substance abuse, loss, recovery—with grit and respect.',
      description: 'A narrative-first game where mechanics serve story. Shadowlight weaves real human struggles into a high-fantasy setting, exploring addiction, grief, and redemption with authenticity. It\'s entertainment that matters—where players engage with genuine emotional territory.',
      longDescription: `
        ## The Concept
        Most fantasy games use real-world problems as window dressing. Shadowlight inverts this: it uses fantasy as a lens to explore addiction, trauma, and recovery with complete seriousness.

        ## Design Approach
        **Narrative First**: Every mechanic exists to deepen the story, not distract from it
        **Authenticity**: Consulted with people in recovery; no romanticization, no exploitation
        **Dark Tone**: Doesn\'t shy away from suffering, but also doesn\'t glorify it
        **Agency**: Player choices have weight; recovery is possible but hard
        **Respect**: Treats the subject matter with seriousness it deserves

        ## Mechanics & Story
        - **Choice System**: Decisions ripple; there are no "correct" paths, only consequences
        - **Relationship Systems**: NPCs remember your choices; trust is earned slowly
        - **Progression**: Getting better is non-linear; relapse is possible and meaningful
        - **Atmosphere**: World design reflects internal states; environments feel alive and hostile
        - **Craft**: Writing is literary-grade; dialogue has weight

        ## What This Says About Me
        I believe entertainment can matter. I\'m not interested in maximizing engagement or addictive loops—I\'m interested in meaningful interaction. I can combine technical game design with narrative depth. I care about doing important work, not just lucrative work.

        ## Audience
        People who want games that respect their intelligence. People in recovery who see themselves reflected authentically. Players who want entertainment with substance.
      `,
      category: 'Interactive Narrative / Games',
      year: '2024–Present',
      status: 'Released / Active Updates',
      image: '🌑',
      tags: ['Narrative Design', 'Game Mechanics', 'Authentic Storytelling'],
      whatItSignals: 'I combine technical capability with artistic vision and emotional intelligence. I\'m willing to tackle hard subjects respectfully. Quality of execution matters more to me than pure metrics.'
    }
  ];

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
      description: 'Architecture → design → implementation → deployment → operation. I ship complete products, not components.'
    },
    {
      name: 'Rapid Iteration',
      description: 'Speed with taste. Moving fast without sacrificing coherence, quality, or strategic thinking.'
    }
  ];

  const principles = [
    { title: 'Leverage Over Busyness', desc: 'Every system should amplify output, not just fill time.' },
    { title: 'Shipped Beats Perfect', desc: 'Iteration in market beats theoretical completeness.' },
    { title: 'Systems Over Hacks', desc: 'Real architecture beats brilliant shortcuts that break at scale.' },
    { title: 'Speed with Taste', desc: 'Fast doesn\'t mean disposable; taste doesn\'t mean slow.' },
    { title: 'Breadth on Foundation', desc: 'You can ship multiple ambitious projects if your systems are sound.' },
    { title: 'Defensibility First', desc: 'Build things that are hard to copy, not easy to clone.' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#333] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Vincent Kinney</div>
          <div className="flex gap-8">
            <a href="#work" className="text-sm hover:text-[#4d63ff] transition-colors">Work</a>
            <a href="#capabilities" className="text-sm hover:text-[#4d63ff] transition-colors">Capabilities</a>
            <a href="#philosophy" className="text-sm hover:text-[#4d63ff] transition-colors">Philosophy</a>
            <a href="#contact" className="text-sm hover:text-[#4d63ff] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            I build AI-native software systems and experiences.
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-2xl leading-relaxed">
            Founder-grade products that combine technical depth with unusual speed. Shipwright automates the full software lifecycle. Narrative Engine reimagines how AI directs interactive worlds. Shadowlight explores real human struggles through dark fantasy.
          </p>
          <div className="pt-6 flex gap-4">
            <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 border border-[#4d63ff] text-[#4d63ff] hover:bg-[#4d63ff] hover:text-[#0a0a0a] transition-all">
              View Featured Work <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-20 px-6 border-t border-[#333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Work</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="border border-[#333] rounded-lg overflow-hidden hover:border-[#4d63ff] transition-colors">
                <div
                  className="p-8 cursor-pointer bg-[#1a1a1a] hover:bg-[#232323] transition-colors"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{project.image}</span>
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                      </div>
                      <p className="text-[#a0a0a0] mb-4">{project.tagline}</p>
                      <p className="text-[#f5f5f5] leading-relaxed">{project.description}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 bg-[#2d2d2d] text-[#a0a0a0] rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="ml-4 p-2">
                      <ChevronDown size={24} className={`transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {expandedProject === project.id && (
                  <div className="px-8 py-8 bg-[#0a0a0a] border-t border-[#333]">
                    <div className="prose prose-invert max-w-none space-y-6">
                      {project.longDescription.split('\n\n').map((para, idx) => {
                        if (para.startsWith('##')) {
                          return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{para.replace('## ', '')}</h3>;
                        }
                        if (para.startsWith('- ')) {
                          return (
                            <ul key={idx} className="list-disc list-inside space-y-2 text-[#a0a0a0]">
                              {para.split('\n').map((item, i) => (
                                <li key={i}>{item.replace('- ', '')}</li>
                              ))}
                            </ul>
                          );
                        }
                        if (para.trim()) {
                          return <p key={idx} className="text-[#a0a0a0] leading-relaxed">{para}</p>;
                        }
                      })}
                    </div>
                    <div className="mt-8 pt-6 border-t border-[#333]">
                      <p className="text-sm text-[#666] mb-4">What This Signals:</p>
                      <p className="text-[#a0a0a0]">{project.whatItSignals}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 px-6 border-t border-[#333] bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-semibold text-[#f5f5f5]">{cap.name}</h3>
                <p className="text-[#a0a0a0] leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-20 px-6 border-t border-[#333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">How I Think</h2>
          <div className="space-y-6 mb-12">
            <p className="text-lg text-[#a0a0a0] leading-relaxed max-w-3xl">
              I operate from a set of principles that guide every product I build and system I architect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((prin, idx) => (
              <div key={idx} className="border-l-2 border-[#4d63ff] pl-6">
                <h3 className="font-bold mb-2">{prin.title}</h3>
                <p className="text-[#a0a0a0] text-sm">{prin.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 px-6 border-t border-[#333] bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Track Record</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#4d63ff] mb-2">800+</div>
              <p className="text-[#a0a0a0]">Projects explored across fintech, gaming, productivity, education, and creative tools</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4d63ff] mb-2">3+</div>
              <p className="text-[#a0a0a0]">Major products in active development or released, each representing significant technical depth</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4d63ff] mb-2">Full-Stack</div>
              <p className="text-[#a0a0a0]">From architecture and design through implementation, deployment, launch, and ongoing operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Preview */}
      <section className="py-20 px-6 border-t border-[#333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Lab & Ideas</h2>
          <p className="text-[#a0a0a0] mb-8 max-w-3xl">Ongoing exploration in systems thinking, prompt engineering, product architecture, and narrative design.</p>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-[#4d63ff] text-[#4d63ff] hover:bg-[#4d63ff] hover:text-[#0a0a0a] transition-all">
            Explore the Lab <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-[#333] bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Let's Talk</h2>
          <p className="text-[#a0a0a0] mb-8">Interested in partnership, collaboration, or discussing a project? I typically respond within 48 hours.</p>

          <div className="space-y-4">
            <button
              onClick={() => setActiveContactForm(activeContactForm === 'partnership' ? null : 'partnership')}
              className="w-full text-left p-4 border border-[#333] hover:border-[#4d63ff] rounded-lg transition-colors"
            >
              <h3 className="font-semibold mb-1">Partnership or Co-Founder Interest</h3>
              <p className="text-sm text-[#a0a0a0]">Interested in building together</p>
            </button>

            <button
              onClick={() => setActiveContactForm(activeContactForm === 'product' ? null : 'product')}
              className="w-full text-left p-4 border border-[#333] hover:border-[#4d63ff] rounded-lg transition-colors"
            >
              <h3 className="font-semibold mb-1">Product Feedback or User Inquiry</h3>
              <p className="text-sm text-[#a0a0a0]">About Shipwright, Narrative Engine, or Shadowlight</p>
            </button>

            <button
              onClick={() => setActiveContactForm(activeContactForm === 'general' ? null : 'general')}
              className="w-full text-left p-4 border border-[#333] hover:border-[#4d63ff] rounded-lg transition-colors"
            >
              <h3 className="font-semibold mb-1">General Inquiry</h3>
              <p className="text-sm text-[#a0a0a0]">Everything else</p>
            </button>
          </div>

          {activeContactForm && (
            <div className="mt-8 p-6 border border-[#333] rounded-lg bg-[#0a0a0a]">
              <form className="space-y-4">
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded text-[#f5f5f5] placeholder-[#666] focus:border-[#4d63ff] outline-none transition-colors" />
                <textarea placeholder="Tell me about your interest..." rows="4" className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded text-[#f5f5f5] placeholder-[#666] focus:border-[#4d63ff] outline-none transition-colors resize-none" />
                <button className="w-full px-6 py-3 bg-[#4d63ff] text-[#0a0a0a] font-semibold hover:bg-[#6a7bff] transition-colors rounded">Send</button>
              </form>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-[#333] flex gap-6 justify-center">
            <a href="mailto:vincekinney1991@gmail.com" className="text-[#a0a0a0] hover:text-[#4d63ff] transition-colors flex items-center gap-2">
              <Mail size={20} /> Email
            </a>
            <a href="https://github.com" className="text-[#a0a0a0] hover:text-[#4d63ff] transition-colors flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
            <a href="https://twitter.com" className="text-[#a0a0a0] hover:text-[#4d63ff] transition-colors flex items-center gap-2">
              <ExternalLink size={20} /> Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#333] text-center text-[#666] text-sm">
        <div className="max-w-6xl mx-auto">
          <p>© 2025 Vincent Kinney. Built with taste and velocity.</p>
        </div>
      </footer>
    </div>
  );
}
