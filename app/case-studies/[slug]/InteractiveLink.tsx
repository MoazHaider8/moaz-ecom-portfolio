'use client'

import Link from 'next/link'
import { CSSProperties } from 'react'

interface InteractiveLinkProps {
  href: string
  children: React.ReactNode
  style?: CSSProperties
  hoverStyle?: Partial<CSSProperties>
  className?: string
}

export default function InteractiveLink({ 
  href, 
  children, 
  style = {},
  hoverStyle = {},
  className 
}: InteractiveLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      style={style}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle)
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, style)
      }}
    >
      {children}
    </Link>
  )
}
