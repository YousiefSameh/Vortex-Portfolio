import { createBrowserRouter, RouterProvider } from "react-router";
import { Suspense, lazy } from "react";
import MainLayouts from "@templates/MainLayouts";
import Loading from "@components/feedback/Loading";
import Login from "@pages/Login";
import Dashboard from "@pages/dashboard";

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
      {
        path: "/vortex-login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
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
