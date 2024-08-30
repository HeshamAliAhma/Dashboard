import { Download } from "lucide-react"

interface IProps {
    img:string,
    name:string,
    user:string,
    date:string,
    space:string
}

const File = ({ img, name, user, date, space }: IProps) => {
    return (
        <div className="bg-white rounded-md p-3 relative">
            <Download size={24} color="#5e5c64" className="absolute top-3 left-3 hover:top-5 cursor-pointer transition-all" />
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 flex justify-center items-center">
                    <img src={`/files/${img}`} alt="fasd" className="hover:rotate-12 cursor-pointer transition-all" />
                </div>
                <h1 className="font-bold text-sm">{name}</h1>
            </div>
            <p className="text-sm mt-2 text-gray-500 font-bold hover:text-indigo-500 cursor-pointer hover:text-base transition-all">{user}</p>
            <hr className="my-3" />
            <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold text-sm">{date}</span>
                <span className="text-gray-500 font-bold text-sm">{space}</span>
            </div>
        </div>
    )
}

export default File