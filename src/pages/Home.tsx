import { useEffect, useState } from "react";
import Hero from "@components/portfolio/Hero";
import About from "@components/portfolio/About";
import Services from "@components/portfolio/Services";
import Projects from "@components/portfolio/Projects";
import Contact from "@components/portfolio/Contact";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetServices from "@store/services/act/actGetServices";
import actGetProjects from "@store/projects/act/actGetProjects";
import useAppTranslate from "@hooks/useAppTranslate";

const Home = () => {
  const [page, setPage] = useState(1);
  const { lang } = useAppTranslate({ path: "header" });
  const { services } = useAppSelector((state) => state.services);
  const { projects } = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetServices());
    dispatch(actGetProjects({ page }));
  }, [dispatch, page, lang]);

  return (
    <>
      <Hero />
      <About />
      <Services services={services} />
      <Projects projects={projects} pages={page} handlePages={setPage} />
      <Contact />
    </>
  );
};

export default Home;
