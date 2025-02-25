import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "@components/feedback/Loading";

const MainLayouts = lazy(() => import("@templates/MainLayouts"));
const DashboardLayouts = lazy(() => import("@templates/DashboardLayouts"));
const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const Dashboard = lazy(() => import("@pages/admin/Dashboard"));
const ServicesAdmin = lazy(() => import("@pages/admin/Services.admin"));

const isAuthenticated = !!localStorage.getItem("token");

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
			{
				path: "login",
				element: (
					<Suspense fallback={<Loading />}>
						<Login />
					</Suspense>
				),
			},
		],
	},
	{
		path: "dashboard",
		element: isAuthenticated ? (
			<Suspense fallback={<Loading />}>
				<DashboardLayouts />
			</Suspense>
		) : (
			<Navigate to="/login" replace />
		),
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loading />}>
						<Dashboard />
					</Suspense>
				),
			},
			{
				path: "services",
				element: (
					<Suspense fallback={<Loading />}>
						<ServicesAdmin />
					</Suspense>
				),
			},
			{
				path: "services/:serviceId",
				element: (
					<Suspense fallback={<Loading />}>
						<ServicesAdmin />
					</Suspense>
				),
			}
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
