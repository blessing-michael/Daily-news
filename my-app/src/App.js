import React from 'react'
import Nav from './Pages/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Component/Home"
import Business from "./Component/Business"
import Science from "./Component/Science"
import Tech from "./Component/Tech"
import Sport from "./Component/Sport"
import SignIn from "./Component/SignIn"
import SignUp from "./Component/SignUp"
import ForgotPassword from './Component/ForgotPassword'
import Footer from './Component/Footer'


function App() {
    // const location=useLocation()
  return (
    <div>
      
        <Router>
        <Nav/>
            <Routes>
              
                <Route path='/' element={<Home/>}/>
                <Route path='/business' element={<Business/>}/>
                <Route path='/science' element={<Science/>}/>
                <Route path='/tech' element={<Tech/>}/>
                <Route path='/sport' element={<Sport/>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>

            </Routes>
        </Router>
    </div>
  )
}

export default App