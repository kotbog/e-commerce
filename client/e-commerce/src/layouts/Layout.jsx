import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return <div>
        <Navbar />
        <Outlet />
        <h1>Footer</h1>
    </div>
}

export default Layout;