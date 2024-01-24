import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Start from "../pages/Start";
import Comedia from "../pages/Comedia";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../Home"
import Drama from '../pages/Drama'
import SingIn from "../pages/SingIn";
import Register from "../pages/Register";

import Movies from "../pages/movies";
import Profile from "../pages/profile";
import { useAuth } from "../context/AuthContext.jsx";

const Routes = createBrowserRouter([
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
        path: "/Start/Drama",
        element: <Drama />,
        // element: <Start />,
      },
      {
        path: "/Start/Comedia",
        element: <Comedia/>,
      },
      {
        path: "/Start/Movies",
        element: <Movies/>,
      },
      {
        path: "/Start/Profile",
        element: <Profile/>,
      },
    ],
  },
]);
export default Routes;
