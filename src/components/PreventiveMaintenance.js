import React from 'react'
import { Link } from "react-router-dom";
import maintenanceimg from "../components/PreventiveMaintenance.jpg"

const PreventiveMaintenance = (props) => {
  return (
    <div className='servicesmy'>
      <h3>Preventive Maintenance Service</h3>
      <img className='service-imgmy' src={maintenanceimg} alt="" />
      <p>Looking to keep your car functioning smoothly! Save money and opt for Auto-Mob Mechanic's periodic maintenance service.This service aims at</p>
      <ul>
        <li>Air Filter replacement</li>
        <li>Engine oil replacement</li>
        <li>Break pad cleaning</li>
      </ul>
      <button className={`togglemy-${props.color} togglemy`}><Link className="linkbtnmy" to="/booking">Book Service</Link></button>&nbsp;&nbsp;
      <button className={`togglemy-${props.color} togglemy`}><Link className='linkbtnmy' to="/services">&larr; Go Back</Link></button>
    </div>
  )
}

export default PreventiveMaintenance
