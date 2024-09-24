/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';

// Create the next-intl plugin
const withNextIntl = createNextIntlPlugin();

// Configure the bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Combine the plugins
const nextConfig = {
  reactStrictMode: true,
};

// Compose the plugins together
export default withNextIntl(bundleAnalyzer(nextConfig));
