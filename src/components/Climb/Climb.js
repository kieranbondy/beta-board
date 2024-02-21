import React from 'react'

export default function Climb(props) {
  return (
    <div>
        <div className='title'>{props.title}</div>
        <div>{`Difficulty: ${props.difficulty}`}</div>
        <div>{`Hold Color: ${props.holdColor}`}</div>

        <iframe width="420" height="315"
            src={props.beta}>
        </iframe>
        <button onClick={()=> props.setShowClimb(false)}>back</button>
    </div>
  )
}
