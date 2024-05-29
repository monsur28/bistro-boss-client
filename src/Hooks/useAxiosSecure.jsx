import axios from "axios";

export const axiousSecure = axios.create({
  baseURL: "http://localhost:5000/",
});
const useAxiosSecure = () => {
  return axiousSecure;
};

export default useAxiosSecure;
