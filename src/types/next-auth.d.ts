import NextAuth, { DefaultSession, Profile } from 'next-auth'

declare module 'next-auth' {
  interface User {
    userId: string
    email: string
    name: string
    role: string
    accessToken: string
    refreshToken: string
    accessTokenExpires: number
  }

  interface Session extends DefaultSession {
    user: User & DefaultSession['user']
    expires: string
    error: string
  }

  interface Profile {
    sub?: string
    name?: string
    email?: string
    image?: string
    picture?: string
    login?: string
    avatar_url?: string
  }
}
