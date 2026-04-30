/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: "export",  // <=== enables static export
    reactStrictMode: false,
    // basePath: '/portfolio'
}

module.exports = nextConfig
