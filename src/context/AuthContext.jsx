import { createContext, useContext, useEffect, useState } from "react";
import {
  registerRequest,
  loginRequest,
  veryfyTokenRequest,
  googleRequest,
  veryfyGoogleToken,
} from "../api/auth";
import { getMoviesRequest } from "../api/movies";
import { set } from "react-hook-form";
import Cookie from "js-cookie";
import CookiesUnivers from 'universal-cookie';
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
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setisAuthenticate(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const singin = async (user) => {
    try {
      const res = await loginRequest(user);
      setisAuthenticate(true);
      setUser(res.data)
      console.log(res);
      console.log(res.token);
      
      const cookies= new CookiesUnivers()
      cookies.set('token',res.data.token,{path:'/', secure:true, sameSite:'strict'}) 

    } catch (error) {
      if (Array.isArray(error.response.data)) {
        console.log(error.response.data);
        return setErrors[error.response.data];
      }
      setErrors([error.response.data.message]);
    }
  };

  const singinGoogle = async () => {
    try {
      const res = await googleRequest();

      window.location.href = res.data["url"];

    } catch (error) {
      console.log(error);
    }
  };

  const logout = (user) => {
    Cookie.remove("token");
    Cookie.remove('googleToken')
    setisAuthenticate(false);
    setUser(null);
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookie.get();
          console.log(cookies,'dd');
      if (cookies.googleToken) {
        if (!cookies.googleToken) {
          setisAuthenticate(false);
          setLoading(false);
          return setUser(null);
        }
        try {

          const res = await veryfyGoogleToken(cookies.googleToken);

          if (!res.data) {
            setisAuthenticate(false);
            setLoading(false);
            return;
          }
          setisAuthenticate(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {

          setisAuthenticate(false);
          setUser(null);
          setLoading(false);
        }
      } else {
        if (!cookies.token) {
          console.log(cookies.token);
            console.log('s');
          setisAuthenticate(false);
          setLoading(false);
          return setUser(null);
        }
        try {
          console.log('opop');
          const res = await veryfyTokenRequest(cookies.token);
          if (!res.data) {
            console.log('kkjj');
            setisAuthenticate(false);
            setLoading(false);
            return;
          }
          console.log(res.data);
          setisAuthenticate(true);
          setUser(res.data);

          setLoading(false);
        } catch (error) {

          setisAuthenticate(false);
          setUser(null);
          setLoading(false);
        }
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
        // movies
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
