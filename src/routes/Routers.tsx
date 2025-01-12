import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Components/Layouts/MainLayouts";
import { routeGenerators } from "../utils/routeGenerator";
import { pageRoutes } from "./PageRoutes";
import Login from "../Pages/Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: routeGenerators(pageRoutes),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
