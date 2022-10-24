import React from 'react'
import Image from '../assets/Images/404.jpg';

const ErrorPage = () => {
  return (
    <div>
      <div style={{ display:'flex',alignItems:'center',justifyContent:'center',marginTop:'4rem'}}>
      <img src={Image} alt=""  style={{width:'50%', height:'50%'}}/>
      </div>
    </div>
  )
}

export default ErrorPage