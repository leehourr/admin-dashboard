import React, { useContext } from "react";
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import user from "../../assets/user.png";
import DarkthemContext from "../../context/Darktheme-context";

const TopBar = () => {
  const darkCtx = useContext(DarkthemContext);

  return (
    <div className="w-[75%] mr-4 sm:w-full sm:mx-0 mt-[0.2rem] mb-5 py-3 flex items-center justify-between">
      <input
        className="bg-[#e0e0e0] dark:bg-[#333333] shadow-[5px_5px_7px_rgba(0,0,0,0.2),-5px_-5px_9px_rgba(255,255,255,10)] dark:shadow-[10px_10px_20px_rgba(43,43,43),-5px_-5px_9px_rgba(59,59,59)] w-[10rem] sm:w-[22rem] px-2 sm:px-3 sm:py-1 placeholder:text-black/50 dark:placeholder:text-white/50 outline-none rounded-lg"
        type="text"
        placeholder="Search"
      />
      <div className="flex items-center justify-center gap-2">
        <button
          className="hidden dark:block"
          onClick={() => {
            localStorage.removeItem("dark");
            darkCtx.toggleDarktheme(false);
            window.document.documentElement.classList.remove("dark");
          }}
        >
          <img className="w-[2rem]" src={moon} alt="" />
        </button>
        <button
          className="block dark:hidden"
          onClick={() => {
            localStorage.setItem("dark", "true");
            darkCtx.toggleDarktheme(true);
            window.document.documentElement.classList.add("dark");
          }}
        >
          <img className="w-[2rem]" src={sun} alt="" />
        </button>
        <button>
          <img className="w-[2rem]" src={user} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
