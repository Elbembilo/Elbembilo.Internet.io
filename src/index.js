import * as $ from "jquery";
import "./babel";
import "./styles/style.scss";
import "bootstrap";
import Chart from "chart.js";
import "./body.json";
import axios from "axios";
axios.get("/src/body.json").then((res) => {
  console.log(res.data);
});

let lebelsYears = axios.get("/src/body.json").then((res) => {
  let years = years.map((item) => item.year);
});

let ctx = document.getElementById("myChart");
let requestURL = "./body.json";
let myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [lebelsYears],
    datasets: [
      {
        label: "90% к 2015 году",
        lable: "95% к 2020 году",
        data: [36, 26, 40, 42, 44, 46, 59, 80, 81, 82, 85, 84, 45, 50, 90],
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
