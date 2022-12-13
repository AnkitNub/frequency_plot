import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";

const Histogram = ({ data }) => {
  const options = {
    scales: {
      x: {
        grid: {
          offset: false,
        },
        title: {
          display: true,
          text: "Words",
        },
      },
      y: {
        title: {
          display: true,
          text: "Frequency",
        },
      },
    },
  };
  return <Bar data={data} options = {options} />;
};

export default Histogram;