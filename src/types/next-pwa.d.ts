declare module 'next-pwa' {
  import type { NextConfig } from 'next'

  type WithPWA = (config: {
    dest: string
    disable?: boolean
    register?: boolean
    skipWaiting?: boolean
  }) => (config: NextConfig) => NextConfig

  const withPWA: WithPWA
  export default withPWA
} 