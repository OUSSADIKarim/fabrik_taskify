import mongoose from "mongoose"
import { List } from "./List.js"

const Schema = mongoose.Schema

const projectSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
)

projectSchema.pre("findOneAndDelete", async function () {
  const projectId = this.getQuery()._id
  try {
    await List.deleteMany({ project: projectId })
  } catch (error) {
    console.log(error)
  }
})

export const Project = mongoose.model("Project", projectSchema)
