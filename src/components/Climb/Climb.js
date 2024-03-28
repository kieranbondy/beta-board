import React from 'react'
import './Climb.css'
import Comments from '../Comments'
export default function Climb(props) {

  return (
    <div>
        <div className='header-container'>
          <button onClick={()=> props.setShowClimb(false)}>back</button>
        </div>
        <div className='title'>{`"${props.title}"`}</div>
        <div className='info-container mb-2'>
          <div className='pr-2'>Hold: </div><div className={`mr-2 w-6 h-6 border-solid border-2 border-black rounded-full`} style={{ backgroundColor: props.holdColor }}></div>
          <div className='pr-2'>Grade: </div><div className={`mr-2 w-6 h-6 border-solid border-2 border-black rounded-full`} style={{ backgroundColor: props.difficulty }}></div>
        </div>
        {
            props.beta == "" &&
            <div>No Beta we are not strong enough yet</div>
        }
        {
            props.beta != "" &&
            <div className='text-center'>
              <iframe className="mx-auto" width="90%" height="350" src={props.beta}></iframe>

              <Comments></Comments>
            </div>
            
        }
        
        
        
    </div>
  )
}
