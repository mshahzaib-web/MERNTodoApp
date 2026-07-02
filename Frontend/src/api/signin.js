import api from "./axios";

const signin = async (data) => {
  const res = await api.post("/user/signin", data);
  return res.data;
};

export default signin;
