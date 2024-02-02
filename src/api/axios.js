import axios from "axios";

const instance = axios.create({
    baseURL:'https://pelismike.onrender.com/api',
    // baseURL:'http://localhost:3000/api',
    // baseURL:'https://pelis-q6zx.onrender.com/api',
    withCredentials:true
})

export default instance