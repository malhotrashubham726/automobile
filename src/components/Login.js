import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bookContext from '../context/booking/bookContext'

const Login = (props) => {
  const context = useContext(bookContext);
  const { getDetails } = context;

  const [credentials , setCredentials] = useState({
    email : "",
    password : ""
  })

  let history = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login` , {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({email : credentials.email , password : credentials.password})
    })
    const json = await response.json();
    console.log(json);

    if(json.success) {
      localStorage.setItem("token" , json.authtoken);
      history("/booking");
      props.showAlert("Login Successfully");
      getDetails(localStorage.getItem("token"));
    }

    else {
      props.showAlert("Invalid Credentials");
    }
  }

  const handleOnChange = ((e) => {
    setCredentials({...credentials , [e.target.name] : e.target.value});
  })

  return (
    <div className="center center-box mb-lg">
      <form className='cred-form' action="" onSubmit={handleSubmit}>
        <div>
        <i class="fa-solid fa-envelope position-relative font-size-icon"></i>
          <input style={{border: "2px solid black",cursor: "pointer"}} className="textbox mt-lg" type="email" name="email" id="" placeholder="Email" required onChange={handleOnChange}/><br/><br/>
        </div>
        <div>
          <i class="fa-solid fa-lock position-relative font-size-icon"></i>
          <input style={{border: "2px solid black",cursor: "pointer"}} className="textbox" type="password" name="password" id="" placeholder="Password" required onChange={handleOnChange}/><br /><br />
        </div>
        <button type='submit' className='toggle-blue toggle textbox mb-sm login-btn'>Login</button>
      </form>
    </div>  
    )
}

export default Login
