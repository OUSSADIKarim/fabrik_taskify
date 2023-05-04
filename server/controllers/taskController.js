import { Task } from "../models/Task.js"

export const getAllTasks = async (req, res) => {
  const listId = req.params.listId
  try {
    const tasks = await Task.find({ list: listId })
    res.status(200).json(tasks)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getTask = async (req, res) => {
  const { taskId } = req.params
  try {
    const task = await Task.find({ _id: taskId })
    res.status(200).json(task)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const createTask = async (req, res) => {
  const { listId } = req.params
  const { title, priority } = req.body
  try {
    const newTask = await Task.create({ list: listId, title, priority })
    res.status(200).json(newTask)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const updateTask = async (req, res) => {
  const { taskId } = req.params
  const { title, priority } = req.body
  try {
    await Task.findOneAndUpdate({ _id: taskId }, { title, priority })
    res.status(200).json("updated!")
  } catch (error) {
    res.status(400).json(error)
  }
}

export const moveTask = async (req, res) => {
  const { taskId } = req.params
  const { newListId } = req.body
  try {
    await Task.findOneAndUpdate({ _id: taskId }, { list: newListId })
    res.status(200).json("moved!")
  } catch (error) {
    res.status(400).json(error)
  }
}

export const deleteTask = async (req, res) => {
  const { taskId } = req.params
  try {
    await Task.findOneAndDelete({ _id: taskId })
    res.status(200).json("deleted!")
  } catch (error) {
    res.status(400).json(error)
  }
}
