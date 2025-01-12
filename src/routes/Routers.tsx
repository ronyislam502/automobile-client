import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Components/Layouts/MainLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
  },
]);
