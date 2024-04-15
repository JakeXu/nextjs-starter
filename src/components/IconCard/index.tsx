import Image from 'next/image'
import { Card, Flex } from 'antd'

import styles from './index.module.scss'

type Props = {
  text: string
  icon: string
  size: number
  url: string
}

function IconCard({ text, icon, size, url }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card style={{ width: 138, margin: 10 }}>
        <Flex vertical align="center">
          <Image src={icon} alt={icon} width={size} height={size} />
          <label className={styles.label}>{text}</label>
        </Flex>
      </Card>
    </a>
  )
}

export default IconCard
