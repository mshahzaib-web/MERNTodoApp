import api from "./axios";

const updateTask = async ({ id, task }) => {
  const res = await api.put(`/api/task/${id}`, { task });

  console.log(res);
  return res.data;
};

export default updateTask;
