import api from "./axios";

const deleteTask = async (id) => {
  const res = await api.delete(`/api/task/${id}`);

  return res;
};

export default deleteTask;
