import { Card, Progress } from 'antd'

import Colors from '@styles/variables.scss'

type Props = {
  tasks: Task[]
}

export default function TasksProgressCard({ tasks }: Props) {
  const CARD_WIDTH = 670

  const completedPercentage = () => {
    if (!tasks?.length) return 0
    const totalTodoCount = tasks?.length || 0
    const completedTodoCount = tasks?.filter((todo: Task) => todo.isComplete)?.length || 0

    return Math.floor((completedTodoCount / totalTodoCount) * 100)
  }

  const getProgressBarColor = () => {
    if (completedPercentage() === 100) return Colors.successColor
    if (completedPercentage() >= 50) return Colors.warningColor
    return Colors.errorColor
  }

  return (
    <Card style={{ width: CARD_WIDTH, marginTop: 20 }}>
      <Progress percent={completedPercentage()} strokeColor={getProgressBarColor()} />
    </Card>
  )
}
