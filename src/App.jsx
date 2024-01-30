import { useState } from "react";
import Button from "@mui/material/Button";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Routes from "./routes/indexRoutes";
import "../public/styles/index.css";
import { AuthProvaider } from "./context/AuthContext";
import { UserProvaider } from "./context/userContext";
import { MoviesProvaider } from "./context/moviesContext";

function App() {
  return (
    <AuthProvaider>
      <UserProvaider>
        <MoviesProvaider>
        <RouterProvider basename='https://pelis-mike.vercel.app/' router={Routes}></RouterProvider>
        </MoviesProvaider>
      
      </UserProvaider>
    </AuthProvaider>
  );
}

export default App;
