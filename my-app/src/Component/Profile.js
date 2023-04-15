import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changedetail, setChangedetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  function Loggout() {
    // sign out first
    auth.signOut();

    // navigate the person to homeoage
    navigate("/");
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit() {
    //add the change to the database
    try {
      if (auth.currentUser.displayName !== name) {
        //update the display name in firebase authentication
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // update the name in the firestore

        // first create a reference
        const docRef = doc(db, "users", auth.currentUser.uid);
        // now use the above reference to uppdate the document
        await updateDoc(docRef, {
          name,
        });
        toast.success("profile details updated");
      }
    } catch (error) {
      toast.error("could not update the profile detail");
    }
  }
  return (
    <div
      style={{
        backgroundColor: "#E1EBEE",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="profile-container"
        style={{ width: "600px", textAlign: "center", marginTop: "70px" }}
      >
        <h1 style={{ color: "black", marginBottom: "30px" }}>My Profile</h1>

        <form action="">
          <input
            type="text"
            id="name"
            value={name}
            disabled={!changedetail}
            onChange={onChange}
            style={{ color: "black", marginBottom: "30px" }}
          />
          <input
            type="email"
            id="email"
            value={email}
            disabled
            style={{ color: "black", marginBottom: "30px" }}
          />
          <div className="div">
            <p>
              Do you want to change your name?{" "}
              <span
                style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
                onClick={() => {
                  changedetail && onSubmit();
                  setChangedetail((prevState) => !prevState);
                }}
              >
                {changedetail ? "Apply change" : "Edit"}
              </span>
            </p>
            <p
              onClick={Loggout}
              style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
            >
              Sign out
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
