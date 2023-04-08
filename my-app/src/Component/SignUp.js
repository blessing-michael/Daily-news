import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

function SignUp() {
    // const navigate= useNavigate()
    const [info, setInfo]= useState({
        name:"",
        email:"",
        password:"",
    })
    const {name,email,password}=info;
    function onChange(e){
        setInfo((prevState)=>({
            ...prevState, [e.target.id]:e.target.value

        }))

    }
  return (

    <div className='signin-div'>signIn
        <div className="signin-Container">
            <form action="">
        <div className="logo-Signin">
            <h1 style={{color:"white"}}>Daily<span className='news'>News</span></h1>
            </div>
            <div className="text-Signin">
            <h2 style={{color:"white"}}>Log in to your Daily News account</h2>
            {/* <p className='p-Signin'>don't have an account? <span className='signup' onClick={()=>navigate("/sign-up")}>sign up</span></p> */}

            </div>
            <div className="email">
            <input type="text" id='name' value={name} onChange={onChange} placeholder='Full name'/>
           

            </div>
            <div className="email">
            <input type="email" id='email' value={email} onChange={onChange} placeholder='Email address'/>
           

            </div>
            <div className="password">
            <input type="password" onChange={onChange} name="password" id="password" 
            value={password} placeholder='Password' />
            </div>

            

           
            {/* <p className='p2-Signin' onClick={()=>navigate("/forgot-password")} >forgot password?</p> */}
            <button type="submit" className='btn'>Sign up</button>
            

            </form>
            


        </div>
    </div>
  )
}

export default SignUp