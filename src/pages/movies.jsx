import { Grid } from "@mui/material";
import React from "react";

function Movies() {
  return (
    <Grid  container style={{ backgroundColor: "red", height: "100vh",position:'fixed' }}>
      <Grid item xs={12}>
        <div style={{backgroundColor:'green', display:'flex',justifyContent:'center', marginTop:'70px'}}>
          <video
            autoPlay
            loop
            muted
            // poster="https://assets.codepen.io/6093409/river.jpg"
            style={{width:'1000px', height:'500px'}}
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />

            
          </video>
        </div>
      </Grid>

      <Grid item xs={12}>
          
      </Grid>
    </Grid>
  );
}
export default Movies;
