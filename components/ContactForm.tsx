'use client'

import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

interface ContactFormProps {
  type: 'partnership' | 'product' | 'general'
}

export default function ContactForm({ type }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    product: type === 'product' ? '' : undefined,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simulate form submission
      // In production, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ email: '', message: '', product: type === 'product' ? '' : undefined })
    } catch (error) {
      setStatus('error')
    }
  }

  const labels = {
    partnership: {
      title: 'Partnership or Co-Founder Interest',
      placeholder: 'Tell me about your interest...',
    },
    product: {
      title: 'Product Feedback or User Inquiry',
      placeholder: 'What\'s on your mind?',
    },
    general: {
      title: 'General Inquiry',
      placeholder: 'What can I help you with?',
    },
  }

  return (
    <div className="relative p-8 rounded-lg border border-accent/30 bg-gradient-to-br from-accent/10 via-surface to-surface hover:border-accent/50 transition-all duration-300 shadow-lg shadow-accent/10">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 opacity-50 pointer-events-none"></div>

      <div className="relative z-10">
        {status === 'success' ? (
          <div className="text-center space-y-4 py-8">
            <div className="text-6xl animate-bounce">✓</div>
            <h4 className="text-xl font-bold text-accent">Message sent!</h4>
            <p className="text-text-secondary">I'll get back to you within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-text mb-3">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full"
              disabled={status === 'loading'}
            />
          </div>

          {type === 'product' && (
            <div>
              <label className="block text-sm font-semibold text-text mb-3">
                Which product?
              </label>
              <select
                value={formData.product || ''}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full"
                disabled={status === 'loading'}
              >
                <option value="">Select a product</option>
                <option value="shipwright">Shipwright</option>
                <option value="narrative-engine">Narrative Engine</option>
                <option value="shadowlight">Shadowlight</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-text mb-3">
              Message
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={labels[type].placeholder}
              rows={4}
              className="w-full resize-none"
              disabled={status === 'loading'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn btn-secondary group"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
            {status !== 'loading' && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
          </button>

          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            </div>
          )}
        </form>
      )}
      </div>
    </div>
  )
}
