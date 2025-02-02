import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import vortex from "@assets/vortex.webp";
import useHeader from "@hooks/useHeader";

interface HeaderProps {
  darkMood: boolean;
  setDarkMood: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ darkMood, setDarkMood }: HeaderProps) => {
  const {
    t,
    i18n,
    toggleDarkMode,
    toggleMenu,
    isMenuOpen,
    hidden,
    changeLanguage,
  } = useHeader({
    darkMood,
    setDarkMood,
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
          <a
            href="#"
            className="text-lg font-semibold duration-300 hover:text-main-color"
          >
            {t("header.home")}
          </a>
          <a
            href="#about"
            className="text-lg font-semibold duration-300 hover:text-main-color"
          >
            {t("header.about")}
          </a>
          <a
            href="#services"
            className="text-lg font-semibold duration-300 hover:text-main-color"
          >
            {t("header.services")}
          </a>
          <a
            href="#projects"
            className="text-lg font-semibold duration-300 hover:text-main-color"
          >
            {t("header.works")}
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold duration-300 hover:text-main-color"
          >
            {t("header.contact")}
          </a>
        </nav>

        {/* Dark/Light Mode Toggle */}
        <div className="mood flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`text-white duration-200 text-2xl cursor-pointer ${
              darkMood ? "hover:text-yellow-400" : "hover:text-blue-800"
            }`}
            aria-label="toggle dark and light mode"
          >
            {darkMood ? <FaSun /> : <FaMoon />}
          </button>

          {/* Language Selector */}
          <div className="relative flex items-center gap-4">
            <select
              onChange={changeLanguage}
              value={i18n.language}
              className="appearance-none bg-transparent text-white border-2 border-white rounded-lg px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:border-main-color hover:bg-white/10 transition-colors duration-300"
              aria-label="change language"
            >
              <option value="ar" className="text-black">
                العربية
              </option>
              <option value="en" className="text-black">
                English
              </option>
            </select>
            {/* سهم مخصص */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <FaAngleDown />
            </div>
          </div>
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
