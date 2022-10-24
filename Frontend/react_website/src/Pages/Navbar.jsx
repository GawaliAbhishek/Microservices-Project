import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import '../CSS/App.css';
import Image from '../assets/Images/Abhishek.png';


function Navbar() {
    return (
        <>
      

        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'whiesmoke', boxShadow: '0 1px 2px rgba(231, 224, 224, 0.995), 0 2px 4px rgba(211, 198, 198, 0.963),0 4px 8px rgba(211, 198, 198, 0.963), 0 8px 16px rgba(211, 198, 198, 0.963), 0 16px 32px rgba(211, 198, 198, 0.963),0 32px 64px rgba(211, 198, 198, 0.963)' }}>
            <div className="container-fluid">
                <img src={Image} alt="" style={{width:'16rem',height:'5rem'}}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" exact activeClassName='nav' to="/"> Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link active" exact activeClassName='nav'  to="/signup"> Sign Up</NavLink>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link active" href="https://github.com/GawaliAbhishek"> Source Code</a>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link active" exact activeClassName='nav'  to="/">Others</NavLink>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>

        </>
    )
}

export default Navbar