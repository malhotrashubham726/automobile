import React from 'react'
import carbody from "../components/Carbody.jpg"
import { Link } from "react-router-dom";

const BodyRepair = (props) => {
  return (
    <div className='top'>
      <img className="float-left" src={carbody} alt="" />
      <div className='content font-size-md'>
        <h3>Body Repair Service</h3>
        <p>Paint scratches and dents degrades the appearance of your car?Opt for AutoMob-Mechanic's body repair service.This service aims at:</p>
        <ul>
          <li>Car dent repair</li>
          <li>Car painting</li>
          <li>Complete car body repair service</li>
        </ul>
        <button className={`toggle-${props.color} toggle mb-10`}><Link className="linkbtn" to="/booking">Book Service</Link></button>&nbsp;&nbsp;
        <button className={`toggle-${props.color} toggle mb-lg`}><Link className="linkbtn" to="/services">&larr; Go Back</Link></button>
      </div>
    </div>
  )
}

export default BodyRepair
