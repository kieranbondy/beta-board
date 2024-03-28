import React from 'react'
import { FaRegStar } from "react-icons/fa";

export default function Row(props) {
  let difficulties = {"green":["#3D9C1E", "#317A19"], "yellow":["#F7FD3B","#DFE535"],"orange":["#F19E1E", "#D78D1B"],"red":["#CB0D0D","#9B0909"],"purple":["#3B077A","#2B045A"],"black":["#000000", "#000000"],"white":["#FFFFFF","#F2F2F2" ]}

  return (
    <div className='py-3 px-6 w-full mt-2 bg-white shadow rounded-lg flex justify-between align-middle' onClick={()=>props.click(props.climb.id)}>
        <div className='flex'>
          <FaRegStar size={20} color='rgb(55 65 81)'/>
          <div className='px-2 font-bold text-gray-700'>{props.climb.holds}</div>
        </div>
        <div className='pr-2'></div><div className={`mr-2 w-6 h-6 rounded-full`} style={{ backgroundColor: difficulties[props.climb.difficulty][0], borderColor: difficulties[props.climb.difficulty][1], borderWidth:"2px" }}></div>
    </div>
  )
}
