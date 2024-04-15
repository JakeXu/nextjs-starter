/** @type {import('next').NextConfig} */

import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**'
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, './styles')],
    prependData: '@use "@styles/variables.scss" as *;\n\r'
  }
}

export default nextConfig
