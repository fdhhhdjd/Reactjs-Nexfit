import "./login.scss";
import { Link } from "react-router-dom";
import React, { useEffect,useState } from 'react'

function Login({Logins,error}) {
  const[details,setDetails]=useState({name:"",email:"",password:""});
  const handleClick=e=>{
    e.preventDefault();
    Logins(details)
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleClick}>
        <h3>Tài Will Be With You From Dusk Till Dawn</h3>
          <h1>Login Account </h1>
          <input type="Name" placeholder=" Name" name="name" id="name" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name} />
          <input type="email" placeholder="Email or phone number" name="email" id="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email} />
          <input type="password" placeholder="Password" name="password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password} />
          {/* <Link className="xin"  to="/Home"> */}
            <button className="loginButton" 
          onClick={(e) =>e.target.value }
          >Sign In </button>
          {/* </Link> */}
          {(error!="")?(<div className="error">{error}</div>):""}
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
export default Login
