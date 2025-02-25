import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
	return (
		<div className="w-[15%] bg-light-color p-6 flex flex-col justify-between h-screen sticky top-0 right-0">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-dark-color">فورتكس</h1>
			</div>

			<nav className="flex-1">
				<ul className="space-y-4">
					<li>
						<Link
							to={"/dashboard/services"}
							className="block dark:text-light-color text-dark-color hover:text-hover-color transition-colors"
						>
							الخدمات
						</Link>
					</li>
					<li>
						<Link
							to={"/dashboard/projects"}
							className="block dark:text-light-color text-dark-color hover:text-hover-color transition-colors"
						>
							المشاريع
						</Link>
					</li>
					<li>
						<Link
							to={"/dashboard/stats"}
							className="block dark:text-light-color text-dark-color hover:text-hover-color transition-colors"
						>
							الاحصائيات
						</Link>
					</li>
				</ul>
			</nav>

			<button
				className="flex items-center space-x-2 dark:text-light-color text-dark-color hover:text-hover-color cursor-pointer transition-colors"
			>
				<FaSignOutAlt />
				<span>تسجيل خروج</span>
			</button>
		</div>
	);
};

export default Header;