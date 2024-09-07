import { Outlet } from "react-router-dom";
import Changing from "../Pages/Home/Sharing/Changing/Changing";
import Footers from "../Pages/Home/Sharing/Footers/Footers";
import Navbars from "../Pages/Home/Sharing/Navbars/Navbars";

const Main = () => {
    return (
        <>
            <Navbars/>
            <Outlet/>
            <Footers/>
            <Changing/>
        </>
    );
};

export default Main;