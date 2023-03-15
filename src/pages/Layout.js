import React, { useEffect } from "react";
import LeftBar from "../components/layout/LeftBar";
import TopBar from "../components/layout/TopBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import DarkthemeProvider from "../context/DarkthemeProvider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    if (localStorage.getItem("dark")) {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <DarkthemeProvider>
      <ProSidebarProvider>
        <div className="w-full text-lg flex items-start ">
          <LeftBar />

          <section className="flex-grow mx-5 h-full ">
            <div className="w-full">
              <TopBar />
            </div>
            <Outlet />
          </section>
        </div>
      </ProSidebarProvider>
    </DarkthemeProvider>
  );
};

export default Layout;
