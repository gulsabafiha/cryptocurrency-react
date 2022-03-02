import React from "react";
import { Chart } from "chart.js";



const ChartComp = () => {
  /* var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Dataset Title",
        backgroundColor: "rgba(98,216,216,0.2)",
        borderColor: "rgba(98,216,216,1)",
        borderWidth: 2,
        fill: true,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 20, 81, 56, 55, 40],
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,

    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  new Chart("chart", {
    type: "line",
    options: options,
    data: data,
  }); */
  return (
    <div className="chart-container">
      <canvas id="chart"></canvas>
    </div>
  );
};

export default ChartComp;
