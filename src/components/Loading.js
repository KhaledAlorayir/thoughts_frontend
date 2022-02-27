import React from "react";
import spinner from "../img/loading.gif";

const Loading = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Loading;
