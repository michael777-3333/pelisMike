import * as React from "react";
import { useState, useEffect } from "react";
import {Box} from "@mui/material"; 
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { items, logout2, profileRoute } from "./Menu";
import DehazeIcon from "@mui/icons-material/Dehaze";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/userContext";
import { useMovies } from "../context/moviesContext";
import { useNavigate, useParams } from "react-router-dom"; //obtener un obejero con los datos que va en la URL (useParams)
import { get } from "react-hook-form";

function Nav() {
  //  const [name,setName] = useState()
  const { logout, user } = useAuth();
  const { name, updateUser, getUser } = useUser();
  const { movies, allMovies } = useMovies([]);
  // const [action, setAction] = useState()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const paramsHeader = useParams();


  let action;
  let comedy;
  let romance;
  let fantsy;
  let terror;
    useEffect(()=>{
      getUser(paramsHeader.id)
    },[])
console.log(movies);


  function sendIdRenger() {}

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "black",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        style={{
          // backgroundColor: "black",
          fontFamily: '"Jolly Lodger", system-ui',
          textDecoration: "none",
        }}
      >
        {items.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  fontSize: "50px",
                }}
                to={item.route}
              >
                <ListItemText
                  style={{
                    fontFamily: '"Jolly Lodger", system-ui',
                    marginLeft: "50px",
                    fontSize: "60px",
                  }}
                  primary={item.text}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding style={{ backgroundColor: "black" }}>
          <ListItemButton>
            <Link
              onClick={sendIdRenger}
              style={{ textDecoration: "none", color: "white" }}
              to={movies && movies.length > 0 ? `/Start/Drama/${movies[27].genres["_id"]}` : "#"}
            >
              <ListItemText
                style={{
                  fontFamily: '"Jolly Lodger", system-ui',
                  marginLeft: "50px",
                }}
                primary={"Romance"}
              />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ backgroundColor: "black" }}>
          <ListItemButton>
            <Link
              onClick={sendIdRenger}
              style={{ textDecoration: "none", color: "white" }}
              to={movies && movies.length > 0 ? `/Start/Action/${movies[0].genres["_id"]}` : "#"}
              >
              <ListItemText
                style={{
                  fontFamily: '"Jolly Lodger", system-ui',
                  marginLeft: "50px",
                }}
                primary={"Accion"}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding style={{ backgroundColor: "black" }}>
          <ListItemButton>
            <Link
              onClick={sendIdRenger}
              style={{ textDecoration: "none", color: "white" }}
              to={movies && movies.length > 0 ? `/Start/Comedia/${movies[11].genres["_id"]}` : "#"}
            >
              <ListItemText
                style={{
                  fontFamily: '"Jolly Lodger", system-ui',
                  marginLeft: "50px",
                }}
                primary={"Comedia"}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding style={{ backgroundColor: "black" }}>
          <ListItemButton>
            <Link
              onClick={sendIdRenger}
              style={{ textDecoration: "none", color: "white" }}
              to={movies && movies.length > 0 ? `/Start/Fantasia/${movies[22].genres["_id"]}` : "#"}
            >
              <ListItemText
                style={{
                  fontFamily: '"Jolly Lodger", system-ui',
                  marginLeft: "50px",
                }}
                primary={"Fantasia"}
              />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ backgroundColor: "black" }}>
          <ListItemButton>
            <Link
              onClick={sendIdRenger}
              style={{ textDecoration: "none", color: "white" }}
              to={movies && movies.length > 0 ? `/Start/Terror/${movies[40].genres["_id"]}` : "#"}
            >
              <ListItemText
                style={{
                  fontFamily: '"Jolly Lodger", system-ui',
                  marginLeft: "50px",
                }}
                primary={"Terror"}
              />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ backgroundColor: "black" }}>
          <ListItemButton>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/start/profile/${user.id}`}
            >
              <ListItemText
                style={{
                  fontFamily: '"Jolly Lodger", system-ui',
                  marginLeft: "50px",
                }}
                primary={"Perfil"}
              />
            </Link>
          </ListItemButton>
        </ListItem>

        {logout2.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            style={{ backgroundColor: "black" }}
          >
            <ListItemButton
              onClick={() => {
                logout();
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={item.route}
              >
                <ListItemText
                  style={{
                    fontFamily: '"Jolly Lodger", system-ui',
                    marginLeft: "50px",
                  }}
                  primary={item.text}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: "black",
          position: "fixed",
          zIndex: "999",
          height: "60px",
        }}
      >
        <Toolbar>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                style={{ color: "white" }}
                onClick={toggleDrawer(anchor, true)}
              >
                <DehazeIcon />
              </IconButton>

              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: '"Jolly Lodger", system-ui',
              fontSize: "30px",
            }}
          >
            PelisMike
          </Typography>
          <Button style={{ height: "60px" }} color="inherit">
            <div style={{}}>
              {" "}
              <h6
                style={{
                  fontFamily: '"Jolly Lodger", system-ui',
                  fontSize: "25px",
                }}
              >
                Welcome: {name}
              </h6>
            </div>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
