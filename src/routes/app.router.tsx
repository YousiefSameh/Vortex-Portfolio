import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "@components/feedback/Loading";
import AddService from "@pages/admin/AddService";
import EditService from "@pages/admin/EditService";

const MainLayouts = lazy(() => import("@templates/MainLayouts"));
const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/admin/Login"));
const Dashboard = lazy(() => import("@pages/admin/Dashboard"));
const Services = lazy(() => import("@pages/admin/Services"));

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
	{
		path: "login",
		element: (
			<Suspense fallback={<Loading />}>
				<Login />
			</Suspense>
		),
	},
	{
		path: "dashboard",
		element: (
			<Suspense fallback={<Loading />}>
				<Dashboard />
			</Suspense>
		),
	},
	{
		path: "dashboard/services",
		element: (
			<Suspense fallback={<Loading />}>
				<Services />
			</Suspense>
		),
	},
	{
		path: "dashboard/services/add",
		element: (
			<Suspense fallback={<Loading />}>
				<AddService />
			</Suspense>
		),
	},
	{
		path: "dashboard/services/edit/:serviceId",
		element: (
			<Suspense fallback={<Loading />}>
				<EditService />
			</Suspense>
		),
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
