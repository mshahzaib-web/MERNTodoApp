import { Link } from "react-router-dom";

export default function DashboradCom() {
  return (
    <>
    
      <div className="container mx-auto">
        
        <div className="flex justify-around border border-amber-100 mt-4">
          <div className=" py-7">hello</div>
          <div className=" py-7 cursor-pointer">
            <Link to="/dashboard/mytask">
            <button className="cursor-pointer bg-green-500 p-2 rounded hover:text-white hover:font-bold">My Task</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
