import Course from "../Components/Course"
import { coursesList } from "../data/Index"

const CoursesPage = () => {
  const RenderCoursesList = coursesList.map(course => <Course key={course.name} {...course} />)
  return (
    <>
        <h1 className="text-4xl font-bold mb-6">Courses:</h1>
        <main className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {RenderCoursesList}
        </main>
    </>
  )
}

export default CoursesPage