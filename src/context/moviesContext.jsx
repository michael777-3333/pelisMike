import { createContext, useContext, useEffect, useState } from "react";
import { getMoviesRequest,getGenreMovies } from "../api/movies";
import { set } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom"; //obtener un obejero con los datos que va en la URL (useParams)



export const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("MoviesContex must be used within an AuthProvider");
  }
  return context;
};

export const MoviesProvaider = ({ children }) => {
    const [movies,setMovies]= useState([])
    const [moviesByGenres, setMoviesByGenres]= useState([])
    const [comedy, setComedy] = useState()

  const allMovies = async () => {
    try {
      const resMovie = await getMoviesRequest();
      console.log(resMovie);
      setMovies(resMovie.data)
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };

  const genresMovies = async (id)=>{
    try {
        const genres= await getGenreMovies(id)
        console.log(genres);
        setMoviesByGenres(genres)
    } catch (error) {
        
    }
  }

  useEffect(()=>{
    console.log('sss');
    async function checMovies(){
      try {
              const resMovie = await getMoviesRequest();
              setMovies(resMovie.data)
              console.log(resMovie.data);
              // setComedy()
              // console.log(resMovie[11].genres["_id"]);
            } catch (error) {
              console.log(error);
            }
    }
    checMovies()
  },[])

  // useEffect(() => {
  //     const checkMovies = async ()=> {
  //     try {
  //       const resMovie = await getMoviesRequest();
  //       setMovies(resMovie.data)
  //       console.log(resMovie.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   checkMovies()
  // }, []);

  return (
    <MoviesContext.Provider
      value={{
        allMovies,movies,genresMovies,moviesByGenres
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
