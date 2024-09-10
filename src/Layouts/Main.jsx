import { Outlet, useLocation } from "react-router-dom";
import Changing from "../Pages/Home/Sharing/Changing/Changing";
import Footers from "../Pages/Home/Sharing/Footers/Footers";
import Navbars from "../Pages/Home/Sharing/Navbars/Navbars";

const Main = () => {
   const location = useLocation();
   // console.log(location);

   const without = location.pathname.includes('log-in') || location.pathname.includes('create-an-account');
   return (
      <>
         {without || <Navbars />}
         <Outlet />
         <Changing />
         {without || <Footers />}
      </>
   );
};

export default Main;