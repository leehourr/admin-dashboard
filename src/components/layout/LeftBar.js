import React, { useContext } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import DarkthemContext from "../../context/Darktheme-context";
const LeftBar = ({ darkmode }) => {
  const darkCtx = useContext(DarkthemContext);
  // console.log("in left bar", darkCtx.darktheme);
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        backgroundColor={
          darkCtx.darktheme ? "#4E4F50" : "rgba(255,255,255,0.8)"
        }
      >
        <Menu>
          <MenuItem>Pie charts</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default LeftBar;
