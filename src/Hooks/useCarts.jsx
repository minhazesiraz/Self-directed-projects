import { useQuery } from "@tanstack/react-query";
import useEncoded from "./useEncoded";
import useOAuth from "./useOAuth";

const useCarts = () => {
   const encoded = useEncoded();
   const { user } = useOAuth();

   const { refetch, data: carts = [] } = useQuery({
      queryKey: ["carts", user?.email],
      queryFn: async () => {
         const res = await encoded.get(`/APIs/carts?email=${user.email}`)
         return res.data;
      }
   })

   return [carts, refetch];
};

export default useCarts;