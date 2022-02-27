import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Register, Login } from "../actions/user";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import Loading from "../components/Loading";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const dispatch = useDispatch();
  const { isAuth, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [dispatch, isAuth]);

  const ChangeHandler = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (isSignup) {
      //ALert if pass dont match
      dispatch(Register(FormData));
    } else {
      dispatch(Login(FormData));
    }
  };

  return (
    <div className="h-full bg-slate-300 px-5 flex flex-col justify-center items-center">
      {!isLoading ? (
        <>
          <h3 className="text-4xl text-teal-600 font-semibold mb-5">
            {isSignup ? "Register" : "Login"}
          </h3>
          <div className="py-8 md:px-6  rounded w-full md:w-3/5 lg:w-2/6">
            <form onSubmit={SubmitHandler}>
              {isSignup && (
                <InputField
                  type="text"
                  holder="Name"
                  name="name"
                  state={FormData.name}
                  onChange={ChangeHandler}
                />
              )}

              <InputField
                type="email"
                holder="Email Address"
                name="email"
                state={FormData.email}
                onChange={ChangeHandler}
              />
              <InputField
                type="password"
                holder="Password"
                name="password"
                state={FormData.password}
                onChange={ChangeHandler}
              />
              {isSignup && (
                <InputField
                  type="password"
                  holder="Confirm Password"
                  name="repassword"
                  state={FormData.repassword}
                  onChange={ChangeHandler}
                />
              )}
              <CustomButton type="submit">
                {isSignup ? "Register" : "Login"}
              </CustomButton>
            </form>
            <p className="text-lg">
              {isSignup ? "Already have an account?" : "Don't have an account?"}

              <span
                className="text-teal-600 cursor-pointer hover:text-teal-400 transition-all"
                onClick={() => setisSignup((state) => !state)}
              >
                {" "}
                {isSignup ? "Sign In" : "Sign up"}
              </span>
            </p>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Auth;
