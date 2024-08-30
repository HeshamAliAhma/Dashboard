import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar"

interface IProps {

}

const Layout = ({ }: IProps) => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-1">
        <div className="flex justify-between items-center px-10 py-5 bg-white">
            <h1>Header</h1>
            <h1>Header</h1>
        </div>
        <div className="bg-slate-100 px-4 py-5">
          <Outlet />
        </div>
        </div>
    </div>
  )
}

export default Layout