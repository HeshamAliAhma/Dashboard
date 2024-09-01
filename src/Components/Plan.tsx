import { BadgeCheck, CircleX, ShieldAlert } from "lucide-react"

interface IProps {
    title: string,
    price: string,
    free?: boolean,
    basic?: boolean,
    premium?: boolean,
}

const Plan = ({title, price, free, basic, premium}: IProps) => {
    return (
        <div className="bg-white rounded-md p-3">
            <div className={`p-[5px] bg-white border-4 ${free ? 'border-green-700' : ''} ${basic ? 'border-blue-700' : ''} ${premium ? 'border-yellow-400' : ''}`}>
                <div className={`${free ? 'bg-green-700' : ''}${basic ? 'bg-blue-700' : ''}${premium ? 'bg-yellow-400' : ''} flex flex-col items-center justify-center py-4`}>
                    <span className="text-white text-3xl mb-3">{title}</span>
                    <span className="text-white text-4xl"><sup className="text-3xl">$</sup>{price}</span>
                </div>
            </div>
            <div className="mt-4 flex flex-col items-center">

                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        <BadgeCheck size={20} color="#26a269" />
                        <span className="text-sm font-bold">Access All Text Lessons</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>
                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        <BadgeCheck size={20} color="#26a269" />
                        <span className="text-sm font-bold">Access All Text Lessons</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>
                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        <BadgeCheck size={20} color="#26a269" />
                        <span className="text-sm font-bold">Appear On Leaderboard</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>

                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        {free ? <CircleX size={20} color="#a51d2d" /> : basic ? <BadgeCheck size={20} color="#26a269" /> : <BadgeCheck size={20} color="#26a269" />}
                        <span className="text-sm font-bold">Browse Content Without Ads</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>


                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        {free ? <CircleX size={20} color="#a51d2d" /> : basic ? <BadgeCheck size={20} color="#26a269" /> : <BadgeCheck size={20} color="#26a269" />}
                        <span className="text-sm font-bold">Access All Assignments</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>
                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        {free ? <CircleX size={20} color="#a51d2d" /> : basic ? <BadgeCheck size={20} color="#26a269" /> : <BadgeCheck size={20} color="#26a269" />}
                        <span className="text-sm font-bold">Get Daily Prizes</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>


                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        {free ? <CircleX size={20} color="#a51d2d" /> : basic ? <BadgeCheck size={20} color="#26a269" /> : <BadgeCheck size={20} color="#26a269" />}
                        <span className="text-sm font-bold">Earn Certificate</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>

                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        {free ? <CircleX size={20} color="#a51d2d" /> : basic ? <CircleX size={20} color="#a51d2d" /> : <BadgeCheck size={20} color="#26a269" />}
                        <span className="text-sm font-bold">1 GB Space For Hosting Files</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>
                <div className="flex items-center justify-between border-b w-full py-2">
                    <div className="flex gap-1 items-center px-2 py-1">
                        {free ? <CircleX size={20} color="#a51d2d" /> : basic ? <CircleX size={20} color="#a51d2d" /> : <BadgeCheck size={20} color="#26a269" />}
                        <span className="text-sm font-bold">Access Badge System</span>
                    </div>
                    <ShieldAlert size={20} color="#3d3846" />
                </div>
            </div>

            {free || basic ?<button className={`text-white py-1 px-3 mt-2 font-bold text-sm rounded-md cursor-pointer ${free?'bg-green-500':''} ${basic?'bg-blue-500':''}`}>
                join
            </button>: ''}
            {premium ? (
                <div className="flex items-center justify-center py-1 px-3 mt-2">
                    <span className="text-lg text-gray-500">This Is Your Current Plan</span>
                </div>
            ) : ""}
        </div>
    )
}

export default Plan