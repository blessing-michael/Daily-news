import React from "react";
import Nav from "./Pages/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Business from "./Component/Business";
import Science from "./Component/Science";
import Tech from "./Component/Tech";
import Sport from "./Component/Sport";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import ForgotPassword from "./Component/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Component/Footer";
import PrivateRoute from "./Pages/PrivateRoute";
import Profile from "./Component/Profile";

function App() {
  // const location=useLocation()
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/business" element={<Business />} />
          <Route path="/science" element={<Science />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
