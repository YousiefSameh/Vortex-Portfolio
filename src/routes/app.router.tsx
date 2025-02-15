import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "@components/feedback/Loading";

const MainLayouts = lazy(() => import("@templates/MainLayouts"));
const Home = lazy(() => import("@pages/Home"));

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<Loading />}>
				<MainLayouts />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loading />}>
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
