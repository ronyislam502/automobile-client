import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar";
import Footer from "../../Pages/Shared/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
