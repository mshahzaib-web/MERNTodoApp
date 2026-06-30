import { Link } from "react-router-dom";

export default function LoginSignup() {
  return (
    <>
      <div>
        <div>
          <Link to="/add-task">
            <button className="cursor-pointer hover:font-bold hover:text-white">Add Task</button>
          </Link>
        </div>
        <div className="flex justify-end mr-4 my-3">
          <div className="mr-2 cursor-pointer hover:text-white hover:font-bold">
            Login
          </div>
          <div className="cursor-pointer hover:text-white hover:font-bold">
            SignUp
          </div>
        </div>
      </div>
    </>
  );
}
