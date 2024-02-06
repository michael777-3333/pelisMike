import { createContext, useContext, useEffect, useState } from "react";
import { getMoviesRequest,getGenreMovies,payMovieRequest } from "../api/movies";
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
    // const [pelis2,setPelis]=useState([])

  const allMovies = async () => {
    try {
      const resMovie = await getMoviesRequest();
      
      setMovies(resMovie.data)
     
    } catch (error) {
      console.log(error);
    }
  };

 const getPelis = async (pelis)=>{
  
  window.sessionStorage.setItem('pelis',JSON.stringify(pelis.props))
  console.log(window.sessionStorage.getItem('pelis'));
  // navigate("/start/Movies");
 }

 const clearSesion = async()=>{
  window.sessionStorage.removeItem('pelis')
 }

  const genresMovies = async (id)=>{
    try {
        const genres= await getGenreMovies(id)
        setMoviesByGenres(genres)
    } catch (error) {
        
    }
  }

  const payMovie = async (value)=>{
    console.log(value.props,'ooo');
    try {
      const res = await payMovieRequest(value.props)
      console.log(res);
      window.location.href=res.data.url
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{

    async function checMovies(){
      try {
              const resMovie = await getMoviesRequest();
              setMovies(resMovie.data)
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
        allMovies,movies,genresMovies,moviesByGenres,getPelis,clearSesion,payMovie
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
