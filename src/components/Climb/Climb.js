import React from 'react'
import './Climb.css'
export default function Climb(props) {

  return (
    <div>
        <div className='header-container'>
          <button onClick={()=> props.setShowClimb(false)}>back</button>
        </div>
        <div className='title'>{`"${props.title}"`}</div>

        {
            props.beta == "" &&
            <div>No Beta we are not strong enough yet</div>
        }
        {
            props.beta != "" &&
            <div className=''>
              <iframe width="90%" height="350"
                  src={props.beta}>
              </iframe>
            </div>
        }
        <div className='info-container'>
          <div className='info'>{`Difficulty: ${props.difficulty}`}</div>
          <div className='info'>{`Hold Color: ${props.holdColor}`}</div>
        </div>
        
        
    </div>
  )
}
