import React from "react";

const CustomButton = ({ children, type = "button", tw }) => {
  return (
    <button
      type={type}
      className={`mb-5 text-lg bg-teal-600 text-slate-100 block py-2 px-4 rounded hover:bg-teal-500 transition-all  ${tw}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
