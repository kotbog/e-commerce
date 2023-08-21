import {createBrowserRouter} from "react-router-dom";
import * as path from "path";
import Login from "@pages/Login";

const router = createBrowserRouter([
    {
        path: "login",
        element: Login
    }
])