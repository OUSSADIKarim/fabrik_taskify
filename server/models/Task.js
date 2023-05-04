import mongoose from "mongoose"
import { List } from "./List.js"

const Schema = mongoose.Schema

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    list: {
      type: Schema.Types.ObjectId,
      ref: "List",
      required: true,
    },
  },
  { timestamps: true }
)

taskSchema.post("save", async function () {
  const taskId = this._id
  const listId = this.list
  console.log({ taskId, listId })
  try {
    const list = await List.findOne({ _id: listId })
    console.log({ list })
    list.tasks.push(taskId)
    list.save()
  } catch (error) {
    console.log(error)
  }
})

export const Task = mongoose.model("Task", taskSchema)
