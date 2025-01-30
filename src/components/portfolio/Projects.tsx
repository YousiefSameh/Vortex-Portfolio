import Heading from "@components/shared/Heading";
import { FaEye, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { memo } from "react";

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
	return (
		<section className="projects py-12">
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<Heading
					title="اعمالنا و مشروعاتنا"
					subtitle="في شركة فورتكس، نحن نصنع الفرق من خلال تحويل الأفكار إلى إنجازات. نعمل على تقديم حلول مبتكرة ومشروعات متكاملة تلبي احتياجات عملائنا وتفوق توقعاتهم."
				/>
			</motion.div>
			<motion.div
				variants={variants}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				className="container w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-12"
			>
				{[1, 2, 3, 4, 5, 6].map((project) => (
					<motion.div
						variants={variants}
						key={project}
						className="project bg-[#222] rounded-2xl border-[3px] border-[#222]"
					>
						<div className="image h-[140px] relative group">
							<img
								src="../../assets/hello.jpeg"
								alt="hello"
								className="w-full h-full bg-white absolute top-0 left-0 rounded-t-2xl"
								width={"100%"}
								height={"100%"}
							/>
							<div className="tools hidden group-hover:flex bg-black/40 absolute top-0 left-0 w-full h-full rounded-t-2xl items-center justify-center">
								<a href="#" className="primary-btn w-fit">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<FaEye className="text-2xl"/>
                  شاهد الموقع
								</a>
							</div>
						</div>
						<div className="text p-3">
							<h4 className="text-[22px] text-white font-bold">
								موقع التجارة الالكترونية (TechnoBay)
							</h4>
							<p className="text-white text-sm">
								تيكنو باي هو متجر إلكتروني يقدم مجموعة واسعة من الإلكترونيات،
								الأدوات، والإكسسوارات.
							</p>
							<div className="uses flex items-center mt-2">
								<span className="font-semibold text-white ml-3">
									بأستخدام:{" "}
								</span>
								<div className="cards flex items-center gap-2">
									<div className="card text-[13px] text-blue-400 px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold max-md:text-[8px]">
										React
									</div>
									<div className="card text-[13px] text-purple-600 px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold max-md:text-[8px]">
										Ui Ux
									</div>
									<div className="card text-[13px] text-neutral-200 px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold max-md:text-[8px]">
										Express
									</div>
									<div className="card text-[13px] text-green-400 px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold max-md:text-[8px]">
										MongoDB
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
			<button className="primary-btn font-bold outline-none mx-auto">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				والمزيد في Github <FaGithub className="text-3xl" />
			</button>
		</section>
	);
});

export default Projects;
