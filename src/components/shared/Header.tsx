import { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import vortex from "@assets/vortex.png";

const Header = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		// يمكنك هنا إضافة منطق لتغيير الوضع الليلي/النهاري
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<motion.nav
			className="navBar !z-[9999] fixed h-[100px] top-0 backdrop-blur-xl bg-black/20 w-full flex items-center justify-center"
			initial={{ y: "-150px" }}
			animate={{
				y: 0,
				transition: {
					duration: 0.5,
				},
			}}
		>
			<div className="container flex justify-around items-center">
				<div className="logo flex flex-col items-center justify-center">
					<img
						src={vortex}
						alt="vortex logo"
						width={"60px"}
						height={"60px"}
						className="w-[60px] h-[60px]"
					/>
				</div>

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
						className="text-lg font-semibold duration-300 hover:text-[var(--main-color)]"
					>
						الرئيسية
					</a>
					<a
						href="#"
						className="text-lg font-semibold duration-300 hover:text-[var(--main-color)]"
					>
						من نحن
					</a>
					<a
						href="#"
						className="text-lg font-semibold duration-300 hover:text-[var(--main-color)]"
					>
						خدماتنا
					</a>
					<a
						href="#"
						className="text-lg font-semibold duration-300 hover:text-[var(--main-color)]"
					>
						اعمالنا
					</a>
					<a
						href="#"
						className="text-lg font-semibold duration-300 hover:text-[var(--main-color)]"
					>
						تواصل معنا
					</a>
				</nav>

				{/* Dark/Light Mode Toggle */}
				<div className="mood flex items-center">
					<button
						onClick={toggleDarkMode}
						className="text-white text-2xl cursor-pointer"
					>
						{isDarkMode ? <FaMoon /> : <FaSun />}
					</button>
				</div>
				{/* Hamburger Menu Icon */}
				<div
					className="md:hidden text-white text-2xl cursor-pointer"
					onClick={toggleMenu}
				>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</div>
			</div>
		</motion.nav>
	);
};

export default Header;
