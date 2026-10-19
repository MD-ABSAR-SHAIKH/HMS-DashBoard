import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
toast.success("Email: aasu@gmail.com  Password: 12345678");

const inputClass =
  "w-full min-w-0 p-3 text-sm sm:text-base text-black bg-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

const Login = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hms-backend-czxa.onrender.com/api/v1/user/login",
        {
          email,
          password,
          confirmPassword,
          role: "Admin",
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md flex flex-col items-center">
        <img src="/logo.png" alt="logo" className="w-40 sm:w-56 h-auto" />
        <h1 className="font-bold text-xl sm:text-2xl my-2 text-center">
          WELCOME TO ZEECARE
        </h1>
        <p className="p-2 text-sm sm:text-base text-center">
          Only admins are allowed to access these resources!
        </p>

        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            className={inputClass}
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={inputClass}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={inputClass}
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white border border-gray-400 py-3 px-8 font-bold text-black rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;