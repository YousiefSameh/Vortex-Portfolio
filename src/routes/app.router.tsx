import { createBrowserRouter, RouterProvider } from "react-router";
import { Suspense, lazy } from "react";
import MainLayouts from "@templates/MainLayouts";
import Loading from "@components/feedback/Loading"; 

const Home = lazy(() => import("@pages/Home"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts />,
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
