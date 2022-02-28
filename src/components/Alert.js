import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Alert = () => {
  const { msg, isAlert, type } = useSelector((state) => state.Alert);
  const dispatch = useDispatch();
  const CloseHandler = () => {
    dispatch({ type: "CLEAR_ALERT" });
  };

  return (
    <>
      {isAlert && (
        <div
          className={`flex justify-between items-center px-10 py-4 fixed w-full top-16 ${
            type === "err" ? "bg-rose-700" : "bg-green-700"
          }`}
        >
          <p className="text-lg text-slate-200 font-mono">{msg}</p>
          <button
            className="text-3xl hover:text-slate-200"
            onClick={CloseHandler}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
