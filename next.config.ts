import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		formats: ['image/webp', 'image/avif'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'brostore.uz',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'www.ringkestore.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
