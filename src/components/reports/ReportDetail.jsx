
function ReportDetail() {
    return (
        <div className="mt-10 py-10 px-20 w-full">
            <div className="flex items-center gap-x-5">
                <img src="" className="w-20 h-20 rounded-full object-cover" alt="" />
                <h2>Name </h2>
            </div>
            <div className="mt-3 text-gray-500">
                Report date
            </div>
            <div className="mt-3 flex gap-x-3">
                <button className="bg-green-500 py-2 px-6 rounded-lg overflow-hidden text-white opacity-80 hover:opacity-100">Accept</button>
                <button className="px-6 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white">Reject</button>
            </div>

            <div className="mt-5 border-2 w-full px-3 py-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                    <img src="" className="w-8 h-8 rounded-full" alt="" />
                    <p className="text-blue-500">0100000000</p>
                </div>
                <p>email.gameil.com</p>
            </div>

            <div className="mt-4">
                <h3 className="font-bold">Donation type</h3>
                <ul className="list-disc pl-8">
                    <li>Gover</li>
                    <li>City</li>
                    <li>Postal Code : </li>
                </ul>
            </div>

            <div className="mt-6 flex justify-center">
                <div className="w-2/3">
                    <img src="" className="block w-full h-96 rounded-xl" alt="" />
                </div>

            </div>


        </div>
    )
}

export default ReportDetail