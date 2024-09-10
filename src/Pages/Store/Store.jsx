import { useQuery } from "@tanstack/react-query";
import useEncoded from "../../Hooks/useEncoded";

const Store = () => {
   const encoded = useEncoded();

   const { data: stores = [], isLoading, isError, error } = useQuery({
      queryKey: ["stores"],
      queryFn: async () => {
         const res = await encoded.get("APIs/stores");
         return res.data;
      }
   });

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error: {error.message}</p>;

   return (
      <div className="space-y-4 grid grid-cols-4 gap-3 my-20">
         {stores.length > 0 ? (
            stores.map((store) => (
               <div
                  key={store.id}
                  className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
               >
                  {/*  <!-- Image --> */}
                  <figure>
                     <img
                        src={store.image || "https://picsum.photos/id/493/800/600"}
                        alt={store.name || "card image"}
                        className="aspect-video w-full"
                     />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="p-6">
                     <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                           {store.name || "Default Name"}
                        </h3>
                        <p className="text-slate-400">${store.price || "0.00"}</p>
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

export default Store;