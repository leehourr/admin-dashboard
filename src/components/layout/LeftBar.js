import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import DarkthemContext from "../../context/Darktheme-context";
import me from "../../assets/me.jpg";
import Dots from "../../assets/svg/Dot";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const LeftBar = ({ darkmode }) => {
  const darkCtx = useContext(DarkthemContext);
  const [selected, setSelected] = useState("Dashboard");
  const isDark = darkCtx.darktheme;
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();

  const MenuItemStyles = {
    button: {
      "&:hover": {
        backgroundColor: `${
          darkCtx.darktheme ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
        }`,
      },
    },
  };

  // console.log("collapsed", collapsed);
  const collapseHandler = () => {
    collapseSidebar();
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        collapsed={collapsed}
        backgroundColor={isDark ? "#4E4F50" : "rgba(255,255,255,0.8)"}
        style={{ border: "0px", width: `${collapsed ? "70px" : "350px"}` }}
      >
        <Menu menuItemStyles={MenuItemStyles}>
          <div
            className={`flex items-center ${
              collapsed ? "justify-center" : "justify-between"
            } mx-5 mt-[1.2rem] `}
          >
            <h1
              className={`uppercase self-baseline ${
                collapsed ? "hidden" : "static"
              } font-semibold`}
            >
              Admmins
            </h1>
            <div
              onClick={collapseHandler}
              className={`cursor-pointer relative h-[1.5rem]  w-[1.5rem] transition-all duration-100 ${
                collapsed ? "mt-[0.4rem]" : ""
              }`}
            >
              <span
                className={`hamburger-top ${
                  !collapsed ? "rotate-45 translate-y-3" : "rotate-0"
                }`}
              ></span>
              <span
                className={`hamburger-bottom  ${
                  !collapsed
                    ? "-rotate-45 translate-y-3"
                    : "rotate-0 translate-y-2"
                }`}
              ></span>
            </div>
          </div>

          <div
            className={`flex flex-col gap-5 mt-[1.75rem] ${
              collapsed ? "mb-[0.1rem]" : "mb-[1rem]"
            } items-center w-full`}
          >
            <img
              hidden={collapsed}
              src={me}
              alt=""
              className={`h-[8rem] w-[8rem] object-cover rounded-full p-1 dark:shadow-[10px_10px_23px_rgba(31,32,32),-10px_-10px_23px_rgba(125,126,128)] shadow-[10px_10px_23px_rgba(100,100,100),-10px_-10px_23px_rgba(255,255,255)]`}
            />
            <div className="flex flex-col items-center">
              <h1 hidden={collapsed} className="text-3xl font-bold">
                Leang Lyhour
              </h1>
              <h1
                hidden={collapsed}
                className="text-[1rem] font-bold text-cyan-600 dark:text-cyan-400"
              >
                Admin
              </h1>
            </div>
          </div>
          {/* Menu items */}
          <div className={`w-full ${collapsed && "text-center"}`}>
            <Item
              title="Dashbord"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              collapsed={collapsed}
            />
            <h1
              className={`text-[16px] ${
                collapsed ? "ml-0" : "ml-7"
              }  opacity-80 mt-2`}
            >
              Data
            </h1>
            <Item
              collapsed={collapsed}
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              to="/team"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              collapsed={collapsed}
              title="Contacts Information"
              icon={<ContactsOutlinedIcon />}
              to="/contacts"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              collapsed={collapsed}
              title="Invoices Balances"
              icon={<ReceiptOutlinedIcon />}
              to="/invoices"
              selected={selected}
              setSelected={setSelected}
            />
            <h1
              className={`text-[16px] ${
                collapsed ? "w-full block mx-auto" : "ml-7"
              }  opacity-80 mt-2`}
            >
              Pages
            </h1>
            <Item
              collapsed={collapsed}
              title="Profile Form"
              icon={<PersonOutlinedIcon />}
              to="/form"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              collapsed={collapsed}
              title="Calendar"
              icon={<CalendarTodayOutlinedIcon />}
              to="/calendar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              collapsed={collapsed}
              title="FAQ Page"
              icon={<HelpOutlineOutlinedIcon />}
              to="/faq"
              selected={selected}
              setSelected={setSelected}
            />
            <h1
              className={`text-[16px] ${
                collapsed ? "w-full block mx-auto" : "ml-7"
              }  opacity-80 mt-2`}
            >
              Charts
            </h1>
            <Item
              collapsed={collapsed}
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              to="/bar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              collapsed={collapsed}
              title="Line Chart"
              icon={<PieChartOutlineOutlinedIcon />}
              to="/line"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              collapsed={collapsed}
              title="Geography Chart"
              icon={<TimelineOutlinedIcon />}
              to="/geography"
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default LeftBar;

const Item = ({ title, to, icon, selected, setSelected, collapsed }) => {
  // const darkCtx = useContext(DarkthemContext);s

  return (
    <MenuItem
      active={selected === title}
      onClick={() => {
        setSelected(title);
      }}
      rootStyles={{
        padding: `0px ${collapsed ? "0px" : " 20px"}`,
        borderRadius: "100px",
      }}
      component={<Link to={to} />}
      icon={icon}
    >
      <h1 className="text-[16px]">{title}</h1>
    </MenuItem>
  );
};
