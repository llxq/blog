/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
    // @FIXME 为了解决警告：the request of a dependency is an expression
    // @SEE https://github.com/vercel/next.js/issues/52876
    experimental: {
        serverComponentsExternalPackages: ['sequelize',],
    },
}

export default nextConfig
