import React from "react";
import Login from "./Login";
import Register from "./Register";

export default function Home() {
  const [state, setState] = React.useState(true);
  return (
    <div>
      <div
        style={{
          background: "#16182c",
          width: "120vh",
          //   width: "163.6vh",
          height: "75vh",
          marginTop: "10vh",
          // marginLeft: "21.8vh",
          borderRadius: "30px",
          padding: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p
          style={{
            margin: "0px",
            color: "#51aef6",
            textAlign: "center",
            fontSize: "35px",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          Fuel Refil Application
        </p>
        {state && <Register />}
        {!state && <Login />}
        <p
          style={{
            margin: "0px",
            color: "white",
            marginTop: "7px",
            textAlign: "center",
          }}
        >
          {state && <span>Have a Account?</span>}
          {!state && <span>Do not Have a Account?</span>}
          <button
            style={{ background: "none", color: "white", cursor: "pointer" }}
            onClick={() => setState(!state)}
          >
            {state && <u>login</u>}
            {!state && <u>Register</u>}
          </button>
        </p>
      </div>
    </div>
  );
}
