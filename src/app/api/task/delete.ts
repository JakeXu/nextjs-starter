import Task from '@models/task'
import { connectToDB } from '@utils/db'

export const DELETE = async (request: any) => {
  try {
    await connectToDB()
    const taskId = request.nextUrl.searchParams.get('taskId')
    await Task.deleteOne({ _id: taskId })

    return new Response(taskId, { status: 200 })
  } catch (error) {
    return new Response('Failed to delete task', { status: 500 })
  }
}
