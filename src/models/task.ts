import { Schema, model, models } from 'mongoose'

const TaskSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: [true, 'name is required.']
  },
  description: {
    type: String,
    required: [true, 'description is required.']
  },
  isComplete: {
    type: Boolean,
    default: false
  }
})

const Task = models.Task || model('Task', TaskSchema)

export default Task
