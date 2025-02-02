import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";
import { Outlet } from "react-router";
import { useState } from "react";

const MainLayouts = () => {
	const [darkMood, setDarkMood] = useState<boolean>(true);

	return (
		<div
			className={`wrapper ${
				darkMood ? "dark" : " "
			} dark:bg-dark-color bg-light-color `}
		>
			<Header setDarkMood={setDarkMood} darkMood={darkMood} />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayouts;
