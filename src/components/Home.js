import React from "react";
import image from "./auto1.jpg";
import { Link } from "react-router-dom";

const Home = (props) => {

  return (
    <div className="top">
      <img className="float-left" src={image} alt="" />
      <div className="content">
      <h3>About Us</h3>
      <p>"One stop solution to get your car repaired and serviced"</p>
      <p>
        An AutoMob-Mechanic,we aim to make the car repair and service experience
        straightforward by providing services for repairing,servicing and
        maintaining
      </p>
      <br />
      <h3>How it works!</h3>
      <h3>Choose the Service</h3>
      <p>Choose the perfect service for your car</p>
      <br />
      <h3>Book an Appointment</h3>
      <p>Book an appointment with us on your convenience date</p>
      <br />
      <h3>Get your Car Fixed</h3>
      <p>
        No need to wait,our representative will take care of everything on their
        own
      </p>
      <br />
      <button className={`toggle-${props.color} toggle mb-lg`}><Link className="linkbtn" to="/services">Explore More</Link></button>
      </div>
    </div>
  );
};

export default Home;
