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
    <div className="stickmy">
        <div className="blockmy">
          <h1 className="headingmy">AutoMob-Mechanic</h1>
        </div>
        <nav className="flexmy">
          <Link className={`firstmy navmy ${location.pathname === "/" ? "activemy" : " "}`} to="/">Home</Link>
          {!localStorage.getItem("token") ? <><Link className={`navmy ${location.pathname === "/signup" ? "activemy" : " "}`} to="/signup">Signup</Link><Link className={`navmy ${location.pathname === "/login" ? "activemy" : " "}`} to="/login">Login</Link></> : <><Link className={`navmy ${location.pathname === "/services" ? "activemy" : " "}`} to="/services">Services</Link> <div className="buttonLink" onClick={handleLogout}>Logout</div></>}   
          <Link className={`navmy ${location.pathname === "/booking" ? "activemy" : " "}`} to="/booking">Booking</Link>
          <Link className={`navmy ${location.pathname === "/contact" ? "activemy" : " "}`} to="/contact">Contact</Link>
        </nav>
        <Alert alert={props.alert}/>
    </div>
  );
};

export default Navbar;
