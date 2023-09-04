import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductProfile from "../pages/ProductProfile";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/product/:id',
                element: <ProductProfile />
            }
        ]
    }
])
