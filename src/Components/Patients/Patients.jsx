// import React from 'react'
import { Link } from "react-router-dom"
import PatientsCard from "../Cards/PatientsCard"
// import NewPatients from "./NewPatients"
function Patients() {
  return (
    <main
     className=" top-0 mt-0 bg-gray-200 w-full min-h-screen h-full  text-gray-500">
      <div className=" flex justify-between  ">
        <h1 className=" ml-14">Patients</h1>
        <Link to="/NewPatients"
         className="mr-14 text-end bg-orange-600 p-1 rounded-md text-white">
          <button>+ New Patients</button>
        </Link>
      </div>
      
      <PatientsCard status="Completed" className=" text-blue-400"/>
      <PatientsCard status="In Progress" className=" text-yellow-500" />
      <PatientsCard status="In Progress" className=" text-yellow-500"/>
      <PatientsCard status="In Progress" className=" text-yellow-500"/>
    </main>
  )
}

export default Patients
