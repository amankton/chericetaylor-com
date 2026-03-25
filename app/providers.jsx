'use client'

import React, { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'

export default function Providers({ children }) {
  React.useEffect(() => {
    console.log("Lenis Providers mounted");
  }, []);

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
