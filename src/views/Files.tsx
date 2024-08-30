import { ArrowUp, FileJson, FileMusic, FileText, Images } from "lucide-react"
import File from "../Components/File"
import { FilesList } from "../data/Index"

interface IProps {

}

const FilesPage = ({ }: IProps) => {

  const RenderFilesList = FilesList.map(file => <File key={file.name} {...file} />)
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Files:</h1>
      <div className="flex justify-between gap-6">
        <div className="flex-1">
          <main className="grid lg:grid-cols-4 sm:grid-cols-1 relative md:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-6 gap-4 ">
            {RenderFilesList}
          </main>
        </div>
        <div className="flex flex-col bg-white p-4 h-fit rounded-md gap-4 w-[260px]">
          <h1 className="font-bold capitalize text-2xl">Files Statistics</h1>
          <div className="flex justify-between items-center p-2 border border-slate-300 rounded-md">
            <div className="flex gap-2 items-center">
              <FileText size={35} color="#1c71d8" className="bg-slate-100 p-2" />
              <div className="flex flex-col">
                <span className="text-sm">PDF Files</span>
                <span className="text-gray-500 text-sm">130</span>
              </div>
            </div>
            <div>
              <span className="text-gray-500 text-sm">6.5GB</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 border border-slate-300 rounded-md">
            <div className="flex gap-2 items-center">
              <Images size={35} color="#33d17a" className="bg-slate-100 p-2" />
              <div className="flex flex-col">
                <span className="text-sm">Images</span>
                <span className="text-gray-500 text-sm">115 Files</span>
              </div>
            </div>
            <div>
              <span className="text-gray-500 text-sm">3.5GB</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 border border-slate-300 rounded-md">
            <div className="flex gap-2 items-center">
              <FileJson size={35} color="#c01c28" className="bg-slate-100 p-2" />
              <div className="flex flex-col">
                <span className="text-sm">Word Files</span>
                <span className="text-gray-500 text-sm">110 Files</span>
              </div>
            </div>
            <div>
              <span className="text-gray-500 text-sm">3.2GB</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 border border-slate-300 rounded-md">
            <div className="flex gap-2 items-center">
              <FileMusic size={35} color="#f5c211" className="bg-slate-100 p-2" />
              <div className="flex flex-col">
                <span className="text-sm">CSV Files</span>
                <span className="text-gray-500 text-sm">99 Files</span>
              </div>
            </div>
            <div>
              <span className="text-gray-500 text-sm">6.5GB</span>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white w-fit flex gap-1 items-center justify-center p-3 rounded-md">
              <ArrowUp size={20} color="#ffffff" />
              <span className="text-sm capitalize">Upload</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilesPage