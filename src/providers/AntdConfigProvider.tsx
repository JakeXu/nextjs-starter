import { ConfigProvider } from 'antd'
import Colors from '@styles/variables.module.scss'

type Props = {
  children: React.ReactNode
}

const AntdConfigProvider = ({ children }: Props) => {
  const THEME = {
    token: {
      colorPrimary: Colors.primaryColor
    }
  }

  return <ConfigProvider theme={THEME}>{children}</ConfigProvider>
}

export default AntdConfigProvider
