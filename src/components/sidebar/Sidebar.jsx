import { Link } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from '../../assets/Logo.svg'

function Sidebar() {

    const [userData, setUserData] = useState(null);


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


    return (
        <div style={{
            width: '250px'
        }}

            className="bg-white shadow-md fixed top-0 bottom-0 left-0 py-10 flex flex-col items-center">
            {
                userData && <>
                    <h2 className="text-2xl font-bold">Clean Egypt</h2>
                    <img src={logo} className="py-10" alt="clean egypt logo" />

                    <p className="font-bold">{userData.name}</p>
                    <p className="mt-2">{userData.email}</p>
                    <ul className="w-full">
                        <li className="text-green-600   bg-gray-200 cursor-pointer w-full mt-4">
                            <Link className="flex items-center py-2 px-4" to={'/allReports'}>
                                <FaShoppingBag className="mr-2" /> All Reports
                            </Link>
                        </li>
                    </ul>
                </>
            }


        </div>
    )
}

export default Sidebar