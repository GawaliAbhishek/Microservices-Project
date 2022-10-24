import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import '../CSS/Delete.css'
import { useState } from 'react';
import axios from 'axios';
const Delete = () => {
  let [id,setId]=useState();
  const delteContcat=()=>{
    axios.delete("http://localhost:8003/contacts/delete/"+id).then(res=>{
      if(res.status){
        alert("contact Deleted")
        setId("");
      }
      else{
        alert("Something went wrong")
      }
    }).catch(err=>{
      alert("Internal Server Problem")
    })
  }
  return (
    <>
    <div className="mainDelete">
        <div className="deleteHeading">
            <h2>Delete Contact</h2>
        </div>
        <marquee  direction="left" style={{color:'red'}}>Get Contact ID from Search Section</marquee>
        <div className="deteleContact">
        <TextField style={{margin:'1rem'}} id="standard-basic" label="Contact Id" value={id} onChange={(event)=>setId(event.target.value)} />
        <div className="buttons">
        <Button variant="contained" startIcon={<DeleteIcon/>} color="secondary" type='submit' style={{margin:'1rem'}} onClick={delteContcat}>
            Delete
          </Button>
        </div>
        </div>


    </div>
    </>
  )
}

export default Delete