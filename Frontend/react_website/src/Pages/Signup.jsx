import React from 'react';
import '../CSS/Signup.css';
import LoginImage from '../assets/Images/Mobile-login-Cristina.jpg';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WorkIcon from '@material-ui/icons/Work';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';





function Signup() {
    let [name, setname] = useState();
    let [email, setEmail] = useState();
    let [phone, setPhone] = useState();
    let [profession, setProfession] = useState();
    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    const clearData = () => {
        alert("Error in Password Confirmation")
        setname("")
        setEmail("")
        setPhone("")
        setProfession("")
        setUsername("")
        setPassword("")

    }

    

    const putData = (e) => {
       
        e.preventDefault();
        axios.post('http://localhost:8005/login/signup', {
            name,
            email,
            phone,
            profession,
            username,
            password
        }).then(res => {
            console.log(res);
            alert('Signed up Successfull');
            clearData();
        }).catch(err => { console.log(err); alert("Some thing went wrong !! Please Try Again") });
    }


return (
    <>
        <section className='signUp'>
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className='form-title'>Sign up</h2>
                        <form className='register-form' id='register-form'>
                            <div className="form-group">
                                <label htmlFor="name">
                                    <AccountBoxIcon className='icon' />
                                </label>
                                <TextField id="standard-basic" label="Your Name " value={name} onChange={(event) => { setname(event.target.value) }} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <EmailIcon className='icon' />
                                </label>
                                <TextField id="standard-basic" label="Your Email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="phnumber">
                                    <PhoneIcon className='icon' />
                                </label>
                                <TextField id="standard-basic" label="Your Phone Number" value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="work">
                                    <WorkIcon className='icon' />
                                </label>
                                <TextField id="standard-basic" label="Your Profession" value={profession} onChange={(event) => { setProfession(event.target.value) }} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="user">
                                    <PersonIcon className='icon' />
                                </label>
                                <TextField id="standard-basic" label="UserName" value={username} onChange={(event) => { setUsername(event.target.value) }} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pass">
                                    <LockIcon className='icon' />
                                </label>
                                <TextField id="standard-basic" label="Password" type='password' value={password} onChange={(event) => { setPassword(event.target.value) }} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="conpass">
                                    <LockIcon className='icon' />
                                </label>
                                <TextField id="standard-basic" label="Confirm Password" type='password' />
                            </div>

                            <div className="form-button">
                                <Button variant="contained" color="primary" type='submit' onClick={putData}>
                                    Submit
                                </Button>
                            </div>

                        </form>
                    </div>

                    <div className="signup-img">
                        <figure>
                            <img src={LoginImage} alt="" />
                        </figure>
                        <p>All ready registered? <NavLink to='/'>login</NavLink></p>

                    </div>


                </div>
            </div>
        </section>
    </>
)
}


export default Signup