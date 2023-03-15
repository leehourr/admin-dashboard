import React from "react";
import { mockDataInvoices } from "../../data/MockData";
import Header from "../Ui/Header";

const Contacts = () => {
  // console.log(mockDataInvoices);
  return (
    <div className="h-full">
      <Header title="TEAM" subtitle="Managing The Team Members" />
      <div className="relative max-h-[45rem] w-full p-3 text-[1rem] overflow-x-auto rounded-lg shadow-[5px_5px_7px_rgba(0,0,0,0.2),-5px_-5px_9px_rgba(255,255,255,10)] dark:shadow-[10px_10px_20px_rgba(43,43,43),-5px_-5px_9px_rgba(59,59,59)]">
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
                Cost
              </th>
            </tr>
          </thead>
          {mockDataInvoices.map((i) => (
            <tbody key={i.id}>
              <tr className="">
                <td className="px-6 py-4">{i.id}</td>
                <th
                  scope="row"
                  className="px-6 cursor-pointer py-4 font-medium  whitespace-nowrap "
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
                  <a href="#team" className="font-medium">
                    {i.cost}
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <footer className="flex mt-2 items-center justify-between">
          <h1>1 row selected</h1>
          <div className="flex items-center justify-around gap-12">
            <span>Rows per page: 100</span>
            <span>1-9 of 9</span>
            <div className="flex items-center gap-10">
              <button>{"<"}</button>
              <button>{">"}</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contacts;
