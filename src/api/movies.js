import axios from "./axios";
export const getMoviesRequest=(movies)=>axios.get('/movies', movies)

export const getGenreMovies=(id)=>axios.get(`/moviestType/${id}`)

export const payMovieRequest = (data)=> axios.post('/create/order',data)