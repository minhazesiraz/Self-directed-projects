

const DetailOfStores = () => {
   return (
      <>
         <section>
            <div className="container px-6 m-auto my-20">
               <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                  <div className="col-span-4 lg:col-span-7">
                     {/* Column 7/12 */}
                     {/*<!-- Component: E-commerce card --> */}
                     <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                        {/*  <!-- Image --> */}
                        <figure>
                           <img
                              src="https://picsum.photos/id/493/800/600"
                              alt="card image"
                              className="aspect-video w-full"
                           />
                        </figure>
                        {/*  <!-- Body--> */}
                        <div className="p-6">
                           <header className="mb-4">
                              <h3 className="text-xl font-medium text-slate-700">
                                 Greek breakfast
                              </h3>
                              <p className=" text-slate-400"> $8.99</p>
                           </header>
                           <p>
                              Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries +
                              Granola + Honey.
                           </p>
                        </div>
                        {/*  <!-- Action base sized basic button --> */}
                        <div className="flex justify-end p-6 pt-0">
                           <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                              <span>Order now!</span>
                           </button>
                        </div>
                     </div>
                     {/*<!-- End E-commerce card --> */}
                  </div>
                  <div className="col-span-4 lg:col-span-5">Column 5/12</div>
               </div>
            </div>
         </section>
      </>
   );
};

export default DetailOfStores;