import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Profile() {
    const auth = getAuth()
    const navigate= useNavigate()
    const [formData, setFormData] =useState({
        name:auth.currentUser.displayName,
        email:auth.currentUser.email
    })
    const {name, email}= formData

    function Loggout(){
        // sign out first
        auth.signOut()

        // navigate the person to homeoage
        navigate("/")

    }
  return (
    <div>
        <h1>My Profile</h1>

        <form action="">
            <input type="text" id="name" value={name} disabled />
            <input type="email" id="email" value={email} disabled />
            <div className="div">
                <p>do you want to change your name? <span>edit</span></p>
                <p onClick={Loggout}>sign out</p>
            </div>
        </form>

    </div>
  )
}

export default Profile