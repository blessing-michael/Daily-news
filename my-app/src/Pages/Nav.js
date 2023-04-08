import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function Nav() {
  const navigate= useNavigate()
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
            <h1>Daily<span className='news'>News</span></h1>
            

            </div>
            <div className="signIn-div" onClick={()=>navigate("/sign-in")}>
            <h3><span className='font-icon'><FontAwesomeIcon icon="fa-solid fa-user" /></span >sign in</h3>
          
            </div>
           
          
        </div>
        {/* <Link to="/">Home</Link>  */}
        <nav className='list-Div'>
            <ul>
               <li onClick={()=>navigate("/home")}>Home</li>
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