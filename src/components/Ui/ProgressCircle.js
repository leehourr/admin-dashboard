import React, { useContext } from "react";

const ProgressCircle = ({ angle }) => {
  return (
    <div
      className="radial-progress text-cyan-700 dark:text-cyan-400"
      style={{ "--value": 70 }}
    >
      {angle}%
    </div>
  );
};

export default ProgressCircle;
