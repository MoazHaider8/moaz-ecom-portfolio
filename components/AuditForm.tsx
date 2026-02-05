'use client'

import { useState, FormEvent } from 'react'

export default function AuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    platform: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const subject = `Free SEO Audit Request from ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Website: ${formData.website}
Platform: ${formData.platform}
Message: ${formData.message || 'N/A'}
    `.trim()
    
    window.location.href = `mailto:contact@moazhaider.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div id="audit-form" className="card-featured p-6 lg:p-7">
      <div className="mb-5">
        <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>
          Get a Free SEO Audit
        </h3>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          Discover opportunities to grow your store
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name + Email in 2 columns on lg */}
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="text-xs">Full Name *</label>
            <input
              type="text"
              id="name"
              required
              className="h-10"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-xs">Email *</label>
            <input
              type="email"
              id="email"
              required
              className="h-10"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="website" className="text-xs">Website URL *</label>
          <input
            type="url"
            id="website"
            required
            className="h-10"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            placeholder="https://yourstore.com"
          />
        </div>

        <div>
          <label htmlFor="platform" className="text-xs">Platform *</label>
          <select
            id="platform"
            required
            className="h-10"
            value={formData.platform}
            onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
          >
            <option value="">Select Platform</option>
            <option value="Shopify">Shopify</option>
            <option value="WooCommerce">WooCommerce</option>
            <option value="Magento">Magento</option>
            <option value="BigCommerce">BigCommerce</option>
            <option value="Wix">Wix</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

        {/* Collapsible Message */}
        {!showMessage ? (
          <button
            type="button"
            onClick={() => setShowMessage(true)}
            className="text-xs font-medium underline"
            style={{ color: 'var(--accent)' }}
          >
            + Add a note
          </button>
        ) : (
          <div>
            <label htmlFor="message" className="text-xs">Message (Optional)</label>
            <textarea
              id="message"
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your SEO goals..."
            />
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-full h-10"
          disabled={submitted}
        >
          {submitted ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sent!
            </>
          ) : (
            <>
              Get Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
          No spam. Response within 24–48 hours.
        </p>
      </form>
    </div>
  )
}
