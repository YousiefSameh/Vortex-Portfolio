import { createBrowserRouter, RouterProvider } from "react-router";
import { Suspense, lazy } from "react";

const MainLayouts = lazy(() => import("@templates/MainLayouts"));
const Home = lazy(() => import("@pages/Home"));

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<MainLayouts />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Home />
					</Suspense>
				),
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
