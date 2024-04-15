'use client'

import { useEffect, useState } from 'react'
import { signIn, getProviders, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button, Card, Skeleton } from 'antd'
import AuthButton from '@components/AuthButton'

import styles from './index.module.scss'

const { Button: SkeletonButton } = Skeleton

function AuthCard() {
  const CARD_WIDTH = 678

  const { data: session } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [providers, setProviders] = useState(null)

  const initProviders = async () => {
    setIsLoading(true)
    const res: any = await getProviders()

    setProviders(res)
    setTimeout(() => setIsLoading(false), 1000)
  }

  useEffect(() => {
    initProviders()
  }, [])

  if (session) {
    return (
      <Card className={styles.cardWrapper}>
        <div>
          <p className={styles.label}>
            You are signed in as <b>{session?.user?.name}</b>.
          </p>
          <Button type="primary" className={styles.button} onClick={() => router.push('/dashboard')} block>
            Go to Dashboard
          </Button>
          <Button className={styles.button} type="dashed" onClick={() => signOut()} block danger>
            Log out
          </Button>
        </div>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card className={styles.cardWrapper}>
        <div>
          <SkeletonButton active={true} block={true} style={{ marginBottom: 10, marginTop: 10, height: 42 }} />
          <SkeletonButton active={true} block={true} style={{ marginBottom: 10, height: 42 }} />
        </div>
      </Card>
    )
  }

  return (
    <Card className={styles.cardWrapper}>
      <div>
        {providers &&
          Object.values(providers).map((provider: any) => (
            <AuthButton
              key={provider?.name}
              name={provider?.name}
              text={`Continue with ${provider.name}`}
              onClick={() => {
                signIn(provider.id, { callbackUrl: '/dashboard' })
              }}
            />
          ))}
      </div>
    </Card>
  )
}

export default AuthCard
