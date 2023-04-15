import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  // const navigate= useNavigate()
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = info;
  const navigate = useNavigate();
  function onChange(e) {
    setInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const useCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = useCredential.user;
      console.log(user);
      const infocopy = { ...info };
      delete infocopy.password;
      infocopy.timestamp = serverTimestamp();

      // save to database
      await setDoc(doc(db, "users", user.uid), infocopy);

      navigate("/");
    } catch (error) {
      toast.error("something went wrong with the registration");
      console.log(error);
    }
  }

  return (
    <div className="signin-div">
      signIn
      <div className="signin-Container">
        <form action="" onSubmit={onSubmit}>
          <div className="logo-Signin">
            <h1 style={{ color: "white" }}>
              Daily<span className="news">News</span>
            </h1>
          </div>
          <div className="text-Signin">
            <h2 style={{ color: "white" }}>
              Log in to your Daily News account
            </h2>
            {/* <p className='p-Signin'>don't have an account? <span className='signup' onClick={()=>navigate("/sign-up")}>sign up</span></p> */}
          </div>
          <div className="email">
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
            />
          </div>
          <div className="email">
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
          </div>
          <div className="password">
            <input
              type="password"
              onChange={onChange}
              name="password"
              id="password"
              value={password}
              placeholder="Password"
            />
          </div>

          {/* <p className='p2-Signin' onClick={()=>navigate("/forgot-password")} >forgot password?</p> */}
          <button type="submit" className="btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
