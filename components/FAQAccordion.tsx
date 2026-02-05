'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            style={{
              background: 'var(--surface)',
              border: '1px solid',
              borderColor: isOpen ? 'var(--accent)' : 'var(--border)',
              borderRadius: 'var(--radius-lg)',
              transition: 'border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: '100%',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              aria-expanded={isOpen}
            >
              <span style={{ 
                fontSize: 'clamp(1.0625rem, 1.5vw, 1.125rem)',
                fontWeight: '600', 
                color: 'var(--text)',
                lineHeight: '1.5',
                paddingRight: '2rem',
              }}>
                {faq.question}
              </span>
              <svg
                style={{ 
                  width: '20px', 
                  height: '20px',
                  flexShrink: 0,
                  color: 'var(--accent)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div style={{
              maxHeight: isOpen ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isOpen ? 1 : 0,
            }}>
              <div style={{ 
                padding: '0 clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 3vw, 2rem)',
                paddingTop: '0',
              }}>
                <p style={{ 
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
