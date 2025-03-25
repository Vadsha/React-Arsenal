import IndexLayout from "@/layouts/IndexLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Home = lazy(() => import("@/pages/Home"));
const FormZod = lazy(() => import("@/pages/FormZod"));
const ReduxToolkit = lazy(() => import("@/pages/ReduxToolkit"));
const AxiosInstance = lazy(() => import("@/pages/AxiosInstance"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/react-hook-form-zod", element: <FormZod /> },
      { path: "/redux-toolkit", element: <ReduxToolkit /> },
      { path: "/axios-instance", element: <AxiosInstance /> }
    ]
  }
]);

export default router;
