import { useEffect } from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  return (
    <div className="w-64 bg-light-color p-6 flex flex-col justify-between h-screen sticky top-0 right-0">
      <div className="mb-8">
        <Link to={"/dashboard"} className="text-3xl font-bold text-dark-color">
          فورتكس
        </Link>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link
              to={"/dashboard/services"}
              className="block  transition-colors bg-black/70 hover:bg-black/80 duration-200 text-xl font-bold rounded-md p-3"
            >
              الخدمات
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/projects"}
              className="block  transition-colors bg-black/70 hover:bg-black/80 duration-200 text-xl font-bold rounded-md p-3"
            >
              المشاريع
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 bg-blue-600 text-light-color hover:bg-blue-700 p-2 rounded-md text-xl mb-2 transition-colors"
      >
        <FaHome />
        <Link to="/"> الصفحه الرئيسية</Link>
      </button>

      <button
        onClick={handleLogout}
        className="flex items-center p-2 rounded-md text-2xl space-x-2 text-light-color hover:bg-red-700 cursor-pointer transition-colors bg-red-600"
      >
        <FaSignOutAlt />
        <span>تسجيل خروج</span>
      </button>
    </div>
  );
};

export default Sidebar;
