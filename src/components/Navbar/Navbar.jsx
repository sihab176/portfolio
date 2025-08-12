import { Link, NavLink } from "react-router";
import Logo from "../../assets/logo.png";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <a href="#about" className="px-5">
        <li>About</li>
      </a>
      <a href="#skill" className="px-5">
        <li>Skills</li>
      </a>
      <a href="#projects" className="px-5">
        <li>Projects</li>
      </a>

      <a href="#contact" className="px-5">
        <li>Contact</li>
      </a>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-10"
          >
            {/*  */}
            {links}
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center ">
            <img className="w-18" src={Logo} alt="" />
            <h1 className="text-2xl font-bold pacifico-font">Developer</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-10">
        <ul className=" menu-horizontal px-1  ">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn">
          <span className="text-blue-600">
            <FaCloudDownloadAlt size={20} />
          </span>{" "}
          Download
        </button>
      </div>
    </div>
  );
};

export default Navbar;
