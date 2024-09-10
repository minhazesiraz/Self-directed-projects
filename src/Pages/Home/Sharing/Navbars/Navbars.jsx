import { useEffect, useState } from "react";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useOAuth from "../../../../Hooks/useOAuth";
import useThemes from "../../../../Hooks/useThemes";
import Avatars from "../Avatars/Avatars";
import "./Navbars.css";

const Navbars = () => {
   const [isToggleOpen, setIsToggleOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const { theme } = useThemes();
   const { user } = useOAuth();

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY;
         if (scrollTop > 0) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const navLinks = [
      {
         epithet: 'Blogs',
         path: '/blogs',
      },
      {
         epithet: 'Planning',
         path: '/planning',
      },
      {
         epithet: 'Services',
         children: [
            { epithet: 'Web Pages', path: '/services/web-pages' },
            { epithet: 'Digital Products', path: '/services/digital-products' },
            { epithet: 'Digital Marketing', path: '/services/digital-marketing' },
            { epithet: 'SEO Services', path: '/services/Search-Engine-Optimization' }
         ]
      },
      {
         epithet: 'Contact Us',
         path: '/contact-us',
      },
      {
         epithet: 'Store',
         path: '/digital-offerings',
      }
   ]

   return (
      <>
         <header className="fixed top-0 left-0 right-0 z-10">
            <div
               className={`border-b-1 relative z-20 w-full border-b border-slate-200 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden ${theme === 'dark' || theme === 'default-dark' ? (isScrolled ? 'bg-slate-800' : '') : ''} ${theme === 'light' || theme === 'default-light' ? (isScrolled ? 'bg-slate-100' : '') : ''} ${theme === 'orange' && isScrolled ? 'bg-orange-50' : ''}`}
            >
               <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                  <nav
                     aria-label="main navigation"
                     className="flex items-stretch justify-between font-medium text-slate-700"
                     role="navigation"
                  >
                     {/*      <!-- Brand logo --> */}
                     <a
                        id="WindUI"
                        aria-label="WindUI logo"
                        aria-current="page"
                        className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                        href=""
                     >
                        Minhaz E Siraz
                     </a>
                     {/*      <!-- Mobile trigger --> */}
                     <button
                        className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                              ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                              : ""
                           }
            `}
                        onClick={() => setIsToggleOpen(!isToggleOpen)}
                        aria-expanded={isToggleOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                     >
                        <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                           <span
                              aria-hidden="true"
                              className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                           ></span>
                           <span
                              aria-hidden="true"
                              className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                           ></span>
                           <span
                              aria-hidden="true"
                              className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                           ></span>
                        </div>
                     </button>
                     {/*      <!-- Navigation links --> */}
                     <ul
                        role="menubar"
                        aria-label="Select page"
                        className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                           ? "visible opacity-100 backdrop-blur-sm"
                           : "invisible opacity-0"
                           }`}
                     >
                        {/* {
                           navLinks.map((job, i) => (
                              <li key={i} role="none" className="flex items-stretch">
                                 <NavLink
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                    to={job.path}
                                 >
                                    <span>{job.epithet}</span>
                                 </NavLink>
                              </li>
                           ))
                        } */}
                        {
                           navLinks.map((job, i) => (
                              <li key={i} className="relative flex items-stretch">
                                 {job.children ? (
                                    // Dropdown Menu
                                    <div
                                       onMouseEnter={() => setIsDropdownOpen(true)}
                                       onMouseLeave={() => setIsDropdownOpen(false)}
                                       className="relative"
                                    >
                                       <button className="flex items-center gap-2 py-4 hover:text-emerald-500">
                                          {job.epithet}
                                       </button>
                                       {isDropdownOpen && (
                                          <ul className="absolute -mt-[2.5px] top-full left-0 bg-white shadow-lg rounded py-2 z-50 w-40 overflow-auto">
                                             {job.children.map((subItem, i) => (
                                                <li key={i} className="px-4 py-2 hover:bg-gray-100">
                                                   <NavLink to={subItem.path}>{subItem.epithet}</NavLink>
                                                </li>
                                             ))}
                                          </ul>
                                       )}
                                    </div>
                                 ) : (
                                    <NavLink to={job.path}
                                       // className="flex items-center gap-2 py-4 hover:text-emerald-500"
                                       className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                    >
                                       {job.epithet}
                                    </NavLink>
                                 )}
                              </li>
                           ))
                        }
                     </ul>
                     <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                        {/*        <!-- Carts --> */}
                        <span className="inline-flex items-center cursor-pointer justify-center gap-1 rounded ring-1 ring-sky-500 ring-offset-1 p-1 text-lg mr-3 h-10">
                           <FaCartPlus />
                           10<span className="sr-only"> new emails</span>
                        </span>
                        {/*        <!-- Avatar --> */}
                        {/* <a
                           href="#"
                           className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                        >
                           <img
                              src="https://i.pravatar.cc/40?img=35"
                              alt="user name"
                              title="user name"
                              width="40"
                              height="40"
                              className="max-w-full rounded-full"
                           />
                           <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
                              <span className="sr-only"> 7 new emails </span>
                           </span>
                        </a> */}
                        {
                           user ? <>
                              {/* dropdowns */}
                              <Avatars />
                           </>
                              :
                              <Link to="/log-in">
                                 <button className="flex items-center gap-2 rounded h-10 ring-2 ring-inherit ring-offset-1 p-1 text-lg">
                                    <FaRegUser /> Log in
                                 </button>
                              </Link>
                        }
                        {/*        <!-- End Avatar --> */}
                     </div>
                  </nav>
               </div>
            </div>
         </header>
      </>
   );
};

export default Navbars;