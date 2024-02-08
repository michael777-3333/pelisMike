import { Grid } from "@mui/material";
import { useState, useEffect, Suspense } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardsStart from "../components/cardsStart.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import SimpleSlider from "../components/carousel.jsx";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/moviesContext.jsx";
import Swal from "sweetalert2";
import { useUser } from "../context/userContext.jsx";
import Footer from "../components/footer.jsx";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import 'animate.css';
import SlickGoTo from "../components/Slider.jsx";
import cardsStartArry from '../components/cardsStartArray.js'
import 'animate.css';

function Start() {
  const {  getUser, letPeli } = useUser();
  const navigate = useNavigate();
  const { movies, allMovies, getPelis, clearSesion, payMovie } = useMovies();
  const { errores, user } = useAuth();
  const [left, setLeft] = useState(0);
  const [right, setrRight] = useState(9);
  const [name, setName]= useState('Action')
  let left1 = 0;
  let right1 = 8;

  
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
  console.log(movies);

  useEffect(() => {
    clearSesion();
    async function letId() {
      let id = window.localStorage.getItem("id");
      if (id) {
        await getUser(id);
      } else {
        console.log("El 'id' no está definido en el localStorage");
      }
    }
    letId();
    // setName(movies[left1].genres.name) 
  }, []);
  function seeMovie(value) {
    async function letId() {
      let id = window.localStorage.getItem("id");
      if (id) {
        await getUser(id);
      }
    }
    letId();

    if (letPeli == false) {
      Swal.fire({
        title: "Suscribete para ver",
        showCancelButton: true,
        confirmButtonText: "Suscribirse",
      }).then((result) => {
        if (result.isConfirmed) {
          payMovie(value);
          getPelis(value);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
      getPelis(value);
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
      <Grid container>
        <Grid item xs={12}>
          <SimpleSlider />
        </Grid>
        {/* <div style={{height:'50px'}}></div> */}
      </Grid>

      {/* <div style={{ height: "40px" }}></div> */}
      <Grid item xs={12} marginTop={0}>
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
              <CardsStart key={pelis._id}
                  img={pelis.img}
                  goMovie={seeMovie}
                  video={pelis.video}
                  title={pelis.title}
                  id={pelis._id}
                  currency={pelis.currency}
                  description={pelis.description}
                  unit_amount={pelis.unit_amount} />
            ))}
        </Carousel>
      </Grid>




        
          <SlickGoTo></SlickGoTo>
         
          
       



      <Grid item xs={12}>
        <Carousel partialVisible={true} responsive={responsive}>
          {movies &&
            movies &&
            movies
              .slice(21, 31)
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
        <Grid item xs={12}>
          <Carousel partialVisible={true} responsive={responsive}>
            {movies &&
              movies &&
              movies
                .slice(31, 40)
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
              movies
                .slice(41, 47)
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
      </Grid>




      <Grid container justifyContent="center">
        <Grid
          style={{ backgroundColor: "black", width: "1000px" }}
          container
        >

          <Grid item md={12}>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ArrowCircleLeftIcon
                style={{ color: "white", fontSize: "60px", cursor:'pointer' }}
                onClick={() => {
               
                  // left1 = left - 9;
                  // right1 = right - 9;
                  console.log(left1);
                  console.log(right1);
                  left1 = left - 9;
                  right1 = right - 9;
                  if (left1 < 0 && right1 < 9) {
                    left1 = 36;
                    right1 = 45;
                
                  }
                 
                  
                  console.log(left1);
                  console.log(right1);
                  setName(cardsStartArry[left1].genre) 
                
                  setLeft(left1);
                  setrRight(right1);
                }}
              />
              <h1 style={{ color: "white", margin: "20px" }}>{name}</h1>
              <ArrowCircleRightIcon
                style={{ color: "white", fontSize: "60px", cursor: "pointer" }}
                onClick={() => {
                
                  left1 = left + 9;
                  right1 = right + 9;
                  if (left1 == 45 && right1 == 54) {
                    left1 = 0;
                    right1 = 9;
                  }

                  console.log(left1, right1);
                  setName(cardsStartArry[left1].genre) 
                  setLeft(left1);
                  setrRight(right1);
                 
                }}
              />
            </div>
          </Grid>

          {cardsStartArry &&
            cardsStartArry.slice(left, right).map((pelis) => (
              <Grid className="animate__animated animate__fadeIn" item xs={12} md={4} style={{ marginBottom: "10px" }}>
                <Footer  key={pelis.id} img={pelis.img} />
              </Grid>
            ))}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
          <p style={{color:'white'}}> Derechos Reservados Company Mike</p>
        </div>
      </Grid>
    </Grid>
  );
}
export default Start;
