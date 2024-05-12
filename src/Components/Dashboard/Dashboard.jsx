// import React from 'react'
import { useState } from "react"
import CircularProgressBarM from "../progressBar/CircularProgressBarM"; 
import CircularProgressBarF from "../progressBar/CircularProgressBarF";
import CircularProgressBarC from "../progressBar/CircularProgressBarC";


function Dashboard() {
  const [percentageM, setPercentageM] = useState(18);
  const [percentageF, setPercentageF] =useState(15);
  const [percentageC, setPercentageC] =useState(67);
  return (
    <main
    className="bg-gray-200 min-h-screen ">
      <h1 className="ml-14 text-xl ">Dashboard</h1>
      <div
      id="t"
      className="flex gap-5 mt-10"
      >
        <div
        className="bg-white text-gray-500 w-full ml-14 rounded-2xl p-5"
        id="tl">
          <h1 className="p-2 font-bold">Total patients recovered</h1>
          <h1 className=" underline p-2 text-5xl font-semibold">987</h1>
          <ul className="flex flex-row">
            
          <div>
          <CircularProgressBarM percentage={percentageM} circleWidth="200" 
          className=" fill-blue-300" secondClassName="fill-none stroke-blue-700"
          />
          <input
          //  type="range"
          //  min="1"
          //  max="100"
          //  step="1"
          className=" text-center"
           value="Male"
           onChange={(ev) =>
            setPercentageM(ev.target.value)}  />
          </div>

          <div>
          <CircularProgressBarF percentage={percentageF} circleWidth="200"
          className=" fill-red-300" secondClassName="fill-none stroke-red-700"
          />
          <input
          //  type="range"
          //  min="1"
          //  max="100"
          //  step="1"
          className=" text-center"
           value="Female"
           onChange={(ev) =>
            setPercentageF(ev.target.value)}  />
        </div>

        <div>
          <CircularProgressBarC percentage={percentageC} circleWidth="200"
          className=" fill-green-300" secondClassName="fill-none stroke-green-700"
           />
          <input
          //  type="range"
          //  min="1"
          //  max="100"
          //  step="1"
          className=" text-center"
           value="Childern"
           onChange={(ev) =>
            setPercentageC(ev.target.value)}  />

        </div>

          </ul>
        </div>
        <div
        className="bg-white text-gray-500 w-full mr-14 rounded-2xl p-5"
        id="tr">
        <h1 className="font-bold p-2">Application Breakdown</h1>
        <div id="trt"
        className="bg-blue-100 ml-4 mr-4 mt-2 mb-2 text-center p-2">
          <h1 className="p-2 font-bold">7040</h1>
          <p className="p-2">Patients Referred</p>
        </div>
        <div id="trb"
        className="bg-red-100 ml-4 mr-4 mt-2 mb-2 text-center p-2"
        >
          <h1 className="p-2 font-bold">2940</h1>
          <p className="p-2">Patients Treated</p>
        </div>
        </div>
     </div>
    
    <div
    id="b"
    className="  mr-14 rounded-2xl bg-white text-gray-500 pt-10 ml-14 mt-10">
    <div className=" w-full flex flex-row justify-between items-center">
      <div className="flex flex-row gap-5">
      <p className="p-2">TOTAL FUNDS UTILIZED</p>
      <button className=" bg-orange-300 text-orange-500  pl-2 pr-2 rounded-lg">2024</button>
    </div>
    <div className="flex flex-row gap-3 mr-3">
      <p className=" bg-blue-300 text-blue-500 p-2 rounded-lg pl-3 pr-3">All</p>
      <p className="">Northwest</p>
      <p>RMI</p>
    </div>
    </div>
    
      
      <h1 className="text-3xl font-bold p-2">568,987<sup>PKR</sup></h1>
    </div>
    </main>
    
  )
}

export default Dashboard