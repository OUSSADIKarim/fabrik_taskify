import { Project } from "../models/Project.js"

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
    res.status(200).json(projects)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getProject = async (req, res) => {
  const projectId = req.params.projectId
  try {
    const project = await Project.findOne({ _id: projectId })
    res.status(200).json(project)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const createProject = async (req, res) => {
  const { title } = req.body
  const newProject = new Project({ title })
  try {
    await newProject.save()
    res.status(200).json(newProject)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const updateProject = async (req, res) => {
  const projectId = req.params.projectId
  const { title } = req.body
  try {
    const project = await Project.findOneAndUpdate(
      { _id: projectId },
      { title }
    )
    res.status(200).json("updated")
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

export const deleteProject = async (req, res) => {
  const projectId = req.params.projectId

  try {
    await Project.findOneAndDelete({ _id: projectId })
    res.status(200).json("deleted")
  } catch (error) {
    res.status(400).json(error)
  }
}
