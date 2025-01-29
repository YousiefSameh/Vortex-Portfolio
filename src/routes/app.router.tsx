import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "@templates/MainLayouts";
import Home from "@pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
