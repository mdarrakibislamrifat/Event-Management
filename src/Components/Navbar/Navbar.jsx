import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user)

  const handleSignOut=()=>{
    logOut()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-amber-500 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl text-amber-500">EventBloom</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-amber-500">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className=" mr-2">
          {user && <div className="flex h-[40px] items-center"><img className="rounded-full w-[50px] mr-2" src={user.photoURL} alt="" />
          <p>{user.displayName}</p>
          </div> 
          
          }
        </div>
        {user ? (
          <button onClick={handleSignOut} className="font-bold text-amber-500">Logout</button>
        ) : (
          <Link to="/login">
            <button >Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
