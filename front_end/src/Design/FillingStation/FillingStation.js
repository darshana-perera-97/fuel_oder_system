import React from "react";
import Button from "@mui/material/Button";
import QrScan from "react-qr-reader";
import TextField from "@mui/material/TextField";
import { QrReader } from "react-qr-reader";

export default function FillingStation() {
  const [d, setD] = React.useState(true);
  const [qrscan, setQrscan] = React.useState("Ready to Scan");
  const [qrscan2, setQrscan2] = React.useState("");
  const [data1, setData1] = React.useState(false);
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      setQrscan2("Entry Updated");
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div>
      <div
        style={{
          background: "#16182c",
          width: "120vh",
          //   width: "163.6vh",
          height: "75vh",
          marginTop: "5vh",
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
        <p
          style={{
            color: "white",
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "bold",
            opacity: "0.8",
            margin: "12px",
          }}
        >
          Admin Login
        </p>
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            margin: "30px",
            textAlign: "center",
            borderRadius: "20px",
            padding: "30px",
            height:"50%"
          }}
        >
          {d && (
            <TextField
              required
              id="filled-basic"
              label="User Name"
              variant="filled"
              style={{ margin: "20px" }}
            />
          )}
          {d && (
            <TextField
              required
              id="filled-basic"
              label="Password"
              variant="filled"
              style={{ margin: "20px" }}
            />
          )}
          {d && <br />}
          {d && (
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setD(false);
              }}
            >
              Login
            </Button>
          )}
          <diV style={{ display: "flex" }}>
            <div style={{ margin: "0px" }}>
              {!d && (
                <QrScan
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ height: 200, width: 250 }}
                />
              )}
            </div>
            <div style={{ marginLeft: "20px" }}>
              {!d && <p style={{ margin: "0px" }}>{qrscan}</p>}
              {!d && <p style={{ margin: "0px", color: "green" }}>{qrscan2}</p>}
            </div>
          </diV>
        </div>
      </div>
    </div>
  );
}
