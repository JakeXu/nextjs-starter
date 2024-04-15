import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Inter } from 'next/font/google'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { Watermark } from 'antd'
import AntdConfigProvider from '@providers/AntdConfigProvider'
import AuthSessionProvider from '@providers/AuthSessionProvider'

import '@styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Full-stack Starter for you',
  description: 'NextJs + NextAuth + Typescript + Mongo DB + Ant Design',
  icons: { icon: '/assets/logos/next-icon.svg' }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = (await getServerSession()) as Session

  return (
    <html lang="en">
      <AntdRegistry>
        <AntdConfigProvider>
          <AuthSessionProvider session={session}>
            <body style={{ height: '100%', margin: 0 }} className={inter.className}>
              <Watermark content="Jake Xu">{children}</Watermark>
            </body>
          </AuthSessionProvider>
        </AntdConfigProvider>
      </AntdRegistry>
    </html>
  )
}
