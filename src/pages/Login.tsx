// src/components/dashboard/Login.tsx
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actLogin from "@store/Auth/act/actLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(actLogin({ email, password }));
    if (actLogin.fulfilled.match(resultAction)) {
      navigate("/dashboard");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-color">
      <div className="bg-light-color p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-dark-color">تسجيل الدخول</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
            />
          </div>
          <div className="relative h-fit flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute bottom-1/3 left-2 px-3 py-2 focus:outline-none"
            >
              {showPassword ? (
                <FaEyeSlash className="text-dark-color text-xl" />
              ) : (
                <FaEye className="text-dark-color text-xl" />
              )}
            </button>
          </div>
          <button type="submit" className="primary-btn py-2 w-full">
            {loading ? "جارٍ..." : "تسجيل الدخول"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error || error}</p>}
      </div>
    </div>
  );
};

export default Login;