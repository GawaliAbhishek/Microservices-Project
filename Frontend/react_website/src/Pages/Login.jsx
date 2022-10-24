
import React, { useState } from 'react'
import '../CSS/Login.css';
import LoginImage from '../assets/Images/login1.png';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import {NavLink ,useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
 const [user,setUser]=useState("");
 const [pass,setPass]=useState("");
const navigate = useNavigate();



 const userChange=(event)=>{
  const name=event.target.value;
  setUser(name)  
 }
 const passChange=(event)=>{
  const p=event.target.value;
  setPass(p);
 }

 const submit=()=>{
 axios.get('http://localhost:8005/login/'+user+"/"+pass).then(res=>{
  if(res.data.login){
    localStorage.setItem("userid",res.data.id);
    localStorage.setItem("username",user);
    navigate("/landing")
  }
  else{
    alert("Invaid Details...")
  }
 })
 }
  return (
    <>
      <section className='login'>
        <div className="container">
          <div className="login-content">
            <div className="login-img">
              <figure>
                <img src={LoginImage} alt="" />
              </figure>
              <p>Haven't Registed? <NavLink to='/signup'>Signup</NavLink></p>

            </div>



            <div className="login-form">
              <h2 className='form-title'>Login</h2>
              <form className='register-form' id='register-form'>
                
                <div className="form-group">
                  <label htmlFor="user">
                    <PersonIcon className='icon' />
                  </label>
                  <TextField id="standard-basic" label="UserName" value={user}  onChange={userChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="pass">
                    <LockIcon className='icon' />
                  </label>
                  <TextField id="standard-basic" label="Password" type='password' value={pass} onChange={passChange}/>
                </div>

                <div className="form-button">
                  <Button variant="contained" color="primary" onClick={submit}>
                    Login
                  </Button>
                </div>

              </form>
            </div>




          </div>
        </div>
      </section>
    </>
  )
}

export default Login