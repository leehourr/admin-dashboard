import React, { useContext } from "react";
import { mockLineData as data } from "../../../data/MockData";
import { ResponsiveLine } from "@nivo/line";
import DarkthemContext from "../../../context/Darktheme-context";

const LineChart = ({ isDashboard }) => {
  const darkCtx = useContext(DarkthemContext);
  const isDark = darkCtx.darktheme;

  return (
    <ResponsiveLine
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: `${isDark ? "white" : "black"}`,
            },
          },
          legend: {
            text: {
              fill: `${isDark ? "white" : "black"}`,
            },
          },
          ticks: {
            line: {
              fill: `${isDark ? "white" : "black"}`,
              strokeWidth: 1,
            },
            text: {
              fill: `${isDark ? "white" : "black"}`,
            },
          },
        },
        // grid: { gridYValues: { color: "white" } },
        legends: {
          text: {
            fill: `${isDark ? "white" : "black"}`,
          },
        },
      }}
      // colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
