import { motion } from "framer-motion";
import { vortex } from "./Navbar";
import rightArrow from "@assets/right-arrow.png";
import phone from "@assets/phone.png";

const variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.4,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="h-screen relative flex justify-center items-center w-full flex-col"
    >
      <motion.div
        variants={variants}
        className="vortex text-white font-bold flex items-center gap-2"
      >
        <img src={vortex} alt="vortex" className="w-[120px] h-[120px]" />
        <h1 className="text-[68px] ">Vortex للبرمجيات </h1>
      </motion.div>
      <motion.h2 variants={variants} className="text-[25px] text-white ">
        شركة متخصصة في تصميم و برمجة المواقع الإلكترونية{" "}
      </motion.h2>
      <motion.div variants={variants} className="btns flex gap-12 mt-16">
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 1, transition: { duration: 0.1 } }}
          className="text-white flex items-center gap-2 text-[16px] h-[64px] w-[164px] bg-[var(--main-color)] justify-center relative cursor-pointer "
        >
          أحدث اعمالنا
          <img src={rightArrow} alt="->" />
        </motion.button>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 1, transition: { duration: 0.1 } }}
          className="text-white flex items-center gap-2 text-[16px] justify-between h-[64px] w-[164px] bg-[var(--main-color)] justify-center relative cursor-pointer "
        >
          اتصل بنا
          <img src={phone} className="w-[25px] h-[25px]" alt="->" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
