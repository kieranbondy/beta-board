import React,  { useState } from 'react'
import './Area.css';
import Climb from '../Climb/Climb';
import testdata from '../../resources/testdata.json'

export default function Area() {
    let climbData = testdata
    const [showClimb, setShowClimb] = useState(false)
    const [currentClimb, setCurrentClimb] = useState({})
    function handleClimbClick(id){
        console.log(id)
        setShowClimb(true)
        setCurrentClimb(climbData[id])
    }
    return (
    <div>
        {!showClimb &&<div className='map-container'>
        {climbData.map(climb => {
            return <div key={climb.id} id={climb.id}  style={{paddingTop:`${climb.topPadding}`,paddingLeft:`${climb.leftPadding}` }}>
            <div className='climb' onClick={() => handleClimbClick(climb.id)}l>
                <div className='hold-color'>{climb.holdColor}</div>
                <div className='difficulty'>{climb.difficulty}</div>
            </div>
        </div>
        })}
        </div>}
    {showClimb && 
        <Climb difficulty={currentClimb.difficulty} holdColor={currentClimb.holdColor} beta={currentClimb.betaVideo} title={currentClimb.title} setShowClimb={setShowClimb}></Climb>
    }
    </div>
  )
}
