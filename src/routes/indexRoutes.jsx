import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Start from "../pages/Start";
import Comedia from "../pages/Comedia";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../Home"
import Drama from '../pages/Drama'
import SingIn from "../pages/SingIn";
import Register from "../pages/Register";
// import { createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container, CssBaseline } from "@mui/material";
import Movies from "../pages/movies";
import Profile from "../pages/Profile.jsx";
import { AuthProvaider } from "../context/AuthContext.jsx";
import Action from "../pages/accion.jsx";
import Fantasia from "../pages/fantasia.jsx";
import Terror from "../pages/terror.jsx";
import { MoviesProvaider } from "../context/moviesContext";

const AppRoutes = () => {
  return (
    
    <Router>
      <Routes>
     
      <Route path="/" element={<Home />} />
        <Route path="/SingIn" element={<SingIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Start" element={<Layout />}>

          <Route index element={<Start />} />
          <Route path="Drama/:id" element={<Drama />} />
          <Route path="Comedia/:id" element={<Comedia />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="Action/:id" element={<Action />} />
          <Route path="Fantasia/:id" element={<Fantasia />} />
          <Route path="Terror/:id" element={<Terror />} />
          <Route path="Profile/:id" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
   
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
