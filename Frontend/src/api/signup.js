import api from "../api/axios.js";

const signup = async (data) => {
  const res = await api.post("/user/signup", data);
  return res.data;
};

export default signup;
