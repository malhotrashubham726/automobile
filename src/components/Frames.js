import React from 'react'
import img1 from "./auto2.jpg";
import img2 from "./auto3.jpg";
import img3 from "./auto4.jpg";
import { Link } from "react-router-dom";

const Frames = (props) => {
  return (
    <div className="flex-cardsmy">
      <div className="cardsmy cardsmyservice">
        <h3>Preventive Maintenance Service</h3>
        <img className="frameimgmy" src={img1} alt="" />
        <p>Periodically check and keep your car running</p>
        <button className={`togglemy-${props.color} togglemy`}><Link className="linkbtnmy" to="/pmaintenance">More Details</Link></button>
      </div>
      <div className="cardsmy cardsmyservice">
        <h3>Body Repair Service</h3>
        <img className="frameimgmy" src={img2} alt="" />
        <p>Full chasis body repair provided by the experts</p>
        <button className={`togglemy-${props.color} togglemy`}><Link className="linkbtnmy" to="/bodyrepair">More Details</Link></button>
      </div>    
      <div className="cardsmy cardsmyservice">
      <h3>Car Care Service</h3>
      <img className="frameimgmy" src={img3} alt="" />
      <p>Get your car sparkling clean in just minutes</p>
      <button className={`togglemy-${props.color} togglemy`}><Link className="linkbtnmy" to="/carcare">More Details</Link></button>
    </div>
  </div>
  )
}

export default Frames
