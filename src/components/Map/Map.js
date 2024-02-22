import React from 'react'
import './Map.css'
import img from '../../resources/vital_map.jpeg'

export default function Map() {
  return (
    <div>
        <img src={img} alt="Vital_bk_map" useMap="#gymmap" width="400" height ="379" />
        <map name="gymmap">
            <area shape="rect" coords="34,44,270,350" alt="Computer" onClick={()=>{console.log('works')}}/>
        </map>
    </div>
  )
}
