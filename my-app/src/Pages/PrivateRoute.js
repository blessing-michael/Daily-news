import React from 'react'
import { Outlet, Navigate} from 'react-router-dom';
import  {useAuthStatus} from '../hooks/useAuthStatus';
import Spinner from './Spinner';

function PrivateRoute() {
    // const loggedIn =false;
    const {loggedIn, checkingStatus}= useAuthStatus()
    if(checkingStatus){
        return <div className="div">
            <Spinner/>
            <h1>hey................ </h1>

        </div>  

    }

  return loggedIn? <Outlet/> :<Navigate to= "/sign-in"/>
}

export default PrivateRoute