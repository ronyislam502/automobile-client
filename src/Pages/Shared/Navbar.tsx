import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";

const Navbar = () => {
  return (
    <div className="h-[60px] flex justify-between items-center lg:px-[60px] px-5 py-2 bg-slate-200 text-slate-950">
      <Link to="/" className="flex gap-x-2 items-center">
        <img src="FT.png" alt="" className="h-[42px]" />
        <p className="text-3xl font-bold">
          <span className="text-primary">Car</span>
          <span className="text-primary-foreground">Wash</span>
        </p>
      </Link>
      <div className="md:flex items-center gap-x-3 font-medium hidden">
        {NavLinks?.map((navLink, idx) => (
          <Link key={idx} to={navLink?.path}>
            {navLink?.name}
          </Link>
        ))}
        {/* {conditionalLinks} */}
      </div>
    </div>
  );
};

export default Navbar;
