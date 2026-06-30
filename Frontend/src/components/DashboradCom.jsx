import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import getTask from "../api/getTask";

export default function DashboradCom() {
  // const { data, isPending, error, } = useQuery({
  //   queryKey: ["data"],
  //   queryFn: getTask,
  //   enabled: false

  // });

  // if (isPending) return <span>Loading...</span>;

  // if (error) return alert(error.message);

  // const Tasks = data.data.allTasks;
  // console.log(Tasks)
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-around border border-amber-100 mt-4">
          <div className=" py-7">hello</div>
          <div className=" py-7 cursor-pointer">
            <Link to="/dashboard/mytask">
              <button className="cursor-pointer bg-green-500 p-2 rounded hover:text-white hover:font-bold">
                My Task
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
