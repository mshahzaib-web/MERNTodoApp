import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import addTask from "../api/addTask";

export default function FormCom() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: addTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["data"] });
      alert(data.message);
      navigate("/dashboard/mytask");
    },
    onError: (error) => {
      alert(error.response.data.message);
      navigate("/user/signin");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center min-h-screen"
      >
        <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Add New Task
          </h2>
          <label htmlFor="task">New Task</label>
          <input
            {...register("task")}
            id="task"
            className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
            type="text"
            placeholder="Enter New Task"
          />
          <button
            type="submit"
            className="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white cursor-pointer"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
}
