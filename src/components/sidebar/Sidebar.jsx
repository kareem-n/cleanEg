import { Link } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";

function Sidebar() {
    return (
        <div style={{
            width: '250px'
        }}


            className="bg-white shadow-md fixed top-0 bottom-0 left-0 py-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold">Clean Egypt</h2>
            <p className="my-10">Logo</p>

            <p>email@gmail.com</p>
            <ul className="w-full">
                <li className="text-green-600   bg-gray-200 cursor-pointer w-full mt-4">
                    <Link className="flex items-center py-2 px-4" to={'/allReports'}>
                        <FaShoppingBag className="mr-2" /> All Reports
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar