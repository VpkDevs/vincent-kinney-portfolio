import { Mail, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border/50 bg-gradient-to-b from-surface-secondary/50 to-surface">
      <div className="max-w-6xl mx-auto">
        {/* Top divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-12"></div>

        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="group">
            <h4 className="font-semibold text-text mb-5 group-hover:text-accent transition-colors text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#work" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all"></span>
                Work
              </a></li>
              <li><a href="#atlas" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all"></span>
                Project Atlas
              </a></li>
              <li><a href="#capabilities" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all"></span>
                Capabilities
              </a></li>
              <li><a href="#audit" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all"></span>
                Audit Offer
              </a></li>
              <li><a href="#philosophy" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all"></span>
                Philosophy
              </a></li>
              <li><a href="#contact" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all"></span>
                Contact
              </a></li>
            </ul>
          </div>

          <div className="group">
            <h4 className="font-semibold text-text mb-5 group-hover:text-accent transition-colors text-sm uppercase tracking-wider">Featured</h4>
            <ul className="space-y-3">
              <li><a href="#work" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span>🚀</span>
                Shipwright
              </a></li>
              <li><a href="#work" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span>✨</span>
                Narrative Engine
              </a></li>
              <li><a href="#work" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <span>🌑</span>
                Shadowlight
              </a></li>
            </ul>
          </div>

          <div className="group">
            <h4 className="font-semibold text-text mb-5 group-hover:text-accent transition-colors text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li><a href="mailto:vincekinney1991@gmail.com" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <Mail size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                Email
              </a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <Github size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                GitHub
              </a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300 inline-flex items-center gap-2">
                <Twitter size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                Twitter
              </a></li>
            </ul>
          </div>

          <div className="group">
            <h4 className="font-semibold text-text mb-5 group-hover:text-accent transition-colors text-sm uppercase tracking-wider">Info</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300">Privacy</a></li>
              <li><a href="#" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300">Terms</a></li>
              <li><a href="#" className="text-sm text-text-secondary/80 hover:text-accent transition-all duration-300">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-secondary/60">
              © 2025 Vincent Kinney. Built with taste and velocity.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-8 bg-gradient-to-r from-accent to-transparent"></div>
              <span className="text-xs text-text-secondary/50">v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
