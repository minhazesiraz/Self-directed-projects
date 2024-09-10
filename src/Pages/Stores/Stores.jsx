import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useEncoded from "../../Hooks/useEncoded";
import "./Stores.css";

const Stores = () => {
   const encoded = useEncoded();

   const { data: digital_offerings = [], isLoading, isError, error } = useQuery({
      queryKey: ["digital_offerings"],
      queryFn: async () => {
         const res = await encoded.get("APIs/digital-offerings");
         return res.data;
      }
   });
   console.log(digital_offerings);

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error: {error.message}</p>;

   return (
      <div className="grid grid-cols-4 gap-3 my-20">
         {digital_offerings.length > 0 ? (
            digital_offerings.map((store) => (
               <div
                  key={store.id}
                  className="effect-image-1 overflow-hidden rounded bg-white text-slate-500 relative"
               >
                  {/*  <!-- Image --> */}
                  <figure>
                     <img
                        src={store.image || "https://picsum.photos/id/493/800/600"}
                        alt={store.name || "card image"}
                        className="aspect-video w-full"
                     />
                     <div className="overlay">
                        <div className="overlay-content">
                           <span>Special Offer!</span> <br />
                           <Link to={`/digital-offerings/${store._id}`}>Detail</Link>
                        </div>
                     </div>
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="p-6">
                     <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                           {store.name || "Default Name"}
                        </h3>
                        <p className="text-slate-400">৳{store.price || "0.00"}</p>
                     </header>
                     <p>{store.description || "Default Description"}</p>
                  </div>
                  {/*  <!-- Action base sized basic button --> */}
                  <div className="flex justify-end p-6 pt-0">
                     <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>Order now!</span>
                     </button>
                  </div>
               </div>
            ))
         ) : (
            <p>No stores available</p>
         )}
      </div>
   );
};

export default Stores;
