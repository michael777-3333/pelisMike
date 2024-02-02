import { Grid } from "@mui/material";
import React from "react";
import { useMovies } from "../context/moviesContext.jsx";
import ReactPlayer from 'react-player'

function Movies() {
  
  let peli= JSON.parse(window.sessionStorage.getItem('pelis')) 
 console.log(peli,'s');
  
  return (
    <Grid  container style={{ backgroundColor: "black", height: "100vh",position:'fixed' }}>
      <Grid item xs={12}>
        <div style={{backgroundColor:'black', display:'flex',justifyContent:'center', marginTop:'70px'}}>
          <ReactPlayer
            url={peli.video}
            controls
            playing
            width='1100px'
            height='500px'
          />
        </div>

        <div style={{justifyContent:'center',display:'flex'}}><h2 style={{fontSize:'60px',color:'white'}}>{peli.title}</h2></div>
      </Grid>

      <Grid item xs={12}>
          
      </Grid>
    </Grid>
  );
}
export default Movies;
