import React, { useEffect } from "react";
import LeftBar from "../components/layout/LeftBar";
import TopBar from "../components/layout/TopBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import DarkthemeProvider from "../context/DarkthemeProvider";

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
        <div className="w-full text-lg h-screen flex items-start ">
          <LeftBar />

          <section className="flex-grow">
            <TopBar />
          </section>
        </div>
      </ProSidebarProvider>
    </DarkthemeProvider>
  );
};

export default Layout;
