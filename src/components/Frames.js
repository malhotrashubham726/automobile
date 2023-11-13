import React from 'react'
import img1 from "./carmaintenance.jpg";
import img2 from "./auto3.jpg";
import img3 from "./auto4.jpg";
import { Link } from "react-router-dom";

const Frames = (props) => {
  return (
    <div className="flex-cards">
      <div className="cards cards-service">
        <h3>Maintenance Service</h3>
        <img className="frameimg" src={img1} alt="" />
        <p>Periodically check and keep your car running</p>
        <button className={`toggle-${props.color} toggle`}><Link className="linkbtn" to="/pmaintenance">More Details</Link></button>
      </div>
      <div className="cards cards-service">
        <h3>Body Repair Service</h3>
        <img className="frameimg" src={img2} alt="" />
        <p>Full chasis body repair provided by the experts</p>
        <button className={`toggle-${props.color} toggle`}><Link className="linkbtn" to="/bodyrepair">More Details</Link></button>
      </div>    
      <div className="cards cards-service">
      <h3>Car Care Service</h3>
      <img className="frameimg" src={img3} alt="" />
      <p>Get your car sparkling clean in just minutes</p>
      <button className={`toggle-${props.color} toggle`}><Link className="linkbtn" to="/carcare">More Details</Link></button>
    </div>
  </div>
  )
}

export default Frames
