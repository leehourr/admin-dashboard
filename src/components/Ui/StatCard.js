import React from "react";
import ProgressCircle from "./ProgressCircle";

const StatCard = ({ icon, amount, title, value, angle }) => {
  return (
    <main className="bg-[#F9F9F9] dark:bg-[#4E4F50] rounded-lg w-full px-6 py-3 flex items-center justify-between">
      <section className="flex flex-col items-start gap-3">
        <div className="text-cyan-700 dark:text-cyan-300"> {icon}</div>
        <h1 className="text-xl font-semibold">{amount}</h1>
        <h2 className="text-cyan-700 dark:text-cyan-300">{title}</h2>
      </section>
      <section className="flex flex-col items-center gap-2">
        <ProgressCircle angle={angle} />
        <h1>+{value}%</h1>
      </section>
    </main>
  );
};

export default StatCard;
