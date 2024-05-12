// import React from 'react'

const PatientsCard = (props) => {
  return (
    <div>
      <div
      className="m-14 mr-14 bg-white flex rounded-lg mt-2 gap-96"
      id="1">
        <ul
        className="flex text-left gap-5 "
        id="l">
          <li>
            <img 
             className=" w-28 h-28 ml-8 rounded-lg mt-3 mb-3 "
             src="https://images.pexels.com/photos/18114939/pexels-photo-18114939/free-photo-of-louvre-museum-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="" />
          </li>
          <li className="mt-3 mb-3">
            <h1 className=" font-bold text-lg">Akram Khan</h1>
            <h3 className=" font-semibold">Naeem Uddin</h3>
            <h5 className=" mt-2 text-green-400">ReferenceNumber 123</h5>
            <button 
            type=" "
            className=" font-bold bg-blue-200 p-1">Heart Surgery</button>
          </li>
        </ul>
        <ul
        className=" flex gap-5 mt-10 ml-40"
        id="r">
          <li className="mt-3 mb-3">
            <h3>Referred Hospital:</h3>
            <h3>Treatment Status:</h3>
          </li>
          <li className="mt-3 mb-3">
            <h2
            className=" text-green-400"
            >Northwest hospital</h2>
            <h2
            className={props.className}
            >{props.status}</h2>
            <button
            className=" mt-2 bg-green-600 text-white rounded-md p-1"
            >Complete Profile</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PatientsCard
