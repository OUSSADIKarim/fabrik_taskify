import { useParams } from "react-router-dom"
import { deleteTask } from "../apis/api"

const Task = (props) => {
  const { taskTitle, taskId, refetch } = props
  const params = useParams()
  const { projectId, listId } = params

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteTask(projectId, listId, taskId)
    await refetch()
  }

  return (
    <div>
      {taskTitle}
      <form onSubmit={handleDelete}>
        <button type="submit">Delete task</button>
      </form>
    </div>
  )
}

export default Task
