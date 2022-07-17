import React from "react";
import logo from "./logo.svg";

export default function LoadingSc() {
  return (
    <div style={{ background: "#16182c", height: "100vh" }}>
      {/* <img src={} /> */}
      <p
        style={{
          margin: "0px",
          color: "#c8e9fe",
          textAlign: "center",
          paddingTop: "45vh",
          fontSize: "7vh",
          fontFamily: "cursive",
          fontWeight: "bold",
        }}
      >
        Fuel Application
      </p>
      <p
        style={{
          margin: "0px",
          color: "#c8e9fe",
          textAlign: "center",
          fontSize: "3.5vh",
          fontFamily: "cursive",
          fontWeight: "bold",
          paddingTop: "2vh",
        }}
      >
        For <span style={{ color: "red" }}>Sri Lanka</span>
      </p>
    </div>
  );
}
