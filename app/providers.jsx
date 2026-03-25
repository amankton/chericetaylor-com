'use client'

import { ReactLenis } from 'lenis/react'

export default function Providers({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
