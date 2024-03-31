import { FaPenToSquare } from "react-icons/fa6";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-[60px] fixed w-full top-0 bg-white flex items-center justify-between px-6">
      <h3 className="text-2xl font-bold">Awesome</h3>
      <Link to="/create">
        <FaPenToSquare fontSize={28} />
      </Link>
    </nav>
  );
};

export default NavBar;
