import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react"

interface IProps {

}

const SocialInfo = ({ }: IProps) => {
    return (
        <div className="bg-white rounded-md p-4">
            <h1 className="font-bold text-xl">Social Info</h1>
            <p className="text-gray-500 text-sm capitalize"> Social Media Information</p>
            <div className="flex flex-col gap-2 mt-3">
                <div className="flex bg-slate-100 items-center rounded-md">
                    <Twitter className="text-blue-500 p-3 border-e" size={50} color="#1DA1F2"/>
                    <input type="text" className="h-10 rounded-md p-2 text-sm focus:outline-none  w-full bg-transparent" placeholder="Twitter Username"/>
                </div>
                <div className="flex bg-slate-100 items-center">
                    <Facebook className="text-blue-500 p-3 border-e" size={50} color="#1877F2"/>
                    <input type="text" className="h-10 rounded-md p-2 text-sm focus:outline-none w-full bg-transparent" placeholder="Facebook Username"/>
                </div>
                <div className="flex bg-slate-100 items-center">
                    <Linkedin className="text-blue-500 p-3 border-e" size={50} color="#0077B5"/>
                    <input type="text" className="h-10 rounded-md p-2 text-sm focus:outline-none w-full bg-transparent" placeholder="Linkedin Username"/>
                </div>
                <div className="flex bg-slate-100 items-center">
                    <Youtube className="text-blue-500 p-3 border-e" size={50} color="#FF0000"/>
                    <input type="text" className="h-10 rounded-md p-2 text-sm focus:outline-none w-full bg-transparent" placeholder="Youtube Username"/>
                </div>
            </div>
        </div>
    )
}

export default SocialInfo