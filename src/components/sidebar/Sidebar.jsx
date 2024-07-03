import { Link, useNavigate } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from '../../assets/Logo.svg'
import { Circles } from "react-loader-spinner";
import { IoMdLogOut } from "react-icons/io";


function Sidebar() {

    const [userData, setUserData] = useState(null);
    const nav = useNavigate();

    useEffect(() => {

        axios.get("http://cleanegypt.runasp.net/api/admins", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            }
        }).then(res => {
            setUserData(res.data.value)
            console.log(res.data.value)
        })

    }, [])


    const handleLogout = () => {
        localStorage.clear();
        nav('/login')
    }



    return (
        <div style={{
            width: '250px'
        }}

            className="bg-white shadow-md fixed top-0 bottom-0 left-0 py-10 flex flex-col justify-between">

            <div className="flex flex-col items-center w-full">
                <h2 className="text-2xl font-bold">Clean Egypt</h2>
                <img src={logo} className="py-10" alt="clean egypt logo" />

                {
                    userData ? <>
                        <p className="font-bold">{userData.name}</p>
                        <p className="mt-2">{userData.email}</p>
                    </> : <>
                        <div className="">
                            <Circles />
                        </div>
                    </>
                }

                <ul className="w-full">
                    <li className="text-green-600   bg-gray-200 cursor-pointer w-full mt-4">
                        <Link className="flex items-center py-2 px-4" to={'/allReports'}>
                            <FaShoppingBag className="mr-2" /> All Reports
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <button
                    onClick={ handleLogout } 
                className="w-full p-3 flex items-center hover:bg-gray-300 hover:bg-opacity-30">
                    <IoMdLogOut className="mr-2" size={23} /> Admin Logout
                </button>
            </div>





        </div>
    )
}

export default Sidebar