import useAuth from "@/hooks/useAuth";
import axios from "axios";

const serverApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api`,
});

serverApi.interceptors.request.use(async (config) => {
  const { token } = await useAuth();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default serverApi;
