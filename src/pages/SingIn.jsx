import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import "/public/styles/singIn.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useMovies } from "../context/moviesContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SingIn() {
  const { register, handleSubmit } = useForm(); //me ahorra el useState()
  const { singin, errors, isAuthenticate,singinGoogle } = useAuth();
  // const {allMovies} =useMovies()
  const navigate = useNavigate();
  const {movies,allMovies } = useMovies();
  const onSubmit = handleSubmit((values) => {
    singin(values);
    console.log('sssss');
    // console.log(allMovies());

  });

  function moviesGo() {
    allMovies()
  }
  function google(params) {
    singinGoogle()
    // allMovies()
  }

  useEffect(() => {
    if (isAuthenticate) navigate("/start");
    // allMovies()
  }, [isAuthenticate]);

  return (
    <Grid container className="fondoSingIn" spacing={1}>
      <Grid item xs={12}>
        <div className="ContenedorLetrasHome">
          <h1 className="letrasHome">Pelis Mike</h1>
        </div>
      </Grid>
      <Grid  justifyContent="center" item xs={12}>
        {errors.map((error, i) => (
          <div key={i} style={{ color: "white", backgroundColor: "red" }}>
            {error}
          </div>
        ))}
        {/* reflejar los errores  */}

        <form
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          className="ContenedorSingIn"
          onSubmit={onSubmit}
        >
          <div>
            <FormControl
              className="contenerdoInput"
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                className="inputSingIn"
                type="text"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email", { required: true })}
              />
            </FormControl>

            <FormControl
              className="contenerdoInput"
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                className="inputSingIn"
                type="text"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                {...register("password", { required: true })}
              />
            </FormControl>

            <div
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button onClick={moviesGo}
                style={{
                  backgroundColor: "white",
                  fontFamily: ' "Jolly Lodger", system-ui',
                  color: "black",
                }}
                className="buttonSingIn"
                type="submit"
              >
                LOG IN
              </Button>
            </div>
            

            <div style={{backgroundColor:'#000', borderRadius:'10px' ,width:'250px', color:"white", fontSize:'30px', marginTop:'250px' }}><p>No tengo cuenta: <Link to='/register'>Register </Link></p></div>
          </div>
        </form>
        <div
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button onClick={google}
                style={{
                  backgroundColor: "white",
                  fontFamily: ' "Jolly Lodger", system-ui',
                  color: "black",
                }}
                className="buttonSingIn"
                type="submit"
              >
                Google
              </Button>
            </div>
            
        
      </Grid>
    </Grid>
  );
}

export default SingIn;
