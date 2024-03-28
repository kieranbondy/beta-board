import React,  { useState } from 'react'
import './Area.css';
import Climb from '../Climb/Climb';
import testdata from '../../resources/testdata.json'
import tape from '../../resources/tape.png'
import Marker from '../Marker/Marker';
import Row from '../Row';
import SectionI from '../../resources/SectionI.png'
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
        
        {!showClimb &&
        <div className='w-full'>
            <div className='p-4 bg-lime-600 shadow font-bold'>Section I</div>
            <div className='p-4'>
                
                <img className='w-full' src={SectionI}></img>
            </div>
            <div className='m-4'>
        {climbData.map(climb => {
            return <Row key={climb.id} climb={climb} click={handleClimbClick}></Row>
        })}
        </div>
        </div>}
        
    {showClimb && 
        <Climb difficulty={currentClimb.difficulty} holdColor={currentClimb.holdColor} beta={currentClimb.betaVideo} title={currentClimb.title} setShowClimb={setShowClimb}></Climb>
    }
    </div>
  )
}
