import { Link } from "react-router-dom";
import useCarts from "../../../Hooks/useCarts";
import useEncoded from "../../../Hooks/useEncoded";


const YourCarts = () => {
   const encoded = useEncoded();
   const [carts, refetch] = useCarts();
   // console.log(carts);

   // Calculate total price
   const totalPrice = carts.reduce((total, cart) => {
      // Assuming each cart item has a price property
      return total + cart.price;
   }, 0);

   const handleDeleteJob = (cid) => {
      encoded.delete(`/APIs/carts/${cid}`)
         .then(res => {
            if (res.data.deletedCount > 0) {
               alert('Deleted Successfully.');
               refetch();
            }
         })
      console.log(cid);
   }

   return (
      <>
         <div className="flex justify-evenly">
            <h2 className="text-4xl">Items: {carts.length}</h2>
            <h2 className="text-4xl">Total Price: ${totalPrice.toFixed(2)}</h2>
            <Link to="/workspace/create-payment">
               <button className="btn btn-primary">Pay</button>
            </Link>

         </div>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>
                        #
                     </th>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Delete</th>
                  </tr>
               </thead>

               {
                  carts.map(cart => (
                     <tbody key={cart._id}>
                        <tr>
                           <th>
                              <label>
                                 <input type="checkbox" className="checkbox" />
                              </label>
                           </th>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                 </div>
                              </div>
                           </td>
                           <td>
                              {cart.name}
                           </td>
                           <td>{cart.email}</td>
                           <th>
                              <button onClick={() => handleDeleteJob(cart._id)} className="btn btn-ghost btn-xs">Delete</button>
                           </th>
                        </tr>
                     </tbody>
                  ))
               }

            </table>
         </div>
      </>
   );
};

export default YourCarts;