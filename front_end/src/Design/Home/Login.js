import React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LoginDetails from "./LoginDetails";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ShowQRCode from "./ShowQRCode";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [ope, setOpe] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClickOpen = () => {
    setOpen1(true);
  };
  const handleClickOpen1 = () => {
    setOpe(true);
    setTimeout(() => {
      setOpe(false);
    }, 2000);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen1(false);
  };
  // const handleClose3 = () => {
  //   setOpe(true);
  //   setOpen1(false);
  // };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose3 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpe(false);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "100%" }}>
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
          Login
        </p>
        <div
          style={{
            background: "#a1a3cc",
            padding: "15px",
            borderRadius: "15px",
            margin: "15px",
            // height: "100%",
            width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <div style={{ padding: "0px 20px" }}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Telephone Number
              </InputLabel>
              <Input id="standard-adornment-amount" />
            </FormControl>
            <p style={{ margin: "0px", color: "red", marginTop: "-7px" }}>
              * Required for the process
            </p>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              <Button variant="contained" onClick={handleClick}>
                Send OTP Code
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  OTP sent to your phone !
                </Alert>
              </Snackbar>
              <Snackbar
                open={ope}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  New Request Added !
                </Alert>
              </Snackbar>
            </div>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                OTP code
              </InputLabel>
              <Input id="standard-adornment-amount" />
            </FormControl>
            <p style={{ margin: "0px", color: "red", marginTop: "-7px" }}>
              * Required for the process
            </p>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              {/* <Button variant="contained" color="success">
                Login
              </Button> */}
              {/* <LoginDetails /> */}
              <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen}
              >
                Login
              </Button>
              <Dialog
                open={open1}
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Requested for - [ BCG-2072 ] "}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You have been requested for fuel for vehicle BCG-2072 (Moter
                    Bike)
                    <br /> Province : North Western || District : Putalam
                    <br />
                    AG Office : Madampe || Fuel Type : Petrol || Oreder No:
                    22330
                    <br />
                    Filling Station : H.W. Company @ Madampe Old Town - IOC
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <ShowQRCode />
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {/* <Button
                    style={{
                      textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    onClick={handleClose1}
                  >
                    Dismiss
                  </Button> */}
                </DialogActions>
                <Divider
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <DialogTitle id="alert-dialog-title">
                  {"Create a new Request"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <span
                      style={{
                        color: "red",
                        margin: "0px",
                      }}
                    >
                      ** New request will erase your previous fuel request.
                      <br />
                      <a href="#">
                        <u>Read More</u>
                      </a>
                    </span>
                    <br />
                    {/* <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      style={{ margin: "5px" }}
                    /> */}
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Province
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                      >
                        <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                        <MenuItem value={10}>North Pro.</MenuItem>
                        <MenuItem value={20}>North Central </MenuItem>
                        <MenuItem value={30}>North West</MenuItem>
                        <MenuItem value={40}>Eastern Pro.</MenuItem>
                        <MenuItem value={50}>Central Pro</MenuItem>
                        <MenuItem value={60}>Western Peo.</MenuItem>
                        <MenuItem value={70}>South Pro.</MenuItem>
                        <MenuItem value={80}>Sabaragamuwa</MenuItem>
                        <MenuItem value={90}>Uva Pro.</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        District
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                      >
                        <MenuItem value={10}>Puttalm</MenuItem>
                        <MenuItem value={20}>Kurunegala</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        AG Office
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                      >
                        <MenuItem value={10}>Madampe</MenuItem>
                        <MenuItem value={20}>Mahawewa</MenuItem>
                        <MenuItem value={30}>Nattandiya</MenuItem>
                        <MenuItem value={40}>Chilaw</MenuItem>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Filling Station
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                      >
                        <MenuItem value={10}>
                          Harsha Weerakon -Old Town [IOC]
                        </MenuItem>
                        <MenuItem value={20}>
                          Harsha Weerakon -Silver Town[IOC]
                        </MenuItem>
                        <MenuItem value={30}>Galahitiyawa [CEP]</MenuItem>
                        <MenuItem value={40}>Medagama [CEP]</MenuItem>
                      </Select>
                    </FormControl>
                    <br />
                    <div
                      style={{
                        marginright: "auto",
                        marginLeft: "auto",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={handleClickOpen1}
                        style={{ margin: "4px" }}
                      >
                        Place Oder
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={handleClose1}
                        style={{ margin: "4px" }}
                      >
                        Discard
                      </Button>
                    </div>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
