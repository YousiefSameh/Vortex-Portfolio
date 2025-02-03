import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_DASHBOARD_PASSWORD;

    if (password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      setError("كلمة المرور غير صحيحة. حاول مرة أخرى.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-color">
      <div className="bg-light-color p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-dark-color">تسجيل الدخول</h1>
        <form onSubmit={handleLogin}>
          <div className="relative h-fit flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color pr-10" // إضافة padding لليمين علشان الأيقونة
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
          <button
            type="submit"
            className="primary-btn py-2 w-full"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            تسجيل الدخول
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;