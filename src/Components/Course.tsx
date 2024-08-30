import { BadgeDollarSign, CircleUserRound } from "lucide-react"

interface IProps {
    avatar: string,
    img:string,
    name: string,
    desc:string,
    price: string,
    users:string
}

const Course = ({avatar,img,name,desc,price,users}: IProps) => {
    return (
        <div className="bg-white relative rounded-md pb-2">
            <div className="absolute top-4 left-4 w-[80px] bg-white p-1 inline-block rounded-full">
                <img src={`avatar/${avatar}`} alt="" className="rounded-full w-full" />
            </div>
            <div className="w-full">
                <img src={`courses/${img}`} alt="" className="w-full rounded-t-md" />
            </div>
            <div className="p-5">
                <h1 className="font-bold text-2xl mb-2">{name}</h1>
                <p className="text-gray-500 mb-2">{desc}</p>
            </div>
            <div className="text-center flex items-center justify-center relative">
                <h1 className="px-2 py-1 rounded-md text-white bg-blue-500 z-10">Course Info</h1>
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-slate-200 left-0 right-0"></div>
            </div>
            <div className="flex justify-between items-center px-3 py-1">
                <div className="text-gray-400 font-bold flex items-center gap-1">
                    <CircleUserRound size={20} />
                    <span>{users}</span>
                </div>
                <div className="text-gray-400 font-bold flex items-center gap-1">
                    <BadgeDollarSign size={20} />
                    <span>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default Course