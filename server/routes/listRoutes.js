import express from "express"
import {
  createList,
  deleteList,
  getAllLists,
  getList,
  updateList,
} from "../controllers/listController.js"

export const listRouter = express.Router()

listRouter.get("/:projectId/lists", getAllLists)
listRouter.get("/:projectId/lists/:listId", getList)
listRouter.post("/:projectId/lists", createList)
listRouter.put("/:projectId/lists/:listId", updateList)
listRouter.delete("/:projectId/lists/:listId", deleteList)
