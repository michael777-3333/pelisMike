import { Grid } from "@mui/material";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardsStart from "../components/cardsStart.jsx";
import { useAuth } from "../context/AuthContext.jsx";
// import {
//   cardsStartArry,
//   cardsComediaArry,
// } from "../components/cardsStartArray.js";
import  {useNavigate}  from "react-router-dom";
function Start() {
  const navigate = useNavigate()
  const {movies } = useAuth();
  // console.log(movies);
  const limit1 = movies.slice(0,10)
  const limit2 = movies.slice(10,20)
  const limit3= movies.slice(20,31)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  function seeMovie(value) {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i]['genres']['name']==='action') {
        console.log(movies[i]);
      } 
      
    }
  }
  
  return (
    <Grid  container spacing={1} style={{ backgroundColor: "black",margin:'0px',padding:'0px',height:'100vh', width:'100%' }}>
      <div style={{height:'40px'}}></div>
      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {limit1.map((pelis) => (
            <CardsStart key={pelis._id} img={pelis.img}
              goMovie={seeMovie}
            />
          ))}
        </Carousel>
      </Grid>

      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {limit2.map((pelis) => (
            <CardsStart key={pelis._id} img={pelis.img} />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {limit3.map((pelis) => (
            <CardsStart key={pelis._id} img={pelis.img} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}
export default Start;
