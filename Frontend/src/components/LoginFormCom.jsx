import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import signin from "../api/signin";

export default function LoginFormCom() {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const signinMutation = useMutation({
    mutationFn: signin,

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["data"] });
      alert(data.message);
      navigate("/dashboard/mytask");
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const onSubmit = (data) => {
    signinMutation.mutate(data);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center justify-center max-w-96 bg-white p-4 border border-gray-300 rounded-2xl"
        >
          <div className="text-center my-4">
            <h2 className="text-4xl font-medium text-gray-900">Sign In</h2>
            <p className="mt-3 text-sm text-gray-500/90">
              Welcome back! Please sign in to continue
            </p>
          </div>

          <div className="flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
            <input
              {...register("email")}
              placeholder="Email"
              className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
              type="email"
            />
          </div>
          <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
            <input
              {...register("password")}
              placeholder="Password"
              className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
              type="password"
            />
          </div>

          <button
            type="submit"
            className="mt-8 h-11 w-full cursor-pointer rounded-full bg-linear-to-b from-gray-600 to-gray-800 text-white transition hover:from-gray-700 hover:to-gray-900"
          >
            Login
          </button>
          <p className="mt-4 text-gray-500/90">
            Don’t have an account?
            <Link to="/user/signup" className="text-gray-800 underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
