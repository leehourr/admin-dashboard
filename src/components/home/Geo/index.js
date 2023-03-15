import React from "react";
import Header from "../../Ui/Header";
import Geography from "./Geography";

const index = () => {
  return (
    <div>
      <Header title="Geography Chart" subtitle=" Simple Geography Chart" />
      <div className="h-[75vh] text-black">
        <Geography />
      </div>
    </div>
  );
};

export default index;
