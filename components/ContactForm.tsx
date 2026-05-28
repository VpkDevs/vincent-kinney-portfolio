'use client'

import { useState } from 'react'
import { Mail, ArrowRight, AlertCircle } from 'lucide-react'

interface ContactFormProps {
  type: 'partnership' | 'product' | 'general'
}

export default function ContactForm({ type }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    product: type === 'product' ? '' : undefined,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)

    if (!validEmail || !trimmedMessage) {
      setStatus('error')
      return
    }

    const productLine = type === 'product' && formData.product
      ? `Product: ${formData.product}\n\n`
      : ''
    const subject = encodeURIComponent(`[Portfolio] ${labels[type].title}`)
    const body = encodeURIComponent(`From: ${trimmedEmail}\n\n${productLine}${trimmedMessage}`)

    window.location.href = `mailto:vincekinney1991@gmail.com?subject=${subject}&body=${body}`
    setStatus('success')
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
            <Mail size={44} className="mx-auto text-accent" aria-hidden="true" />
            <h4 className="text-xl font-bold text-accent">Email draft opened</h4>
            <p className="text-text-secondary">
              Send the draft from your email client. If it did not open, email me directly at{' '}
              <a href="mailto:vincekinney1991@gmail.com" className="text-accent hover:text-text break-all">
                vincekinney1991@gmail.com
              </a>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor={`${type}-email`} className="block text-sm font-semibold text-text mb-3">
              Email
            </label>
            <input
              id={`${type}-email`}
              type="email"
              required
              maxLength={120}
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full"
              aria-describedby={`${type}-contact-hint`}
            />
          </div>

          {type === 'product' && (
            <div>
              <label htmlFor={`${type}-product`} className="block text-sm font-semibold text-text mb-3">
                Which product?
              </label>
              <select
                id={`${type}-product`}
                value={formData.product || ''}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full"
              >
                <option value="">Select a product</option>
                <option value="shipwright">Shipwright</option>
                <option value="narrative-engine">Narrative Engine</option>
                <option value="shadowlight">Shadowlight</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor={`${type}-message`} className="block text-sm font-semibold text-text mb-3">
              Message
            </label>
            <textarea
              id={`${type}-message`}
              required
              maxLength={2000}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={labels[type].placeholder}
              rows={4}
              className="w-full resize-none"
              aria-describedby={`${type}-contact-hint`}
            />
            <p id={`${type}-contact-hint`} className="mt-2 text-xs text-text-secondary/70">
              Static-site safe: this opens a prefilled email draft instead of pretending to submit to a backend.
            </p>
          </div>

          <button
            type="submit"
            className="w-full btn btn-secondary group"
          >
            Open Email Draft
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>

          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg" role="alert">
              <p className="text-sm text-red-400 flex items-start gap-2">
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                Enter a valid email and message before opening the draft.
              </p>
            </div>
          )}
        </form>
      )}
      </div>
    </div>
  )
}
