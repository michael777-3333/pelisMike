import axios from "./axios";
const API = "http://localhost:3000/api";

export const registerRequest = (user) => axios.post(`/register`, user);

//creau un registerRequest luego pasa un usuario, voy a enviar una peticion post con ese usuario que nos estan dando

export const loginRequest = (user)=> axios.post(`/login`,user)

export const veryfyTokenRequest=()=> axios.get('/verify',veryfyTokenRequest)

export const googleRequest=()=> axios.post(`/auth/google`)

export const veryfyGoogleToken=()=> axios.get(`verifyGoogle`,veryfyGoogleToken)

