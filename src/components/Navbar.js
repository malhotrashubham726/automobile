import React, { useEffect , useContext } from "react";
import { Link , useLocation, useNavigate } from "react-router-dom";
import Alert from "./Alert";
import bookContext from "../context/booking/bookContext";

const Navbar = (props) => {

  const context = useContext(bookContext);
  const { setProfile } = context;

  let location = useLocation();
  useEffect(() => {
    console.log(location);
    console.log(location.pathname);
  }, [location]);

  let history = useNavigate();

  const handleLogout = (() => {
    const confirm = window.confirm("Do you want to Logout");
    if(confirm) {
      localStorage.removeItem("token");
      history("/");
      props.showAlert("Logout Successfully");
      localStorage.removeItem("pname");
      setProfile("")
    }
  })

  return (
    <div className="nav-stick">
        <div className="block">
          <h1 className="heading">AutoMob-Mechanic</h1>
          <nav className="d-flex">
            <Link className={`nav ${location.pathname === "/" ? "active" : " "}`} to="/">Home</Link>
            {!localStorage.getItem("token") ? <><Link className={`nav ${location.pathname === "/signup" ? "active" : " "}`} to="/signup">Signup</Link><Link className={`nav ${location.pathname === "/login" ? "active" : " "}`} to="/login">Login</Link></> : <><Link className={`nav ${location.pathname === "/services" ? "active" : " "}`} to="/services">Services</Link> <div className="nav" onClick={handleLogout}>Logout</div></>}   
            <Link className={`nav ${location.pathname === "/booking" ? "active" : " "}`} to="/booking">Booking</Link>
            <Link className={`nav ${location.pathname === "/contact" ? "active" : " "}`} to="/contact">Contact</Link>
          </nav>
        </div>
        <Alert alert={props.alert}/>
    </div>
  );
};

export default Navbar;
