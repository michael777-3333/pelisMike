import { HashRouter, Route, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Start from "../pages/Start";
import Comedia from "../pages/Comedia";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../Home"
import Drama from '../pages/Drama'
import SingIn from "../pages/SingIn";
import Register from "../pages/Register";

import Movies from "../pages/movies";
import Profile from "../pages/Profile.jsx";

import Action from "../pages/accion.jsx";
import Fantasia from "../pages/fantasia.jsx";
import Terror from "../pages/terror.jsx";

const Routes = HashRouter([
  {
    path:"/",
    errorElement:<NotFoundPage/>,
    element:<Home/>
  },
  {
    path:"/SingIn",
    errorElement:<NotFoundPage/>,
    element:<SingIn/>
  },
  {
    path:"/Register",
    errorElement:<NotFoundPage/>,
    element:<Register/>
  },
  {
    path: "/Start",
    element:<Layout/>,
    errorElement:<NotFoundPage/>,
    children: [
      {
        index:true,
        element:<Start/>
      },
      {
        path: "/Start/Drama/:id",
        element: <Drama />,
        // element: <Start />,
      },
      {
        path: "/Start/Comedia/:id",
        element: <Comedia/>,
      },
      {
        path: "/Start/Movies",
        element: <Movies/>,
      },
      {
        path: "/Start/Action/:id",
        element: <Action/>,
      },
      {
        path: "/Start/Fantasia/:id",
        element: <Fantasia/>,
      },
      {
        path: "/Start/Terror/:id",
        element: <Terror/>,
      },
      {
        path: "/Start/Profile/:id",
        element: <Profile/>,
      },
      
    ],
  },
]);
export default Routes;
