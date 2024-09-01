import ToggleSwitch from "./Components/ToggleSwitch"

interface IProps {

}

const SecurityInfo = ({}:IProps) => {
  return (
    <div className="bg-white rounded-md p-4">
        <h1 className="font-bold text-xl">Security Info</h1>
        <p className="text-gray-500 text-sm capitalize"> Security Information About Your Account</p>
        <div className="border-b py-4 flex items-center justify-between">
            <div className="flex flex-col gap-2">
                <p className="font-bold text-base">Password</p>
                <span className="text-gray-500 text-sm">Last Change On 01/01/2022</span>
            </div>
            <button className="text-white bg-blue-600 py-1 px-2 rounded-md">Change</button>
        </div>
        <div className="border-b py-4 flex items-center justify-between">
            <div className="flex flex-col gap-2">
                <p className="font-bold text-base">Two-Factor Authentication</p>
                <span className="text-gray-500 text-sm">Enable/Disable The Feature</span>
            </div>
            <ToggleSwitch name={"security"}/>
        </div>
        <div className=" py-4 flex items-center justify-between">
            <div className="flex flex-col gap-2">
                <p className="font-bold text-base">Devices</p>
                <span className="text-gray-500 text-sm">Check The Login Devices List</span>
            </div>
            <button className="bg-slate-200 py-1 px-2 rounded-md">Devices</button>
        </div>
    </div>
  )
}

export default SecurityInfo