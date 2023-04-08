import React from 'react'
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate= useNavigate()
  return (
    <div className='signin-div'>signIn
        <div className="signin-Container">
            <form action="">
        <div className="logo-Signin">
            <h1 style={{color:"white"}}>Daily<span className='news'>News</span></h1>
            </div>
            <div className="text-Signin">
            <h2 style={{color:"white"}}>Log in to your Daily News account</h2>
            <p className='p-Signin'>don't have an account? <span className='signup' onClick={()=>navigate("/sign-up")}>sign up</span></p>

            </div>
            <div className="email">
            <input type="email" placeholder='Email address'/>
           

            </div>
            <div className="password">
            <input type="password" name="password" id="password" placeholder='Password' />
            </div>

            

           
            <p className='p2-Signin' onClick={()=>navigate("/forgot-password")} >forgot password?</p>
            <button type="submit" className='btn'>log in</button>
            

            </form>
            


        </div>
    </div>
  )
}

export default SignIn