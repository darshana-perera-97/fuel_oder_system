import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import QRcode from "qrcode.react";
// import {Fab, TextField, TextareaAutosize, Grid} from '@material-ui/core'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ShowQRCode() {
  const [open, setOpen] = React.useState(false);
  const downloadQR = () => {
    const canvas = document.getElementById("myqr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open QR Code
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          QR code for Oreder No: 22330
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            QR code for the request of fuel for vehicle BCG-2072 (Moter Bike)
            <br /> Province : North Western || District : Putalam
            <br />
            AG Office : Madampe || Fuel Type : Petrol || Oreder No: 22330
            <br />
            Filling Station : H.W. Company @ Madampe Old Town - IOC
          </Typography>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <QRcode id="myqr" value={21} size={320} includeMargin={true} />
          </div>
          {/* <button
            onClick={downloadQR}
            style={{ marginLeft: 10 }}
            color="primary"
          >
            download QR Code
          </button> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={downloadQR}>
            Download QR Code
          </Button>
          <Button autoFocus onClick={handleClose}>
            Exit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
