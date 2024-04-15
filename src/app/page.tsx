'use client'

import Image from 'next/image'
import { Row, Typography } from 'antd'
import AuthCard from '@components/AuthCard'
import IconCard from '@components/IconCard'
import CustomAvatar from '@components/CustomAvatar'
import { TECH_STACKS } from '@constants/TechStacks'

import styles from './page.module.scss'

const { Title, Text } = Typography

export default function Home() {
  const renderHeader = () => (
    <>
      <Image src="/assets/logos/next.svg" alt="Next.js" width={300} height={60} />
      <Title level={2}>Full-stack starter on 15th of April 2024</Title>
      <Title level={5}>NextJs + NextAuth + Typescript + Mongo DB + Ant Design</Title>
    </>
  )

  const renderTechStack = () => (
    <Row gutter={16}>
      {TECH_STACKS.map(({ name, icon, url }) => (
        <IconCard key={name} text={name} icon={icon} size={38} url={url} />
      ))}
    </Row>
  )

  const renderFooter = () => (
    <div className={styles.footer}>
      <Text>Please choose your login method, this start was created on 15th of April 2024.</Text>
      <CustomAvatar
        image="https://avatars.githubusercontent.com/u/12931714?v=4"
        mainText="Jake Xu"
        subText="I'm a curious front-end developer"
      />
    </div>
  )

  return (
    <main className={styles.pageWrapper}>
      {renderHeader()}
      {renderTechStack()}
      <AuthCard />
      {renderFooter()}
    </main>
  )
}
