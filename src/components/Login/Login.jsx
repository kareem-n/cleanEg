import { useState } from "react";
import Joi from 'joi';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { MdOutlineError } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function Login() {


    const [adminData, setAdminData] = useState({
        email: '',
        password: ''
    })

    const [load, setload] = useState(false);

    const nav = useNavigate();


    const [dataErrors, setDataErrors] = useState(null);
    const [serverErr, setServerErr] = useState(null);


    function stylesActive(e) {
        const ele = e.target;
        ele.parentElement.classList.add("theme-border-color")
        ele.previousElementSibling.classList.replace("top-1/2", "top-1/3");
        ele.previousElementSibling.classList.add("theme-text-color");
        ele.previousElementSibling.style.fontSize = '14px';
    }

    function stylesInactive(e) {
        const ele = e.target;
        ele.parentElement.classList.remove("theme-border-color")
        ele.previousElementSibling.classList.replace("top-1/3", "top-1/2");
        ele.previousElementSibling.classList.remove("theme-text-color");
        ele.previousElementSibling.style.fontSize = '';
    }

    function onFocus(e) {
        stylesActive(e);
    }
    function onBlur(e) {
        stylesInactive(e);

        if (e.target.value) {
            stylesActive(e);

        }
    }


    function onChange(e) {
        let tmp = { ...adminData };
        tmp[e.target.name] = e.target.value;
        setAdminData(tmp);
    }


    function validate(data) {
        const schema = Joi.object({
            email: Joi.string().required()
                .messages({
                    'string.email': 'user name is not valid',
                    'string.empty': 'user name is required!'
                }),
            password: Joi.string().required()
                .messages({
                    'string.empty': 'password is required!'
                }),
        })

        return schema.validate(data, { abortEarly: false });
    }



    function onSubmit(e) {
        e.preventDefault();
        setServerErr('');
        setDataErrors(null);

        // localStorage.setItem("isLogged", true);
        // nav("/");


        const validationResult = validate(adminData);
        if (validationResult.error) {
            setDataErrors(validationResult.error.details);
        } else {
            setload(true);

            axios.post("https://cleanegypt.runasp.net/api/admins/login", adminData)
                .then(res => {
                    console.log(res.data.value.token);
                    setload(false)
                    localStorage.setItem("userToken", res.data.value.token);
                    nav("/");
                }).catch(err => {
                    setload(false);
                    console.log(err);
                    // console.log(err.response);
                    // setServerErr(err.response.data?.detail);
                    // console.log(err.response);
                })
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-7 rounded-lg shadow-xl">
                <div className="">
                    <h1 className="font-semibold text-2xl text-center">Admin Login</h1>
                </div>
                {
                    serverErr && <div className="bg-red-500 px-4 py-2 mt-5 text-white rounded-lg flex items-center">
                        <MdOutlineError className="mt-1 mr-1 text-xl" />
                        {
                            serverErr
                        }
                    </div>
                }
                <form onSubmit={onSubmit} className="mt-5 login">
                    <div className="relative border rounded-lg overflow-hidden bg-zinc-300">
                        <label className="absolute top-1/2 -translate-y-1/2 left-4 transition-all text-gray-600">Email</label>
                        <input
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChange={onChange}
                            className="w-full bg-transparent py-1 pt-6 px-4 outline-none relative"
                            type="text"
                            name="email"
                        />

                    </div>
                    {
                        dataErrors && <div className="bg-red-500 text-white px-4 py-1 mt-1 rounded-lg">
                            {
                                dataErrors.map(error => {
                                    if (error.path[0] === 'email') {
                                        return error.message;
                                    }
                                })
                            }
                        </div>
                    }

                    <div className="relative border rounded-lg overflow-hidden bg-zinc-300 mt-5">
                        <label className="absolute top-1/2 -translate-y-1/2 left-4 transition-all text-gray-600 flex items-center"> <FaLock className="mr-1" /> Password</label>
                        <input
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChange={onChange}
                            className="w-full bg-transparent py-1 pt-6 px-4 outline-none relative"
                            type="password"
                            name="password"
                        />
                    </div>
                    {
                        dataErrors &&
                        dataErrors.map(error => {
                            if (error.path[0] === 'password')
                                return <div className="bg-red-500 text-white px-4 py-1 mt-1 rounded-lg">
                                    {error.message}
                                </div>

                        })


                    }
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg w-full mt-4 py-3 ">
                        submit
                    </button>


                </form>



            </div>

            {
                load && <div className="absolute flex items-center justify-center inset-0 bg-black bg-opacity-50">
                    <Bars color="orange" />
                </div>
            }




        </div>
    )
}

export default Login