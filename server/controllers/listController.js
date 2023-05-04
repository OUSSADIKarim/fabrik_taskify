import { List } from "./../models/List.js"
import { Task } from "./../models/Task.js"

export const getAllLists = async (req, res) => {
  const projectId = req.params.projectId
  try {
    const lists = await List.find({ project: projectId }).populate("tasks")
    res.status(200).json(lists)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getList = async (req, res) => {
  const { projectId, listId } = req.params

  try {
    const list = await List.findOne({ project: projectId, _id: listId })
    res.status(200).json(list)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const createList = async (req, res) => {
  const projectId = req.params.projectId
  const { title } = req.body

  try {
    const newList = await List.create({ project: projectId, title })
    res.status(200).json(newList)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const updateList = async (req, res) => {
  const listId = req.params.listId
  const { title } = req.body
  try {
    await List.findOneAndUpdate({ _id: listId }, { title })
    res.status(200).json("updated")
  } catch (error) {
    res.status(400).json(error)
  }
}

export const deleteList = async (req, res) => {
  const listId = req.params.listId
  try {
    await List.findOneAndDelete({ _id: listId })
    res.status(200).json("deleted")
  } catch (error) {
    res.status(400).json(error)
  }
}
