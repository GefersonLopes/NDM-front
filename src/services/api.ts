import axios from "axios";

export const api = axios.create({
    baseURL: "https://ndm-wy3s.onrender.com/",
    timeout: 5000,
});
