
interface IProps {
    name: string,
    desc: string,
    date: string,
    programming?: boolean,
    design?: boolean,
    hosting?: boolean,
    marketing?: boolean
    img1?: string,
    img2?: string,
    img3?: string,
    img4?: string,
    img5?: string,
    price: string,
    progress: string,
    progressColor: string,
}

const Project = ({ name, desc, date, price, progress, progressColor, programming, design, hosting, marketing, img1, img2, img3, img4, img5 }: IProps) => {
    return (
        <div className="relative bg-white rounded-md cursor-pointer hover:rotate-2 transition-all p-5 pb-0">
            <span className="absolute top-2 right-2 text-sm text-gray-500">{date}</span>
            <h1 className="text-lg font-bold mb-2">{name}</h1>
            <span className="text-sm text-gray-500">{desc}</span>

            {img1 || img2 || img3 || img4 || img5 ? (
                <div className="mt-5 ms-3 mb-4 flex items-center">
                    {img1 ? <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
                        <img src={`avatar/${img1}`} alt="" className="rounded-full" />
                    </span> : ''}

                    {img2 && <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
                        <img src={`avatar/${img2}`} alt="" className="rounded-full" />
                    </span>}
                    {img3 && <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
                        <img src={`avatar/${img3}`} alt="" className="rounded-full" />
                    </span>}
                    {img4 && <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
                        <img src={`avatar/${img4}`} alt="" className="rounded-full" />
                    </span>}
                    {img5 && <span className="w-12 h-12 rounded-full -ms-5 p-[2px] bg-white hover:z-10">
                        <img src={`avatar/${img5}`} alt="" className="rounded-full" />
                    </span>}






                </div>
            ):''}

            {programming || design || hosting || marketing ? (
                <div className="mt-2 border-t border-b border-y-gray-200 w-full py-3 flex gap-2 justify-end items-center flex-wrap">
                    {programming ? <span className="text-sm py-[3px] rounded-md px-[5px] bg-gray-200 hover:text-white hover:bg-blue-500 transition-all">Programming</span> : ''}
                    {design ? <span className="text-sm py-[3px] rounded-md px-[5px] bg-gray-200 hover:text-white hover:bg-blue-500 transition-all">Design</span> : ''}
                    {hosting ? <span className="text-sm py-[3px] rounded-md px-[5px] bg-gray-200 hover:text-white hover:bg-blue-500 transition-all">Hosting</span> : ''}
                    {marketing ? <span className="text-sm py-[3px] rounded-md px-[5px] bg-gray-200 hover:text-white hover:bg-blue-500 transition-all">Marketing</span> : ''}
                </div>
            ) : ''}




            <div className="flex items-center justify-center gap-10 py-4">
                <div className="relative w-full h-3 bg-slate-200 rounded-md">
                    <div className={`absolute top-0 left-0 h-full rounded-md`} style={{ width: progress, backgroundColor: progressColor }}></div>
                </div>
                <div className="text-sm font-bold">
                    <span>${price}</span>
                </div>
            </div>
        </div>
    )
}

export default Project