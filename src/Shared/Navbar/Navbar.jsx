import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() =>{
        
      })
      .catch((error) => console.log(error));
  };
  return (
    <div style={{'font-family': "'Rancho', cursive"}} className="navbar font-bold bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <img style={{ height: 60 }} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={""} className="btn btn-outline border-none btn-warning">
          <AiOutlineSearch className="lg:text-2xl" />
        </Link>
        {user?.email ? (
          <>
            <Link
              to={"/bookings"}
              className="btn flex items-center btn-outline tooltip tooltip-bottom border-none btn-warning"
              data-tip="shop"
            >
              <AiOutlineShopping className="lg:text-2xl " />
            </Link>
            <Link
              onClick={handleLogOut}
              to={""}
              className="btn btn-outline border-none btn-warning"
            >
              <AiOutlineLogout className="lg:text-2xl" />
            </Link>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-outline border-none btn-warning"
          >
            <AiOutlineLogin className="lg:text-2xl" />
          </Link>
        )}
        <Link to={""} className="btn btn-outline btn-warning btn-xs lg:btn-md">
          Appoinment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
