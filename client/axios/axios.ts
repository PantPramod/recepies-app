import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance