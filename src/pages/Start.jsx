import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardsStart from "../components/cardsStart.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useUser } from "../context/userContext.jsx";
import { useForm } from "react-hook-form";
// import ima from '../../src/assets/img/fondo/deapool.jpg'
import img from '../../public/17Otravez.jpg'
// import {
//   cardsStartArry,
//   cardsComediaArry,
// } from "../components/cardsStartArray.js";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/moviesContext.jsx";
function Start() {
  const { name } = useUser();
  let stop = false;
  const navigate = useNavigate();
  const { movies, allMovies } = useMovies();

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
    console.log("sss");
  }

  return (
    <Grid
      container
      spacing={1}
      style={{
        backgroundColor: "black",
        margin: "0px",
        padding: "0px",
        height: "100vh",
        width: "100%",
        
      }}
    >
      <div style={{ height: "40px" }}></div>
      <Grid item xs={12} marginTop={6}>
        <Carousel partialVisible={true} responsive={responsive}>

       

          {movies && movies.slice(0,1).map((pelis) => (
              <CardsStart key={pelis._id} img={pelis.img} goMovie={seeMovie} />
            ))}
        </Carousel>
      </Grid>

      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>

          {movies &&
            movies&&
            movies.slice(11,20).map((pelis) => (
              // <Lazyloading/>
              <CardsStart key={pelis._id} img={pelis.img} />
            ))}
        </Carousel>
      </Grid>
      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {movies &&
            movies&&
            movies.slice(21,31).map((pelis) => (
              <CardsStart key={pelis._id} img={pelis.img} />
            ))}
        </Carousel>
        <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {movies &&
            movies &&
            movies.slice(31,40).map((pelis) => (
              <CardsStart key={pelis._id} img={pelis.img} />
            ))}
        </Carousel>
      </Grid>
      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {movies &&
            movies &&
            movies.slice(41,47).map((pelis) => (
              <CardsStart key={pelis._id} img={pelis.img} />
            ))}
        </Carousel>
      </Grid>
      </Grid>
    </Grid>
  );
}
export default Start;
