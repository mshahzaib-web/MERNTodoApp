import api from "./axios";

const logout = async () => {
  const res = await api.post("/user/logout");
  return res.data;
};
export default logout;
