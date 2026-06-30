import api from "./axios";

const getTask = async () => {
  const res = await api.get("/api/task");
  return res;
};

export default getTask;
