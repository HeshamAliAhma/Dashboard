import { NavLink } from "react-router-dom"
import { ChartLine, Cog, FileQuestion, GraduationCap, IdCard, User, Users } from 'lucide-react';
interface IProps {

}

const spanClass = 'invisible z-10 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible'
const NavLinkClass = 'group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700'

const Sidebar = ({ }: IProps) => {
    return (
        <div className="flex h-screen w-16 flex-col border-e bg-white">
            <div className="inline-flex size-16 items-center justify-center">
                <NavLink to={"/"} className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                    H
                </NavLink>
            </div>

            <div className="border-t border-gray-100">
                <div className="px-2">
                    <div className="py-4">
                        <NavLink to="/settings" className={`t ${NavLinkClass}`}>
                            <Cog />
                            <span className={spanClass}> Settings </span>
                        </NavLink>
                    </div>

                    <ul className="space-y-1 border-t border-gray-100 pt-4">
                        <li>
                            <NavLink to="/profile" className={NavLinkClass}>
                                <User />
                                <span className={spanClass}> Profile </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/projects" className={NavLinkClass}>
                                <ChartLine />
                                <span className={spanClass}> Projects </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/courses" className={NavLinkClass}>
                                <GraduationCap />
                                <span className={spanClass}> Courses </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/friends" className={NavLinkClass}>
                                <Users />
                                <span className={spanClass}> Friends </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/files" className={NavLinkClass}>
                                <FileQuestion />
                                <span className={spanClass}> Files </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/plans" className={NavLinkClass}>
                                <IdCard />
                                <span className={spanClass}> Plans </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar