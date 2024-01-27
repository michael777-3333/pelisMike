import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //obtener un obejero con los datos que va en la URL (useParams)
import { useMovies } from "../context/moviesContext";
import CardsStart from "../components/cardsStart";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { useForm } from "react-hook-form";

function Terror() {
  const { moviesByGenres, genresMovies } = useMovies();
  const params = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [charge, setCharge] = useState("");
  console.log(charge);

  useEffect(() => {
    genresMovies(params.id);
  }, [params.id]);
  const handleChange = (event) => {
    setCharge(event.target.value);
    console.log("ll");
  };

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
          <h1 style={{ color: "white", fontSize: "50px" }}>Terror</h1>
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
              placeholder="Busca la peli"
              variant="outlined"
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
          .map((pelis) => <CardsStart key={pelis._id} img={pelis.img} />)}
    </Grid>
  );
}

export default Terror;
