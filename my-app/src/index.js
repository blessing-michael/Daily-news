import React from "react"
import  ReactDOM  from "react-dom"
import App from "./App"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {createRoot} from 'react-dom/client'
// import { Router } from "react-router"
import { BrowserRouter as Route, Router, Routes } from "react-router-dom"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

library.add(fas)
root.render(

      <App  />

  );

// ReactDOM.render(
  
//     <App/>,document.getElementById("root")
   
// )