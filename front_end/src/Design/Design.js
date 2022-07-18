import React from "react";
import FillingStation from "./FillingStation/FillingStation";
import Home from "./Home/Home";
import LoadingSc from "./LoadingSc/LoadingSc";

export default function Design() {
  const [s, setS] = React.useState(true);
  return (
    <div>
      {/* <LoadingSc /> */}
      {s && <Home />}
      {!s &&<FillingStation/>}
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "122px",
          marginTop: "10px",
        }}
      >
        {s && <button
          style={{
            background: "#16182c",
            padding: "7px 10px",
            textAlign: "center",
            borderRadius: "12pxF",
            color: "white",
          }}
          onClick={()=>{
            setS(false)
          }}
        >
          Login As ADMIN
        </button>}
      </div>
    </div>
  );
}
