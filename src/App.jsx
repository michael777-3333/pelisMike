import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/indexRoutes";
import "../public/styles/index.css";
import { AuthProvaider } from "./context/AuthContext";
import { UserProvaider } from "./context/userContext";
import { MoviesProvaider } from "./context/moviesContext";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container, CssBaseline } from "@mui/material";

function App() {
 
  return (
  
      <AuthProvaider>
        <UserProvaider>
          <MoviesProvaider>
            <AppRoutes />
          </MoviesProvaider>
        </UserProvaider>
      </AuthProvaider>
    
  );
}

export default App;
