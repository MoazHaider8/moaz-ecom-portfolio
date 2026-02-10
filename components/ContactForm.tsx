'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    platform: '',
    message: '',
    consent: false,
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    // TODO: Replace with actual API endpoint
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        website: '',
        platform: '',
        message: '',
        consent: false,
      })
    } catch (error) {
      setFormStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="p-8 md:p-10 rounded-2xl" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>
          Get Your Free SEO Audit
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Fill out the form below and I'll get back to you within 24-48 hours
        </p>
      </div>

      {formStatus === 'success' ? (
        <div className="p-6 rounded-xl mb-6" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#10b981' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="font-semibold mb-1" style={{ color: '#10b981' }}>Thanks for reaching out!</div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                I've received your message and will get back to you within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'var(--background)', 
              border: '1px solid var(--border)', 
              color: 'var(--text)' 
            }}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'var(--background)', 
              border: '1px solid var(--border)', 
              color: 'var(--text)' 
            }}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
            Website URL *
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'var(--background)', 
              border: '1px solid var(--border)', 
              color: 'var(--text)' 
            }}
            placeholder="https://yourstore.com"
          />
        </div>

        <div>
          <label htmlFor="platform" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
            Ecommerce Platform *
          </label>
          <select
            id="platform"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'var(--background)', 
              border: '1px solid var(--border)', 
              color: 'var(--text)' 
            }}
          >
            <option value="">Select your platform</option>
            <option value="Shopify">Shopify</option>
            <option value="WooCommerce">WooCommerce</option>
            <option value="Magento">Magento</option>
            <option value="BigCommerce">BigCommerce</option>
            <option value="Wix">Wix</option>
            <option value="Custom">Custom</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 resize-none"
            style={{ 
              backgroundColor: 'var(--background)', 
              border: '1px solid var(--border)', 
              color: 'var(--text)' 
            }}
            placeholder="Tell me about your SEO goals and challenges..."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1"
          />
          <label htmlFor="consent" className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            I consent to Moaz Haider contacting me about my inquiry and understand my data will be processed 
            according to the <Link href="/privacy-policy" className="underline" style={{ color: 'var(--accent)' }}>Privacy Policy</Link>.
          </label>
        </div>

        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="w-full btn btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === 'submitting' ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
