import { Dispatch, memo, SetStateAction } from "react";
import Heading from "@components/shared/Heading";
import { IProject } from "@customTypes/projects.types";
import { getImageUrl } from "@utils/getImageUrl";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import useAppTranslate from "@hooks/useAppTranslate";

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

const Projects = memo(({ projects, pages, handlePages }: { projects: { data: IProject[] }, pages: number, handlePages: Dispatch<SetStateAction<number>> }) => {
	const { t, lang } = useAppTranslate({
		path: "projects"
	});
	return (
		<section className="projects py-12">
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<Heading
					title={t('projects.title')}
					subtitle={t('projects.subtitle')}
				/>
			</motion.div>
			<motion.div
				variants={variants}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				className="container w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-12"
			>
				{projects.data?.map((project) => (
					<div
						key={project._id}
						className="project bg-[#222] rounded-2xl border-[3px] border-[#222]"
					>
						<div className="image h-[140px] relative group">
							<img
								src={getImageUrl(project.image)}
								alt={project.title}
								className="w-full h-full bg-white absolute top-0 left-0 rounded-t-2xl"
								width={"100%"}
								height={"100%"}
							/>
							<div className="tools hidden group-hover:flex bg-black/40 absolute top-0 left-0 w-full h-full rounded-t-2xl items-center justify-center">
								<a href={project.link} target="__blank" className="primary-btn w-fit">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<FaEye className="text-2xl"/>
                  {t('projects.viewSite')}
								</a>
							</div>
						</div>
						<div className="text p-3">
							<h4 className="text-[22px] text-white font-bold">
								{ project.title }
							</h4>
							<p className="text-white text-sm whitespace-nowrap overflow-hidden overflow-ellipsis max-h-[50px]">
								{ project.description }
							</p>
							<div className="uses flex items-center mt-2">
								<span className={`font-semibold text-white ${lang === "ar" ? "ml-3" : "mr-3"}`}>
									{t('projects.using')}
								</span>
								<div className="cards flex items-center gap-2">
									{ project.technologies.map((tech, index) => (
										<div key={index} className="card text-[13px] text-main-color px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold max-md:text-[8px]">
											{ tech }
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</motion.div>
			<div className="flex w-fit mx-auto gap-12">
				<button className="primary-btn font-bold outline-none mx-auto" onClick={() => handlePages(pages + 1)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{t('projects.showMore')}
				</button>
				<button className="primary-btn font-bold outline-none mx-auto" onClick={() => handlePages(pages - 1)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{t('projects.showLess')}
				</button>
			</div>
		</section>
	);
});

export default Projects;