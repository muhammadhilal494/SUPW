// import React from 'react'

import { useState } from "react"
import CircularProgressBarF from "../progressBar/CircularProgressBarF"; 
function Stories() {
  const [percentageF, setPercentageF] = useState(18);
  return (
    <div>
        <p > this is Success Stories page</p>
        <div>
          <CircularProgressBarF className=" fill-green-300"
           secondClassName="fill-none stroke-green-700" percentage={percentageF} circleWidth="200"
          />
          <input
          //  type="range"
          //  min="1"
          //  max="100"
          //  step="1"
          className=" text-center"
           value="Childern"
           onChange={(ev) =>
            setPercentageF(ev.target.value)}  />

        </div>
    </div>
  )
}

export default Stories
