import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-vortex-production.up.railway.app",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default api;
