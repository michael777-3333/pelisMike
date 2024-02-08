import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";
import { Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import "/public/styles/register.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/moviesContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import 'animate.css';

function Register() {
  const { register, handleSubmit } = useForm(); //me ahorra el useState()
  const { signup, isAuthenticate, errors } = useAuth();
  const {movies,allMovies } = useMovies();

  console.log(errors);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticate) navigate("/start");
  }, [isAuthenticate]);
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  function moviesGo() {
    allMovies()
  }

  return (
    <Grid container style={{height:'100vh'}} className="fondoSingIn" spacing={1}>
      <Grid item md={12} justifyContent="flex-start">
        <div className="ContenedorLetrasHome">
          <h1 className="letrasHome">Pelis Mike</h1>
        </div>
      </Grid>

      <Grid container justifyContent="center">

 
           {errors.map((error, i) => (
            <div className="error-message animate__animated animate__bounce" key={i} style={{ color: "white", backgroundColor: "red",height:'50px'}}>
  
             <p>{error}</p> 
            </div>
          ))}
       
        <form
          style={{ display: "flex", justifyContent: "center" }}
          className="ContenedorSingIn"
          onSubmit={onSubmit}
        >
          <div>
            <FormControl
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
                id="outlined-basic1"
                label="Username"
                variant="outlined"
                {...register("username", { required: true })}
              />
            </FormControl>

            <FormControl
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
                id="outlined-basic2"
                label="Email"
                variant="outlined"
                {...register("email", { required: true })}
              />
            </FormControl>

            <FormControl
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                className="inputSingIn"
                type="password"
                id="current-password"
                label="Password"
                variant="outlined"
               
                InputProps={{
                  startAdornment: (
                    
                          <VisibilityIcon
                          style={{marginRight:'20px',cursor:'pointer'}}
                          onClick={()=>{
                              const pass= document.getElementById('current-password')
                            
                              if (pass.type=='password') {
                                pass.type='text'
                              }else{
                                pass.type='password'
                              }
                          }}
                          />
                   
                  ),
              }}
             
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
                Registar
              </Button>
            </div>

            <div style={{backgroundColor:'#000', borderRadius:'10px' ,width:'200px', color:"white", fontSize:'30px', }}><p>Ya tengo cuenta: <Link to='/singIn'>LogIn </Link></p></div>
          </div>
          
        </form>
      </Grid>
    </Grid>
  );
}

export default Register;
