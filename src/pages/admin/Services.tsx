import { Link } from "react-router";
import ServicesTable from "@components/dashboard/ServicesTable";
import Sidebar from "@components/dashboard/Sidebar";

const Services = () => {
	return (
		<div className="min-h-screen bg-dark-color text-light-color flex">
      <Sidebar />

			{/* Main Content */}
			<div className="container mx-auto flex-1 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-7xl font-bold mb-2">الخدمات</h1>
          <button className="primary-btn h-fit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Link to={"/dashboard/services/add"}>أضف خدمة</Link>
          </button>

        </div>

				{/* محتوى الـ Dashboard */}
				<ServicesTable />
			</div>
		</div>
	);
};

export default Services;
