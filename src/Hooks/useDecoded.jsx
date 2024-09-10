import axios from "axios";

const decoded = axios.create({
   baseURL: "http://localhost:5000"
})

const useDecoded = () => {
   return decoded;
};

export default useDecoded;