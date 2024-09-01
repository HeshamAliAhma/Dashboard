interface IProps {

}

const GeneralInfo = ({}:IProps) => {
  return (
    <div className="bg-white rounded-md p-4">
        <h1 className="font-bold text-xl">General Info</h1>
        <p className="text-gray-500 text-sm capitalize"> General Information About Your Account</p>
        <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-col gap-1">
            <label htmlFor="">First Name</label>
            <input type="text" name="" id="" className="border h-10 rounded-md p-2 text-sm focus:outline-none focus:border-blue-700" placeholder="FirstName"/>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" className="border h-10 rounded-md p-2 text-sm focus:outline-none focus:border-blue-700" placeholder="LastName"/>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <div className="flex gap-3 items-center">
            <input type="text" name="" id="" className="border flex-1 h-10 rounded-md p-2 text-sm" placeholder="o@nn.sa" disabled/>
            <button className="text-blue-600 text-lg underline opacity-70 hover:opacity-100">Change</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GeneralInfo