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
      <form action="" onSubmit={handleSubmit}>
        <div>
          <i class="fa-solid fa-user position-relative"></i>
          <input className="textbox" type="email" name="email" id="" placeholder="Username" required onChange={handleOnChange}/><br/><br/>
        </div>
        <div>
          <i class="fa-solid fa-lock position-relative"></i>
          <input className="textbox" type="password" name="password" id="" placeholder="Password" required onChange={handleOnChange}/><br /><br />
        </div>
        <button type='submit' className={`toggle-${props.color} toggle mb-sm`}>Login</button>
      </form>
    </div>  
    )
}

export default Login
