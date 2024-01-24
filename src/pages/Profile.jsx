import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";
import { Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { useAuth } from "../context/AuthContext";
function Profile(params) {
  const { register, handleSubmit } = useForm();
  const {user}=useAuth()
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <div style={{ paddingTop: "100px" }}></div>
        <div
          style={{
          
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "50px", color:'white' }}>{user['username']}</h1>
          </div>
          <div>
            <img
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              src="/src/assets/img/logos/onePiece.jpg"
              alt=""
            />
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <FormControl
                style={{
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height:'30px'
                }}
              >
                <TextField
                  style={{ backgroundColor: "#fff", width:'300px',height:'50px' }}
                  className="inputSingIn"
                  type="text"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  {...register("username", { required: true })}
                />
              </FormControl>
              <div style={{justifyContent:'center', display:'flex', marginTop:'40px'}}>
                <Button
                  style={{
                    backgroundColor: "white",
                    fontFamily: ' "Jolly Lodger", system-ui',
                    color: "black",
                    width:'50px',
                    height:'40px'
                  }}
                  className="buttonSingIn"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Profile;
