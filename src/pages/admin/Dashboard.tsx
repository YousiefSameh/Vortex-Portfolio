import Sidebar from "@components/dashboard/Sidebar";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-dark-color text-light-color flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-7xl font-bold mb-12	">لوحة التحكم</h1>

        {/* محتوى الـ Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* إضافة Services */}
          <Link
            to={"/dashboard/services"}
            className="bg-main-color p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-light-color">
              الخدمات
            </h2>
            <p className="text-light-color">أضف وأدر خدماتك هنا.</p>
          </Link>

          {/* إضافة Projects */}
          <Link
            to={"/dashboard/projects"}
            className="bg-main-color p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-light-color">
              المشاريع
            </h2>
            <p className="text-light-color">أضف وأدر مشاريعك هنا.</p>
          </Link>

          {/* عرض الإحصائيات */}
          <div className="bg-main-color p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-light-color">
              الإحصائيات
            </h2>
            <p className="text-light-color">اعرض إحصائياتك هنا.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
