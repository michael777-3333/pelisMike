import axios from "./axios";
export const getMoviesRequest=(movies)=>axios.get('/movies', movies)