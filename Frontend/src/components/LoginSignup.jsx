import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";
import logout from "../api/logout";

export default function LoginSignup() {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useAuth();

  const logoutMutation = useMutation({
    mutationFn: logout,

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      console.log(data.message);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      <div>
        <div>
          <Link to="/add-task">
            <button className="cursor-pointer hover:font-bold hover:text-white">
              Add Task
            </button>
          </Link>
        </div>
        <div className="flex justify-end mr-4 my-3">
          {user ? (
            <div className="cursor-pointer hover:text-white hover:font-bold">
              <button onClick={handleLogout} className="cursor-pointer">
                Logout
              </button>
            </div>
          ) : (
            <>
              <div className="mr-2 cursor-pointer hover:text-white hover:font-bold">
                <Link to="/user/signin">
                  <button className="cursor-pointer">LogIn</button>
                </Link>
              </div>
              <div className="cursor-pointer hover:text-white hover:font-bold">
                <Link to="/user/signup">
                  <button className="cursor-pointer">SignUp</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
