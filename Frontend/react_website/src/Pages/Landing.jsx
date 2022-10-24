import React from 'react'
import '../CSS/Landing.css'
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';



const Landing = () => {
const navigate=useNavigate();

  return (
  
    <>
    
    
      <div className="mainlanding">
      <div className="heading">
        <h1>Welcome {localStorage.getItem("username")}</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src={require('../assets/Images/create.png')} alt="" />
          <h3>Create Contact</h3>
          <Button variant="contained" color='primary' onClick={()=>{navigate('/create')}}>Create</Button>
        </div>

        <div className="card">
          <img src={require('../assets/Images/Search.png')} alt="" />
          <h3>Search Contact</h3>
          <Button variant="contained" color='primary' onClick={()=>navigate('/search')}>Search</Button>
        </div>


        <div className="card">
          <img src={require('../assets/Images/update.png')} alt="" />
          <h3>Update Contact</h3>
          <Button variant="contained" color='primary'  onClick={()=>navigate('/update')}>Update</Button>
        </div>


        <div className="card">
          <img src={require('../assets/Images/delete.png')} alt="" />
          <h3>Delete Contact</h3>
          <Button variant="contained" color='primary'  onClick={()=>navigate('/delete')}>Delete</Button>
        </div>
      </div>
      <h2>See Profile</h2>
      <div className="profile">
        
      <Button variant="contained" color='primary'  onClick={()=>navigate('/profile')}> See Profile</Button>
      </div>

    </div>

  
    </>
    
  )
}

export default Landing