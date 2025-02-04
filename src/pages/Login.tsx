import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "vortex@024$") {
      navigate("/dashboard");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="w-96 p-8 border border-gray-800 rounded-2xl text-center bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-2xl transform transition-all hover:scale-105">
        <h2 className="mb-8 text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <div className="space-y-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition-all"
            placeholder="Enter your password"
          />
          <button
            onClick={handleLogin}
            className="w-full p-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Login
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Forgot your password?{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
