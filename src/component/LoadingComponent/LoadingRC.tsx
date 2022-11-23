import React from "react";
import { LoadingProps } from "react-loading";
import isLoading from "./LoadingComponent";

export default function LoadingRC() {
  const valueIsLoading: LoadingProps = {
    type: "spinningBubbles",
    color: "red"
  };
  return <>{isLoading(valueIsLoading)}</>;
}
