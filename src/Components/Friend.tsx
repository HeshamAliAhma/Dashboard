import { ChartNoAxesGantt, Mail, Newspaper, Phone, Smile } from "lucide-react"

interface IProps {
    name: string,
    job: string,
    img: string,
    friendCount: string,
    projectCount: string,
    articleCount: string,
    date: string,
    urlProfile: string,
    vip:boolean
}

const Friend = ({ name, job, img, friendCount, projectCount, articleCount, date, urlProfile,vip }: IProps) => {
    return (
        <div className="relative bg-white rounded-md inline-block hover:border hover:border-indigo-400 cursor-pointer hover:rotate-2 transition-all">

            <div className="absolute flex gap-1 top-4 left-4">
                <div className="w-8 h-8 bg-slate-100 rounded-full p-2 text-center flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white transition-all"><Phone /></div>
                <div className="w-8 h-8 bg-slate-100 rounded-full p-2 text-center flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white transition-all"><Mail /></div>
            </div>

            <div className="px-4 pt-8 pb-2 flex flex-col justify-center items-center border-b">
                <img src={`friends/${img}`} className="rounded-full w-[60%] h-1/2" alt="" />
                <h1 className="mt-4 text-2xl font-bold">{name}</h1>
                <p className="text-gray-500 mt-2">{job}</p>
            </div>

            <ul className="flex flex-col px-2 py-3 gap-1 border-b relative">
                <li className="flex items-center">
                    <Smile size={16} />
                    <span className="font-semibold w-[100px] text-center">
                        <span>{friendCount}</span> Friends
                    </span>
                </li>


                <li className="flex items-center ms-3">
                    <ChartNoAxesGantt size={16} />
                    <span className="font-semibold w-[100px] text-center">
                        <span>{projectCount}</span> Projects
                    </span>
                </li>


                <li className="flex items-center">
                    <Newspaper size={16} />
                    <span className="font-semibold w-[100px] text-center">
                        <span>{articleCount}</span> Articles
                    </span>
                </li>
                {vip ? <h1 className="absolute top-1/2 right-[10%] text-indigo-700 opacity-30 text-7xl font-bold -translate-y-1/2">VIP</h1> : ""}
            </ul>

            <div className="flex gap-5 justify-between items-center px-4 py-3">
                <span className="text-gray-500 text-sm"> joined <span>{date}</span></span>
                <div className="flex items-center gap-1">
                    <a href={urlProfile} className="inline-block bg-blue-700 font-bold text-white rounded-md py-1 px-2 text-sm outline-none opacity-85 hover:opacity-100">Profile</a>
                    <a href={urlProfile} className="inline-block bg-red-500 font-bold text-white rounded-md py-1 px-2 text-sm outline-none opacity-70 hover:opacity-100">Remove</a>
                </div>
            </div>


        </div>
    )
}

export default Friend