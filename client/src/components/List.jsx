import { useState } from "react"
import Task from "./Task"
import { createTask } from "../apis/api"
import { useParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"

const List = (props) => {
  const { listTitle, listTasks, listId, refetch } = props
  const params = useParams()
  const [taskTitle, setTaskTitle] = useState("")
  const [taskPriority, setTaskPriority] = useState("low")
  const mutation = useMutation({
    mutationFn: async () => {
      await createTask(taskTitle, taskPriority, params.projectId, listId)
    },
  })

  const addTask = async (e) => {
    e.preventDefault()
    mutation.mutate(taskTitle, taskPriority, params.projectId, listId)
    await refetch()
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="title"
        />
        <select
          name="priority"
          id="priority"
          onChange={(e) => {
            setTaskPriority(e.target.value)
          }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">add task</button>
      </form>
      <h2>{listTitle}</h2>
      {listTasks?.map((task) => {
        return (
          <Task
            key={task._id}
            taskTitle={task.title}
            taskId={task._id}
            refetch={refetch}
          />
        )
      })}
    </div>
  )
}

export default List
