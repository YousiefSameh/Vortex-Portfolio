import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

const MainLayouts = () => {
  const [lang, setLang] = useState("");

  useEffect(() => {
    const Lng = localStorage.getItem("i18nextLng");
    if (Lng) {
      setLang(Lng);
    }
  }, []);

  const [darkMood, setDarkMood] = useState<boolean>(true);
  return (
    <div>
      <Header setDarkMood={setDarkMood} darkMood={darkMood} />
      <div
        className={`wrapper ${
          darkMood ? "dark" : " "
        } dark:bg-[var(--dark-color)] bg-[var(--light-color)] `}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
