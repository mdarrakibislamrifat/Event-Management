import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CardDetailsPage from "../Components/CardDetailsPage/CardDetailsPage";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('/event.json')
          
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        },
        {
          path:'/card/:event_id',
          element:<PrivateRoute><CardDetailsPage></CardDetailsPage></PrivateRoute>,
          loader:()=>fetch('/event.json')
        }
      ]
    },
  ]);

export default router;