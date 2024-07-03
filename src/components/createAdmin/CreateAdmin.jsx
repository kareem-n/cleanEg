import { useState } from "react";
import { MdOutlineError } from "react-icons/md";
import Joi from 'joi';

function CreateAdmin() {

  const [newAdminData, setNewAdminData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    year: '',
    month: '',
    day: '',
    email: "",
    password: ""
  })


  const [ClientErrors, setClientErrors] = useState([]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;


    if (name === "dob") {
      const currentDate = new Date;
      const dob = new Date(value);
      let years = currentDate.getFullYear() - dob.getFullYear();


      setNewAdminData({
        ...newAdminData,
        year: years,
        month: dob.getMonth() + 1,
        day: dob.getDay()
      })
    }
    else {
      setNewAdminData({
        ...newAdminData, [name]: value
      })

    }
  }


  const ValidateNewAdminData = (newAdminData) => {

    const schema = Joi.object({
      firstName: Joi.string().required().messages({
        "string.empty": 'first name is required'
      })
    })


    return schema.validate(newAdminData, { abortEarly: false });
  }



  const handleAdminCreate = (e) => {
    e.preventDefault();
    setClientErrors([])
    const validResults = ValidateNewAdminData(newAdminData);


    if (validResults.error) {
      validResults.error.details.map((errDet) => {

        const err = {
          path: errDet.path[0],
          message: errDet.message
        }

        setClientErrors((prevClientErrors) => [...prevClientErrors, err])
      })
    } else {

    }



    // console.log(0);
  }


  return (
    <div
      style={{
        marginLeft: '250px',
      }}
      className="mt-10 flex justify-center"

    >

      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Create new Admin</h2>
        {/* 
          {
  "firstName": "string",
  "lastName": "string",
  "city": "string",
  "street": "string",
  "year": 42,
  "month": 42,
  "day": 42,
  "email": "string",
  "password": "string"
} */}
        <form onSubmit={handleAdminCreate} className="mt-5 w-64 flex flex-col gap-y-5">
          {/*  */}
          {/*  */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleInputChange}
              onFocus={(e) => {
                e.target.previousElementSibling.classList.add("text-green-700")
              }}
              onBlur={(e) => {
                e.target.previousElementSibling.classList.remove("text-green-700")
              }}
              className="border-2 py-1 px-3 focus:border-green-500 rounded-md outline-none"
              type="text"
              id="firstName"
              name="firstName"
            />
            {
              ClientErrors && ClientErrors.map((error, index) => {
                if (error.path === "firstName") {
                  return <div key={index} className="bg-red-500 py-1 px-3 rounded-lg text-md text-white flex items-center">
                    <MdOutlineError className="mr-1 mt-1" /> {error.message}
                  </div>
                }
              })
            }

          </div>
          {/*  */}
          {/*  */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleInputChange}
              onFocus={(e) => {
                e.target.previousElementSibling.classList.add("text-green-700")
              }}
              onBlur={(e) => {
                e.target.previousElementSibling.classList.remove("text-green-700")
              }}
              className="border-2 py-1 px-3 focus:border-green-500 rounded-md outline-none"
              type="text"
              id="lastName"
              name="firstName"
            />
            {
              ClientErrors && ClientErrors.map((error, index) => {
                if (error.path === "lastName") { 
                  return <div key={index} className="bg-red-500 py-1 px-3 rounded-lg text-md text-white flex items-center">
                    <MdOutlineError className="mr-1 mt-1" /> {error.message}
                  </div>
                }
              })
            }

          </div>
          {/*  */}
          {/*  */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="city">City</label>
            <input
              onChange={handleInputChange}
              onFocus={(e) => {
                e.target.previousElementSibling.classList.add("text-green-700")
              }}
              onBlur={(e) => {
                e.target.previousElementSibling.classList.remove("text-green-700")
              }}
              className="border-2 py-1 px-3 focus:border-green-500 rounded-md outline-none"
              type="text"
              id="city"
              name="city"
            />
            {
              ClientErrors && ClientErrors.map((error, index) => {
                if (error.path === "lastName") { 
                  return <div key={index} className="bg-red-500 py-1 px-3 rounded-lg text-md text-white flex items-center">
                    <MdOutlineError className="mr-1 mt-1" /> {error.message}
                  </div>
                }
              })
            }

          </div>
          {/*  */}
          {/*  */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="street">Street</label>
            <input
              onChange={handleInputChange}
              onFocus={(e) => {
                e.target.previousElementSibling.classList.add("text-green-700")
              }}
              onBlur={(e) => {
                e.target.previousElementSibling.classList.remove("text-green-700")
              }}
              className="border-2 py-1 px-3 focus:border-green-500 rounded-md outline-none"
              type="text"
              id="street"
              name="street"
            />
{
              ClientErrors && ClientErrors.map((error, index) => {
                if (error.path === "street") { 
                  return <div key={index} className="bg-red-500 py-1 px-3 rounded-lg text-md text-white flex items-center">
                    <MdOutlineError className="mr-1 mt-1" /> {error.message}
                  </div>
                }
              })
            }

          </div>
          {/*  */}
          {/*  */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="dob">Date of Birth</label>
            <input
              onChange={handleInputChange}
              onFocus={(e) => {
                e.target.previousElementSibling.classList.add("text-green-700")
              }}
              onBlur={(e) => {
                e.target.previousElementSibling.classList.remove("text-green-700")
              }}
              className="border-2 py-1 px-3 focus:border-green-500 rounded-md outline-none"
              type="date"
              id="dob"
              name="dob"
            />
            {
              ClientErrors && ClientErrors.map((error, index) => {
                if (error.path === "lastName") { 
                  return <div key={index} className="bg-red-500 py-1 px-3 rounded-lg text-md text-white flex items-center">
                    <MdOutlineError className="mr-1 mt-1" /> {error.message}
                  </div>
                }
              })
            }

          </div>


          <button
            type="submit"
            className="border border-green-500 text-green-700 hover:bg-green-500 hover:text-white w-full mt-3 py-2 rounded-md">
            Create
          </button>

        </form>





      </div>


    </div>
  )
}

export default CreateAdmin