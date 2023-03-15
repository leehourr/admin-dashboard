import React from "react";
import Header from "../../Ui/Header";
import LineChart from "./LineChart";

const index = () => {
  return (
    <div>
      <Header title="Line Chart" subtitle=" Simple Line Chart" />
      <div className="h-[75vh]">
        <LineChart />
      </div>
    </div>
  );
};

export default index;
