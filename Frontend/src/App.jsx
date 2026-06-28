import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import MyTask from "./Pages/MyTask";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/mytask" element={<MyTask />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
