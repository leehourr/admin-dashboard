import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-[30px]">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-[1rem] font-semibold text-cyan-700 dark:text-cyan-300">
        {subtitle}
      </h2>
    </div>
  );
};

export default Header;
