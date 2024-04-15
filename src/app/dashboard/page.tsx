'use client'

import { useEffect, useState } from 'react'
import { FloatButton, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import TaskService from '@services/TaskService'
import CustomAvatar from '@components/CustomAvatar'
import TasksCard from '../_components/TasksCard'
import TasksProgressCard from '../_components/TasksProgressCard'
import CreateTaskModal from './CreateTaskModal'

import styles from './index.module.scss'

const { Title, Text } = Typography

export default function Dashboard() {
  const router = useRouter()
  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [tasks, setTasks] = useState<Task[]>([])
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false)

  const getAllTasks = async () => {
    setIsLoading(true)

    try {
      const response = await TaskService.getAllTasks()
      const tasks: Task = await response.json()
      setTasks(Array.isArray(tasks) ? tasks : [])
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <main className={styles.dashboardWrapper}>
      <CustomAvatar image={session?.user?.image || ''} size={60} />
      <Title level={3}>Hi {session?.user?.name?.split(' ')?.[0]} :)</Title>
      <Text type="secondary">Track your tasks easily.</Text>
      <TasksCard tasks={tasks} setTasks={setTasks} setModalOpen={setIsAddTodoModalOpen} isLoading={isLoading} />
      <TasksProgressCard tasks={tasks} />
      <CreateTaskModal isOpen={isAddTodoModalOpen} setIsOpen={setIsAddTodoModalOpen} tasks={tasks} setTasks={setTasks} />
      <FloatButton icon={<ArrowLeftOutlined />} style={{ left: 30, top: 30 }} onClick={() => router.push('/')} />
    </main>
  )
}
