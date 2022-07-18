import React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function () {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen1(false);
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
          Register
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
                  {"Registration Confirm Message"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    We are happy to say that you have registed for the Fuel
                    Refil System Succesfully. You can login to the system by
                    using the bellow <u>Login</u> link
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  {/* <Button onClick={handleClose2} autoFocus>
                    Login
                  </Button> */}
                  <Button onClick={handleClose1}>Dismiss</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
