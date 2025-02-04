import Heading from "@components/shared/Heading";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { memo, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { useTranslation } from "react-i18next";

const variants = {
  initial: {
    filter: "blur(10px)",
    scale: 0.8,
  },
  animate: {
    filter: "blur(0)",
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Projects = memo(() => {
  const { projects } = useAppSelector((state) => state.projects);
  const [max, setMax] = useState(6);
  const { t, i18n } = useTranslation("projects");

  return (
    <section className="projects py-12" id="projects">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-12"
      >
        {projects.slice(0, max).map((project) => (
          <div
            key={project.projectTitle.ar}
            className="project dark:bg-[#222] bg-[#f8f8f8] rounded-2xl border-[3px] dark:border-[#222] border-[#f8f8f8] shadow-2xl"
          >
            <div className="image h-[140px] relative group">
              <img
                src={project.projectImage as string}
                alt="hello"
                className="w-full h-full bg-white absolute top-0 left-0 rounded-t-2xl"
                width={"100%"}
                height={"100%"}
              />
              <div className="tools hidden group-hover:flex bg-black/40 absolute top-0 left-0 w-full h-full rounded-t-2xl items-center justify-center">
                <a
                  href={project.projectURL}
                  target="__blank"
                  className="primary-btn w-fit"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <FaEye className="text-2xl" />
                  {t("projects.viewSite")}
                </a>
              </div>
            </div>
            <div className="text p-3">
              <h4 className="text-[22px] dark:text-white text-black font-bold">
                {i18n.language === "ar"
                  ? project.projectTitle.ar
                  : project.projectTitle.en}{" "}
                {/* عرض العنوان بناءً على اللغة */}
              </h4>
              <p className="dark:text-white text-black text-sm">
                {i18n.language === "ar"
                  ? project.projectDescription.ar
                  : project.projectDescription.en}{" "}
              </p>
              {/* <div className="uses flex items-center mt-2">
                <span className="font-semibold dark:text-white text-black">
                  {t("projects.using")}
                </span>
                <div className="cards flex items-center gap-2 mx-2">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="card text-[12px] text-main-color px-2.5 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold max-md:text-[8px]"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </motion.div>
      <button
        className="primary-btn font-bold outline-none mx-auto"
        onClick={() => {
          projects.length === max ? setMax(max - 3) : setMax(max + 3);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {projects.length === max
          ? t("projects.showLess")
          : t("projects.showMore")}
        <FaEye className="text-3xl" />
      </button>
    </section>
  );
});

export default Projects;
