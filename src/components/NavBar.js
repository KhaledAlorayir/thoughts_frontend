import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../actions/user";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (isAuth) {
    return (
      <div className="w-full bg-gray-600 opacity-95 fixed">
        <nav className=" text-slate-100 py-4 px-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            <Link to="/">Thoughts</Link>
          </h2>
          <ul className="flex text-lg gap-6 items-center">
            <li className="cursor-pointer w-9 rounded-full overflow-hidden border-2 hover:border-teal-600">
              <Link to="/profile">
                <img src={user.avatar} alt="avatar" />
              </Link>
            </li>
            <li
              onClick={() => dispatch(Logout(navigate))}
              className="hover:text-teal-600 cursor-pointer text-2xl"
            >
              <FiLogOut />
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
