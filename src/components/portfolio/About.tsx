import about from "@assets/about.webp";
import Heading from "@components/shared/Heading";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <section id="about" className="services py-12 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading title={t("about.title")} subtitle={t("about.subtitle")} />
      </motion.div>
      <div className="container mx-auto w-[90%] flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.div
          className="img-content w-full md:w-1/2 flex justify-center items-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <img src={about} alt={t("about.title")} className="w-[80%]" />
        </motion.div>
        <motion.div
          className="text-content w-full md:w-[60%]"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="title text-main-color text-3xl md:text-5xl font-bold">
            {t("about.whyVortex")}
          </h1>
          <p className="description text-black font-semibold dark:font-normal dark:text-white w-full md:text-lg text-sm mt-2 leading-loose">
            {t("about.description")}
          </p>
          <button className="primary-btn mt-4">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <a href="#contact">{t("about.contact")}</a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
