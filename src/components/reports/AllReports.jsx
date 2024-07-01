import React from 'react'
import { Link } from 'react-router-dom'

function AllReports() {
  return (
    <div
        style={{
            width:'400px'
        }}
        className='border-r-2 py-8'
    >
        <h2 className='font-bold text-xl'>Reports This Week</h2>
        <p className='mt-2 text-gray-500'>
            600 Results
        </p>

        <div className="gap-y-5 mt-5 flex flex-col">
            <div className="flex gap-x-7 items-center ">
                <img src="" className='w-14 h-14 rounded-full object-cover' alt="" />
                <div className="">
                    <h3>Name</h3>
                    <h3>Location</h3>
                    <Link className='mt-2 text-green-500 block font-bold text-md'>View report</Link>
                </div>

            </div>

            <div className="flex gap-x-7 items-center gap-y-5">
                <img src="" className='w-14 h-14 rounded-full object-cover' alt="" />
                <div className="">
                    <h3>Name</h3>
                    <h3>Location</h3>
                    <Link className='mt-2 text-green-500 block'>View report</Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AllReports