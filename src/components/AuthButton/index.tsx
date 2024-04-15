import Image from 'next/image'
import { AUTH_PROVIDERS } from '@constants/AuthProviders'

import styles from './index.module.scss'

type Props = {
  text: string
  name: string
  onClick: () => void
}


function AuthButton(props: Props) {
  const { text, name } = props

  const getButtonClass = () => {
    switch (name) {
      case AUTH_PROVIDERS.GOOGLE:
        return styles.authButtonGoogle
      case AUTH_PROVIDERS.GITHUB:
        return styles.authButtonGithub
      default:
        return styles.authButton
    }
  }

  return (
    <button className={getButtonClass()} {...props}>
      <Image src={`/assets/${name?.toLowerCase()}.svg`} className={styles.icon} height={22} width={22} alt="Icon" />
      {text}
    </button>
  )
}

export default AuthButton
