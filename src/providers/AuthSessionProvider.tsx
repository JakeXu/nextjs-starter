'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

type Props = {
  children: React.ReactNode
  session: Session | null
}

const AuthSessionProvider = ({ children, session }: Props) => <SessionProvider session={session}>{children}</SessionProvider>

export default AuthSessionProvider
