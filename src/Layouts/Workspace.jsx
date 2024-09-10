import Navigations from "../Pages/Workspace/Navigations/Navigations";


const Workspace = () => {
   // const [isNavOpen, setIsNavOpen] = useState(false);

   // const toggleNav = () => {
   //    setIsNavOpen(!isNavOpen);
   // };

   return (
      <>
         <section>
            <div className="container px-6 m-auto">
               <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                  <div className="col-span-4 lg:col-span-3">
                     <Navigations />
                  </div>
                  <div className="col-span-4 lg:col-span-9">
                     {/* <Outlet /> */}
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt similique eaque modi odit in, accusamus quasi sed. Nihil ex iste similique atque ipsum quaerat? Nesciunt excepturi, non asperiores doloremque, neque voluptas ipsam voluptatibus, provident officia adipisci laborum incidunt ab nam magni perspiciatis quam qui iusto vel eligendi sapiente. Deleniti pariatur exercitationem maiores doloribus, voluptates, nesciunt nemo repudiandae sint iusto dicta, voluptas perferendis. Quis cupiditate iste eveniet corporis, cumque sit facere tenetur obcaecati saepe praesentium, quae non velit fugiat tempore doloribus. Officiis, quas? Veniam maiores laudantium rem nam voluptas praesentium sit itaque soluta similique suscipit officiis, aliquid expedita assumenda perspiciatis ipsa?
                  </div>
               </div>
            </div>
         </section>
         {/* <section>
            <div className="container px-6 m-auto">
               <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">

                  
                  <div className="block lg:hidden col-span-4">
                     <button
                        onClick={toggleNav}
                        className="bg-blue-500 text-white p-2 rounded-md"
                     >
                        {isNavOpen ? 'Close Menu' : 'Open Menu'}
                     </button>
                  </div>

                  
                  <div
                     className={`${isNavOpen ? 'block' : 'hidden'
                        } lg:block col-span-4 lg:col-span-3`}
                  >
                     <Navigations />
                  </div>

                  
                  <div className="col-span-4 lg:col-span-9">
                     <Outlet />
                  </div>
               </div>
            </div>
         </section> */}
      </>
   );
};

export default Workspace;