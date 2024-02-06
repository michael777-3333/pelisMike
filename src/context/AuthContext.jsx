import { createContext, useContext, useEffect, useState } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  googleRequest,
  veryfyGoogleToken,
  googleRequestToken,
} from "../api/auth";
import { getMoviesRequest } from "../api/movies";
import { set } from "react-hook-form";
import Cookie from "js-cookie";
import CookiesUnivers from "universal-cookie";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvaider = ({ children }) => {
  const [isAuthenticate, setisAuthenticate] = useState(false);
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username,setUsername]= useState()
  let errores=false
  // const [tokenLocal, setTokenLocal]=useState()
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setisAuthenticate(true);
      JSON.stringify(window.localStorage.setItem('id',res.data.id)) 
      setUsername(window.sessionStorage.setItem('name',res.data.username ))
      try {
        window.localStorage.setItem("token", res.data.token);
       
      } catch (error) {
        console.log(error);
      }

    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const singin = async (user) => {
    try {
      const res = await loginRequest(user);
      setisAuthenticate(true);
      setUser(res.data);

      JSON.stringify(window.localStorage.setItem('id',res.data.id)) 
      setUsername(window.sessionStorage.setItem('name',res.data.username ))


      try {
        window.localStorage.setItem("token", res.data.token);
      } catch (error) {
        console.log(error);
      }

      // const cookies = new CookiesUnivers();
      // cookies.set("token", res.data.token, {
      //   path: "/",
      //   secure: true,
      //   sameSite: "strict",
      //   domain:'leafy-haupia-13a5b2.netlify.app'
      //   // expires:3600000,
      // });
      // console.log(cookies.get("token"));
    } catch (error) {
      setErrors(error.response.data)
      errores=true
      
      if (Array.isArray(error.response.data)) {
        console.log(error.response.data);
        // setErrores(error.response.data)
         
      }
      // setErrors([error.response.data.message]);
    }
  };

  const singinGoogle = async () => {
    try {
      const res = await googleRequest();

      window.location.href = res.data["url"];

      console.log(tokenGoogle);

      // console.log(res);
      // tokenGoogle()
    } catch (error) {
      console.log(error);
    }
  };

  const logout = (user) => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem('id')
    // Storage.removeItem('token')

    setisAuthenticate(false);
    setUser(null);
  };

  useEffect(() => {
    async function checkLogin() {
      const token = window.localStorage.getItem("token");
      console.log(token);
      // if (!googleToken) {
      //   if (googleToken) {
      //     try {
      //       const res = await veryfyGoogleToken(googleToken);

      //       if (!res.data) {
      //         setisAuthenticate(false);
      //         setLoading(false);
      //         return;
      //       }
      //       setisAuthenticate(true);
      //       setUser(res.data);
      //       setLoading(false);
      //     } catch (error) {
      //       setisAuthenticate(false);
      //       setUser(null);
      //       setLoading(false);
      //     }

      //   }
      //   setisAuthenticate(false);
      //   setLoading(false);
      //   return setUser(null);

      // } else {
      try {
        // Verifica si cookies.token tiene un valor antes de hacer la solicitud
        if (token) {
          const res = await verifyTokenRequest(token);
          console.log(res);
          if (!res.data) {
            console.log("kkjj");
            setisAuthenticate(false);
            setLoading(false);
            return;
          }
          console.log(res.data);
          setisAuthenticate(true);
          setUser(res.data);
          setLoading(false);
        } else {
          // Si cookies.token no tiene un valor, establece la autenticación como falsa y detiene la carga
          setisAuthenticate(false);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setisAuthenticate(false);
        setUser(null);
        setLoading(false);
        // }
      }
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticate,
        errors,
        singin,
        loading,
        logout,
        singinGoogle,
        errores,username,
        setUsername   
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
