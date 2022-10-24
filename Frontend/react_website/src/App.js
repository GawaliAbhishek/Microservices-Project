import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Navbar from './Pages/Navbar'
import Signup from './Pages/Signup'
import ErrorPage from './Pages/ErrorPage'
import './CSS/App.css';
import Profile from './Pages/Profile'
import Landing from './Pages/Landing'
import Create from './Pages/Create'
import Search from './Pages/Search'
import Update from './Pages/Update'
import Delete from './Pages/Delete'


function App() {
  return (
    <div style={{backgroundColor:'white'}}>
     <BrowserRouter>
     <Navbar/>
    
     <Routes>
      <Route exact path='/'  element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route path='*'element={<ErrorPage/>}/>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App