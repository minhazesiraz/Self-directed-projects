import axios from "axios";

const encoded = axios.create({
   baseURL: "http://localhost:5000"
})

const useEncoded = () => {
   return encoded;
};

export default useEncoded;