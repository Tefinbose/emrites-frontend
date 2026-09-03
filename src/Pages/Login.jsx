import React, { useState } from "react";
import { loginApi } from "../services/allApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;
    if (!email || !password) {
      alert("Please fill all the fields");
    } else {
      const result = await loginApi({ email, password });
      console.log(result.data);
      if (result.status == "200") {
        sessionStorage.setItem("token", JSON.stringify(result.data.token));
        sessionStorage.setItem("user", JSON.stringify(result.data.user));
        sessionStorage.setItem("role", JSON.stringify(result.data.role));
        if (result.data.role === "admin") {
          navigate("/admin-Dashboard");
        } else {
          navigate("/");
        }
      }
    }
  };
  console.log(userDetails);

  return (
    <div className="flex min-h-[calc(100vh-76px)] items-center justify-center bg-WHITE px-6">
      <div className="w-full max-w-md rounded-2xl border border-orange-900/60 bg-black p-8 shadow-xl">
        <h1 className="text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-white">Login to continue</p>

        <form className="mt-8 flex flex-col gap-5">
          <input
            onChange={(e) => {
              setuserDetails({ ...userDetails, email: e.target.value });
            }}
            type="email"
            placeholder="Email Address"
            required
            className="rounded-lg border border-gray-600 bg-white px-4 py-3 text-black outline-none focus:border-orange-400"
          />

          <input
            onChange={(e) => {
              setuserDetails({ ...userDetails, password: e.target.value });
            }}
            type="password"
            placeholder="Password"
            required
            className="rounded-lg border border-gray-600 bg-white px-4 py-3 text-black outline-none focus:border-orange-400"
          />

          <button
            onClick={handleLogin}
            type="submit"
            className="rounded-lg bg-gradient-to-r from-yellow-500 to-orange-400 py-3 font-bold text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
