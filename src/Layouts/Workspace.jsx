import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigations from "../Pages/Workspace/Navigations/Navigations";

const Workspace = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);

   const toggleNav = (state) => {
      setIsNavOpen(state);
   };

   return (
      <>
         <section>
            <div className="container px-6 m-auto">
               <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                  <div className="col-span-4 lg:col-span-3">
                     <Navigations isNavOpen={isNavOpen} toggleNav={toggleNav} />
                  </div>
                  <div className="col-span-4 lg:col-span-9">
                     <Outlet />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Workspace;