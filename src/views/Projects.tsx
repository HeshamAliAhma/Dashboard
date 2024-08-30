interface IProps {

}

const ProjectsPage = ({ }: IProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Project:</h1>
      <main className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="relative bg-white rounded-md cursor-pointer hover:rotate-2 transition-all p-5 pb-0">
          <span className="absolute top-2 right-2 text-sm text-gray-500">15/10/2021</span>
          <h1 className="text-lg font-bold mb-2">Elzero Dashboard</h1>
          <span className="text-sm text-gray-500">Elzero Dashboard Project Design And Programming And Hosting</span>
          <div className="mt-5 ms-3 mb-4 flex items-center">
            <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
              <img src="avatar/team-01.png" alt="" className="rounded-full" />
            </span>
            <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
              <img src="avatar/team-01.png" alt="" className="rounded-full" />
            </span>
            <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
              <img src="avatar/team-01.png" alt="" className="rounded-full" />
            </span>
            <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
              <img src="avatar/team-01.png" alt="" className="rounded-full" />
            </span>
            <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
              <img src="avatar/team-01.png" alt="" className="rounded-full" />
            </span>
          </div>
          <div className="border-t border-b border-y-gray-200 w-full py-3 flex gap-2 justify-end items-center flex-wrap">
            <span className="text-sm py-[3px] rounded-md px-[5px] bg-gray-200 hover:text-white hover:bg-blue-500 transition-all">Programming</span>
            <span className="text-sm py-[3px] rounded-md px-[5px] bg-gray-200 hover:text-white hover:bg-blue-500 transition-all">Design</span>
            <span className="text-sm py-[3px] rounded-md px-[5px] bg-gray-200 hover:text-white hover:bg-blue-500 transition-all">Hosting</span>
            <span className="text-sm py-[3px] rounded-md px-[5px] bg-gray-200 hover:text-white hover:bg-blue-500 transition-all">Marketing</span>
          </div>
          <div className="flex items-center justify-center gap-10 py-4">
            <div className="relative w-full h-3 bg-slate-200 rounded-md">
              <div className="absolute top-0 left-0 w-[60%] h-full rounded-md bg-black"></div>
            </div>
            <div className="text-sm font-bold">
              <span>$2500</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProjectsPage