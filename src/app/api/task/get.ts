import Task from '@models/task'
import { connectToDB } from '@utils/db'
import { getToken } from 'next-auth/jwt'

export const GET = async (request: any) => {
  try {
    const token = await getToken({ req: request })
    const userId = token?.userId

    await connectToDB()
    const tasks = await Task.find({ creator: userId }).populate('creator')

    return new Response(JSON.stringify(tasks), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch todos', { status: 500 })
  }
}
