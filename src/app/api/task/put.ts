import Task from '@models/task'
import { connectToDB } from '@utils/db'

export const PUT = async (request: any) => {
  try {
    await connectToDB()
    const taskId = request.nextUrl.searchParams.get('taskId')
    const isComplete = request.nextUrl.searchParams.get('isComplete')
    const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, { $set: { isComplete } }, { new: true })

    return new Response(JSON.stringify(updatedTask), { status: 200 })
  } catch (error) {
    return new Response('Failed to update task', { status: 500 })
  }
}
