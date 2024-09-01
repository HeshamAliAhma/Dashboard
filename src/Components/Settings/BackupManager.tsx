import { Server } from "lucide-react"
import { SetStateAction, useState } from "react";

interface IProps {

}

const BackupManager = ({ }: IProps) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
      setSelectedOption(event.target.value);
    };
    return (
        <div className="bg-white rounded-md p-4">
            <h1 className="font-bold text-xl">Backup Manager</h1>
            <p className="text-gray-500 text-sm capitalize"> Control Backup Time And Location</p>






            <div className="flex flex-col gap-2 ms-3 mt-6">
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name="option"
                        value="Daily"
                        checked={selectedOption === 'Daily'}
                        onChange={handleOptionChange}
                        className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 font-bold">Daily</span>
                </label>

                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name="option"
                        value="Weekly"
                        checked={selectedOption === 'Weekly'}
                        onChange={handleOptionChange}
                        className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 font-bold">Weekly</span>
                </label>

                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name="option"
                        value="Monthly"
                        checked={selectedOption === 'Monthly'}
                        onChange={handleOptionChange}
                        className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 font-bold">Monthly</span>
                </label>
            </div>



















            <fieldset className="flex gap-3 justify-center items-center mt-6">
                <div className="w-full">
                    <label
                        htmlFor="DeliveryStandard"
                        className="flex cursor-pointer justify-between items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                    >
                        <div className="text-center flex flex-col items-center justify-center">
                            <Server />
                            <p className="mt-1 text-gray-900">Megaman</p>
                        </div>

                        <input
                            type="radio"
                            name="DeliveryOption"
                            value="DeliveryStandard"
                            id="DeliveryStandard"
                            className="size-5 border-gray-300 text-blue-500"
                            checked
                        />
                    </label>
                </div>
                <div className="w-full">
                    <label
                        htmlFor="DeliveryZero"
                        className="flex cursor-pointer justify-between items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                    >
                        <div className="text-center flex flex-col items-center justify-center">
                            <Server />
                            <p className="mt-1 text-gray-900">Zero</p>
                        </div>

                        <input
                            type="radio"
                            name="DeliveryOption"
                            value="DeliveryZero"
                            id="DeliveryZero"
                            className="size-5 border-gray-300 text-blue-500"
                            checked
                        />
                    </label>
                </div>

                <div className="w-full">
                    <label
                        htmlFor="DeliveryPriority"
                        className="flex cursor-pointer justify-between  items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                    >
                        <div className="text-center flex flex-col items-center justify-center">
                            <Server />
                            <p className="mt-1 text-gray-900">Sigma</p>
                        </div>

                        <input
                            type="radio"
                            name="DeliveryOption"
                            value="DeliveryPriority"
                            id="DeliveryPriority"
                            className="size-5 border-gray-300 text-blue-500"
                        />
                    </label>
                </div>
            </fieldset>

        </div>
    )
}

export default BackupManager