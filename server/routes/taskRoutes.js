import express from "express"
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
  moveTask,
} from "./../controllers/taskController.js"

export const taskRouter = express.Router()

taskRouter.get("/:projectId/lists/:listId", getAllTasks)
taskRouter.get("/:projectId/lists/:listId/tasks/:taskId", getTask)
taskRouter.post("/:projectId/lists/:listId/tasks", createTask)
taskRouter.put("/:projectId/lists/:listId/tasks/:taskId", updateTask)
taskRouter.patch("/:projectId/lists/:listId/tasks/:taskId", moveTask)
taskRouter.delete("/:projectId/lists/:listId/tasks/:taskId", deleteTask)
