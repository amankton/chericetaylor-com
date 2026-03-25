'use client'

import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'

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
