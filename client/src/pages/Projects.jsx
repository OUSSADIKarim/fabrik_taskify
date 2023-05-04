import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getAllProjects } from "../apis/api"
import Loader from "./../components/Loader"

const Projects = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const data = await getAllProjects()
      return data
    },
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <main>
      {projects?.map((project) => {
        return (
          <Link
            to={`/projects/${project._id}`}
            state={project.title}
            key={project._id}
          >
            {project.title}
          </Link>
        )
      })}
    </main>
  )
}

export default Projects
