import axios from "axios"

const baseUri = import.meta.env.VITE_BASE_URI
import { deleteList } from "./../../../server/controllers/listController"

export const getAllProjects = async () => {
  const result = await axios.get(`${baseUri}`)
  return result.data
}

export const getAllLists = async (projectId) => {
  const result = await axios.get(`${baseUri}/${projectId}/lists`)
  return result.data
}

export const createTask = async (
  taskTitle,
  taskPriority,
  projectId,
  listId
) => {
  const result = await axios.post(
    `${baseUri}/${projectId}/lists/${listId}/tasks`,
    {
      title: taskTitle,
      priority: taskPriority,
    }
  )
  return result.data
}

export const deleteTask = async (projectId, listId, taskId) => {
  const result = await axios.delete(
    `${baseUri}/${projectId}/lists/${listId}/tasks/${taskId}`
  )
  return result.data
}
