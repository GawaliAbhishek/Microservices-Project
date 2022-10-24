import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../CSS/Update.css'
import { useState } from 'react';
import axios from 'axios';
const Update = () => {
  let[contid,setContid]=useState();
  let[contactname,setContactname]=useState();
  let[email,setEmail]=useState();
  let[phone,setPhone]=useState();
  let[userid,setUserid]=useState();
  const clearData=()=>{
    setEmail("");
    setContactname("")
    setPhone("")
    setContid("")
  }
  const sendData=(e)=>{
    e.preventDefault();
    setUserid(localStorage.getItem("userid"));
    axios.post('http://localhost:8003/contacts/addcontact', {
        contid,
        contactname,
        email,
        phone,
        userid
    }).then(res => {
        console.log(res);
        clearData();
        alert('Contact Added Successfull');
       
    }).catch(err => { console.log(err); alert("Some thing went wrong !! Please Try Again") });
  }
  return (
    <>
      <div className="mainUpdate">
        <div className="headingUpdate">
          <h2>Update Contact</h2>
        </div>
          <marquee  direction="left" style={{color:'red'}}>Get Contact ID from Search Section</marquee>
        <div className="updateContact">
        <TextField style={{margin:'1rem'}} id="standard-basic" value={contid} label="Contact Id" onChange={(event)=>setContid(event.target.value)} />
          <TextField style={{margin:'1rem'}} id="standard-basic" value={contactname} label="Name of Contact"  onChange={(event)=>setContactname(event.target.value)} />
          <TextField style={{margin:'1rem'}} id="standard-basic" value={email} label="Email Of Contact"  onChange={(event)=>setEmail(event.target.value)} />
          <TextField style={{margin:'1rem'}} id="standard-basic" value={phone} label="Phone Number od Contact"  onChange={(event)=>setPhone(event.target.value)}/>
          <Button variant="contained" color="primary" type='submit' style={{margin:'1rem'}} onClick={sendData}>
            Submit
          </Button>
        </div>
      </div>
    </>
  )
}

export default Update