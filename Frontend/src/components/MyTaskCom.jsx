import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import deleteTask from "../api/deleteTask";
import getTask from "../api/getTask";

export default function MyTaskCom() {
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery({
    queryKey: ["data"],
    queryFn: getTask,
    // enabled: false
  });

  

  

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      // Invalidate the cache to trigger an automatic layout update
      queryClient.invalidateQueries({ queryKey: ["data"] });
      alert("Task Delete succefullys");
    },
    onError: (err) => alert(`Delete failed: ${err.message}`),
  });

  const deleteHandle = (id) => {
    deleteMutation.mutate(id);
  };


  // const updateMutation = useMutation({
  //   mutationFn: updateTask,
  //   onSuccess: () => {
  //     // Invalidate the cache to trigger an automatic layout update
  //     queryClient.invalidateQueries({ queryKey: ["data"] });
  //     alert("Task Update succefullys");
  //   },
  //   onError: (err) => alert(`Task Update failed: ${err.message}`),
  // });

  // const updateHandle = (id) => {
  //   deleteMutation.mutate(id);
  // };

  if (isPending) return <span>Loading...</span>;

  if (error) return alert(error.message);

  const allTasks = data.data.allTasks;
  

  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="py-7">
            <h3 className="font-bold text-2xl text-white">Name</h3>
          </div>
          <div className="">
            <h3 className="font-bold text-xl text-white">My Task:</h3>
          </div>
        </div>
      </div>
      {allTasks.map((Tasks) => (
        <div
          key={Tasks._id}
          className="border border-amber-50 container mx-auto"
        >
          <ul>
            <div className="flex justify-around py-3">
              <div>
                <li className="text-lg font-bold text-white">{Tasks.task}</li>
              </div>

              <div className="flex ">
               <Link to="/task/update" state={{taskData: Tasks}}>
                <button className="mr-3  bg-amber-200 px-2 cursor-pointer rounded hover:font-bold hover:text-white">
                  Update
                </button>
               </Link>

                <button
                  onClick={() => deleteHandle(Tasks._id)}
                  className="bg-red-400 px-2  cursor-pointer rounded hover:font-bold hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </ul>
        </div>
      ))}
    </>
  );
}
