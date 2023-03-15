import React from "react";
import Header from "../../Ui/Header";
import BarChart from "./BarChart";

const index = () => {
  return (
    <div>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <div className="h-[74vh]">
        <BarChart />
      </div>
    </div>
  );
};

export default index;
