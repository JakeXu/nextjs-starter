'use client'

import Image from 'next/image'
import { Avatar, Typography } from 'antd'

import styles from './index.module.scss'

const { Title, Text } = Typography

type Props = {
  size?: 'large' | 'small' | 'default' | number
  image: string
  mainText?: string
  subText?: string
}

function CustomAvatar({ size = 'large', image, mainText, subText }: Props) {
  const renderLabels = () => {
    if (!mainText && !subText) return

    return (
      <div style={{ marginBlock: 80 }}>
        <Title level={4} className={styles.title}>
          {mainText}
        </Title>
        <Text>{subText}</Text>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Avatar src={<Image src={image} height={300} width={300} alt="Avatar" />} size={size} />
      {renderLabels()}
    </div>
  )
}

export default CustomAvatar
