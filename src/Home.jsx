import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../public/styles/home.css";
function Home() {
  return (
    <Grid container  className="fondoHome">
      <Grid container>
        <Grid
          container
          item
          xs={12}
          md={6}
          direction="row"
          justifyContent="flex-start"
        >
          <div className="ContenedorLetrasHome">
            <h1 className="letrasHome">Pelis Mike</h1>
          </div>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          direction="row"
          justifyContent="flex-end"
        >
          <div className="ContenedorLetrasHome">
            <Link
              to="/SingIn"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <h1 className="letrasHome">Iniciar Sesión</h1>
            </Link>
          </div>
          <div className="ContenedorLetrasHome" style={{ marginRight: "20px" }}>
            <Link to="/Register"  style={{ textDecoration: "none", color: "#fff" }}>
              <h1 className="letrasHome">Register</h1>
            </Link>
            
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <div className="textoCentralHome">
          <h1 className="letrasHome">Tus Peliculas y Series favoritas</h1>
        </div>
      </Grid>
    </Grid>
  );
}
export default Home;
