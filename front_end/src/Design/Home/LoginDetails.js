import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginDetails() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const [s, setS] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Your Profile - [ BCG - 2072 ]
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {s && (
            <ListItem button>
              <ListItemText
                primary="Requested for"
                secondary="NW-Put-Madampe IOS Filling station"
              />
              <IconButton
                edge="start"
                color="inherit"
                // onClick={setS(true)}
                aria-label="DeleteOutlinedIcon"
              >
                <DeleteOutlinedIcon />
                <p style={{ margin: "0px", fontSize: "20px", color: "red" }}>
                  remove
                </p>
              </IconButton>
            </ListItem>
          )}
          {/* <button onClick={setS(false)}>as</button> */}
          <Divider />
          <ListItem button>
            <ListItemText primary="Place new Request" secondary="Tethys" />
            <div>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Province
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
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
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  // onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value={10}>Puttalm</MenuItem>
                  <MenuItem value={20}>Kurunegala</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  AG Office
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value={10}>Madampe</MenuItem>
                  <MenuItem value={20}>Mahawewa</MenuItem>
                  <MenuItem value={30}>Nattandiya</MenuItem>
                  <MenuItem value={40}>Chilaw</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Filling Station
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
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
            </div>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
