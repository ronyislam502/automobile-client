import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";

export const pageRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    children: [
      {
        name: "Services",
        path: "services",
        element: <Services />,
      },
    ],
  },
];
