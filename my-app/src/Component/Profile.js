import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { db } from '../firebase'

function Profile() {
    const auth = getAuth()
    const navigate= useNavigate()
    const [changedetail, setChangedetail]=useState(false)
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
    function onChange(e){
        setFormData((prevState)=>({
            ...prevState, [e.target.id]:e.target.value}))

    }
    async function onSubmit(){
        //add the change to the database
        try {
            if(auth.currentUser.displayName !==name){
                //update the display name in firebase authentication
                await updateProfile(auth.currentUser,{
                    displayName:name
                })
                // update the name in the firestore

                // first create a reference
                const docRef=doc(db, "users", auth.currentUser.uid)
                // now use the above reference to uppdate the document
                await updateDoc(docRef,{
                    name,
                })
                toast.success("profile details updated")
            }
            
        } catch (error) {
            toast.error("could not update the profile detail")
            
        }
    }
  return (
    <div>
        <h1>My Profile</h1>

        <form action="">
            <input type="text" id="name" value={name} disabled={!changedetail} onChange={onChange}  style={{color:"black"}}/>
            <input type="email" id="email" value={email} disabled   style={{color:"black"}}/>
            <div className="div">
                <p>do you want to change your name? <span onClick={()=>{changedetail && onSubmit()
                    setChangedetail((prevState)=> !prevState)}}>{changedetail?"Apply change":"edit" }</span></p>
                <p onClick={Loggout}>sign out</p>
            </div>
        </form>

    </div>
  )
}

export default Profile