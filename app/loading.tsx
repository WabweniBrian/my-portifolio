"use client";

import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex-center-center min-h-screen">
      <ImSpinner2 className="text-5xl animate-spin text-primary" />
    </div>
  );
};

export default Loading;
