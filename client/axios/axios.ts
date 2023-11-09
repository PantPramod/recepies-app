import baseUrl from "@/config/baseUrl";
import axios from "axios";

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance