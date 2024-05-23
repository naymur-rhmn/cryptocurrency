import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
