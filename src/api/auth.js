import axios from "./axios";
const API = "http://localhost:3000/api";
// import { useAuth } from "../context/AuthContext.jsx";
// const {tokenGoogle} = useAuth() 
export const registerRequest = (user) => axios.post(`/register`, user);

//creau un registerRequest luego pasa un usuario, voy a enviar una peticion post con ese usuario que nos estan dando

export const loginRequest = (user)=> axios.post(`/login`,user)

export const verifyTokenRequest = (token) => {
    return axios.get('/verify', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    });
  };
  // 'Content-Type': 'application/json': Este encabezado indica al servidor el tipo de contenido que se está enviando en el cuerpo de la solicitud. En este caso, se está especificando que el cuerpo de la solicitud está en formato JSON.
// 'Authorization': ${token}``: Este es el encabezado de autorización. En este caso, el valor del encabezado de autorización es el token que se está pasando a la solicitud. El formato ${token} es una interpolación de cadena que inserta el valor de la variable token en la cadena.
// Cuando se envía una solicitud HTTP con estos encabezados, el servidor puede interpretar correctamente el contenido de la solicitud (en este caso, JSON) y puede autenticar al cliente utilizando el token de autorización que se proporciona.


export const googleRequest=()=> axios.post(`/auth/google`)

export const googleRequestToken=()=> axios.get(`/auth/google`,googleRequest)

export const veryfyGoogleToken=()=> axios.get(`verifyGoogle`,veryfyGoogleToken)

