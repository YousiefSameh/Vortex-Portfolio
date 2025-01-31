import { motion } from "framer-motion";
import vortex from "@assets/vortex.webp";
import rightArrow from "@assets/right-arrow.webp";
import phone from "@assets/phone.webp";
import Particles from "./Particles";
import { memo } from "react";

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

const Hero = memo(() => {
  return (
    <section className="hero h-screen !overflow-hidden">
      <Particles />
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="h-screen relative flex justify-center items-center w-full flex-col bg-black/40"
      >
        <motion.div
          variants={variants}
          className="vortex text-white flex items-center gap-2 max-md:gap-0.5 max-md:justify-center"
        >
          <img
            src={vortex}
            alt="vortex"
            className=" w-[120px] h-[120px] max-md:w-[60px] max-md:h-[60px]"
            width={"120px"}
            height={"120px"}
          />
          <h1 className="md:text-6xl text-[30px] font-extrabold">
            فورتكس للبرمجيات
          </h1>
        </motion.div>
        <motion.h2
          variants={variants}
          className="md:text-2xl text-base text-white text-center"
        >
          شركة متخصصة في تصميم و برمجة المواقع الإلكترونية{" "}
        </motion.h2>
        <motion.div variants={variants} className="btns flex gap-12 mt-6">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 1, transition: { duration: 0.1 } }}
            className="primary-btn"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            أحدث اعمالنا
            <img
              src={rightArrow}
              className="w-[25px] h-[25px]"
              alt="Newest Projects"
            />
          </motion.button>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 1, transition: { duration: 0.1 } }}
            className="primary-btn"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            اتصل بنا
            <img src={phone} className="w-[25px] h-[25px]" alt="contact us" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Hero;
