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
      alert("Invalid Credentials");
    }
  }

  const handleOnChange = ((e) => {
    setCredentials({...credentials , [e.target.name] : e.target.value});
  })

  return (
    <div className="centermy center-boxmy">
      <form action="" onSubmit={handleSubmit}>
        Email* : <br />
        <input className="textboxmy padmy" type="email" name="email" id="" placeholder="abc@mail.com" required onChange={handleOnChange}/><br /><br />
        Password* : <br />
        <input className="textboxmy padmy" type="password" name="password" id="" placeholder="*******" required onChange={handleOnChange}/><br /><br />
        <button type='submit' className={`togglemy-${props.color} togglemy`}>Login</button>
      </form>
    </div>  
    )
}

export default Login
