import React, { useState } from "react";
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom"; //obtener un obejero con los datos que va en la URL (useParams)
import Swal from "sweetalert2";
function ResetPassword(params) {
  const { register, handleSubmit } = useForm(); //me ahorra el useState()
  const { resetPaswordToken, messagePassword, errors } = useAuth();
  const [id, setId] = useState("");
  const [token, setToken] = useState();
  const paramsHeader = useParams();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);

    // if (values.password!=values.password1) {
    //    Swal.fire({text:'Must be same',icon: "question"});

    // }else{
    resetPaswordToken(paramsHeader.id, paramsHeader.token, values);
    // }
  });
  function moviesGo() {}
  return (
    <Grid container style={{height:'100vh'}} className="fondoSingIn" spacing={1}>
      <Grid item md={12} justifyContent="flex-start">
        <div className="ContenedorLetrasHome">
          <h1 className="letrasHome">Resset Password</h1>
        </div>
      </Grid>

      <Grid container justifyContent="center">
        {messagePassword.map((error, i) => (
          <div
            className="error-message animate__animated animate__bounce"
            key={i}
            style={{ color: "white", backgroundColor: "green", height: "50px" }}
          >
            <p>{error}</p>
          </div>
        ))}
        {errors.map((error, i) => (
          <div
            className="error-message animate__animated animate__bounce"
            key={i}
            style={{ color: "white", backgroundColor: "red", height: "50px" }}
          >
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
                type="password"
                id="confirm"
                label="Password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <VisibilityIcon
                      style={{ marginRight: "20px", cursor: "pointer" }}
                      onClick={() => {
                        const pass = document.getElementById("confirm");

                        if (pass.type == "password") {
                          pass.type = "text";
                        } else {
                          pass.type = "password";
                        }
                      }}
                    />
                  ),
                }}
                {...register("confirm", { required: true })}
              />
            </FormControl>

            <div
              style={{ fontSize: "30px", color: "white", paddingLeft: "20px" }}
            >
              confirm password
            </div>
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
                label="confirm Password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <VisibilityIcon
                      style={{ marginRight: "20px", cursor: "pointer" }}
                      onClick={() => {
                        const pass =
                          document.getElementById("current-password");

                        if (pass.type == "password") {
                          pass.type = "text";
                        } else {
                          pass.type = "password";
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
              <Button
                onClick={onSubmit}
                style={{
                  backgroundColor: "white",
                  fontFamily: ' "Jolly Lodger", system-ui',
                  color: "black",
                }}
                className="buttonSingIn"
                type="submit"
              >
                Send
              </Button>
            </div>

            <div
              style={{
                backgroundColor: "#000",
                borderRadius: "10px",
                width: "200px",
                color: "white",
                fontSize: "30px",
              }}
            >
              <p>
                Ya tengo cuenta: <Link to="/singIn">LogIn </Link>
              </p>
            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  );
}
export default ResetPassword;
