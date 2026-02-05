interface TimelineStep {
  step: string
  title: string
  description: string
  deliverable: string
}

interface TimelineProps {
  steps: TimelineStep[]
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute top-12 left-0 right-0 h-0.5"
            style={{ background: 'var(--border)' }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold relative z-10"
                    style={{
                      background: 'var(--card)',
                      border: '3px solid var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'var(--accent-light)',
                      color: 'var(--accent)',
                      border: '1px solid var(--accent)',
                    }}
                  >
                    → {item.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-6">
        {steps.map((item, index) => (
          <div key={index} className="relative pl-16">
            {/* Vertical line */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-8 top-16 bottom-0 w-0.5 transform -translate-x-1/2"
                style={{ background: 'var(--border)' }}
              />
            )}

            {/* Step number circle */}
            <div className="absolute left-0 top-0">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
                style={{
                  background: 'var(--card)',
                  border: '2px solid var(--accent)',
                  color: 'var(--accent)',
                }}
              >
                {item.step}
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                {item.title}
              </h3>
              <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)',
                }}
              >
                → {item.deliverable}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
