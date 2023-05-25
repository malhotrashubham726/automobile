import React from 'react'
import carbody from "../components/Carbody.jpg"
import { Link } from "react-router-dom";

const BodyRepair = (props) => {
  return (
    <div className='servicesmy'>
      <h3>Body Repair Service</h3>
      <img className="service-imgmy" src={carbody} alt="" />
      <p>Paint scratches and dents degrades the appearance of your car?Opt for AutoMob-Mechanic's body repair service.This service aims at:</p>
      <ul>
        <li>Car dent repair</li>
        <li>Car painting</li>
        <li>Complete car body repair service</li>
      </ul>
      <button className={`togglemy-${props.color} togglemy`}><Link className="linkbtnmy" to="/booking">Book Service</Link></button>&nbsp;&nbsp;
      <button className={`togglemy-${props.color} togglemy`}><Link className="linkbtnmy" to="/services">&larr; Go Back</Link></button>
    </div>
  )
}

export default BodyRepair
