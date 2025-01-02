import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api`,
});

// api.interceptors.request.use(async (config) => {
//   const token =  // Função que retorna o token da memória ou Context
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       // Tente renovar o token
//       const refreshToken = getRefreshToken(); // Obtenha o refresh token do cookie
//       if (refreshToken) {
//         try {
//           const { data } = await axios.post("/api/refresh", {
//             token: refreshToken,
//           });
//           setAccessToken(data.accessToken); // Salve o novo token em memória
//           error.config.headers.Authorization = `Bearer ${data.accessToken}`;
//           return api(error.config);
//         } catch (err) {
//           // Redirecionar para login se o refresh falhar
//           window.location.href = "/login";
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
