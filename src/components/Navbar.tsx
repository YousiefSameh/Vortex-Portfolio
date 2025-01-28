import vortex from "../assets/vortex.png";
import { motion } from "framer-motion";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";

const Navbar = () => {
  return (
    <motion.nav
      className="navBar z-50 fixed h-[100px] top-0 backdrop-blur-xl bg-black/20 w-full flex justify-center items-center gap-20"
      initial={{ y: "-150px" }}
      animate={{
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div className="logo flex flex-col items-center justify-center">
        <img src={vortex} alt="vortex logo" className="w-[60px] h-[60px]" />
        <h2 className="text-white">vortex</h2>
      </div>
      <div className="links text-white flex gap-20">
        <a href="#" className="duration-300 hover:text-[var(--main-color)]">
          الرئيسية
        </a>
        <a href="#" className="duration-300 hover:text-[var(--main-color)]">
          من نحن
        </a>
        <a href="#" className="duration-300 hover:text-[var(--main-color)]">
          خدماتنا
        </a>
        <a href="#" className="duration-300 hover:text-[var(--main-color)]">
          اعمالنا
        </a>
        <a href="#" className="duration-300 hover:text-[var(--main-color)]">
          تواصل معنا
        </a>
      </div>
      <div className="mood">
        <img
          src={sun}
          alt="light mode"
          className="w-[40px] h-[40px] cursor-pointer "
        />
        <img src={moon} alt="dark mode" className="hidden" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
export { vortex };
