import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../../Components/Modals/ConfirmationModal";
import useEncoded from "../../../Hooks/useEncoded";


const Users = () => {
   const encoded = useEncoded();

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedUser, setSelectedUser] = useState(null);

   const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await encoded.get("APIs/users");
         return res.data;
      }
   })
   console.log(users);

   const handleDeleteAccount = (user) => {
      console.log("Deleting user:", user);
      encoded.delete(`/APIs/users/${user._id}`).then((res) => {
         if (res.data.deletedCount > 0) {
            refetch();
            // Todo - Modal
            alert('Deleted successfully.');
         }
      })
   }

   const openModal = (user) => {
      setSelectedUser(user);
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedUser(null);
   };

   return (
      <>
         <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
               <tbody>
                  <tr className="border-b border-slate-300">
                     <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "></th>
                     <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Name</th>
                     <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Mail Address</th>
                     <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Created</th>
                     <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Signed In</th>
                     <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Role</th>
                     <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Delete account</th>
                  </tr>
                  {users.map((user, i) => (
                     <tr key={i} className="border-b border-slate-200">
                        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                           {i + 1}
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                           {user.name}
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                           {user.email}
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                           {user.creationTime}
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                           {/* {user.lastSignInTime} */}
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                           {/* {job?.role} */}
                           {user.role === 'moderator' ? (
                              'Moderator'
                           ) : user.role === 'administrator' ? (
                              'Administrator'
                           ) : (
                              <Link to={`/workspace/users/${user._id}`}>
                                 <button className="bg-sky-500 hover:bg-sky-700 text-white rounded p-2">
                                    Member
                                 </button>
                              </Link>
                           )}
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                           <button
                              onClick={() => openModal(user)}
                              className="bg-red-500 hover:bg-red-600 rounded p-2"
                           >
                              <FaTrash className=" text-white text-xl" />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         {isModalOpen && (
            <ConfirmationModal
               closeModal={closeModal}
               handleDelete={() => {
                  handleDeleteAccount(selectedUser);
                  closeModal();
               }}
            />
         )}
      </>
   );
};

export default Users;