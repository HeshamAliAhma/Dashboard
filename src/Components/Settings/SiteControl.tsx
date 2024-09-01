import ToggleSwitch from "./Components/ToggleSwitch"

interface IProps {

}

const SiteControl = ({ }: IProps) => {
    return (
        <div className="bg-white rounded-md p-4">
            <h1 className="font-bold text-xl">Site Control</h1>
            <p className="text-gray-500 text-sm capitalize"> control the website if there is maintenace</p>
            <div className="flex justify-between items-center my-5">
                <div>
                    <h1 className="font-bold text-base">Website Control</h1>
                    <p className="text-gray-500 text-sm capitalize">Open/Close website and type the reason</p>
                </div>
                <ToggleSwitch name={"siteControl"} />
            </div>
            <div>
                <textarea name="" id="" className="border h-36 border-slate-300 rounded-md p-3 w-full resize-none text-sm" placeholder="Close Message Content"></textarea>
            </div>
        </div>
    )
}

export default SiteControl