import { useState } from 'react'
import { Form, Input, Modal, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import TaskService from '@services/TaskService'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}

export default function CreateTaskModal({ isOpen, setIsOpen, tasks, setTasks }: Props) {
  const [form] = Form.useForm()
  const [messageApi] = message.useMessage()
  const [isCreating, setIsCreating] = useState(false)

  const createTodo = async () => {
    try {
      const values = await form?.validateFields()
      setIsCreating(true)
      const { name, description } = values

      const response = await TaskService.createTask(name, description)
      const newTask = await response.json()
      const updatedTasks: any = [...(tasks ?? []), newTask]

      setTasks(updatedTasks)
      form?.resetFields()
      setIsOpen(false)
      messageApi.success('Added new task')
    } catch (error) {
      console.error(error)
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <Modal
      title="Add new task"
      open={isOpen}
      okText="Add"
      okButtonProps={{ loading: isCreating }}
      onOk={() => createTodo()}
      onCancel={() => {
        form?.resetFields()
        setIsOpen(false)
      }}
    >
      <p>What would you like to add to you task list?</p>
      <Form form={form} layout="vertical">
        <Form.Item name="name" rules={[{ required: true, message: 'Name is required!' }]}>
          <Input placeholder="Task name" />
        </Form.Item>
        <Form.Item name="description" rules={[{ required: true, message: 'Description is required!' }]}>
          <TextArea rows={4} placeholder="Task description" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
