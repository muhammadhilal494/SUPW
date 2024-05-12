// import React from 'react'
import { NavLink } from "react-router-dom"

function NewPatients() {
  return (
    <main className=" top-0 mt-0 bg-gray-200 w-full h-auto text-gray-500">
        <div id="body" className="flex ml-14">
            <h1 className="mr-2 text-gray-500">Patients /</h1>
            <NavLink
                                to="/NewPatients"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "text-orange-400 underline " : "text-gray-700"}
                                          border-b border-gray-100 hover:bg-gray-50 
                                          lg:hover:bg-transparent lg:border-0
                                           hover:text-orange-400 lg:p-0`
                                    }
                                >
                                    NewPatient
                                </NavLink>
        </div>

        <div id="1"
        className=" pb-20 rounded-lg ml-16 mr-16 m-5 p-4 bg-white text-black">
            <h1 className=" font-semibold mb-3">Patient ID</h1>
            <div className="  flex gap-10">
                
                <div>
                    <p className=" mb-1">Full name</p>
                    <input type="text" name="FullName" placeholder="Enter here"
                     className=" pl-5 pr-24 rounded-md bg-gray-200 text-gray-600 border-gray-600 border " />                   
                </div>
                <div>
                    <p className=" mb-1">Gender</p>
                    <select id="gender" name="gender" placeholder="Enter here"
                     className=" pl-5 pr-24 rounded-md bg-gray-200 text-gray-600 border-gray-600 border "
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                    </select>
                   
                </div>
                <div>
                    <p className=" mb-1">National ID Card number </p>
                    <input type="text" placeholder="Enter here" 
                    className=" pl-5 pr-24 rounded-md bg-gray-200 text-gray-600 border-gray-600 border "
                    />
                </div>
                <div>
                    <p className=" mb-1">Guardian</p>
                    <input type="text" placeholder="Enter here"
                    className=" pl-5 pr-24 rounded-md bg-gray-200 text-gray-600 border-gray-600 border " />
                </div>
            </div>
        </div>
      
        <div id="2"
        className=" pb-10 rounded-lg ml-16 mr-16 p-4 bg-white text-black">
        <h1 className=" font-semibold mb-3">Patient Address </h1>
            <div className="flex gap-5">
                <div>
                    <p className=" mb-1">Present Address </p>
                    <input type="text" placeholder="Enter here"
                    className=" pl-5 pr-96 rounded-md bg-gray-200 text-gray-600 border-gray-600 border "
                    />
                </div>
                <div>
                    <p className=" mb-1">Permanet Address </p>
                    <input type="text" placeholder="Enter here"
                    className=" pl-5 pr-96 rounded-md bg-gray-200 text-gray-600 border-gray-600 border "
                    />
                </div>
            </div>
        </div>

        <div id="3"
        className=" pb-10 rounded-lg ml-16 mr-16 m-5 p-4 bg-white text-black">
        <h1 className=" font-semibold mb-3">Patient Treatment Info  </h1>
            <div className="flex gap-5">
                <div>
                    <p className=" mb-1">Reference number </p>
                    <input type="text" placeholder="Enter here"
                    className=" pl-5 pr-60 rounded-md bg-gray-200 text-gray-600 border-gray-600 border "
                    />
                </div>
                <div>
                    <p className=" mb-1">Treatment </p>
                    <input type="text" placeholder="Enter here"
                    className=" pl-5 pr-60 rounded-md bg-gray-200 text-gray-600 border-gray-600 border "
                    />
                </div>
                <div>
                    <p className=" mb-1">Referred Hospital </p>
                    <input type="text" placeholder="Enter here"
                    className=" pl-5 pr-52 rounded-md bg-gray-200 text-gray-600 border-gray-600 border "
                    />
                    
                </div>
            </div>
        </div>
        <div className="flex justify-end">
        <button
         className=" mr-16 mb-5 pl-2 pr-2 p-1 rounded-md bg-green-700 text-white"
         >Finish</button>
        </div>       
    </main>

  )
}

export default NewPatients
