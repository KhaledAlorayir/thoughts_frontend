import React from "react";
import dayjs from "dayjs";

const BasicInformation = ({ email, name, avatar, createdate }) => {
  return (
    <div className="mt-20">
      <h5 className="text-xl text-teal-600 font-semibold mb-5">
        Account Information
      </h5>
      <div className="bg-slate-400 rounded px-5 py-2 text-lg font-mono font-medium">
        <div className="flex items-center justify-between mb-5">
          <p>Email</p>
          <p>{email}</p>
        </div>
        <div className="flex items-center justify-between mb-5">
          <p>Name</p>
          <p>{name}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Account Creation</p>
          <p>{dayjs(createdate).format("DD/MM/YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
