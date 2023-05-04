import mongoose from "mongoose"

const Schema = mongoose.Schema

const listSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Porject",
      required: true,
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
)

listSchema.pre("deleteMany", async () => {
  console.log("here .... ")
})

export const List = mongoose.model("List", listSchema)
