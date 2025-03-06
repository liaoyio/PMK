import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_BUILD_TIME: new Date().toLocaleString().replace('T', '').slice(0, 19),
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
} satisfies NextConfig

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
