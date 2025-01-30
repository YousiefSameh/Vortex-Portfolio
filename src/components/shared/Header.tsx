import { useState, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import vortex from "@assets/vortex.webp";
import { useTranslation } from "react-i18next"; // استيراد مكتبة الترجمة

interface HeaderProps {
  darkMood: boolean;
  setDarkMood: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ darkMood, setDarkMood }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation("header"); // استخدام الترجمة

  const toggleDarkMode = () => {
    setDarkMood(!darkMood);
    console.log(darkMood);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const previousScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = previousScrollY.current;
    previousScrollY.current = latest;
    if (previous < latest && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="navBar !z-[9999] fixed h-[100px] top-0 backdrop-blur-xl bg-black/50 w-full flex items-center justify-center"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
    >
      <div className="container flex justify-around items-center">
        <a
          href="#"
          className="logo flex flex-col items-center justify-center"
          aria-label="vortex logo"
        >
          <img
            src={vortex}
            alt="vortex logo"
            width={"60px"}
            height={"60px"}
            className="w-[60px] h-[60px] cursor-pointer"
          />
        </a>

        {/* Navigation Links */}
        <nav
          className={`links text-white flex gap-10 ${
            isMenuOpen
              ? "flex flex-col absolute top-[100px] left-0 w-full bg-black/90 backdrop-blur-xl py-4 px-8"
              : "hidden md:flex"
          }`}
        >
          {Object.entries(t("header.links", { returnObjects: true })).map(
            ([key, value]) => (
              <a
                key={key}
                href="#"
                className="text-lg font-semibold duration-300 hover:text-[var(--main-color)]"
              >
                {value} {/* نص الرابط */}
              </a>
            )
          )}
        </nav>

        {/* Dark/Light Mode Toggle */}
        <div className="mood flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`text-white duration-200 text-2xl cursor-pointer ${
              darkMood ? "hover:text-yellow-400" : "hover:text-blue-800"
            }`}
            aria-label="toggle dark and light mode"
          >
            {darkMood ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        {/* Hamburger Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
          aria-label="toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
