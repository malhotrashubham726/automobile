import React from 'react'
import carcare from "../components/carcare1.jpg";
import { Link } from "react-router-dom";

const CarCare = (props) => {
  return (
    <div className='servicesmy'>
      <h3>Car Care Service</h3>
      <img className='service-imgmy' src={carcare} alt="" />
      <p>Looking to Keep your car neat and clean? Save money and opt for Auto-Mechanic's car care service.We offer an extensive range of car wash and cleaning services such as:</p>
      <ul>
        <li>Basic car washing and Vacuuming</li>
        <li>Detailed interior and upholstery cleaning</li>
        <li>Protective Coating</li>
        <li>Dashboard planning</li>
      </ul>
      <button className={`togglemy-${props.color} togglemy`}><Link className="linkbtnmy" to="/booking">Book Service</Link></button>&nbsp;&nbsp;
      <button className={`togglemy-${props.color} togglemy`}><Link className="linkbtnmy" to="/services">&larr; Go Back</Link></button>
    </div>
  )
}

export default CarCare
