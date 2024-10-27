/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

const remotePatterns = [
    {
        protocol: isDev ? 'http' : 'https',
        hostname: isDev ? '192.168.31.32' : '', // TODO prd http is not allowed
    },
]

if (isDev) {
    remotePatterns.push({
        protocol: 'https',
        hostname: 'images.pexels.com',
    })
}

const nextConfig = {
    images: {
        remotePatterns,
    },
    // @FIXME 为了解决警告：the request of a dependency is an expression
    // @SEE https://github.com/vercel/next.js/issues/52876
    experimental: {
        serverComponentsExternalPackages: ['sequelize',],
    },
    // 关闭严格模式
    reactStrictMode: false,
}

export default nextConfig
