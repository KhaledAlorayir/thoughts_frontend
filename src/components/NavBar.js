import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../actions/user";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.user);

  if (isAuth) {
    return (
      <div className="w-full bg-gray-600 opacity-95 fixed">
        <nav className=" text-slate-100 py-4 px-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            <Link to="/">Thoughts</Link>
          </h2>
          <ul className="flex hover:text-teal-600 text-lg">
            <li>
              <button onClick={() => dispatch(Logout())}>Logout</button>
            </li>
          </ul>
        </nav>
        <div className="bg-teal-600 h-1"></div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-600 opacity-95 fixed">
      <nav className=" text-slate-100 py-4 px-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          <Link to="/">Thoughts</Link>
        </h2>
        <ul className="flex hover:text-teal-600 text-lg">
          <li>
            <Link to="/auth">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="bg-teal-600 h-1"></div>
    </div>
  );
};

export default NavBar;
