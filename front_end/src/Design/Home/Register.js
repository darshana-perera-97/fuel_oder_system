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
import TextField from "@mui/material/TextField";
import { padding } from "@mui/system";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function () {
  const [open, setOpen] = React.useState(false);
  const [ope, setOpe] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClick3 = () => {
    setOpe(true);
    setTimeout(() => {
      setOpe(false);
    }, 2000);
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
    handleClick3();
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
                Register
              </Button>
              <Dialog
                open={open1}
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Registration-  Step 2"}
                </DialogTitle>
                <DialogContent>
                  <div
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      textAlign: "center",
                    }}
                  >
                    Contact Details
                    <br />
                    <TextField
                      disabled
                      id="filled-basic"
                      label="0771461925"
                      variant="filled"
                      style={{ margin: "6px" }}
                    />
                    <span
                      style={{
                        color: "green",
                        padding: "5px",
                        paddingTop: "15px",
                      }}
                    >
                      Varified !
                    </span>
                    <br />
                    Owner Details
                    <br />
                    <TextField
                      required
                      id="filled-basic"
                      label="First Name"
                      variant="filled"
                      style={{ margin: "6px" }}
                    />
                    <TextField
                      required
                      id="filled-basic"
                      label="Last Name"
                      variant="filled"
                      style={{ margin: "6px" }}
                    />
                    <br />
                    <TextField
                      required
                      id="filled-basic"
                      label="Licene No"
                      variant="filled"
                      // placeholder="1234"
                      style={{ margin: "6px" }}
                    />
                    <br />
                    Vehicle Details
                    <br />
                    <TextField
                      required
                      id="filled-basic"
                      label="Vehicle No"
                      variant="filled"
                      placeholder="ABC"
                      style={{ margin: "6px" }}
                    />
                    <TextField
                      required
                      id="filled-basic"
                      label="Vehicle No"
                      variant="filled"
                      placeholder="1234"
                      style={{ margin: "6px" }}
                    />
                    <br />
                  </div>
                  <DialogContentText id="alert-dialog-description">
                    Register the details added.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  {/* <Button onClick={handleClose2} autoFocus>
                    Login
                  </Button> */}
                  <Button onClick={handleClose1}>register</Button>
                </DialogActions>
              </Dialog>
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
                  You Have registed
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
