import React from "react";
import { mockDataTeam } from "../../data/MockData";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";
import Header from "../Ui/Header";

const Team = () => {
  console.log(mockDataTeam);

  return (
    <div>
      <Header title="TEAM" subtitle="Managing The Team Members" />
      <div className="relative w-full p-3 text-[1rem] overflow-x-auto rounded-lg shadow-[5px_5px_7px_rgba(0,0,0,0.2),-5px_-5px_9px_rgba(255,255,255,10)] dark:shadow-[10px_10px_20px_rgba(43,43,43),-5px_-5px_9px_rgba(59,59,59)]">
        <table className="w-full rounded-lg divide-y-2 dark:divide-[#333333]  bg-[rgba(255,255,255,0.8)] dark:bg-[#4E4F50]  text-left">
          <thead className="uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Account Level
              </th>
            </tr>
          </thead>
          {mockDataTeam.map((i) => (
            <tbody key={i.id}>
              <tr className="">
                <td className="px-6 py-4">{i.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {i.name}
                </th>
                <td className="px-6 py-4">{i.age}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {i.phone}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {i.email}
                </th>
                <td className="px-6 py-4">
                  <a
                    href="#team"
                    className="font-medium px-12 py-2 rounded-lg text-[#F9F9F9] dark:text-[#4E4F50] bg-cyan-700 dark:bg-cyan-300"
                  >
                    {i.access === "admin" && <AdminPanelSettingsOutlined />}
                    {i.access === "manager" && <SecurityOutlined />}
                    {i.access === "user" && <LockOpenOutlined />}
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Team;
