import React from 'react'

function CircularProgressBarF({percentage, circleWidth, className, secondClassName}) {
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = ((100 - percentage)/100) * dashArray;
    return (
    <div>
      <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={'0 0 ${circleWidth} ${circleWidth}'}>
        <circle
        className={className}
        cx={circleWidth/2}
        cy={circleWidth/2}
        strokeWidth="15px"
        r={radius}
        />
        <circle
        className={secondClassName}
        cx={circleWidth/2}
        cy={circleWidth/2}
        strokeWidth="15px"
        r={radius}
        style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
        }}
        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
        className=' font-bold text-2xl to-blue-700'
         x="50%"
         y="50%"
         dy="0.3em"
         textAnchor='middle'>
            {percentage}%
        </text>
      </svg>
    </div>
  )
}

export default CircularProgressBarF
