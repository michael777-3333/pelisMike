import { Grid } from "@mui/material";
import { useState, useEffect, Suspense } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardsStart from "../components/cardsStart.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { updateUserRequest, getUserRequest } from "../api/user.js";

import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/moviesContext.jsx";
import Swal from 'sweetalert2'
import {useUser} from '../context/userContext.jsx'
function Start() {
  const { name,getUser,letPeli } = useUser();
  const navigate = useNavigate();
  const { movies, allMovies,getPelis,clearSesion,payMovie } = useMovies();
  const {errores,user}= useAuth()
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

  useEffect(()=>{
    clearSesion()
    async function letId(){
      let id = window.localStorage.getItem('id');
      if (id) {
          await getUser(id);
      } else {
          console.log("El 'id' no está definido en el localStorage");
      }
    }
    letId()    
  },[])
  function seeMovie(value) {
    async function letId(){
      let id = window.localStorage.getItem('id');
      if (id) {
          await getUser(id);
          
      } 
    }
    letId()

    if (letPeli==false) {
      Swal.fire({
        title: "Suscribete para ver",
        showCancelButton: true,
        confirmButtonText: "Suscribirse",
      }).then((result) => {
        if (result.isConfirmed) {
          payMovie(value)
          getPelis(value)
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }else{
      getPelis(value)
      navigate("/start/Movies");
    }
   
   
    // payMovie(value)
    // navigate("/start/Movies");
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
          
          {movies &&
            movies
              .slice(0, 10)
              .map((pelis) => (
                <CardsStart
                  key={pelis._id}
                  img={pelis.img}
                  goMovie={seeMovie}
                  video={pelis.video}
                  title={pelis.title}
                  id={pelis._id}
                  currency={pelis.currency}
                  description={pelis.description}
                  unit_amount={pelis.unit_amount}
                />
              ))}
        </Carousel>
      </Grid>

      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {movies &&
            movies &&
            movies.slice(11, 20).map((pelis) => (
              // <Lazyloading/>
              <CardsStart key={pelis._id} img={pelis.img} />
            ))}
        </Carousel>
      </Grid>
      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {movies &&
            movies &&
            movies
              .slice(21, 31)
              .map((pelis) => <CardsStart  key={pelis._id}
              img={pelis.img}
              goMovie={seeMovie}
              video={pelis.video}
              title={pelis.title}
              id={pelis._id}
              currency={pelis.currency}
              description={pelis.description}
              unit_amount={pelis.unit_amount} />)}
        </Carousel>
        <Grid item xs={12}>
          <Carousel partialVisible={true} responsive={responsive}>
            {movies &&
              movies &&
              movies
                .slice(31, 40)
                .map((pelis) => <CardsStart key={pelis._id}
                img={pelis.img}
                goMovie={seeMovie}
                video={pelis.video}
                title={pelis.title}
                id={pelis._id}
                currency={pelis.currency}
                description={pelis.description}
                unit_amount={pelis.unit_amount} />)}
          </Carousel>
        </Grid>
        <Grid item xs={12}>
          <Carousel partialVisible={true} responsive={responsive}>
            {movies &&
              movies &&
              movies
                .slice(41, 47)
                .map((pelis) => <CardsStart key={pelis._id}
                img={pelis.img}
                goMovie={seeMovie}
                video={pelis.video}
                title={pelis.title}
                id={pelis._id}
                currency={pelis.currency}
                description={pelis.description}
                unit_amount={pelis.unit_amount} />)}
          </Carousel>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Start;
