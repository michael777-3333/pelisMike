import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, veryfyTokenRequest } from "../api/auth";
import {getMoviesRequest} from '../api/movies'
import { set } from "react-hook-form";
import Cookie from "js-cookie";
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
  const [movies, setMovies]=useState([])
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res);
      setUser(res.data);
      setisAuthenticate(true);
      getMovies()
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const singin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setisAuthenticate(true);
      setUser(res.data);
      getMovies()
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        console.log(error.response.data);
        return setErrors[error.response.data];
      }
      setErrors([error.response.data.message]);
    }
  };

  const logout = (user)=>{
    Cookie.remove("token");
    setisAuthenticate(false)
    setUser(null)
  }

  
      
  

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookie.get();
      if (!cookies.token) {
        setisAuthenticate(false);
        setLoading(false);
        return setUser(null);

      }
      try {
        const res = await veryfyTokenRequest(cookies.token);
        const resMovie = await getMoviesRequest(movies)
      // console.log(res['data']);
        setMovies(resMovie['data'])
        if (!res.data) {
          setisAuthenticate(false);
          setLoading(false);
          return;
        }
        console.log('dd');
        setisAuthenticate(true);
        setUser(res.data);
        
        setLoading(false);
      } catch (error) {
       
        console.log(error);
        setisAuthenticate(false);
        setUser(null);
        setLoading(false);
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
        movies
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
