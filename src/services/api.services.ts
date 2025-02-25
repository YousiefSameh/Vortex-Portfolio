import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-vortex-production.up.railway.app/api",
  // timeout: 5000,
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}` },
});

export default API;
