import React from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import '../CSS/Search.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Search = () => {
  let[option,setOption]=useState("id");
  let[data,setData]=useState();
  let [Info,setInfo]=useState([]);
  let[isDataThere,setisDataThere]=useState(false);
  const nagigate=useNavigate();
  console.log(Info);

  const sendData=()=>{
   let url=`http://localhost:8003/contacts/searchby${option}/${data}/${localStorage.getItem("userid")}`
   axios.get(url).then(res=>{
     setInfo(res.data);
     if(res.data.length==0){
      nagigate('/error')
     }
     setisDataThere(true);
   }).catch(err=>{
    alert("Something went Wrong ....")
   })
  }
  

  const formUI=()=>{
    return(
      <div className="mainSearch">
        <div className="headingSearch">
            <h2>Search Contact</h2>
        </div>

        <div className="searchForm">
         <span>Search With </span> 
            <select name="option" id="" onChange={(event)=>{
                    setOption(event.target.value);
                   
            }}>
                <option value="">Select</option>
                <option value="id">Contact ID</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="phone">Phone number</option>
            </select>
           <div className="searchBar">
            <TextField id="standard-basic" label="Search"onChange={(event)=>setData(event.target.value) }/>
            <SearchIcon onClick={sendData} style={{marginTop:'1.3rem'}}/> </div>
        </div>
    </div>
    )
  }

  const showData=()=>{
    return (
      <>
      <div className="mainShowData">
        <div className="headingShowData">
          <h2>Contacts you were finding </h2>
        </div>

        <div className="mainCardData">
          <div className="cardData">
          
           {Info.map((item)=>{
            return(
              <>
              <h4>{item.contactname}</h4>
              <span>{item.email}</span>
              <span>{item.phone}</span>
              <span> Id-{item.contid}</span>
              </>
            )
           })}
          </div>
        </div>
      </div>
      </>
    )
  }



  return (
    <>
    {isDataThere ? showData() : formUI()}
    </>
  )
}

export default Search