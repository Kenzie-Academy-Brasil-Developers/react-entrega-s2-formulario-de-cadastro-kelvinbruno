import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Register from "../Pages/Register";

import { Routes, Route } from "react-router-dom";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default RoutesMain