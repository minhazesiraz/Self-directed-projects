import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOAuth from "../../../../Hooks/useOAuth";
import useThemes from "../../../../Hooks/useThemes";
import dashboard from "../../../../assets/dashboard.svg";
import usersLogout from "../../../../assets/usersLogout.svg";

const Avatars = () => {
   const { user, logout } = useOAuth();
   const [isOpen, setIsOpen] = useState(false);
   const wrapperRef = useRef(null);
   const navigate = useNavigate();
   const { theme } = useThemes();

   const navLinks = [
      {
         epithet: "Dashboard",
         icons: dashboard,
         sortDescription: "Quick overview of all basic metrics and settings",
         path: "/dashboard"
      },
      {
         epithet: "Metrics and analytics",
         icons: usersLogout,
         sortDescription: "Detailed analytic date reviews management",
         path: "/metrics-analytics"
      },
      { separator: true },
      {
         epithet: "Multi-Channel Funnels overview",
         icons: usersLogout,
         sortDescription: "Generated from conversion paths, the sequences of interactions",
         path: "/multi-channel-funnels"
      },
      {
         epithet: "User settings",
         icons: usersLogout,
         sortDescription: "User settings allow you to configure your email preferences",
         path: "/user-settings"
      },
      {
         epithet: "User Profile",
         icons: usersLogout,
         sortDescription: "A collection of settings and information about your account",
         path: "/user-profile"
      },
      { separator: true },
      {
         epithet: "Log out",
         icons: usersLogout,
         /* sortDescription: "A collection of settings and information about your account", */
         path: "/log-in"
      },
   ];

   // Handle click outside of the dropdown
   const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      // Add event listener on document mount
      document.addEventListener("click", handleClickOutside);

      // Cleanup function to remove listener on unmount
      return () => {
         document.removeEventListener("click", handleClickOutside);
      };
   }, []); // Empty dependency array ensures the effect runs only once on mount

   const handleLogout = async () => {
      try {
         await logout(); // Assuming logout returns a promise
         console.log("Sign-out successful.");
         navigate("/log-in"); // Redirect after successful logout
      } catch (error) {
         console.error("An error happened during sign-out:", error);
      }
   };

   return (
      <>
         <div className="relative inline-flex">
            {/*  <!-- Start Dropdown trigger --> */}
            <button
               onClick={() => setIsOpen(!isOpen)}
               aria-expanded={isOpen ? "true" : "false"}
               ref={wrapperRef}
            >
               <span>
                  <a>
                     <img src={user?.photoURL ? user.photoURL : "https://i.pravatar.cc/48?img=1"} alt="" className="rounded h-10 w-10 ring-1 ring-sky-500 ring-offset-1 hover:shadow-slate-800" />
                  </a>
               </span>
            </button>
            {/*  <!-- End Dropdown trigger --> */}
            {/*  <!-- Start Menu list --> */}
            <ul
               className={`${isOpen ? "flex" : "hidden"} ${(theme === 'dark' || theme === 'default-dark') ? 'bg-slate-800 text-slate-400' : ''} ${(theme === 'light' || theme === 'default-light') ? 'bg-slate-100 text-slate-800' : ''} ${theme === 'warm' ? 'bg-orange-50 text-slate-800' : ''} absolute top-[105%] right-2 z-10 mt-1 w-72 list-none flex-col rounded py-2 shadow-md shadow-slate-500/10`}
            >
               {navLinks.map((job, i) => {
                  if (job.separator) {
                     return (
                        <li key={`separator-${i}`} role="separator" className="border-b border-slate-200"></li>
                     );
                  } else {
                     return (
                        <li key={i}>
                           <Link
                              to={job.path}
                              onClick={job.epithet === 'Log out' ? () => handleLogout() : undefined}
                              className={`flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 focus:outline-none focus-visible:outline-none ${(theme === 'dark' || theme === 'default-dark') ? 'hover:bg-slate-900 hover:text-slate-400 focus:bg-slate-900 focus:text-slate-400' : ''} ${(theme === 'light' || theme === 'default-light') ? 'hover:bg-white hover:text-slate-800 focus:bg-slate-50 focus:text-slate-800' : ''} ${theme === 'warm' ? 'hover:bg-orange-100 hover:text-slate-800 focus:bg-slate-50 focus:text-slate-800' : ''}`}
                              aria-current=""
                           >
                              <span className="flex-shrink-0 w-5 h-5 text-white">
                                 <img src={job.icons} alt="" />
                              </span>
                              <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                                 <span className="leading-5 truncate">
                                    {job.epithet}
                                 </span>
                                 <span className="text-sm whitespace-normal opacity-70">
                                    {job.sortDescription}
                                 </span>
                              </span>
                           </Link>
                        </li>
                     );
                  }
               })}
            </ul>
            {/*  <!-- End Menu list --> */}
         </div>
      </>
   );
};

export default Avatars;