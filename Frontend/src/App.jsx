import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import MyTask from "./Pages/MyTask";
import Form from "./Pages/Form";
import UpdateForm from "./Pages/UpdateForm";
import SignUpForm from "./Pages/SignUpForm";
import LoginForm from "./Pages/LoginForm";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/dashboard/mytask" element={<MyTask />}></Route>
            <Route path="/add-task" element={<Form />}></Route>
            <Route path="/task/update" element={<UpdateForm />}></Route>
            <Route path="/user/signup" element={<SignUpForm />}></Route>
            <Route path="/user/signin" element={<LoginForm />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
