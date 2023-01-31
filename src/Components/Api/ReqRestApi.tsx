import axios from "axios";
export const ReqRestApi = axios.create({
    baseURL: `https://reqres.in/api/users&quot`
});
export default ReqRestApi