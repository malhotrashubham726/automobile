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
      alert("Please enter valid inputs");
    }
  }

  return (
    <div className="centermy center-boxmy">
      <form action="" onSubmit={handleOnSubmit}>
        Name* : <br />
        <input className="textboxmy padmy" type="text" name="name" id="" placeholder="John" onChange={handleOnChange} required /><br /><br />
        Email* : <br />
        <input className="textboxmy padmy" type="email" name="email" id="" placeholder="abc@mail.com" onChange={handleOnChange} required /><br /><br />
        Password* : <br />
        <input className="textboxmy padmy" type="password" name="password" id="" placeholder="*******" onChange={handleOnChange} required /><br /><br />
        <button type="submit" className={`togglemy-${props.color} togglemy`}>Signup</button>
        <p>Already have an account. Click here to <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
