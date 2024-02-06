import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //obtener un obejero con los datos que va en la URL (useParams)
import { useMovies } from "../context/moviesContext";
import CardsStart from "../components/cardsStart";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useUser} from '../context/userContext.jsx'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function Fantasia() {
  const { moviesByGenres, genresMovies } = useMovies();
  const params = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [charge, setCharge] = useState("");
  const { name,getUser,letPeli } = useUser();
  const navigate = useNavigate();
  const { movies, allMovies,getPelis,clearSesion,payMovie } = useMovies();
  useEffect(() => {
    genresMovies(params.id);
  }, [params.id]);
  const handleChange = (event) => {
    setCharge(event.target.value);
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
         
      } else {
          console.log("El 'id' no está definido en el localStorage");
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#000",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "Jolly Lodger",
  }));

  return (
    <Grid
      container
      justifyContent="center"
      style={{ backgroundColor: "black" }}
    >
      <Grid item xs={12}>
        <Item>
          <h1 style={{ color: "white", fontSize: "50px" }}>Fantasia</h1>
        </Item>

        <form>
          <Grid container justifyContent="center">
            <input
              onChange={handleChange}
              style={{
                backgroundColor: "#fff",
                width: "300px",
                height: "50px",
              }}
              className="inputSingIn"
              type="text"
              id="outlined-basic"
              label="Username"
              placeholder="Busca la peli"
              value={charge}
              // {...register("username", { required: true })}
            />
          </Grid>
        </form>
      </Grid>

      {moviesByGenres &&
        moviesByGenres.data &&
        moviesByGenres.data
          .filter((pelis) => {
            return charge.toLowerCase() === ""
              ? pelis
              : pelis.title.toLowerCase().includes(charge);
          })
          .map((pelis) => <CardsStart key={pelis._id}
          img={pelis.img}
          goMovie={seeMovie}
          video={pelis.video}
          title={pelis.title}
          id={pelis._id}
          currency={pelis.currency}
          description={pelis.description}
          unit_amount={pelis.unit_amount} />)}
    </Grid>
  );
}

export default Fantasia;
