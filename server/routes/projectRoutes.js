import express from "express"
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
} from "./../controllers/projectController.js"

export const projectRouter = express.Router()

projectRouter.get("/", getAllProjects)
projectRouter.get("/:projectId", getProject)
projectRouter.post("/", createProject)
projectRouter.put("/:projectId", updateProject)
projectRouter.delete("/:projectId", deleteProject)
