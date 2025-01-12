import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home/Home";

export const pageRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
];
