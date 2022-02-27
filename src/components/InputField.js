import React from "react";

const InputField = ({ type, holder, state, onChange, name }) => {
  return (
    <input
      type={type}
      className="mb-5 block w-full p-2 focus:outline-none rounded-lg border-teal-600 focus:border-[1px] text-lg font-medium "
      placeholder={holder}
      name={name}
      required
      value={state}
      onChange={onChange}
    />
  );
};

export default InputField;
