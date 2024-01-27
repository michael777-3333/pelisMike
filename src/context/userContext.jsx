import { createContext, useContext, useEffect, useState } from "react";
import { updateUserRequest, getUserRequest } from "../api/user.js";
import { veryfyTokenRequest } from "../api/auth.js";
import { useAuth } from "./AuthContext.jsx";
import Cookie from "js-cookie";
export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an AuthProvider");
  }
  return context;
};

export const UserProvaider = ({ children }) => {
    // const {user}= useAuth()
    const [name, setName]= useState()

  const getUser = async (id) => {
    try {
      console.log(id);
      const res = await getUserRequest(id);
     console.log(res.data['username']);
      setName(res.data['username']);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id, user) => {
    try {
      console.log(id);
      console.log(user);
      const res = await updateUserRequest(id, user);
      setName(res.data['username'])
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <UserContext.Provider
      value={{
        getUser,
        updateUser,
        name,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
