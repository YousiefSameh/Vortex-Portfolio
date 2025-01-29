import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <div className="wrapper bg-[#121212]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
