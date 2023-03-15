import React from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../Ui/Header";
import StatCard from "../../Ui/StatCard";
import LineChart from "../LineChart/LineChart";
import BarChart from "../BarChart/BarChart";
import Geography from "../Geo/Geography";
import { mockTransactions } from "../../../data/MockData";
import ProgressCircle from "../../Ui/ProgressCircle";

const DashBoard = () => {
  console.log(mockTransactions);
  return (
    <main className="w-full">
      <header className="w-full flex items-center justify-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <button className="flex items-center justify-center gap-3 px-3 py-2 rounded-lg shadow-[5px_5px_7px_rgba(0,0,0,0.2),-5px_-5px_9px_rgba(255,255,255,10)] hover:shadow-[inset_5px_5px_7px_rgba(0,0,0,0.2),inset_-5px_-5px_9px_rgba(255,255,255,10)] dark:shadow-[_10px_10px_20px_rgba(43,43,43),-5px_-5px_9px_rgba(59,59,59)] hover:dark:shadow-[inset_10px_10px_20px_rgba(43,43,43),inset_-5px_-5px_9px_rgba(59,59,59)]">
          <DownloadOutlinedIcon />
          <span className="uppercase"> Download reports</span>
        </button>
      </header>
      <section className="w-full flex items-center gap-10 justify-between">
        <div className="neumorphism ">
          <StatCard
            icon={<EmailIcon />}
            amount="12,341"
            title="Emails Sent"
            value="14"
            angle="70"
          />
        </div>
        <div className="neumorphism w-1/4">
          <StatCard
            icon={<PointOfSaleIcon />}
            amount="432,341"
            title="Sales Obtained"
            value="21"
            angle="45"
          />
        </div>
        <div className="neumorphism w-1/4">
          <StatCard
            icon={<PersonAddIcon />}
            amount="43,341"
            title="New Clients"
            value="5"
            angle="35"
          />
        </div>
        <div className="neumorphism w-1/4">
          <StatCard
            icon={<TrafficIcon />}
            amount="132,143,341"
            title="Traffic Received"
            value="43"
            angle="85"
          />
        </div>
      </section>

      {/* section 2 */}
      <section className=" mt-5 flex items-center gap-10 justify-between">
        <div className="w-[66%] p-3 neumorphism">
          <div className="h-[28vh] flex flex-col justify-between bg-[#F9F9F9] dark:bg-[#4E4F50]  rounded-lg">
            <div className="flex items-center justify-between w-[94%] mx-auto mt-1">
              <div className="flex flex-col items-start">
                <h1 className="text-xl font-semibold">Revenue Generated</h1>
                <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                  $69,696.96
                </h2>
              </div>
              <div className="text-cyan-700 dark:text-cyan-300">
                <DownloadOutlinedIcon />
              </div>
            </div>
            <div className="h-[21vh] text-black">
              <LineChart isDashboard />
            </div>
          </div>
        </div>
        <div className="p-3 flex-grow neumorphism">
          <aside className="h-[28vh] overflow-y-auto scrollbar-thin">
            <h1 className="text-xl font-semibold  mb-1">Recent Transactions</h1>
            {mockTransactions.map((i) => (
              <div className="rounded-lg my-1 flex items-center py-2 bg-[#F9F9F9] dark:bg-[#4E4F50] px-2 justify-between">
                <div className="flex flex-col justify-between ">
                  <h1 className="font-semibold text-[18px] text-cyan-700 dark:text-cyan-300">
                    {i.txId}
                  </h1>
                  <h2>{i.user}</h2>
                </div>
                <span>{i.date}</span>
                <h3 className="bg-cyan-700 dark:bg-cyan-600 px-2 py-1 rounded-lg text-white">
                  {i.cost}
                </h3>
              </div>
            ))}
          </aside>
        </div>
      </section>
      {/* section 3 */}
      <section className="w-full  mt-6 flex items-center gap-10 justify-between">
        <div className=" w-[66%] flex items-center justify-between gap-10">
          <div className="w-1/2 p-3 h-[25vh] neumorphism">
            <div className="flex flex-col items-center justify-center mt-2 w-[90%] mx-auto">
              <h1 className="text-2xl self-start "> Campaign</h1>
              <ProgressCircle angle="65" />
              <h2 className="text-2xl text-cyan-700 dark:text-cyan-300">
                $43,234 revenue generated
              </h2>
              <h3>Includes extra misc expenditures and costs</h3>
            </div>
          </div>
          <div className="w-1/2 p-3 h-[25vh] relative neumorphism">
            <h1 className=" absolute top-5 left-10  text-2xl">
              Sales Quantity
            </h1>

            <div className="h-full text-black  mt-4 ">
              <BarChart isDashboard={true} />
            </div>
          </div>
        </div>
        <div className="p-3 h-[25vh] flex-grow neumorphism">
          <h1 className="left-10  text-2xl mt-3 ml-5 mb-2">Geographu Based Traffic</h1>
          <div className="h-[17vh] text-black">
            <Geography isDashboard={true} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashBoard;
