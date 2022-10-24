import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../CSS/Profile.css'

const Profile = () => {
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [phone, setPhone] = useState();
    let [Proffesion, setProfession] = useState();
    let [username, setUsername] = useState();
    let [contacts, setcontacts] = useState([]);

    useEffect(() => {
        let userid = localStorage.getItem("userid");
        axios.get("http://localhost:8001/user/getuserdata/" + userid).then(res => {
            setName(res.data.name)
            setEmail(res.data.email);
            setPhone(res.data.phone);
            setProfession(res.data.profession);
            setUsername(res.data.username);
            setcontacts(res.data.contacts);

        }).catch(err => {
            alert("something went wrong....")
        })
    }, [])


    return (
        <>

            <h2>Your Profile</h2>
            <div className="main_container">
                <div className="content">
                    <div className="content_container">
                        <span>Name : {name}</span>
                        <span>Email:{email} </span>
                        <span>Username : {username}</span>
                        <span>Profession: {Proffesion}</span>
                        <span>Ph Number : {phone}</span>
                    </div>

                    <div className="contactinfo">
                        <h4 style={{textAlign:'center'}}>Contacts</h4>
                        <div className="abhi">
                            {contacts.map((item) => {
                                console.log(item);
                                return (
                                    <>
                                        <div className="infocon">
                                            <span> {item.contactname} </span>
                                            <span> {item.email} </span>
                                            <span> {item.phone} </span>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile