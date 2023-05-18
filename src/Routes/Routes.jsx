import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Services from "../Pages/Home/Services/Services";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
            path:'/services',
            element: <Services/>
        },
        {
            path:'/login',
            element: <LogIn/>
        },
        {
            path:'/signup',
            element: <SignUp/>
        },
        {
            path:'/checkout/:id',
            element: <PrivateRoute><CheckOut/></PrivateRoute>,
            loader: ({params}) => fetch(`https://car-project-server-chi.vercel.app/services/${params.id}`)
        },
        {
            path:'/bookings',
            element: <PrivateRoute><Bookings/></PrivateRoute>
        },
    ]
  },
]);

export default router;
