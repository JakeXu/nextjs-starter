import { Button, Card, List, Skeleton, Popconfirm, Typography, message } from 'antd'
import { PlusOutlined, DeleteOutlined, UndoOutlined, FileDoneOutlined } from '@ant-design/icons'
import TaskService from '@services/TaskService'

const { Text } = Typography

type Props = {
  tasks: Task[]
  setTasks: (todos: Task[]) => void
  setModalOpen: (isOpen: boolean) => void
  isLoading: boolean
}

export default function TodosCard({ tasks, setTasks, setModalOpen, isLoading }: Props) {
  const CARD_WIDTH = 670
  const [messageApi, contextHolder] = message.useMessage()

  const updateTaskStatus = async (taskId: string, isComplete: boolean) => {
    const response = await TaskService.updateTaskStatus(taskId, !isComplete)
    const updatedTask: Task = await response.json()
    const updatedTasks = tasks?.map((todo: Task) => (todo._id.toString() === updatedTask._id.toString() ? updatedTask : todo))

    messageApi.success(updatedTask.isComplete ? 'Completed task 🎉' : 'Undo success')
    setTasks(updatedTasks)
  }

  const deleteTodo = async (todoId: string) => {
    const response = await TaskService.deleteTask(todoId)
    const deletedTodoId = await response.text()
    const filteredTodos = tasks?.filter((t: any) => t._id !== deletedTodoId)

    messageApi.success('Deleted task')
    setTasks(filteredTodos)
  }

  const getListItemActions = ({ _id, isComplete }: Task) => [
    <Button type={isComplete ? 'dashed' : 'dashed'} key="done" onClick={() => updateTaskStatus(_id, isComplete)}>
      {isComplete ? <UndoOutlined /> : <FileDoneOutlined />}
    </Button>,
    <Popconfirm
      key="delete"
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={() => deleteTodo(_id)}
      okText="Yes"
      cancelText="No"
    >
      <Button type="dashed" danger key="delete">
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  ]

  return (
    <section>
      {contextHolder}
      <Card
        title="Here are your tasks"
        extra={
          <Button type="primary" size="small" shape="circle" onClick={() => setModalOpen(true)}>
            <PlusOutlined />
          </Button>
        }
        style={{ width: CARD_WIDTH }}
      >
        <List
          loading={isLoading}
          itemLayout="horizontal"
          loadMore={null}
          dataSource={tasks}
          renderItem={(task: Task) => {
            const { _id, name, description, isComplete } = task
            const actions = getListItemActions(task)
            return (
              <List.Item key={_id} actions={actions}>
                <Skeleton title={false} loading={isLoading} active>
                  <List.Item.Meta
                    title={<Text delete={isComplete}>{name}</Text>}
                    description={
                      <Text type="secondary" delete={isComplete}>
                        {description}
                      </Text>
                    }
                  />
                </Skeleton>
              </List.Item>
            )
          }}
        />
      </Card>
    </section>
  )
}
