import React from "react";
import spinner from "../assets/svg/spinner.svg";

function Spinner() {
  return (
    <div
      style={{
        backgroundColor: "black",
        opacity: "0.7",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Spinner
      <img
        src={spinner}
        alt="loading..."
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  );
}

export default Spinner;
