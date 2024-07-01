import axios from "axios";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { Bars } from "react-loader-spinner";

function Light({ setLight, mail }) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (mail) {
            axios.get(`https://citizenconnectt.pythonanywhere.com/report/user-detail/${mail}/`).then(res => {
                setUserData(res.data)
            })
        }
    }, [mail])
    return (
        <div className="inset-0 fixed bg-black bg-opacity-80">
            {
                userData ? <div className="flex">
                    <div
                        onClick={() => setLight(false)}
                        className="absolute z-10 top-0 m-10 cursor-pointer">
                        <ImCross className="text-4xl text-white" />
                    </div>

                    <div
                        onClick={() => setLight(false)}
                        className="absolute inset-0 "></div>
                    <div style={{
                        width: '300px'
                    }} className="absolute right-0 top-0 bottom-0 bg-gray-700 text-white px-4 py-5  text-xl">
                        <div className="flex justify-center">
                            <CgProfile className="mb-3 text-gray-400" size={80} />
                        </div>

                        <p>
                            first name : {userData.first_name}
                        </p>
                        <p>
                            last name : {userData.last_name}
                        </p>
                        <p>
                            ID : {userData.id}
                        </p>
                        <p title={`${userData.email_or_phone}`} className="text-nowrap text-ellipsis whitespace-nowrap overflow-hidden">
                            email : {userData.email_or_phone}
                        </p>
                    </div>
                </div> : <div className="absolute inset-0 flex items-center justify-center">
                    <Bars width={70} />
                </div>
            }
        </div>
    )
}

export default Light