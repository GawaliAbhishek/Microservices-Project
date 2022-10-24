import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import '../CSS/Create.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const Create = () => {
    let[contactname,setName]=useState();
    let[email,setEmail]=useState();
    let[phone,setPhone]=useState();
    let[userid,setUserid]=useState();
  const clearData=()=>{
    setEmail("");
    setName("")
    setPhone("")
  }
    const sendData=(e)=>{
        e.preventDefault();
        setUserid(localStorage.getItem("userid"));
        axios.post('http://localhost:8003/contacts/addcontact', {
            
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
            <div className="mainCreate">
                <div className="headingCreate">
                    <h2>Create Contact</h2>
                </div>

                <div className="createform">
                    <div className="row1Create">
                        <label htmlFor="">Name of Contact</label>
                        <TextField id="outlined-basic" variant="outlined" value={contactname} onChange={(event)=>setName(event.target.value) }/>
                    </div>

                    <div className="row1Create">
                        <label htmlFor="">Email of Contact</label>
                        <TextField id="outlined-basic" variant="outlined" value={email} onChange={(event)=>setEmail(event.target.value) }/>
                    </div>
                    <div className="row1Create">
                        <label htmlFor="">Phone Number <br/>of Contact</label>
                        <TextField id="outlined-basic" variant="outlined" value={phone} onChange={(event)=>setPhone(event.target.value) } />
                    </div>
                    <div className='submitButtonCreate'>
                    <Button onClick={sendData} variant="contained" color="primary" type='submit' >
                                    Submit
                                </Button>
                    </div>
                </div>

            </div>
        </>
    )

    }
export default Create