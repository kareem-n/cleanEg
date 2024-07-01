import { FaSearch } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";


function Navbar() {
    return (
        <div
            style={{
                marginLeft: '250px',
            }}
            className="py-10 px-7 flex justify-between bg-white shadow-lg"
        >
            <div className="bg-red-500 relative rounded-md overflow-hidden border-2 border-black">
                <input
                    style={{
                        width: '300px',
                    }}
                    className=" outline-none py-1 px-2 pl-9" type="text" placeholder="search..." />
                <div className="absolute left-0 top-0  bottom-0 flex items-center px-2">

                    <FaSearch />
                </div>
            </div>

            <div className="flex items-center ">
                <div className="relative">
                    <IoIosNotifications color="#457E61" size={30} />
                    <span className="absolute block w-2 h-2 rounded-full bg-red-500 top-0 right-0"></span>
                </div>
                <div className="relative px-3 ml-2">
                    <FaEnvelope color="#457E61" size={24} />
                    <span className="block absolute right-0 top-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
            </div>


        </div>
    )
}

export default Navbar