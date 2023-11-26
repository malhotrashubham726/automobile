import React from 'react'
import { Link } from "react-router-dom";
import maintenanceimg from "../components/PreventiveMaintenance.jpg"

const PreventiveMaintenance = (props) => {
  return (
    <div className='top'>
      <img className='float-left' src={maintenanceimg} alt="" />
      <div className='content font-size-md'>
        <h3>Maintenance Service</h3>
        <p>Looking to keep your car functioning smoothly! Save money and opt for Auto-Mob Mechanic's periodic maintenance service.This service aims at</p>
        <ul>
          <li>Air Filter replacement</li>
          <li>Engine oil replacement</li>
          <li>Break pad cleaning</li>
        </ul>
        <button className={`toggle-${props.color} toggle mb-10`}><Link className="linkbtn" to="/booking">Book Service</Link></button>&nbsp;&nbsp;
        <button className={`toggle-${props.color} toggle mb-lg`}><Link className='linkbtn' to="/services">&larr; Go Back</Link></button>
      </div>
    </div>
  )
}

export default PreventiveMaintenance
