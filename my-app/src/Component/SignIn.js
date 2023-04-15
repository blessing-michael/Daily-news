import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

function SignIn() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = info;
  const navigate = useNavigate();

  function onChange(e) {
    // console.log(e.target.value)
    setInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        navigate("/");
      }
    } catch (error) {
      toast.error("wrong user credential");
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
            <p className="p-Signin">
              don't have an account?{" "}
              <span className="signup" onClick={() => navigate("/sign-up")}>
                sign up
              </span>
            </p>
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <p className="p2-Signin" onClick={() => navigate("/forgot-password")}>
            forgot password?
          </p>
          <button type="submit" className="btn">
            log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
