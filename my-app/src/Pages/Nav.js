import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';





function Nav() {
  const [pageState, setPageState]=useState("sign-in")
  const auth =getAuth()
  const navigate= useNavigate()

  // use useeffect to change the auth

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setPageState("Profile")
      } else{
        setPageState("sign-in")
      }
    })
  })
  // const location= useLocation()
  // // console.log(location)
  
  // function pathlocation(route){
  //   if(route===location.pathname){
  //     return true
  //   }
  // }
 
  return (
  
    <div className='nav'>
        <div className="img-div">
            <div className="logo-div" onClick={()=>navigate("/")}>
            <h1>Posh<span className='news'>News</span></h1>
            

            </div>
            <div className="signIn-div" onClick={()=>navigate("/profile")}>
            <h3><span className='font-icon'><FontAwesomeIcon icon="fa-solid fa-user" /></span >{pageState}</h3>
          
            </div>
           
          
        </div>
        {/* <Link to="/">Home</Link>  */}
        <nav className='list-Div'>
            <ul>
               <li onClick={()=>navigate("/")}>Home</li>
               <li onClick={()=>navigate("/business")}>Business</li>
               <li onClick={()=>navigate("/science")}>Science</li>
               <li onClick={()=>navigate
              ("/tech")}>Tech</li>
               <li onClick={()=>navigate
              ("/sport")}>Sport</li>
            </ul>
        </nav>
    </div>
  
  )
}

export default Nav