import api from "./axios";

const addTask = async (data) => {
  const response = await api.post("/api/add-task", data);
  return response.data;
};

export default addTask;
