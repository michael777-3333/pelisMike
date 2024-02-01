import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/indexRoutes";
import "../public/styles/index.css";
import { AuthProvaider } from "./context/AuthContext";
import { UserProvaider } from "./context/userContext";
import { MoviesProvaider } from "./context/moviesContext";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container, CssBaseline } from "@mui/material";
// import {getDerivedtheme} from './_style/theme'
// import createTheme from "@mui/material/styles/createTheme";
function App() {
  // const theme= getDerivedtheme()
  return (
  // <div className="App">
  //   <ThemeProvider theme={theme}> 
  //   <CssBaseline/>
  //   </ThemeProvider>
  // </div>
    // <Router>
      <AuthProvaider>
        <UserProvaider>
          <MoviesProvaider>
            <AppRoutes />
          </MoviesProvaider>
        </UserProvaider>
      </AuthProvaider>
    // </Router>
  );
}

export default App;
