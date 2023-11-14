import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bookContext from "../context/booking/bookContext";

const SignUp = (props) => {
  const context = useContext(bookContext);
  const { getDetails } = context;
  
  const [credentials , setCredentials] = useState({
    name : "",
    email : "",
    password : ""
  })

  const handleOnChange = ((e) => {
    setCredentials({...credentials , [e.target.name] : e.target.value});
  })

  let history = useNavigate();

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createUser` , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({name : credentials.name , email : credentials.email , password : credentials.password})
    })
    const json = await response.json();
    console.log(json);
    
    if(json.success) {
      props.showAlert("Account Created Successfully");
      localStorage.setItem("token" , json.authtoken);
      history("/");
      getDetails(localStorage.getItem("token"));
    }

    else {
      props.showAlert("Please enter valid inputs");
    }
  }

  return (
    <div className="center center-box">
      <form action="" onSubmit={handleOnSubmit}>
        <div>
          <i class="fa-solid fa-user position-relative"></i>
          <input className="textbox" type="text" name="name" id="" placeholder="Username" onChange={handleOnChange} required /><br /><br />
        </div>
        <div>
          <i class="fa-solid fa-envelope position-relative"></i>
          <input className="textbox" type="email" name="email" id="" placeholder="Email" onChange={handleOnChange} required /><br /><br />
        </div>
        <div>
          <i class="fa-solid fa-lock position-relative"></i>
          <input className="textbox" type="password" name="password" id="" placeholder="Password" onChange={handleOnChange} required minLength={5} /><br /><br />
        </div>
        <button type="submit" className={`toggle-${props.color} toggle`}>Signup</button>
        <p style={{color: "white"}}>Already have an account. Click here to <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
