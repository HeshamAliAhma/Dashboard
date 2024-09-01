interface IProps {

}

const WidgetsControl = ({ }: IProps) => {
    return (
        <div className="bg-white rounded-md p-4">
            <h1 className="font-bold text-xl">Site Control</h1>
            <p className="text-gray-500 text-sm capitalize"> control the website if there is maintenace</p>


            <fieldset className="mt-3">

                <div className="divide-y divide-gray-200">
                    <label
                        htmlFor="Option1"
                        className="-mx-4 flex cursor-pointer items-start gap-4 p-4 py-2 has-[:checked]:bg-blue-50"
                    >
                        <div className="flex items-center">
                            &#8203;
                            <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
                        </div>
                        <div>
                            <strong className="font-medium text-gray-900"> Quick Draft </strong>
                        </div>
                    </label>

                    <label
                        htmlFor="Option2"
                        className="-mx-4 flex cursor-pointer items-start gap-4 p-4 py-2 has-[:checked]:bg-blue-50"
                    >
                        <div className="flex items-center">
                            &#8203;
                            <input type="checkbox" className="size-4 rounded border-gray-300" id="Option2" />
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900"> Yearly Targets </strong>

                        </div>
                    </label>

                    <label
                        htmlFor="Option3"
                        className="-mx-4 flex cursor-pointer items-start gap-4 p-4 py-2 has-[:checked]:bg-blue-50"
                    >
                        <div className="flex items-center">
                            &#8203;
                            <input type="checkbox" className="size-4 rounded border-gray-300" id="Option3" />
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900"> Tickets Statistics</strong>
                        </div>
                    </label>
                    <label
                        htmlFor="Option4"
                        className="-mx-4 flex cursor-pointer items-start gap-4 p-4 py-2 has-[:checked]:bg-blue-50"
                    >
                        <div className="flex items-center">
                            &#8203;
                            <input type="checkbox" className="size-4 rounded border-gray-300" id="Option4" />
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900"> Latest News</strong>
                        </div>
                    </label>
                    <label
                        htmlFor="Option5"
                        className="-mx-4 flex cursor-pointer items-start gap-4 p-4 py-2 has-[:checked]:bg-blue-50"
                    >
                        <div className="flex items-center">
                            &#8203;
                            <input type="checkbox" className="size-4 rounded border-gray-300" id="Option5" />
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900"> Latest Task</strong>
                        </div>
                    </label>
                    <label
                        htmlFor="Option6"
                        className="-mx-4 flex cursor-pointer items-start gap-4 p-4 py-2 has-[:checked]:bg-blue-50"
                    >
                        <div className="flex items-center">
                            &#8203;
                            <input type="checkbox" className="size-4 rounded border-gray-300" id="Option6" />
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900"> Top Search Items</strong>
                        </div>
                    </label>
                </div>
            </fieldset>


        </div>
    )
}

export default WidgetsControl