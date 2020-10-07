import * as $ from "jquery";
import "./babel";
import "./styles/style.scss";
import "bootstrap";
import Chart from "chart.js";
import "./body.json";
import axios from "axios";

async function getPersent() {
  const response = await axios.get("/src/body.json").then((response) => {
    return response.data.years.map((item) => item.persent);
  });
  const data = await response;
  console.log(data);
}

async function getYear() {
  const response = await axios.get("/src/body.json").then((response) => {
    return response.data.years.map((item) => item.year);
  });
  const data = await response;
  console.log(response);
}
// let getYearsLabels = axios.get("/src/body.json").then((response) => {
//   return response.data.years.map((item) => item.year);
// });
// getYearsLabels.then((data) => {
//   console.log(data);
// });

let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: getYear(),
    datasets: [
      {
        label: "90% к 2015 году",
        data: getPersent(),
        backgroundColor: ["#0d49cc"],
        borderColor: ["#0d49cc"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
