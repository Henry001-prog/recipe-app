import axios from "axios";

const api = axios.create({
    baseURL: "example",
});

export default api;