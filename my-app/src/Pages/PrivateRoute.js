import React from 'react'
import { Outlet, Navigate} from 'react-router-dom';
import  {useAuthStatus} from '../hooks/useAuthStatus';

function PrivateRoute() {
    // const loggedIn =false;
    const {loggedIn, checkingStatus}= useAuthStatus()
    if(checkingStatus){
        return <h1>loading....</h1>
    }

  return loggedIn? <Outlet/> :<Navigate to= "/sign-in"/>
}

export default PrivateRoute