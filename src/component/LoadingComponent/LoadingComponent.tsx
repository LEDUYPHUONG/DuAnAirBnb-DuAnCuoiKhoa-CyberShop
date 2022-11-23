import React from "react";
import ReactLoading, { LoadingProps } from "react-loading";

const isLoading = ({ type, color }: LoadingProps) => (
  <div className="w-full h-screen bg-[#ffffff]">
    <ReactLoading
      type={type}
      color={color}
      height={"100%"}
      width={"10%"}
      className="m-auto flex justify-center items-center"
    />
  </div>
);

export default isLoading;
