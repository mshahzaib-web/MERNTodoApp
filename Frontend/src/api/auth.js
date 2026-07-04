import api from "./axios";
export const getCurrentUser = async () => {
  const res = await api.get("/user/auth/me");

  return res.data.user;
};
