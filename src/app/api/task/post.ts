import { getToken } from 'next-auth/jwt'
import Task from '@models/task'
import { connectToDB } from '@utils/db'

export const POST = async (request: any) => {
  const token = await getToken({ req: request })
  const userId = token?.userId

  const { name, description } = await request.json()

  try {
    await connectToDB()
    const newTask = new Task({ creator: userId, name, description })
    await newTask.save()
    return new Response(JSON.stringify(newTask), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response('Failed to create a new task', { status: 500 })
  }
}
