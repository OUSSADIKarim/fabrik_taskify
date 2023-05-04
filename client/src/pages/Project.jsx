import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getAllLists } from "../apis/api"
import Loader from "../components/Loader"
import List from "../components/List"

const Project = () => {
  const params = useParams()

  const {
    data: lists,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const data = await getAllLists(params.projectId)
      return data
    },
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <main>
      {lists?.map((list) => {
        return (
          <List
            key={list._id}
            listTitle={list.title}
            listTasks={list.tasks}
            listId={list._id}
            refetch={refetch}
          />
        )
      })}
    </main>
  )
}

export default Project
