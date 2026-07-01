import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateTask from "../api/updateTask";
import { Link } from "react-router-dom";

export default function UpdateFormCom() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const Task = location.state.taskData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["data"] });
      alert(data.message);
      navigate("/dashboard/mytask");
    },
  });

  const onSubmit = (data) => {
    const payload = {
      id: Task._id,
      task: data.updateTask,
    };
    updateMutation.mutate(payload);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Update Task
        </h2>
        <label htmlFor="updateTask">Task</label>
        <input
          {...register("updateTask")}
          id="updateTask"
          className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
          defaultValue={Task.task}
          type="text"
          placeholder="Enter update task"
        />

        {/* <Link to="/dashboard/mytask"> */}
        <button
          type="submit"
          // onClick={onSubmit}
          className="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white"
        >
          Update
        </button>
        {/* </Link> */}
      </form>
    </>
  );
}
