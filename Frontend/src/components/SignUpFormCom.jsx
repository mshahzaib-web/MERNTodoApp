import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import signup from "../api/signup";

export default function SignUpFormCom() {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const singnupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["data"] });
      alert(data.message);
      navigate("/user/signin");
    },
    onError: (data) => {
      alert(data.message);
    },
  });

  const onSubmit = (data) => {
    singnupMutation.mutate(data);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center justify-center max-w-96 bg-white p-4 border border-gray-300 rounded-2xl"
        >
          <div className="text-center my-4">
            <h2 className="text-4xl font-medium text-gray-900">Sign Up</h2>
            <p className="mt-3 text-sm text-gray-500/90">
              Please sign up to continue
            </p>
          </div>
          <div className="flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-transparent mb-5 pl-5 focus-within:border-gray-300">
            <input
              {...register("username")}
              placeholder="Username"
              className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
              type="text"
            />
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
            Sign Up
          </button>
          <p className="mt-4 text-gray-500/90">
            I have an account?
            <Link to="/user/signin" className="text-gray-800 underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
