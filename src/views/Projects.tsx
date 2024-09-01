import Project from "../Components/Project"
import { projectsList } from "../data/Index"

interface IProps {

}


const ProjectsPage = ({}: IProps) => {
  const RenderProjectList = projectsList.map(project => <Project key={project.name} {...project} />)
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Project:</h1>
      <main className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {RenderProjectList}
      </main>
    </>
  )
}

export default ProjectsPage