import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import { projectRouter } from "./routes/projectRoutes.js"
import { listRouter } from "./routes/listRoutes.js"
import { taskRouter } from "./routes/taskRoutes.js"

dotenv.config()
const port = process.env.PORT || 4040
const dbUri = process.env.DBURI

const app = express()

mongoose.set("strictQuery", true)
;(async () => {
  try {
    await mongoose.connect(dbUri)
    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
})()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/projects", projectRouter)
app.use("/projects", listRouter)
app.use("/projects", taskRouter)
