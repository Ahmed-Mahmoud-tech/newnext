import React from "react";
import dynamic from "next/dynamic";
import StudioCreation from "../../components/StudioCreation/StudioCreation";
const Studio = () => {
  // const StudioCreation = dynamic(
  //   () => import("../components/StudioCreation/StudioCreation"),
  //   {
  //     ssr: false,
  //   }
  // );
  return <StudioCreation />;
};

export default Studio;
